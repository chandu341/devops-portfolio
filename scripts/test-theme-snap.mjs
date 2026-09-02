import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const distDir = path.resolve('dist');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.json': 'application/json',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  let filePath = path.join(distDir, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not Found');
  } else {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(5994, '127.0.0.1', async () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  async function captureThemeSection(theme, sectionId, width, height, outFile) {
    const port = 9224;
    const tempProfile = path.join(process.env.TEMP || '.', 'chrome-theme-' + theme + '-' + Date.now());

    const chrome = spawn(chromePath, [
      '--headless=new',
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${tempProfile}`,
      `--window-size=${width},${height}`,
      '--hide-scrollbars',
      'http://127.0.0.1:5994/'
    ]);

    await new Promise(r => setTimeout(r, 1200));

    try {
      const versionRes = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await versionRes.json();
      const pageTarget = targets.find(t => t.type === 'page') || targets[0];

      if (!pageTarget) throw new Error('No page target found');

      const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

      await new Promise((resolve, reject) => {
        ws.onopen = resolve;
        ws.onerror = reject;
      });

      let id = 1;
      const send = (method, params = {}) => new Promise((resolve) => {
        const msgId = id++;
        const handler = (evt) => {
          const res = JSON.parse(evt.data);
          if (res.id === msgId) {
            ws.removeEventListener('message', handler);
            resolve(res.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });

      await send('Emulation.setDeviceMetricsOverride', {
        width,
        height,
        deviceScaleFactor: 1,
        mobile: width < 768
      });

      // Wait 3.2s for BootLoader
      await new Promise(r => setTimeout(r, 3200));

      // Force Theme and Scroll to section
      await send('Runtime.evaluate', {
        expression: `
          if ('${theme}' === 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          }
          const el = document.getElementById('${sectionId}');
          if (el) el.scrollIntoView({ behavior: 'instant' });
        `
      });
      await new Promise(r => setTimeout(r, 700));

      const screenshot = await send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(outFile, Buffer.from(screenshot.data, 'base64'));
      console.log(`[THEME QA] [${theme.toUpperCase()}] ${sectionId} @ ${width}x${height} -> ${path.basename(outFile)}`);

      ws.close();
    } catch (e) {
      console.error('CDP capture error:', e);
    } finally {
      chrome.kill();
      await new Promise(r => setTimeout(r, 400));
    }
  }

  try {
    await captureThemeSection('light', 'experience', 1280, 900, path.resolve('dist/qa-exp-light-1280.png'));
    await captureThemeSection('dark', 'experience', 1280, 900, path.resolve('dist/qa-exp-dark-1280.png'));
    await captureThemeSection('light', 'top', 1280, 850, path.resolve('dist/qa-hero-light-1280.png'));
    await captureThemeSection('dark', 'top', 1280, 850, path.resolve('dist/qa-hero-dark-1280.png'));
  } finally {
    server.close();
    process.exit(0);
  }
});
