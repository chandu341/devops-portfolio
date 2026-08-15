import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const astroCli = join(dirname(require.resolve('astro/package.json')), 'bin', 'astro.mjs');

const command = process.argv[2] || 'check';
const commandArgs = {
  dev: ['dev', '--host', '127.0.0.1'],
  preview: ['preview', '--host', '127.0.0.1'],
  check: ['check'],
  build: ['check', '&&', 'build']
};

if (!commandArgs[command]) {
  console.error(`Unknown Astro command: ${command}`);
  process.exit(1);
}

const env = {
  ...process.env,
  ASTRO_TELEMETRY_DISABLED: '1'
};

function runAstro(args) {
  const result = spawnSync(process.execPath, [astroCli, ...args], {
    stdio: 'inherit',
    env
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

if (command === 'build') {
  runAstro(['check']);
  runAstro(['build']);
} else {
  runAstro(commandArgs[command]);
}
