export interface TechnologyItem {
  id: string;
  name: string;
  tag: string;
  category: string;
  shortDesc: string;
  priority: 'primary' | 'secondary' | 'supporting';
  accentColor: string;
  darkGlow: string;
  badgeBg: string;
}

export const primaryTechnologies: TechnologyItem[] = [
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    tag: 'CONTAINERS',
    category: 'Container Orchestration',
    shortDesc: 'EKS, AKS, Ingress, StatefulSets & Multi-AZ Cluster Ops',
    priority: 'primary',
    accentColor: 'text-[#326CE5]',
    darkGlow: 'dark:text-[#38BDF8]',
    badgeBg: 'bg-[#326CE5]/10 border-[#326CE5]/30'
  },
  {
    id: 'terraform',
    name: 'Terraform',
    tag: 'INFRASTRUCTURE',
    category: 'Infrastructure as Code',
    shortDesc: 'Automated VPC, EKS, RDS Provisioning & Zero-Drift IaC',
    priority: 'primary',
    accentColor: 'text-[#844FBA]',
    darkGlow: 'dark:text-[#A78BFA]',
    badgeBg: 'bg-[#844FBA]/10 border-[#844FBA]/30'
  },
  {
    id: 'aws',
    name: 'AWS',
    tag: 'CLOUD',
    category: 'Cloud Platform',
    shortDesc: 'EC2, EKS, ECS, S3, RDS, DynamoDB, IAM & VPC Architecture',
    priority: 'primary',
    accentColor: 'text-[#FF9900]',
    darkGlow: 'dark:text-[#FBBF24]',
    badgeBg: 'bg-[#FF9900]/10 border-[#FF9900]/30'
  },
  {
    id: 'docker',
    name: 'Docker',
    tag: 'CONTAINERIZATION',
    category: 'Containerization',
    shortDesc: 'Multi-stage builds, rootless security & image optimization',
    priority: 'primary',
    accentColor: 'text-[#2496ED]',
    darkGlow: 'dark:text-[#38BDF8]',
    badgeBg: 'bg-[#2496ED]/10 border-[#2496ED]/30'
  }
];

export const secondaryTechnologies: TechnologyItem[] = [
  {
    id: 'azure',
    name: 'Azure',
    tag: 'CLOUD',
    category: 'Cloud Platform',
    shortDesc: 'Azure AKS, Virtual Networks, Resource Groups',
    priority: 'secondary',
    accentColor: 'text-[#0089D6]',
    darkGlow: 'dark:text-[#38BDF8]',
    badgeBg: 'bg-[#0089D6]/10 border-[#0089D6]/20'
  },
  {
    id: 'argocd',
    name: 'Argo CD',
    tag: 'GITOPS',
    category: 'GitOps Continuous Sync',
    shortDesc: 'Declarative K8s GitOps & Automated Rollbacks',
    priority: 'secondary',
    accentColor: 'text-[#EF7B4D]',
    darkGlow: 'dark:text-[#FB923C]',
    badgeBg: 'bg-[#EF7B4D]/10 border-[#EF7B4D]/20'
  },
  {
    id: 'githubactions',
    name: 'GitHub Actions',
    tag: 'CI/CD',
    category: 'CI/CD Pipelines',
    shortDesc: 'Automated CI/CD Workflows & Release Pipelines',
    priority: 'secondary',
    accentColor: 'text-slate-800 dark:text-slate-100',
    darkGlow: 'dark:text-white',
    badgeBg: 'bg-slate-500/10 border-slate-500/20'
  },
  {
    id: 'prometheus',
    name: 'Prometheus',
    tag: 'MONITORING',
    category: 'Monitoring & Metrics',
    shortDesc: 'Time-series cluster telemetry & alert rules',
    priority: 'secondary',
    accentColor: 'text-[#E6522C]',
    darkGlow: 'dark:text-[#F87171]',
    badgeBg: 'bg-[#E6522C]/10 border-[#E6522C]/20'
  },
  {
    id: 'grafana',
    name: 'Grafana',
    tag: 'OBSERVABILITY',
    category: 'Observability & Dashboards',
    shortDesc: 'SLO/SLI dashboards & visual production analytics',
    priority: 'secondary',
    accentColor: 'text-[#F46800]',
    darkGlow: 'dark:text-[#FB923C]',
    badgeBg: 'bg-[#F46800]/10 border-[#F46800]/20'
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    tag: 'CI/CD',
    category: 'CI/CD Automation',
    shortDesc: 'Declarative multi-branch pipelines & build automation',
    priority: 'secondary',
    accentColor: 'text-[#D24939]',
    darkGlow: 'dark:text-[#F87171]',
    badgeBg: 'bg-[#D24939]/10 border-[#D24939]/20'
  },
  {
    id: 'helm',
    name: 'Helm',
    tag: 'KUBERNETES',
    category: 'Package Management',
    shortDesc: 'Templated application releases & chart versioning',
    priority: 'secondary',
    accentColor: 'text-[#0F1689]',
    darkGlow: 'dark:text-[#818CF8]',
    badgeBg: 'bg-[#0F1689]/10 border-[#0F1689]/20'
  },
  {
    id: 'ansible',
    name: 'Ansible',
    tag: 'CONFIGURATION',
    category: 'Configuration Management',
    shortDesc: 'Idempotent playbooks & server automation',
    priority: 'secondary',
    accentColor: 'text-[#EE0000]',
    darkGlow: 'dark:text-[#F87171]',
    badgeBg: 'bg-[#EE0000]/10 border-[#EE0000]/20'
  },
  {
    id: 'python',
    name: 'Python',
    tag: 'SCRIPTING',
    category: 'Scripting & Automation',
    shortDesc: 'Automated troubleshooting, boto3 & log parsers',
    priority: 'secondary',
    accentColor: 'text-[#3776AB]',
    darkGlow: 'dark:text-[#38BDF8]',
    badgeBg: 'bg-[#3776AB]/10 border-[#3776AB]/20'
  },
  {
    id: 'linux',
    name: 'Linux',
    tag: 'OPERATING',
    category: 'Operating System',
    shortDesc: 'Kernel tuning, systemd, bash & server administration',
    priority: 'secondary',
    accentColor: 'text-[#FCC624]',
    darkGlow: 'dark:text-[#FBBF24]',
    badgeBg: 'bg-[#FCC624]/10 border-[#FCC624]/20'
  },
  {
    id: 'elastic',
    name: 'Elastic Stack',
    tag: 'LOG',
    category: 'Log Analytics',
    shortDesc: 'ELK log aggregation, indexing & Elasticsearch',
    priority: 'secondary',
    accentColor: 'text-[#005571]',
    darkGlow: 'dark:text-[#38BDF8]',
    badgeBg: 'bg-[#005571]/10 border-[#005571]/20'
  },
  {
    id: 'dynatrace',
    name: 'Dynatrace',
    tag: 'APM',
    category: 'APM & Observability',
    shortDesc: 'Full-stack APM, OneAgent & synthetic monitoring',
    priority: 'secondary',
    accentColor: 'text-[#1496FF]',
    darkGlow: 'dark:text-[#60A5FA]',
    badgeBg: 'bg-[#1496FF]/10 border-[#1496FF]/20'
  },
  {
    id: 'sonarqube',
    name: 'SonarQube',
    tag: 'CODE',
    category: 'Code Quality & Security',
    shortDesc: 'Static application security testing (SAST) & quality gates',
    priority: 'supporting',
    accentColor: 'text-[#4B9BE1]',
    darkGlow: 'dark:text-[#60A5FA]',
    badgeBg: 'bg-[#4B9BE1]/10 border-[#4B9BE1]/20'
  },
  {
    id: 'trivy',
    name: 'Trivy',
    tag: 'DEVSECOPS',
    category: 'Vulnerability Scanning',
    shortDesc: 'Container image vulnerability & IaC misconfig scanning',
    priority: 'supporting',
    accentColor: 'text-[#006699]',
    darkGlow: 'dark:text-[#38BDF8]',
    badgeBg: 'bg-[#006699]/10 border-[#006699]/20'
  }
];

export const allTechnologies = [...primaryTechnologies, ...secondaryTechnologies];
