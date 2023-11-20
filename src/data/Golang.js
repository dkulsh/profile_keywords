var InitialTechKeywords = [
  { text: "aws", size: 175 },
  { text: "java", size: 136 },
  { text: "python", size: 131 },
  { text: "kubernetes", size: 98 },
  { text: "sql", size: 92 },
  { text: "nosql", size: 83 },
  { text: "rest", size: 82 },
  { text: "docker", size: 80 },
  { text: "mysql", size: 65 },
  { text: "redis", size: 63 },
  { text: "git", size: 62 },
  { text: "ci", size: 57 },
  { text: "gcp", size: 56 },
  { text: "cd", size: 55 },
  { text: "ci cd", size: 55 },
  { text: "kafka", size: 55 },
  { text: "monitoring", size: 50 },
  { text: "mongodb", size: 49 },
  { text: "azure", size: 44 },
  { text: "object", size: 40 },
  { text: "react", size: 37 },
  { text: "object oriented", size: 37 },
  { text: "nosql databases", size: 33 },
  { text: "docker kubernetes", size: 30 },
  { text: "rest api", size: 28 },
  { text: "php", size: 24 },
  { text: "spring", size: 23 },
  { text: "sql nosql", size: 22 },
  { text: "django", size: 21 },
  { text: "aws azure", size: 20 },
  { text: "postgres", size: 19 },
  { text: "aws gcp", size: 18 },
  { text: "rest apis", size: 18 },
  { text: "grasp rest", size: 17 },
  { text: "grasp rest api", size: 17 },
  { text: "rest api concepts", size: 17 },
  { text: "grasp rest api concepts", size: 17 },
  { text: "rest api concepts quick", size: 17 },
  { text: "lambda", size: 17 },
  { text: "cassandra", size: 17 },
  { text: "gcp azure", size: 16 },
  { text: "gcp aws", size: 16 },
  { text: "python java", size: 14 },
  { text: "experience sql", size: 14 },
  { text: "python go", size: 14 },
  { text: "angular", size: 14 },
  { text: "object oriented design", size: 14 },
  { text: "aws kubernetes", size: 14 },
  { text: "tools git", size: 13 },
  { text: "unix", size: 13 },
  { text: "redis kafka", size: 13 },
  { text: "java c", size: 13 },
  { text: "object oriented programming", size: 13 },
  { text: "kubernetes plus", size: 13 },
  { text: "java go", size: 12 },
  { text: "mongo", size: 12 },
  { text: "sql nosql databases", size: 12 },
  { text: "experience java", size: 12 },
  { text: "cd pipelines", size: 12 },
  { text: "ci cd pipelines", size: 12 },
  { text: "platforms aws", size: 12 },
  { text: "aws cloud", size: 12 },
  { text: "nosql data", size: 11 },
  { text: "languages python", size: 11 },
  { text: "mysql redis", size: 11 },
  { text: "golang rust", size: 11 },
  { text: "aws gcp azure", size: 11 },
  { text: "postgresql mysql", size: 11 },
  { text: "elasticsearch", size: 11 },
  { text: "gcp aws kubernetes", size: 11 },
  { text: "kafka rabbitmq", size: 10 },
  { text: "experience aws", size: 10 },
  { text: "spring boot", size: 10 },
  { text: "mysql mongodb", size: 10 },
  { text: "technologies docker", size: 10 },
  { text: "knowledge kubernetes", size: 10 },
  { text: "mysql nosql", size: 10 },
  { text: "aws services", size: 9 },
  { text: "rdbms nosql", size: 9 },
  { text: "java python", size: 9 },
  { text: "java spring", size: 9 },
  { text: "cd pipeline", size: 9 },
  { text: "ci cd pipeline", size: 9 },
  { text: "experience object", size: 9 },
];

const TechKeywords = InitialTechKeywords.slice(0, 20);

var InitialConceptKeywords = [
  { text: "design", size: 561 },
  { text: "development", size: 443 },
  { text: "software", size: 412 },
  { text: "data", size: 294 },
  { text: "requirements", size: 211 },
  { text: "architecture", size: 196 },
  { text: "performance", size: 187 },
  { text: "services", size: 182 },
  { text: "scalable", size: 180 },
  { text: "cloud", size: 173 },
  { text: "develop", size: 167 },
  { text: "practices", size: 163 },
  { text: "databases", size: 123 },
  { text: "distributed", size: 121 },
  { text: "patterns", size: 117 },
  { text: "frameworks", size: 113 },
  { text: "scale", size: 112 },
  { text: "software development", size: 108 },
  { text: "apis", size: 108 },
  { text: "related", size: 105 },
  { text: "developing", size: 102 },
  { text: "testing", size: 98 },
  { text: "test", size: 97 },
  { text: "infrastructure", size: 97 },
  { text: "security", size: 96 },
  { text: "api", size: 95 },
  { text: "developers", size: 94 },
  { text: "maintain", size: 91 },
  { text: "database", size: 89 },
  { text: "integration", size: 86 },
  { text: "platforms", size: 82 },
  { text: "microservices", size: 81 },
  { text: "platform", size: 78 },
  { text: "structures", size: 77 },
  { text: "deployment", size: 75 },
  { text: "data structures", size: 74 },
  { text: "design patterns", size: 73 },
  { text: "designing", size: 72 },
  { text: "agile", size: 70 },
  { text: "responsibilities requirements", size: 66 },
  { text: "scalability", size: 65 },
  { text: "unit", size: 65 },
  { text: "standards", size: 62 },
  { text: "design develop", size: 61 },
  { text: "algorithms", size: 61 },
  { text: "distributed systems", size: 60 },
  { text: "relational", size: 58 },
  { text: "experience developing", size: 58 },
  { text: "ci", size: 57 },
  { text: "principles", size: 56 },
  { text: "continuous", size: 56 },
  { text: "maintainable", size: 56 },
  { text: "oriented", size: 56 },
  { text: "cd", size: 55 },
  { text: "ci cd", size: 55 },
  { text: "development experience", size: 51 },
  { text: "devops", size: 51 },
  { text: "large scale", size: 49 },
  { text: "concepts", size: 47 },
  { text: "robust", size: 47 },
  { text: "deploy", size: 46 },
  { text: "tests", size: 46 },
  { text: "service", size: 45 },
  { text: "debugging", size: 45 },
  { text: "maintaining", size: 44 },
  { text: "optimize", size: 42 },
  { text: "object", size: 40 },
  { text: "related field", size: 39 },
  { text: "developer", size: 39 },
  { text: "enterprise", size: 39 },
  { text: "design implement", size: 37 },
  { text: "analytical", size: 37 },
  { text: "reliable", size: 37 },
  { text: "designers", size: 37 },
  { text: "object oriented", size: 37 },
  { text: "cycle", size: 35 },
  { text: "troubleshoot", size: 35 },
  { text: "software engineering", size: 35 },
  { text: "architecture design", size: 35 },
  { text: "reusable", size: 34 },
  { text: "enhance", size: 34 },
  { text: "life", size: 33 },
  { text: "architectural", size: 33 },
  { text: "automation", size: 33 },
  { text: "performant", size: 33 },
  { text: "high performance", size: 33 },
  { text: "required", size: 33 },
  { text: "develop maintain", size: 33 },
  { text: "nosql databases", size: 33 },
  { text: "methodologies", size: 33 },
  { text: "engineering related", size: 32 },
  { text: "fundamentals", size: 32 },
  { text: "deploying", size: 32 },
  { text: "scaling", size: 31 },
  { text: "optimization", size: 31 },
  { text: "integrate", size: 31 },
  { text: "reliability", size: 29 },
  { text: "life cycle", size: 29 },
  { text: "pipelines", size: 29 },
  { text: "rest api", size: 28 },
  { text: "troubleshooting", size: 28 },
];

const ConceptKeywords = InitialConceptKeywords.slice(0, 40);

var InitialSoftSkillsKeywords = [
  { text: "understanding", size: 251 },
  { text: "engineering", size: 192 },
  { text: "communication", size: 140 },
  { text: "solving", size: 129 },
  { text: "engineers", size: 129 },
  { text: "collaborate", size: 126 },
  { text: "implement", size: 116 },
  { text: "management", size: 114 },
  { text: "ensure", size: 110 },
  { text: "problem solving", size: 105 },
  { text: "write", size: 97 },
  { text: "writing", size: 97 },
  { text: "maintain", size: 91 },
  { text: "communication skills", size: 78 },
  { text: "mentor", size: 72 },
  { text: "ownership", size: 68 },
  { text: "learn", size: 68 },
  { text: "drive", size: 62 },
  { text: "participate", size: 59 },
  { text: "identify", size: 59 },
  { text: "solve", size: 59 },
  { text: "maintainable", size: 56 },
  { text: "implementing", size: 55 },
  { text: "implementation", size: 54 },
  { text: "contribute", size: 53 },
  { text: "solving skills", size: 49 },
  { text: "problem solving skills", size: 49 },
  { text: "managers", size: 48 },
  { text: "understand", size: 47 },
  { text: "ensuring", size: 46 },
  { text: "engineer", size: 45 },
  { text: "deliver", size: 45 },
  { text: "maintaining", size: 44 },
  { text: "independently", size: 43 },
  { text: "manage", size: 42 },
  { text: "product managers", size: 39 },
  { text: "design implement", size: 37 },
  { text: "learning", size: 35 },
  { text: "software engineering", size: 35 },
  { text: "passion", size: 34 },
  { text: "develop maintain", size: 33 },
  { text: "engineering related", size: 32 },
  { text: "excellent communication", size: 32 },
  { text: "write clean", size: 31 },
  { text: "collaboration", size: 30 },
  { text: "mentoring", size: 30 },
  { text: "solid understanding", size: 27 },
  { text: "passionate", size: 26 },
  { text: "experience writing", size: 26 },
  { text: "engineering related field", size: 25 },
  { text: "maintainable code", size: 25 },
  { text: "science engineering", size: 23 },
  { text: "computer science engineering", size: 23 },
  { text: "solve complex", size: 23 },
  { text: "manager", size: 23 },
  { text: "proactively", size: 22 },
  { text: "delivering", size: 21 },
  { text: "work independently", size: 20 },
  { text: "junior engineers", size: 20 },
  { text: "managing", size: 20 },
  { text: "take ownership", size: 20 },
  { text: "design implementation", size: 20 },
  { text: "mindset", size: 20 },
  { text: "understanding relational", size: 19 },
  { text: "degree computer science engineering", size: 19 },
  { text: "growing", size: 19 },
  { text: "driving", size: 19 },
  { text: "think", size: 19 },
  { text: "thinking", size: 19 },
  { text: "mentor junior", size: 19 },
  { text: "science engineering related", size: 18 },
  { text: "computer science engineering related", size: 18 },
  { text: "passionate about", size: 18 },
  { text: "written communication", size: 18 },
  { text: "managers designers", size: 18 },
  { text: "product managers designers", size: 18 },
  { text: "design develop maintain", size: 18 },
  { text: "excellent communication skills", size: 18 },
  { text: "technical problem solving", size: 17 },
  { text: "resolve", size: 17 },
  { text: "designing implementing", size: 17 },
  { text: "collaborate cross", size: 17 },
  { text: "collaborate cross functional", size: 17 },
  { text: "collaborate cross functional teams", size: 17 },
  { text: "written communication skills", size: 17 },
  { text: "understanding software", size: 17 },
  { text: "science engineering related field", size: 16 },
  { text: "collaborating", size: 16 },
  { text: "communicate", size: 16 },
  { text: "collaborative", size: 16 },
  { text: "solving capabilities", size: 16 },
  { text: "problem solving capabilities", size: 16 },
  { text: "technical problem solving capabilities", size: 16 },
  { text: "contributing", size: 15 },
  { text: "other engineers", size: 15 },
  { text: "software engineers", size: 15 },
  { text: "translating", size: 15 },
  { text: "deep understanding", size: 15 },
  { text: "verbal communication", size: 15 },
  { text: "verbal communication skills", size: 15 },
  { text: "maintainability", size: 14 },
];

const SoftSkillsKeywords = InitialSoftSkillsKeywords.slice(0, 40);

var InitialMiscKeywords = [
  { text: "experience", size: 1169 },
  { text: "code", size: 419 },
  { text: "work", size: 380 },
  { text: "team", size: 370 },
  { text: "knowledge", size: 357 },
  { text: "systems", size: 324 },
  { text: "skills", size: 308 },
  { text: "technical", size: 300 },
  { text: "applications", size: 285 },
  { text: "product", size: 268 },
  { text: "years", size: 257 },
  { text: "working", size: 241 },
  { text: "high", size: 229 },
  { text: "technologies", size: 226 },
  { text: "end", size: 212 },
  { text: "build", size: 204 },
  { text: "go", size: 201 },
  { text: "building", size: 200 },
  { text: "quality", size: 191 },
  { text: "programming", size: 190 },
  { text: "solutions", size: 182 },
  { text: "ability", size: 181 },
  { text: "backend", size: 180 },
  { text: "'s", size: 169 },
  { text: "using", size: 167 },
  { text: "tools", size: 159 },
  { text: "web", size: 141 },
  { text: "other", size: 138 },
  { text: "problem", size: 136 },
  { text: "complex", size: 136 },
  { text: "environment", size: 132 },
  { text: "excellent", size: 128 },
  { text: "your", size: 127 },
  { text: "business", size: 127 },
  { text: "computer", size: 126 },
  { text: "teams", size: 125 },
  { text: "projects", size: 123 },
  { text: "science", size: 116 },
  { text: "experience working", size: 115 },
  { text: "system", size: 114 },
  { text: "problems", size: 112 },
  { text: "years experience", size: 111 },
  { text: "computer science", size: 110 },
  { text: "features", size: 109 },
  { text: "efficient", size: 109 },
  { text: "plus", size: 102 },
  { text: "application", size: 101 },
  { text: "languages", size: 100 },
  { text: "products", size: 96 },
  { text: "js", size: 96 },
  { text: "e", size: 95 },
  { text: "reviews", size: 91 },
  { text: "functional", size: 90 },
  { text: "hands", size: 90 },
  { text: "coding", size: 90 },
  { text: "based", size: 89 },
  { text: "production", size: 88 },
  { text: "well", size: 87 },
  { text: "tech", size: 86 },
  { text: "degree", size: 85 },
  { text: "familiarity", size: 84 },
  { text: "one", size: 83 },
  { text: "including", size: 82 },
  { text: "large", size: 82 },
  { text: "c", size: 81 },
  { text: "g", size: 81 },
  { text: "support", size: 80 },
  { text: "highly", size: 80 },
  { text: "node", size: 78 },
  { text: "e g", size: 78 },
  { text: "responsibilities", size: 77 },
  { text: "code reviews", size: 76 },
  { text: "technology", size: 75 },
  { text: "able", size: 74 },
  { text: "language", size: 74 },
  { text: "improve", size: 74 },
  { text: "members", size: 73 },
  { text: "provide", size: 72 },
  { text: "all", size: 72 },
  { text: "do", size: 71 },
  { text: "node js", size: 71 },
  { text: "experience building", size: 71 },
  { text: "issues", size: 70 },
  { text: "help", size: 70 },
  { text: "high quality", size: 70 },
  { text: "level", size: 70 },
  { text: "team members", size: 70 },
  { text: "any", size: 69 },
  { text: "can", size: 69 },
  { text: "user", size: 69 },
  { text: "lead", size: 68 },
  { text: "stack", size: 66 },
  { text: "end end", size: 64 },
  { text: "degree computer", size: 63 },
  { text: "server", size: 63 },
  { text: "proficiency", size: 63 },
  { text: "their", size: 62 },
  { text: "documentation", size: 62 },
  { text: "about", size: 62 },
  { text: "stakeholders", size: 62 },
  { text: "fast", size: 62 },
];

const MiscKeywords = InitialMiscKeywords.slice(3, 20);

export default { TechKeywords, ConceptKeywords, SoftSkillsKeywords, MiscKeywords }