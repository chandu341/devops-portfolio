export const profile = {
  name: 'Chandu Venna',
  title: 'DevOps & Cloud Engineer',
  tagline: 'I build resilient cloud systems and automate the paths that keep production running — so incidents stay rare and recovery stays fast.',
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
    'DevOps Engineer with 5+ years of experience in creating and managing cloud-based infrastructures and CI/CD pipelines in AWS and Azure environments. Experienced in deploying containerized applications on various Kubernetes-based platforms, such as Amazon EKS and Azure AKS. Knowledgeable in using Infrastructure as Code tools, such as Terraform, and CI/CD tools, like Jenkins and GitHub Actions, in addition to GitOps using Argo CD. Experienced in using various DevSecOps tools, such as Prometheus, Grafana, Elastic Stack, and Catchpoint, in monitoring and log analysis.'
};

export const stackYaml = {
  cloud: ['AWS', 'Azure', 'EC2', 'EKS', 'AKS', 'ECS', 'S3', 'RDS', 'DynamoDB'],
  iac: ['Terraform', 'CloudFormation', 'Ansible'],
  containers: ['Docker', 'Kubernetes', 'Helm'],
  gitops: ['Argo CD', 'GitHub Actions', 'Jenkins', 'GitLab CI/CD', 'Azure DevOps'],
  monitoring: ['Dynatrace', 'Grafana', 'Catchpoint', 'Elastic Stack (ELK)', 'Prometheus', 'Selenium'],
  devsecops: ['SonarQube', 'Trivy'],
  scripting: ['Python Script', 'Shell/Bash', 'YAML', 'JSON'],
  ai_automation: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI-Assisted Troubleshooting', 'Log Analysis', 'Python Automation'],
  servers_db: ['Apache', 'Nginx', 'Tomcat', 'MySQL', 'Amazon RDS', 'DynamoDB'],
  ops: ['Linux', 'Windows', 'Jira', 'ServiceNow', 'Confluence', 'Agile']
};

export const navItems = [
  { label: 'Home', href: '/#top' },
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
    name: 'Version Control & Config Management',
    tier: 'Core',
    skills: ['Git (GitHub, Bitbucket)', 'Branching Strategy', 'Repository Management']
  },
  {
    name: 'CI/CD & Build Automation',
    tier: 'Core',
    skills: ['Azure DevOps Pipelines', 'GitLab CI/CD', 'Jenkins', 'GitHub Actions', 'Argo CD']
  },
  {
    name: 'Containers & Orchestration',
    tier: 'Core',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Amazon EKS', 'Azure AKS', 'Ingress', 'StatefulSets']
  },
  {
    name: 'Cloud Platforms',
    tier: 'Core',
    skills: ['Azure', 'AWS (EC2, EKS, ECS, S3, RDS, DynamoDB)', 'VPC', 'IAM', 'Security Groups']
  },
  {
    name: 'Infrastructure as Code',
    tier: 'Core',
    skills: ['Terraform', 'CloudFormation', 'Ansible']
  },
  {
    name: 'Monitoring & Observability',
    tier: 'Strong',
    skills: ['Dynatrace', 'Grafana', 'Catchpoint', 'ELK / Elastic Stack', 'Prometheus', 'Selenium']
  },
  {
    name: 'AI & Automation',
    tier: 'Core',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI-Assisted Troubleshooting', 'Log Analysis', 'Python Automation']
  },
  {
    name: 'Scripting & Programming',
    tier: 'Supporting',
    skills: ['Shell/Bash', 'Python Script', 'YAML', 'JSON', 'Selenium']
  },
  {
    name: 'Web Servers & Databases',
    tier: 'Supporting',
    skills: ['Apache', 'Nginx', 'Tomcat', 'MySQL', 'Amazon RDS', 'DynamoDB']
  },
  {
    name: 'Systems & Collaboration',
    tier: 'Supporting',
    skills: ['Linux', 'Windows', 'Jira', 'ServiceNow', 'Confluence', 'Agile']
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
      'Managed containerized microservices on Amazon EKS across production and QA environments supporting 12+ services with Docker, Kubernetes, and Helm while maintaining high availability, scalability, and reliable release cadences.',
      'Built and maintained Jenkins and GitHub Actions CI/CD pipelines with integrated SonarQube and Trivy scanning, improving deployment velocity by 60% with automated vulnerability and quality gates.',
      'Implemented Argo CD GitOps workflows for automated, zero-downtime microservice deployments and environment synchronization across Kubernetes clusters.',
      'Provisioned and automated AWS infrastructure with Terraform (VPCs, EKS clusters, node groups, IAM), reducing environment provisioning time from several hours to under 30 minutes.',
      'Monitored application health, SLIs/SLOs, and error budgets with Dynatrace and Catchpoint synthetic tests, proactively detecting availability and performance anomalies.',
      'Resolved 20+ P1/P2 production incidents across EKS and AKS by correlating Elastic Stack logs and APM telemetry, driving root cause analysis (RCA) and participating in on-call rotations.'
    ],
    technologies: ['AWS', 'Amazon EKS', 'Azure AKS', 'Docker', 'Kubernetes', 'Helm', 'Argo CD', 'Terraform', 'Jenkins', 'GitHub Actions', 'Dynatrace', 'Catchpoint', 'Elastic Stack', 'SonarQube', 'Trivy', 'ServiceNow', 'Jira']
  },
  {
    role: 'Cloud Engineer',
    company: 'GENPACT',
    client: 'GE',
    location: '',
    dates: '06/2021 to 10/2023',
    highlights: [
      'Migrated 50+ on-premises VMs and databases to AWS using rehost and replatforming strategies with zero downtime, covering migration assessment, workload validation, and post-migration optimization.',
      'Automated AWS infrastructure with Terraform across multi-AZ VPCs, EC2, ALB, S3, and RDS, improving infrastructure performance by 35-40% and reducing manual provisioning effort by 50-80%.',
      'Automated Ubuntu EC2 provisioning with Terraform user data scripts for Apache configuration, application bootstrapping, and deployment validation, reducing release cycle time by 70%.',
      'Implemented internet-facing Application Load Balancers with listeners, target groups, and health checks, achieving 99.9% availability across multiple Availability Zones.',
      'Managed S3 storage policies and RDS database instances through Git-driven Terraform IaC workflows to maintain secure, scalable, and cost-optimized cloud infrastructure.'
    ],
    technologies: ['AWS', 'Terraform', 'VPC', 'EC2', 'ALB', 'S3', 'RDS', 'Linux', 'Apache', 'Git']
  },
  {
    role: 'Internship Trainee',
    company: 'MNP Technologies',
    client: '',
    location: '',
    dates: '10/2020 to 03/2021',
    highlights: [
      'Managed AWS resources including EC2, EBS, VPC and Security Groups to support development and testing environments.',
      'Configured IAM users, groups and access policies, applying role-based access controls and security best practices for controlled AWS access.',
      'Created and executed Terraform configurations to provision AWS resources, gaining practical experience with Infrastructure as Code and repeatable infrastructure deployments.',
      'Set up a Kubernetes environment and deployed test applications to understand container orchestration, services and application lifecycle management.',
      'Built Docker images and managed containers for application testing and deployment across development environments.',
      'Administered Linux user accounts, installed and configured required packages, monitored services and used system troubleshooting commands to diagnose and resolve issues.'
    ],
    technologies: ['AWS', 'EC2', 'EBS', 'VPC', 'IAM', 'Terraform', 'Docker', 'Kubernetes', 'Linux']
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
  'AWS & DevOps Training Completion — MNP Technologies',
  'AWS Solution Architect Certification — Edureka',
  'Terraform Infrastructure Certification — Percipio SkillSoft'
];

export const achievements = [
  'Promoted from an entry-level position to Consultant based on strong performance, technical growth and demonstrated expertise.',
  'Received positive client feedback for consistently delivering high-quality work and meeting project requirements.',
  'Recognized with ‘Cheers Points’ for dedication, ownership and contributions to key client projects.'
];

export const education = {
  degree: 'Bachelor of Technology (B.Tech): Computer Science and Engineering',
  institution: 'Aditya University Surampalam',
  date: '05/2019'
};

