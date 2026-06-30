// Re-structured curriculum data to support BBA, MBA, BCA, and MCA pathways with exact copywriting sheet requirements
export interface Subject {
  name: string;
  description: string;
  credits?: number;
}

export interface SemesterDetails {
  semester: string;
  subjects: Subject[];
}

export interface YearStructure {
  year: string;
  title: string;
  summary: string;
  semesters: SemesterDetails[];
}

export const bbaStructure: YearStructure[] = [
  {
    year: "Academic Year 1",
    title: "Foundation, Basics & Organizational Dynamics",
    summary: "Establish strong foundations in core management, economics, communication, math, and organizational behavior.",
    semesters: [
      {
        semester: "Semester 1",
        subjects: [
          { name: "Principles of Management", description: "Fundamentals of planning, organizing, staffing, leading, and controlling organizations." },
          { name: "Business Communication", description: "Professional presenting, report writing, public speaking, and corporate communication." },
          { name: "Microeconomics", description: "Individual market structures, price determination, supply and demand, and consumer behavior." },
          { name: "Financial Accounting", description: "Double-entry bookkeeping, ledger building, balance sheets, and cash flow fundamentals." },
          { name: "Business Mathematics", description: "Algebraic models, matrix theory, linear calculations, and numerical applications." }
        ]
      },
      {
        semester: "Semester 2",
        subjects: [
          { name: "Organizational Behaviour", description: "Individual behavior, group dynamics, workplace motivation, and organization culture." },
          { name: "Macroeconomics", description: "National income, monetary policy, fiscal systems, inflation, and international trade." },
          { name: "Cost Accounting", description: "Cost classification, budget management, material costs, and overhead allocation." },
          { name: "Business Statistics", description: "Probability, distributions, correlation, regression, and sampling methods." },
          { name: "Environmental Studies", description: "Ecology, resource conservation, sustainability, and environmental safety regulations." }
        ]
      }
    ]
  },
  {
    year: "Academic Year 2",
    title: "Core Business Functions & Advanced Operations",
    summary: "Command marketing, HR, corporate law, taxation, and business research methods.",
    semesters: [
      {
        semester: "Semester 3",
        subjects: [
          { name: "Marketing Management", description: "Marketing mix, consumer research, targeting strategies, and brand positioning." },
          { name: "Human Resource Management", description: "Talent recruitment, training systems, performance appraisal, and employee relations." },
          { name: "Financial Management", description: "Capital budgeting, cost of capital, dividend payout policies, and cash flows." },
          { name: "Business Law", description: "Contracts law, sales of goods act, partnership guidelines, and corporate rules." },
          { name: "Management Information Systems", description: "Information systems architecture, data models, and enterprise resource applications." }
        ]
      },
      {
        semester: "Semester 4",
        subjects: [
          { name: "Operations Research", description: "Linear programming optimization, queuing theories, and resources allocation models." },
          { name: "Business Research Methods", description: "Hypothesis testing, questionnaire design, data collection, and analytics reporting." },
          { name: "Taxation", description: "Direct taxes, indirect tax mechanisms, GST rules, and corporate deductions." },
          { name: "International Business", description: "Cross-border operations, exchange rates, foreign policy, and global entry methods." },
          { name: "Entrepreneurship Development", description: "Ideation methods, venture planning, business blueprinting, and pitch strategies." }
        ]
      }
    ]
  },
  {
    year: "Academic Year 3",
    title: "Strategy, Specialisation & Capstone Application",
    summary: "Execute real-world corporate internships, services marketing, brand strategies, and final research dissertations.",
    semesters: [
      {
        semester: "Semester 5",
        subjects: [
          { name: "Corporate Internship", description: "Hands-on internship in real estate developer, brokerage, or management firms." },
          { name: "Services Marketing", description: "Quality audits, relationship management tools, and service marketing matrices." },
          { name: "Brand Management", description: "Brand assets, building equity metrics, customer loyalty programs, and brand extensions." },
          { name: "Sales and Distribution", description: "Retail distribution, logistics coordination, sales force management, and margins." },
          { name: "Minor Electives", description: "Specialized courses customized to student path (e.g., HR, Finance, or Analytics)." }
        ]
      },
      {
        semester: "Semester 6",
        subjects: [
          { name: "Analytics Foundations", description: "Database queries, analytics modeling, and dashboards for forecasting." },
          { name: "Corporate Governance", description: "ESG frameworks, business ethics, CSR mandates, and corporate board controls." },
          { name: "Marketing Analytics", description: "Customer metrics, calculating lifetime values, and acquisition optimization." },
          { name: "Retail Marketing", description: "Merchandising, e-commerce, store displays, and category management." },
          { name: "Advertising PR and Events", description: "Integrated advertising, media campaigns, public relations, and event execution." },
          { name: "Dissertation", description: "Capstone project and independent research defense under academic supervisors." }
        ]
      }
    ]
  }
];

export const mbaStructure: YearStructure[] = [
  {
    year: "Academic Year 1",
    title: "Business Foundations, Real Estate Basics & Business Systems",
    summary: "Command financial management, operations, real estate regulatory platforms, and automation.",
    semesters: [
      {
        semester: "Semester One",
        subjects: [
          { name: "Business Statistics", description: "Probability, regression analysis, and statistical tools to support business decision making." },
          { name: "Marketing Management", description: "Target segments, pricing strategies, branding, and customer acquisition campaigns." },
          { name: "Financial Accounting", description: "Balance sheets, ledger building, corporate statements, and financial evaluation." },
          { name: "Operations Management", description: "Inventory controls, logistical processes, and ERP-driven resource planning." },
          { name: "Legal Aspects of Business", description: "Contracts, corporate guidelines, compliance rules, and trade laws." },
          { name: "RERA", description: "Real estate regulation act rules, compliance, and consumer protection protocols." },
          { name: "REIT", description: "Real estate investment trusts, configuration, dividend laws, and asset portfolios." },
          { name: "Government Approvals", description: "Township planning permissions, land titling, and local municipal clearances." }
        ]
      },
      {
        semester: "Semester Two",
        subjects: [
          { name: "Organizational Behaviour", description: "Human motivations, leadership frameworks, conflict resolution, and ethics." },
          { name: "Financial Management", description: "Capital structure, cost of capital, dividend payout rules, and investment strategies." },
          { name: "Project Management", description: "Task scheduling, Gantt charts, Work Breakdown Structures (WBS), and critical paths." },
          { name: "Business Communication", description: "Professional presentations, corporate report writing, and strategic design thinking." },
          { name: "Consumer Behaviour", description: "Customer feedback evaluation, user experience metrics, and buyer psychology." },
          { name: "Digital Marketing", description: "Online advertising, email campaigns, funnel mapping, and search visibility." },
          { name: "CRM", description: "Customer relationship management systems, trigger setups, and lead scoring." },
          { name: "Automation", description: "Workflow configurations, auto-drips, and API integrations for automated operations." }
        ]
      }
    ]
  },
  {
    year: "Academic Year 2",
    title: "Strategy, Real Estate Marketing & PropTech Launch",
    summary: "Architect AI/ML intelligence, manage complex real estate distribution partners, and deploy new launches.",
    semesters: [
      {
        semester: "Semester Three",
        subjects: [
          { name: "Strategic Management", description: "Competitive advantage, global expansion strategies, and corporate growth plans." },
          { name: "Corporate Governance", description: "Business ethics, board protocols, ESG compliance, and CSR models." },
          { name: "AI and ML for Business", description: "Machine learning predictive models, prompt setups, and database workflows." },
          { name: "Real Estate Brand Management", description: "Visual design standards, dynamic positioning, and corporate identities." },
          { name: "Integrated Marketing Communication", description: "Coordination of advertising, PR, event marketing, and digital channels." },
          { name: "Visual Storytelling", description: "Architectural photography, video production, and dynamic media creation." }
        ]
      },
      {
        semester: "Semester Four",
        subjects: [
          { name: "Entrepreneurship", description: "Indian start-up setups, venture planning, fundraising, and scale-up methods." },
          { name: "Global Business Environment", description: "International trade, exchange rates, foreign policy, and market entries." },
          { name: "Conflict and Negotiation", description: "Mediation procedures, commercial contracts negotiation, and dispute solutions." },
          { name: "Marketing Analytics", description: "Customer lifetime value calculation, acquisition optimizations, and traffic metrics." },
          { name: "Broker Management", description: "Broker networks, commission structures, and channel partner agreements." },
          { name: "Property Launch Management", description: "Release campaigns planning, marketing rosters, and digital launch execution." }
        ]
      }
    ]
  }
];

export const bcaStructure: YearStructure[] = [
  {
    year: "Academic Year 1",
    title: "Programming Foundations & Mathematical Reasoning",
    summary: "Build strong foundations in programming logic, mathematics, and computer fundamentals.",
    semesters: [
      {
        semester: "Semester One",
        subjects: [
          { name: "Computer Fundamentals", description: "Hardware architectures, number systems, logic circuits, and computing basics." },
          { name: "Programming Logic", description: "Flowcharts, algorithms, programming paradigms, and problem-solving concepts." },
          { name: "Python Basics", description: "Variables, data structures, control flow, functions, and python scripting." },
          { name: "Mathematics for Computing", description: "Discrete mathematics, set theory, propositional logic, and numerical math." },
          { name: "Business Communication", description: "Professional writing, technical reporting, and presentation skills." }
        ]
      },
      {
        semester: "Semester Two",
        subjects: [
          { name: "Object Oriented Programming", description: "Classes, objects, inheritance, encapsulation, polymorphism, and designs." },
          { name: "Data Structures", description: "Stacks, queues, linked lists, binary trees, sorting and searching algorithms." },
          { name: "Database Management", description: "Relational models, database design, SQL querying, and normalization." },
          { name: "HTML CSS and JavaScript", description: "Responsive layouts, frontend web standards, DOM, and interactive client scripts." },
          { name: "Operating Systems", description: "Process management, virtual memory, file systems, and scheduling schemes." }
        ]
      }
    ]
  },
  {
    year: "Academic Year 2",
    title: "Web Technologies, Databases & Data Analytics",
    summary: "Master web application development, SQL databases, ML basics, APIs, and cybersecurity.",
    semesters: [
      {
        semester: "Semester Three",
        subjects: [
          { name: "Advanced Python", description: "Data processing libraries, system APIs, web scrapers, and automated scripts." },
          { name: "Computer Networks", description: "Network models, TCP/IP stack, routing, security, and wireless networks." },
          { name: "Web Application Development", description: "Full-stack frameworks, backend server creation, and database integration." },
          { name: "UI and UX Basics", description: "User interface guidelines, layout wireframing, styling, and design principles." },
          { name: "Software Project Lab", description: "Practical laboratory applying coding, Git controls, and software testing." }
        ]
      },
      {
        semester: "Semester Four",
        subjects: [
          { name: "Data Analytics", description: "Data cleaning, statistical plotting, forecasting trends, and analytics tools." },
          { name: "SQL for Business", description: "Advanced SQL queries, window functions, database optimization, and views." },
          { name: "Machine Learning Basics", description: "Supervised algorithms, model parameters, model evaluations, and predictions." },
          { name: "API Fundamentals", description: "RESTful web services, requests/responses routing, and backend API integration." },
          { name: "Cyber Security Basics", description: "Encryption methods, firewalls, threat defense, and safety standards." },
          { name: "Mini Project", description: "Development of a functional computer application addressing a real business case." }
        ]
      }
    ]
  },
  {
    year: "Academic Year 3",
    title: "Specialisation, AI & Capstone Projects",
    summary: "Apply advanced computing skills through AI, cloud technologies, mobile apps, and hands-on capstone projects.",
    semesters: [
      {
        semester: "Semester Five",
        subjects: [
          { name: "Software Engineering", description: "Systems engineering models, testing methods, agile sprints, and system setups." },
          { name: "Mobile App Development", description: "Cross-platform mobile apps, mobile user interface elements, and API routing." },
          { name: "Cloud Basics", description: "AWS/GCP cloud platforms, serverless computing, and remote databases." },
          { name: "AI Tools for Developers", description: "Copilot utilities, prompt engineering workflows, and coding helpers." },
          { name: "Project Management", description: "Agile sprints, Scrum frameworks, sprint boards, and bug tracking." },
          { name: "Internship", description: "Industry residency at software houses, tech startups, or computer companies." }
        ]
      },
      {
        semester: "Semester Six",
        subjects: [
          { name: "Cloud Deployment", description: "Configuring web servers, CI/CD setups, containerization, and DNS administration." },
          { name: "Generative AI Applications", description: "Building applications using API models, LLM pipelines, and agents." },
          { name: "Portfolio Project", description: "High-fidelity capstone project with live hosting, code review, and user testing." },
          { name: "Entrepreneurship", description: "Tech business modeling, software licensing, and start-up mechanics." },
          { name: "Interview Readiness", description: "Resume writing, technical quiz preparation, coding challenges, and mock panels." },
          { name: "Final Presentation", description: "Product demo, project defenses, and presentation before developers." }
        ]
      }
    ]
  }
];

export const mcaStructure: YearStructure[] = [
  {
    year: "Academic Year 1",
    title: "Engineering Foundations & Modern AI Systems",
    summary: "Command advanced programming, data structures, operating systems, databases, cloud, and DevOps basics.",
    semesters: [
      {
        semester: "Semester One",
        subjects: [
          { name: "Advanced Programming", description: "Deep dive into system-level code, memory management, and concurrent systems." },
          { name: "Data Structures and Algorithms", description: "Complex algorithm analytics, advanced trees, graphs, and dynamic programming." },
          { name: "Database Systems", description: "Relational and NoSQL schemas, database tuning, transaction isolation levels." },
          { name: "Operating Systems", description: "Kernel architectures, virtual memory configurations, scheduling, and processes." },
          { name: "Computer Networks", description: "Protocols analysis, secure endpoints, proxy structures, and network routing." },
          { name: "Software Engineering", description: "Modern software lifecycles, UML schemas, test suites, and agile systems." }
        ]
      },
      {
        semester: "Semester Two",
        subjects: [
          { name: "Full Stack Development", description: "Architecting frontends and REST APIs, user sessions, and database layers." },
          { name: "API Design", description: "API schemas design, REST/GraphQL endpoints, versioning, and rate limiting." },
          { name: "Cloud Computing", description: "Cloud services configuration, container orchestration, serverless models." },
          { name: "DevOps Basics", description: "Container build tools, CI/CD configurations, and infrastructure setups." },
          { name: "Secure Coding", description: "Web vulnerabilities prevention, secure authentication, and data encryption." },
          { name: "Product Lab", description: "Building a production-ready application addressing specific corporate use cases." }
        ]
      }
    ]
  },
  {
    year: "Academic Year 2",
    title: "System Design, Machine Learning & Deployment",
    summary: "Architect AI/ML intelligence, build production-grade systems, and deploy scalable applications with capstone projects.",
    semesters: [
      {
        semester: "Semester Three",
        subjects: [
          { name: "Machine Learning", description: "Supervised/unsupervised models, hyperparameters, neural nets, and evaluation." },
          { name: "Data Engineering", description: "Big data processing pipelines, ETL tools, data warehouses, and streaming." },
          { name: "Generative AI", description: "LLM integration methods, RAG applications, vector databases, and prompt tools." },
          { name: "LLM Applications", description: "Orchestrating applications using AI agents, LLM pipelines, and context tools." },
          { name: "MLOps Basics", description: "Automating models pipeline, model monitoring tools, and registry tracking." },
          { name: "Applied AI Project", description: "Building a functional AI-driven system with model training and pipeline setup." }
        ]
      },
      {
        semester: "Semester Four",
        subjects: [
          { name: "System Design", description: "Scalable architecture configurations, caching grids, and load balancing." },
          { name: "Scalable Architecture", description: "Distributed database configuration, high availability, and horizontal scaling." },
          { name: "AI Product Management", description: "User personas, metrics definition, roadmap building, and go-to-market." },
          { name: "Cloud Deployment", description: "Kubernetes management, monitoring stacks, logging systems, and security audits." },
          { name: "Portfolio Capstone", description: "High-scale capstone deployment, system verification, and final code reviews." },
          { name: "Technical Communication", description: "Writing technical docs, API guides, architecture diagrams, and system presentations." }
        ]
      }
    ]
  }
];

