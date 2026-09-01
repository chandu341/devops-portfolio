import fs from 'fs';
import path from 'path';
import * as simpleIcons from 'simple-icons';

const outDir = './src/assets/technologies';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const copyDevicon = (src, dest) => {
  const content = fs.readFileSync('./node_modules/devicon/icons/' + src, 'utf8');
  fs.writeFileSync(path.join(outDir, dest), content, 'utf8');
  console.log(`Saved: ${dest} from devicon/${src}`);
};

copyDevicon('kubernetes/kubernetes-original.svg', 'kubernetes.svg');
copyDevicon('terraform/terraform-original.svg', 'terraform.svg');
copyDevicon('amazonwebservices/amazonwebservices-original-wordmark.svg', 'aws.svg');
copyDevicon('docker/docker-original.svg', 'docker.svg');
copyDevicon('azure/azure-original.svg', 'azure.svg');
copyDevicon('argocd/argocd-original.svg', 'argocd.svg');
copyDevicon('githubactions/githubactions-original.svg', 'github-actions.svg');
copyDevicon('prometheus/prometheus-original.svg', 'prometheus.svg');
copyDevicon('grafana/grafana-original.svg', 'grafana.svg');
copyDevicon('jenkins/jenkins-original.svg', 'jenkins.svg');
copyDevicon('helm/helm-original.svg', 'helm.svg');
copyDevicon('ansible/ansible-original.svg', 'ansible.svg');
copyDevicon('python/python-original.svg', 'python.svg');
copyDevicon('linux/linux-original.svg', 'linux.svg');
copyDevicon('elasticsearch/elasticsearch-original.svg', 'elastic.svg');
copyDevicon('dynatrace/dynatrace-original.svg', 'dynatrace.svg');
copyDevicon('sonarqube/sonarqube-original.svg', 'sonarqube.svg');

// Save Trivy from simple-icons
const trivyData = simpleIcons.siTrivy;
const trivySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#006699"><path d="${trivyData.path}"/></svg>`;
fs.writeFileSync(path.join(outDir, 'trivy.svg'), trivySvg, 'utf8');
console.log('Saved: trivy.svg from simple-icons');

console.log('All 18 technology SVGs verified and saved!');
