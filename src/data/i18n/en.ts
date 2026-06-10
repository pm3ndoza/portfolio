export const profile = {
  name: "Pedro Mendoza",
  role: "SRE / DevOps Engineer | Cloud",
  hero: "DevOps Engineer and Site Reliability Engineer passionate about automation, reliability, and scalable modern platforms. With more than 5 years of experience designing, operating, and optimizing hybrid and cloud-native infrastructure, I help organizations accelerate delivery through DevOps practices, Kubernetes, CI/CD, and Infrastructure as Code. My focus is building resilient, observable systems ready to grow with business needs.",
  availability: "Available for opportunities",
  cvUrl: "/assets/cv/Pedro_MendozaCV.pdf",
  photo: "",
  summary: "always building, always learning",
  aboutIntro: "I'm Pedro Mendoza.",
  about: [
    "Hi, I'm Pedro Mendoza. I was born in Venezuela, graduated as an Informatics Engineer from Universidad Nacional Experimental del Tachira, and currently live in Uruguay.",
    "Throughout my career, technology has become the perfect mix of curiosity, continuous learning, and problem solving. I enjoy understanding how things work behind the scenes, building useful solutions, and simplifying complex processes through automation.",
    "Beyond production environments and infrastructure, I enjoy exploring new tools, constantly learning, and sharing knowledge with other professionals. I believe the best solutions come from combining technical excellence, collaboration, and genuine curiosity to improve every day.",
  ],
  profileConfig: {
    mode: "Building my future",
    focus: "cloud, observability, automation",
    location: "Uruguay",
    prefers: ["Cloud", "observability", "Kubernetes", "Security"],
  },
  values: ["reliability", "SRE", "DevOps", "learning"],
  contact: {
    email: "pmendozauy@gmail.com",
    github: "https://github.com/pm3ndoza",
    linkedin: "https://www.linkedin.com/in/pm3ndoza/",
    localTime: "America/Montevideo",
    responseTime: "24-48h",
    status: "accepting conversations",
    location: "Uruguay",
    city: "Montevideo",
  },
};

export const skills = [
  {
    title: "Cloud",
    icon: "/assets/icons/skill-cloud.png",
    items: ["AWS", "GCP", "Huawei", "Azure"],
    command: "cat ./skills/cloud.txt",
  },
  {
    title: "Infra",
    icon: "/assets/icons/skill-infra.png",
    items: ["Docker", "Kubernetes", "Terraform"],
    command: "cat ./skills/infra.txt",
  },
  {
    title: "CI/CD & DevOps",
    icon: "/assets/icons/skill-devops.png",
    items: ["GitHub Actions", "GitLab CI", "Jenkins"],
    command: "cat ./skills/devops.txt",
  },
  {
    title: "Languages",
    icon: "/assets/icons/skill-languages.png",
    items: ["Python", "Bash"],
    command: "cat ./skills/languages.txt",
  },
  {
    title: "Observability",
    icon: "/assets/icons/skill-observability.png",
    items: ["Grafana", "Prometheus", "Tempo", "Loki"],
    command: "cat ./skills/obs.txt",
  },
];

export const projects = [
  {
    title: "k8co",
    description:
      "k8co is a Kubernetes CLI tool that quickly switches the active context using fuzzy matching, smart suggestions, and interactive selection. It makes working with multiple clusters easier without needing to remember full context names.",
    url: "https://github.com/pm3ndoza/k8co",
    command: "view code →",
    image: "/assets/projects/k8co.png",
    tags: ["Bash", "Kubernetes", "CLI"],
  },
  {
    title: "Portfolio",
    description:
      "Personal website and professional portfolio built with Astro and deployed on GitHub Pages. It presents my DevOps Engineer experience, featured projects, Kubernetes, Cloud, Linux, CI/CD, observability and automation skills, plus professional information and contact channels.",
    url: "https://github.com/pm3ndoza/portfolio",
    command: "view code →",
    image: "/assets/projects/portfolio.png",
    tags: ["Astro", "CSS", "GitHub Pages"],
  },
];

export const experience = [
  {
    period: "March 2026 - Present",
    role: "SRE / DevOps Engineer",
    company: "Pormel",
    description:
      "Infrastructure automation, observability, and operation of production services in cloud environments.",
    tags: [
      "AWS",
      "Azure",
      "Huawei",
      "Terraform",
      "Grafana",
      "ArgoCD",
      "Kubernetes",
    ],
    highlights: [
      "Automated deployments and reduced infrastructure process times.",
      "Implemented monitoring and observability practices for production services.",
      "Established SRE practices to improve reliability, scalability, and operations.",
      "Implemented alerts and incident response processes to improve resilience.",
    ],
  },
  {
    period: "April 2024 - November 2025",
    role: "Site Reliability Engineer",
    company: "UKG Ultimate Kronos Group",
    description:
      "Operation and improvement of enterprise SaaS platforms, CI/CD pipelines, observability, and hybrid production environments.",
    tags: [
      "Concourse",
      "GitHub Actions",
      "Kafka",
      "Datadog",
      "K6",
      "Grafana Cloud",
    ],
    highlights: [
      "Optimized CI/CD pipelines with Concourse and GitHub Actions, removing obsolete Python 2.8 build stages.",
      "Automated self-healing processes for Concourse workers, reducing downtime and manual intervention.",
      "Led Kafka migrations from deprecated versions to supported releases, improving stability and security.",
      "Supported 6 production environments across hybrid bare-metal, OpenStack, and cloud infrastructure.",
      "Contributed to observability migrations using Datadog, K6, Telegraf, and Grafana Cloud.",
    ],
  },
  {
    period: "April 2023 - April 2024",
    role: "Cloud Engineer",
    company: "F1RST / Santander Group",
    description:
      "Support and operation of banking production systems on Azure, Kubernetes, Argo CD, and Azure DevOps pipelines.",
    tags: ["Azure", "Azure DevOps", "Argo CD", "Kubernetes", "Terraform"],
    highlights: [
      "Supported Azure-based production systems for banking platforms.",
      "Created and optimized CI/CD pipelines in Azure DevOps.",
      "Supported deployments through Argo CD and Kubernetes.",
      "Used Terraform to import, organize, and manage infrastructure.",
    ],
  },
  {
    period: "February 2022 - December 2022",
    role: "Cloud Engineer",
    company: "Platzi",
    description:
      "Support for cloud platforms, Kubernetes clusters, ephemeral environments, CI/CD pipelines, and Terraform repositories.",
    tags: [
      "Kubernetes",
      "Docker",
      "containerd",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
    ],
    highlights: [
      "Migrated CI pipelines from Jenkins to GitHub Actions, reducing execution times by approximately 10%.",
      "Participated in incident resolution during the migration from Docker to containerd.",
      "Supported Kubernetes clusters and ephemeral environments.",
      "Improved Terraform repositories and observability dashboards.",
    ],
  },
  {
    period: "August 2018 - February 2022",
    role: "Release Engineer",
    company: "PwC / TCS Uruguay",
    description:
      "Support for deployments, CI/CD pipelines, and cloud infrastructure for production environments.",
    tags: ["Kubernetes", "Jenkins", "GCP", "CI/CD", "Deployments"],
    highlights: [
      "Supported deployments on Kubernetes and CI/CD pipelines.",
      "Managed infrastructure on GCP and automated deployments.",
      "Supported and maintained Jenkins pipelines for release processes.",
    ],
  },
  {
    period: "August 2016 - August 2018",
    role: "Senior DevOps Engineer / Technical Support Analyst",
    company: "Zippyttech Tecnologia e Innovacion",
    description:
      "First professional engineering role, combining technical support, AWS cloud administration, containers, and CI/CD practices.",
    tags: ["AWS", "Docker", "GitLab", "CI/CD", "Linux", "Support"],
    highlights: [
      "Administered Zippyttech's cloud platform on Amazon Web Services.",
      "Participated in continuous integration and deployment practices for internal applications.",
      "Used Docker for application containerization and work environments.",
      "Administered the GitLab version control server.",
      "Provided office technical support and assisted with server administration.",
    ],
  },
  {
    period: "February 2013 - August 2016",
    role: "Technical Support / Academic Advisor",
    company: "Universidad Nacional Experimental del Tachira",
    description:
      "Early experience in university technical support, lab maintenance, software installation, and academic mentoring.",
    tags: ["Technical Support", "Linux", "Software", "Hardware", "Mentoring"],
    highlights: [
      "Installed software, repaired, cloned, and maintained computers in labs and university departments.",
      "Provided technical support at the Teleinformatics Studies Center and Dr. Valerio Wong Computing Lab.",
      "Mentored students in subjects such as Discrete Mathematics, English, and Digital Logic Fundamentals.",
    ],
  },
];

export const certifications = [
  {
    name: "GitOps Fundamentals",
    issuer: "Codefresh",
    year: "April 25, 2023",
    badge: "assets/certifications/gitops-fundamentals.png",
    status: "Verified credential",
    url: "https://www.credly.com/badges/40c97f8d-6dff-4db8-85c3-10d9665399d5/public_url",
    command: "view credential",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "October 26, 2022",
    badge: "assets/certifications/aws-certified-cloud-practitioner.png",
    status: "Expired: October 26, 2025",
    url: "https://www.credly.com/badges/92e36154-b004-4612-9cc5-711ce1dde289/public_url",
    command: "view credential",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    year: "2026",
    badge: "assets/certifications/professional-scrum-master-i-psm-i.png",
    status: "Verified credential",
    url: "https://www.credly.com/badges/15ac4ad1-712b-43a0-85d3-e78442bda667/public_url",
    command: "view credential",
  },
];

export const hobbiesData = {
  intro:
    "Outside the keyboard I also have a life: a business, training, pets, and a collection of stories. This section is less CV and more me, with my tastes, my marks, and my paths. Not everything that shapes a person fits into a job description, so this is where I share a little of what I enjoy, what moves me, and what makes me who I am.",
  signal: "Not everything in life is work.",
  stamps: [
    "Uruguay",
    "Brazil",
    "Argentina",
    "Chile",
    "Colombia",
    "Venezuela",
    "motorcycles",
    "cars",
    "Salsa Casino",
    "baking",
    "anime",
    "manga",
    "One Piece",
    "cycling",
    "jogging",
    "boxing",
    "carpentry",
    "welding",
    "metalwork",
    "driving",
  ],
  hobbies: [
    {
      title: "Cycling",
      tag: "Road/Training",
      description:
        "I love going out for road rides, training, feeling the air, the effort, and the freedom of the route. It is a calm and focused space where I connect with myself, disconnect from the noise, and enjoy movement, nature, and physical challenge.",
      items: ["cycling", "training", "road bike", "bicycles"],
    },
    {
      title: "Boxing",
      tag: "Focus/Training",
      description:
        "I love the physical training side of boxing. It brings out the best in me and makes me feel strong, focused, and energized. It helps me release tension, improve my fitness, and stay active through discipline and personal growth.",
      items: ["Uruguay", "boxing", "La Blanqueada", "training", "boxing bag"],
    },
    {
      title: "Jogging",
      tag: "Running/Training",
      description:
        "I enjoy going out for a run. It keeps me active and lets me enjoy the outdoors. Running gives me a sense of freedom and helps me disconnect from the noise; it is a moment to think, feel movement, and enjoy the rhythm of my steps.",
      items: [
        "10k",
        "10k por la vida",
        "Venezuela",
        "Uruguay",
        "running",
        "jogging",
      ],
    },
    {
      title: "Salsa Casino",
      tag: "Dance/Fun",
      description:
        "Dancing Salsa Casino is one of my passions. I love the energy, rhythm, and connection that happens while dancing. It is expression, fun, and social connection; I have competed in Chile and Argentina.",
      items: [
        "Chile",
        "Argentina",
        "DareDance Chile",
        "CubanDance Argentina",
        "Salsa Casino",
      ],
    },
    {
      title: "One Piece",
      tag: "Anime/Manga",
      description:
        "One Piece is my favorite anime. I love its story, characters, and the world Eiichiro Oda created. It has been with me for a long time and still surprises me with its twists, humor, friendship, adventure, and perseverance.",
      items: ["One Piece", "Zoro", "Ace", "Whitebeard"],
    },
    {
      title: "Travel",
      tag: "Tourism/Adventure",
      description:
        "I love traveling, discovering new places, cultures, and people. Travel pushes me out of my comfort zone, helps me learn new things, and creates unforgettable memories. I have been lucky to travel across several Latin American countries and I am always looking for new adventures.",
      items: [
        "Argentina",
        "Chile",
        "Brazil",
        "Colombia",
        "Venezuela",
        "Uruguay",
        "travel",
      ],
    },
    {
      title: "Driving",
      tag: "Focus/Passion",
      description:
        "I love driving. I enjoy the control of the wheel, the speed, and the freedom of being on the road. Driving helps me disconnect and enjoy the journey. I liked it so much that I worked as a taxi and Uber driver just for the stories and the chance to meet people.",
      items: ["Uber", "driving", "cycling", "passion", "cars"],
    },
  ],
};
