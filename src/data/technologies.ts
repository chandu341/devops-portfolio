export interface TechnologyItem {
  id: string;
  name: string;
  tag: string;
  category: string;
  domain: 'Cloud' | 'Infrastructure' | 'Containers' | 'GitOps' | 'Observability' | 'Security' | 'Systems';
  shortDesc: string;
  isPrimary?: boolean;
}

export const allTechnologies: TechnologyItem[] = [
  // 1. Core Platform & Infrastructure
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    tag: 'CONTAINERS',
    category: 'Container Orchestration',
    domain: 'Containers',
    shortDesc: 'EKS, AKS, Ingress, StatefulSets & Multi-AZ Cluster Ops',
    isPrimary: true
  },
  {
    id: 'terraform',
    name: 'Terraform',
    tag: 'INFRASTRUCTURE',
    category: 'Infrastructure as Code',
    domain: 'Infrastructure',
    shortDesc: 'Automated VPC, EKS, RDS Provisioning & Zero-Drift IaC',
    isPrimary: true
  },
  {
    id: 'aws',
    name: 'AWS',
    tag: 'CLOUD',
    category: 'Cloud Platform',
    domain: 'Cloud',
    shortDesc: 'EC2, EKS, ECS, S3, RDS, DynamoDB, IAM & VPC Architecture',
    isPrimary: true
  },
  {
    id: 'docker',
    name: 'Docker',
    tag: 'CONTAINERIZATION',
    category: 'Containerization',
    domain: 'Containers',
    shortDesc: 'Multi-stage builds, rootless security & image optimization',
    isPrimary: true
  },

  // 2. Cloud, GitOps & Pipelines
  {
    id: 'azure',
    name: 'Azure',
    tag: 'CLOUD',
    category: 'Cloud Platform',
    domain: 'Cloud',
    shortDesc: 'Azure AKS, Virtual Networks, Resource Groups'
  },
  {
    id: 'argocd',
    name: 'Argo CD',
    tag: 'GITOPS',
    category: 'GitOps Continuous Sync',
    domain: 'GitOps',
    shortDesc: 'Declarative K8s GitOps & Automated Rollbacks'
  },
  {
    id: 'githubactions',
    name: 'GitHub Actions',
    tag: 'CI/CD',
    category: 'CI/CD Pipelines',
    domain: 'GitOps',
    shortDesc: 'Automated CI/CD Workflows & Release Pipelines'
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    tag: 'MONITORING',
    category: 'Monitoring & Metrics',
    domain: 'Observability',
    shortDesc: 'Time-series cluster telemetry & alert rules'
  },

  // 3. Observability & Automation
  {
    id: 'grafana',
    name: 'Grafana',
    tag: 'OBSERVABILITY',
    category: 'Observability & Dashboards',
    domain: 'Observability',
    shortDesc: 'SLO/SLI dashboards & visual production analytics'
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    tag: 'CI/CD',
    category: 'CI/CD Automation',
    domain: 'GitOps',
    shortDesc: 'Declarative multi-branch pipelines & build automation'
  },
  {
    id: 'helm',
    name: 'Helm',
    tag: 'KUBERNETES',
    category: 'Package Management',
    domain: 'Containers',
    shortDesc: 'Templated application releases & chart versioning'
  },
  {
    id: 'ansible',
    name: 'Ansible',
    tag: 'CONFIGURATION',
    category: 'Configuration Management',
    domain: 'Infrastructure',
    shortDesc: 'Idempotent playbooks & server automation'
  },

  // 4. Systems, Log & Security
  {
    id: 'python',
    name: 'Python',
    tag: 'SCRIPTING',
    category: 'Scripting & Automation',
    domain: 'Systems',
    shortDesc: 'Automated troubleshooting, boto3 & log parsers'
  },
  {
    id: 'linux',
    name: 'Linux',
    tag: 'OPERATING',
    category: 'Operating System',
    domain: 'Systems',
    shortDesc: 'Kernel tuning, systemd, bash & server administration'
  },
  {
    id: 'elastic',
    name: 'Elastic Stack',
    tag: 'LOG',
    category: 'Log Analytics',
    domain: 'Observability',
    shortDesc: 'ELK log aggregation, indexing & Elasticsearch'
  },
  {
    id: 'dynatrace',
    name: 'Dynatrace',
    tag: 'APM',
    category: 'APM & Observability',
    domain: 'Observability',
    shortDesc: 'Full-stack APM, OneAgent & synthetic monitoring'
  },
  {
    id: 'sonarqube',
    name: 'SonarQube',
    tag: 'CODE',
    category: 'Code Quality & Security',
    domain: 'Security',
    shortDesc: 'Static application security testing (SAST) & quality gates'
  },
  {
    id: 'trivy',
    name: 'Trivy',
    tag: 'DEVSECOPS',
    category: 'Vulnerability Scanning',
    domain: 'Security',
    shortDesc: 'Container image vulnerability & IaC misconfig scanning'
  }
];

export const primaryTechnologies = allTechnologies.filter((t) => t.isPrimary);
export const secondaryTechnologies = allTechnologies.filter((t) => !t.isPrimary);

// Domain groupings for domain-oriented presentation
export const domainGroups = [
  { name: 'Cloud & Infrastructure', tools: ['aws', 'azure', 'terraform', 'ansible'] },
  { name: 'Containers & GitOps', tools: ['kubernetes', 'docker', 'helm', 'argocd', 'githubactions', 'jenkins'] },
  { name: 'Observability & Security', tools: ['prometheus', 'grafana', 'elastic', 'dynatrace', 'trivy', 'sonarqube'] },
  { name: 'Automation & Systems', tools: ['python', 'linux'] }
];
