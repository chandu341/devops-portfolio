export const profile = {
  name: 'Chandu Venna',
  title: 'DevOps / Cloud Engineer',
  tagline: 'I build resilient systems and automate the paths that keep production running — so incidents stay rare and recovery stays fast.',
  location: 'Bengaluru, India',
  experience: '5+ years',
  photo: '/images/profile-image.jpeg',
  email: 'chanduv4378@gmail.com',
  phone: '+91 9666032664',
  whatsapp: 'https://wa.me/919666032664?text=Hi%20Chandu%2C%20I%20found%20your%20DevOps%20portfolio%20and%20would%20like%20to%20connect.',
  showPhone: true,
  linkedin: 'https://www.linkedin.com/in/im-chanduvenna/',
  github: 'https://github.com/chandu341',
  resume: '/resume.pdf',
  availability: 'Open to DevOps / Cloud / SRE opportunities',
  summary:
    'DevOps Engineer with 5+ years of experience creating and managing cloud infrastructure, CI/CD pipelines, Kubernetes platforms, monitoring, and production support across AWS and Azure environments.'
};

export const stackYaml = {
  cloud: ['AWS', 'Azure', 'EC2', 'EKS', 'AKS', 'ECS'],
  iac: ['Terraform', 'CloudFormation', 'Ansible'],
  containers: ['Docker', 'Kubernetes', 'Helm'],
  gitops: ['Argo CD', 'GitHub Actions', 'Jenkins'],
  monitoring: ['Prometheus', 'Grafana', 'Elastic Stack', 'Dynatrace', 'Catchpoint Synthetic Monitoring'],
  devsecops: ['SonarQube', 'Trivy'],
  scripting: ['Python', 'Bash', 'YAML', 'JSON'],
  ops: ['Linux', 'Jira', 'ServiceNow', 'Confluence']
};

export const navItems = [
  { label: 'Home', href: '/#top' },
  { label: 'Identity', href: '/#identity' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Certifications', href: '/#credentials' },
  { label: 'Contact', href: '/#contact' }
];

export const impactMetrics = [
  { value: '12+', label: 'Microservices', detail: 'Production and QA EKS services' },
  { value: '60%', label: 'Faster Deployments', detail: 'CI/CD pipeline improvement' },
  { value: '50+', label: 'Workloads Migrated', detail: 'VMs and databases moved to AWS' },
  { value: '50-80%', label: 'Provisioning Reduction', detail: 'Manual setup reduced through Terraform' },
  { value: '99.9%', label: 'Availability', detail: 'ALB-backed multi-AZ architecture' },
  { value: '20+', label: 'Incidents Resolved', detail: 'Kubernetes production and QA issues' }
];

export const skillGroups = [
  {
    name: 'Cloud Platforms',
    tier: 'Core',
    skills: ['AWS', 'Azure', 'EC2', 'EKS', 'AKS', 'ECS', 'S3', 'RDS', 'DynamoDB']
  },
  {
    name: 'Infrastructure as Code',
    tier: 'Core',
    skills: ['Terraform', 'CloudFormation', 'Ansible', 'VPC', 'IAM', 'Security Groups']
  },
  {
    name: 'Containers & Orchestration',
    tier: 'Core',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Argo CD', 'Ingress', 'StatefulSets']
  },
  {
    name: 'CI/CD & DevSecOps',
    tier: 'Core',
    skills: ['Jenkins', 'GitHub Actions', 'Azure DevOps Pipelines', 'SonarQube', 'Trivy']
  },
  {
    name: 'Monitoring & Observability',
    tier: 'Strong',
    skills: ['Prometheus', 'Grafana', 'Elastic Stack', 'Catchpoint', 'Dynatrace', 'Selenium']
  },
  {
    name: 'Programming & Scripting',
    tier: 'Supporting',
    skills: ['Shell/Bash', 'Python Script', 'Java', 'YAML', 'JSON']
  },
  {
    name: 'Systems & Collaboration',
    tier: 'Supporting',
    skills: ['Linux', 'Windows', 'Apache', 'Nginx', 'Tomcat', 'Jira', 'ServiceNow', 'Confluence']
  }
];

export const experiences = [
  {
    role: 'DevOps and Observability & Monitoring Project',
    company: 'GENPACT',
    client: 'Honeywell',
    location: 'Bengaluru, India',
    dates: '10/2023 to Current',
    highlights: [
      'Managed AWS EKS microservice deployments across production and QA for 12+ services using Docker, Kubernetes manifests, and Helm charts.',
      'Provisioned AWS VPCs, EKS clusters, node groups, and IAM roles with Terraform, reducing environment provisioning from multiple hours to under 30 minutes.',
      'Built and maintained Jenkins and GitHub Actions pipelines, improving deployment speed by 60%.',
      'Implemented GitOps deployments with Argo CD for zero-downtime application delivery across environments.',
      'Configured ALB Ingress Controllers and Route 53 for secure Kubernetes endpoints and custom domains.',
      'Added SonarQube and Trivy checks to CI/CD pipelines before container deployments.',
      'Built synthetic monitoring in Catchpoint with Selenium for transactions, APIs, and SSL health.',
      'Managed Elastic Stack monitoring on AKS and resolved 20+ production and QA incidents through Jira and ServiceNow.',
      'Supported Linux-based HPC and Grid computing environments including compute-node administration, workload scheduling, troubleshooting, and performance optimization.'
    ],
    technologies: ['AWS', 'EKS', 'AKS', 'Terraform', 'Kubernetes', 'Helm', 'Argo CD', 'Jenkins', 'GitHub Actions', 'Prometheus', 'Grafana', 'Elastic Stack', 'Catchpoint', 'SonarQube', 'Trivy']
  },
  {
    role: 'Cloud Migration Project',
    company: 'GENPACT',
    client: 'GE',
    location: '',
    dates: '06/2021 to 10/2023',
    highlights: [
      'Implemented AWS infrastructure with Terraform including VPC, multi-AZ subnets, route tables, IGW, security groups, EC2, ALB, S3, and RDS.',
      'Improved infrastructure performance by 35-40% and reduced manual provisioning time by 50-80% through structured IaC workflows.',
      'Created zero-touch EC2 Ubuntu provisioning using Terraform user data scripts for Apache configuration and deployment verification.',
      'Migrated 50+ on-premises VMs and databases to AWS using rehost and replatforming strategies with zero downtime.',
      'Managed internet-facing ALB listeners, target groups, and health checks for 99.9% availability across multiple AZs.',
      'Provisioned S3 and RDS with Terraform while supporting secure architecture, scalable design, cost control, and Git-based version control.'
    ],
    technologies: ['AWS', 'Terraform', 'VPC', 'EC2', 'ALB', 'S3', 'RDS', 'Linux', 'Apache']
  },
  {
    role: 'Internship',
    company: 'MNP Technologies',
    client: '',
    location: '',
    dates: '10/2020 to 03/2021',
    highlights: [
      'Managed AWS EC2, EBS, VPC, and Security Groups for development and testing.',
      'Configured IAM users, groups, policies, and secure access controls.',
      'Handled Linux user management, package installation, service checks, and troubleshooting commands.',
      'Built Docker images and ran containers to test and deploy applications.',
      'Set up a basic Kubernetes environment and deployed test applications.',
      'Created simple Terraform scripts to provision AWS resources and practice Infrastructure as Code.'
    ],
    technologies: ['AWS', 'IAM', 'Linux', 'Docker', 'Kubernetes', 'Terraform']
  }
];

export const projects = [
  {
    slug: 'eks-microservices-gitops-observability',
    name: 'EKS Microservices, GitOps & Observability Platform',
    client: 'Honeywell',
    category: 'Kubernetes / Observability',
    accent: 'cyan',
    metrics: ['12+ microservices', '60% faster deployments', '20+ incidents resolved'],
    summary:
      'Production and QA Kubernetes operations for 12+ microservices on AWS EKS, with Helm, Argo CD, ALB ingress, CI/CD security checks, and monitoring workflows.',
    stack: ['AWS EKS', 'Docker', 'Kubernetes', 'Helm', 'Argo CD', 'Jenkins', 'GitHub Actions', 'ALB Ingress', 'Route 53', 'SonarQube', 'Trivy', 'Catchpoint', 'Elastic Stack'],
    problem:
      'The environment needed repeatable microservice releases, standardized Kubernetes deployment configuration, secure ingress, and faster incident analysis across production and QA.',
    solution:
      'Used Helm charts, Kubernetes manifests, GitOps deployment with Argo CD, CI/CD pipelines, ingress routing, synthetic monitoring, and log monitoring to make releases and operations more consistent.',
    outcomes: [
      'Supported 12+ services across production and QA.',
      'Improved deployment speed by 60% through Jenkins and GitHub Actions pipelines.',
      'Enabled zero-downtime deployments with Argo CD.',
      'Resolved 20+ Kubernetes incidents using Jira and ServiceNow workflows.'
    ],
    architecture: [
      { group: 'Source & CI/CD', nodes: ['Developer', 'GitHub', 'Jenkins / GitHub Actions', 'SonarQube / Trivy'] },
      { group: 'Deployment', nodes: ['Helm Charts', 'Argo CD', 'Kubernetes Manifests'] },
      { group: 'Runtime', nodes: ['AWS EKS', 'Deployments', 'Services', 'StatefulSets'] },
      { group: 'Networking & Observability', nodes: ['ALB Ingress', 'Route 53', 'Catchpoint', 'Elastic Stack'] }
    ],
    diagram: ['Developer', 'GitHub', 'CI/CD', 'Image Security Checks', 'Argo CD', 'AWS EKS', 'ALB Ingress', 'Monitoring']
  },
  {
    slug: 'terraform-aws-cloud-migration',
    name: 'Terraform-Based AWS Cloud Migration',
    client: 'GE',
    category: 'Cloud Migration / Infrastructure as Code',
    accent: 'violet',
    metrics: ['50+ workloads migrated', '50-80% less manual provisioning', '35-40% performance improvement', '99.9% availability'],
    summary:
      'AWS infrastructure automation and migration work covering Terraform-managed VPC, EC2, ALB, S3, RDS, multi-AZ networking, and zero-touch EC2 bootstrapping.',
    stack: ['AWS', 'Terraform', 'VPC', 'EC2', 'ALB', 'S3', 'RDS', 'Linux', 'Apache', 'Git'],
    problem:
      'On-premises workloads needed to move to AWS with reliable provisioning, reduced manual setup, availability across multiple AZs, and post-migration validation.',
    solution:
      'Provisioned core AWS services with Terraform, automated EC2 application bootstrapping with user data, configured ALB health checks, and supported rehost/replatform migration strategies.',
    outcomes: [
      'Migrated 50+ on-premises VMs and databases to AWS with zero downtime.',
      'Reduced manual provisioning time by 50-80%.',
      'Improved infrastructure performance by 35-40%.',
      'Supported 99.9% availability with an internet-facing ALB across multiple AZs.'
    ],
    architecture: [
      { group: 'Infrastructure as Code', nodes: ['Terraform', 'Git Version Control', 'User Data Scripts'] },
      { group: 'AWS Network', nodes: ['VPC', 'Multi-AZ Subnets', 'Route Tables', 'Security Groups'] },
      { group: 'Application Path', nodes: ['Internet-facing ALB', 'EC2 Ubuntu', 'Apache'] },
      { group: 'Data & Storage', nodes: ['RDS', 'S3', 'Cost-aware Provisioning'] }
    ],
    diagram: ['Users', 'ALB', 'EC2 Ubuntu', 'Apache', 'RDS', 'S3', 'Terraform State']
  },
  {
    slug: 'aks-elastic-stack-monitoring',
    name: 'AKS Elastic Stack Monitoring Operations',
    client: 'Honeywell',
    category: 'Monitoring / Incident Response',
    accent: 'green',
    metrics: ['20+ incidents resolved', 'Faster root cause analysis', 'Production and QA troubleshooting'],
    summary:
      'Monitoring and troubleshooting support for Elastic Stack running on Azure Kubernetes Service, paired with incident workflows for application and infrastructure issues.',
    stack: ['Azure AKS', 'Elastic Stack', 'Kubernetes', 'Linux', 'Jira', 'ServiceNow'],
    problem:
      'Teams needed faster root cause analysis for application and infrastructure problems across Kubernetes environments.',
    solution:
      'Managed log monitoring with Elastic Stack on AKS and used Kubernetes troubleshooting workflows for pod failures, scaling issues, and environment incidents.',
    outcomes: [
      'Enabled faster root cause analysis using centralized logs.',
      'Troubleshot pod failures and replica scaling issues in production and QA clusters.',
      'Resolved 20+ environment incidents through Jira and ServiceNow processes.'
    ],
    architecture: [
      { group: 'Runtime', nodes: ['Applications', 'Azure AKS', 'Kubernetes Pods'] },
      { group: 'Telemetry', nodes: ['Elastic Stack', 'Centralized Logs', 'Log Analysis'] },
      { group: 'Operations', nodes: ['Troubleshooting', 'Jira', 'ServiceNow'] }
    ],
    diagram: ['Applications', 'AKS', 'Elastic Stack', 'Log Analysis', 'Incident Workflow']
  }
];

export const certifications = [
  'AWS Solution Architect certification from Edureka',
  'Terraform certification from Percipio SkillSoft'
];

export const earlyCareer = ['AWS and DevOps Internship at MNP Technologies'];

export const education = {
  degree: 'Bachelor of Technology (B.Tech), Computer Science and Engineering',
  institution: 'Aditya University',
  date: '05/2019'
};

export const achievements = [
  'Promoted from an entry-level position to consultant based on performance and expertise.',
  'Received positive client feedback for consistently delivering high-quality work.',
  "Awarded 'Cheers Points' for dedication and exceptional contribution to client projects."
];
