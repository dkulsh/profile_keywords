var InitialTechKeywords = [
  { text: "spring", size: 510 },
  { text: "aws", size: 221 },
  { text: "sql", size: 201 },
  { text: "rest", size: 167 },
  { text: "mysql", size: 150 },
  { text: "hibernate", size: 143 },
  { text: "kafka", size: 115 },
  { text: "nosql", size: 113 },
  { text: "python", size: 111 },
  { text: "mongodb", size: 108 },
  { text: "android", size: 107 },
  { text: "object", size: 98 },
  { text: "git", size: 97 },
  { text: "ci", size: 92 },
  { text: "kubernetes", size: 85 },
  { text: "docker", size: 84 },
  { text: "cd", size: 84 },
  { text: "monitoring", size: 81 },
  { text: "react", size: 75 },
  { text: "redis", size: 72 },
  { text: "oracle", size: 65 },
  { text: "angular", size: 65 },
  { text: "azure", size: 64 },
  { text: "junit", size: 44 },
  { text: "maven", size: 43 },
  { text: "gcp", size: 41 },
  { text: "cassandra", size: 40 },
  { text: "scala", size: 38 },
  { text: "postgres", size: 35 },
  { text: "golang", size: 34 },
  { text: "elasticsearch", size: 32 },
  { text: "jpa", size: 30 },
  { text: "mongo", size: 28 },
  { text: "soap", size: 28 },
  { text: "jquery", size: 27 },
  { text: "jdbc", size: 26 },
  { text: "unix", size: 25 },
  { text: "ios", size: 25 },
  { text: "xml", size: 24 },
  { text: "elastic", size: 23 },
  { text: "eclipse", size: 22 },
  { text: "tomcat", size: 19 },
  { text: "activemq", size: 19 },
  { text: "php", size: 18 },
  { text: "queues", size: 17 },
  { text: "lambda", size: 17 },
  { text: "django", size: 17 },
  { text: "jsp", size: 17 },
  { text: "gradle", size: 17 },
  { text: "http", size: 17 },
  { text: "grpc", size: 15 },
  { text: "orm", size: 15 },
  { text: "jvm", size: 13 },
  { text: "postman", size: 11 },
  { text: "hystrix", size: 11 },
  { text: "gitlab", size: 11 },
  { text: "etl", size: 11 },
  { text: "kibana", size: 4 },
  { text: "intellij", size: 3 },
  { text: "aop", size: 3 },
  { text: "testng", size: 2 },
  { text: "wildfly", size: 2 },
  { text: "jetty", size: 2 },
];

const TechKeywords = InitialTechKeywords.slice(0, 20);

var InitialConceptKeywords = [
  { text: "design", size: 1479 },
  { text: "development", size: 1425 },
  { text: "software", size: 1111 },
  { text: "data", size: 711 },
  { text: "develop", size: 581 },
  { text: "performance", size: 491 },
  { text: "services", size: 484 },
  { text: "architecture", size: 431 },
  { text: "practices", size: 408 },
  { text: "testing", size: 370 },
  { text: "developing", size: 318 },
  { text: "test", size: 316 },
  { text: "cloud", size: 309 },
  { text: "platform", size: 301 },
  { text: "integration", size: 296 },
  { text: "agile", size: 290 },
  { text: "maintain", size: 276 },
  { text: "apis", size: 260 },
  { text: "microservices", size: 256 },
  { text: "security", size: 251 },
  { text: "scale", size: 246 },
  { text: "developer", size: 227 },
  { text: "developers", size: 226 },
  { text: "standards", size: 221 },
  { text: "patterns", size: 221 },
  { text: "api", size: 216 },
  { text: "databases", size: 210 },
  { text: "designing", size: 182 },
  { text: "deployment", size: 180 },
  { text: "unit", size: 177 },
  { text: "distributed", size: 172 },
  { text: "enterprise", size: 169 },
  { text: "database", size: 163 },
  { text: "platforms", size: 161 },
  { text: "frameworks", size: 161 },
  { text: "infrastructure", size: 158 },
  { text: "service", size: 157 },
  { text: "related", size: 148 },
  { text: "robust", size: 147 },
  { text: "structures", size: 144 },
  { text: "framework", size: 140 },
  { text: "continuous", size: 140 },
  { text: "algorithms", size: 137 },
  { text: "maintaining", size: 131 },
  { text: "debugging", size: 128 },
  { text: "oriented", size: 126 },
  { text: "analytical", size: 110 },
  { text: "designs", size: 109 },
  { text: "reliability", size: 108 },
  { text: "tests", size: 106 },
  { text: "perform", size: 105 },
  { text: "cycle", size: 103 },
  { text: "life", size: 101 },
  { text: "object", size: 98 },
  { text: "ci", size: 92 },
  { text: "architectural", size: 88 },
  { text: "devops", size: 87 },
  { text: "methodologies", size: 85 },
  { text: "cd", size: 84 },
  { text: "integrate", size: 81 },
  { text: "troubleshooting", size: 80 },
  { text: "troubleshoot", size: 79 },
  { text: "scrum", size: 79 },
  { text: "secure", size: 78 },
  { text: "relational", size: 77 },
  { text: "deploy", size: 77 },
  { text: "reliable", size: 72 },
  { text: "maintainable", size: 70 },
  { text: "debug", size: 70 },
  { text: "mvc", size: 66 },
  { text: "performant", size: 63 },
  { text: "architectures", size: 63 },
  { text: "continuously", size: 62 },
  { text: "reusable", size: 61 },
  { text: "micro", size: 57 },
  { text: "tuning", size: 56 },
  { text: "developed", size: 55 },
  { text: "optimize", size: 54 },
  { text: "enhance", size: 54 },
  { text: "performing", size: 54 },
  { text: "modeling", size: 53 },
  { text: "sdlc", size: 50 },
  { text: "designers", size: 49 },
  { text: "tdd", size: 48 },
  { text: "saas", size: 48 },
  { text: "pipelines", size: 47 },
  { text: "workflows", size: 46 },
  { text: "structure", size: 46 },
  { text: "fundamentals", size: 46 },
  { text: "models", size: 44 },
  { text: "integrating", size: 44 },
  { text: "optimization", size: 43 },
  { text: "methodology", size: 42 },
  { text: "objectives", size: 41 },
  { text: "integrations", size: 41 },
  { text: "oops", size: 41 },
  { text: "enhancements", size: 41 },
  { text: "deploying", size: 41 },
  { text: "designed", size: 38 },
  { text: "analytics", size: 35 },
  { text: "contracts", size: 34 },
  { text: "microservice", size: 33 },
  { text: "rdbms", size: 33 },
  { text: "tested", size: 32 },
  { text: "pipeline", size: 32 },
  { text: "abstractions", size: 31 },
  { text: "threading", size: 30 },
  { text: "authentication", size: 29 },
  { text: "standard", size: 29 },
  { text: "model", size: 29 },
  { text: "develops", size: 29 },
  { text: "scaling", size: 29 },
  { text: "streaming", size: 29 },
  { text: "gateway", size: 28 },
  { text: "caching", size: 27 },
  { text: "separation", size: 27 },
  { text: "throughout", size: 24 },
  { text: "gateways", size: 24 },
  { text: "orchestration", size: 23 },
  { text: "containers", size: 23 },
  { text: "authorization", size: 21 },
  { text: "structured", size: 21 },
  { text: "optimizing", size: 21 },
  { text: "pattern", size: 21 },
  { text: "integrity", size: 19 },
  { text: "oop", size: 19 },
  { text: "algorithm", size: 19 },
  { text: "collections", size: 18 },
  { text: "developments", size: 18 },
  { text: "collection", size: 17 },
  { text: "practical", size: 17 },
  { text: "optimal", size: 17 },
  { text: "memory", size: 15 },
  { text: "practice", size: 15 },
  { text: "stream", size: 15 },
  { text: "container", size: 15 },
  { text: "maintainability", size: 14 },
  { text: "robustness", size: 14 },
  { text: "maintains", size: 13 },
  { text: "reusability", size: 13 },
  { text: "analytic", size: 13 },
  { text: "integrated", size: 13 },
  { text: "optimized", size: 12 },
  { text: "deployed", size: 12 },
  { text: "cycles", size: 12 },
  { text: "enhancing", size: 12 },
  { text: "standardized", size: 11 },
];

const ConceptKeywords = InitialConceptKeywords.slice(0, 40);

var InitialSoftSkillsKeywords = [
  { text: "engineering", size: 454 },
  { text: "understanding", size: 368 },
  { text: "ensure", size: 346 },
  { text: "engineers", size: 290 },
  { text: "management", size: 285 },
  { text: "maintain", size: 276 },
  { text: "collaborate", size: 275 },
  { text: "write", size: 271 },
  { text: "solving", size: 260 },
  { text: "implement", size: 253 },
  { text: "communication", size: 199 },
  { text: "deliver", size: 193 },
  { text: "engineer", size: 193 },
  { text: "understand", size: 186 },
  { text: "drive", size: 172 },
  { text: "writing", size: 169 },
  { text: "identify", size: 168 },
  { text: "implementation", size: 160 },
  { text: "mentor", size: 159 },
  { text: "solve", size: 156 },
  { text: "participate", size: 139 },
  { text: "contribute", size: 137 },
  { text: "ensuring", size: 135 },
  { text: "maintaining", size: 131 },
  { text: "managers", size: 121 },
  { text: "manage", size: 114 },
  { text: "implementing", size: 114 },
  { text: "ownership", size: 112 },
  { text: "learn", size: 111 },
  { text: "resolve", size: 100 },
  { text: "independently", size: 90 },
  { text: "passionate", size: 81 },
  { text: "managing", size: 78 },
  { text: "translate", size: 76 },
  { text: "maintainable", size: 70 },
  { text: "driving", size: 60 },
  { text: "learning", size: 59 },
  { text: "delivering", size: 56 },
  { text: "contributing", size: 56 },
  { text: "mindset", size: 55 },
  { text: "thinking", size: 55 },
  { text: "mentoring", size: 53 },
  { text: "collaboration", size: 52 },
  { text: "communicate", size: 50 },
  { text: "think", size: 44 },
  { text: "proactively", size: 41 },
  { text: "manager", size: 41 },
  { text: "collaborative", size: 39 },
  { text: "identifying", size: 37 },
  { text: "demonstrate", size: 36 },
  { text: "collaborating", size: 36 },
  { text: "recommend", size: 32 },
  { text: "growing", size: 32 },
  { text: "passion", size: 32 },
  { text: "demonstrated", size: 30 },
  { text: "prototyping", size: 29 },
  { text: "proactive", size: 26 },
  { text: "iterate", size: 25 },
  { text: "adherence", size: 24 },
  { text: "grow", size: 24 },
  { text: "collaboratively", size: 23 },
  { text: "participating", size: 23 },
  { text: "translating", size: 22 },
  { text: "engine", size: 22 },
  { text: "recommendations", size: 21 },
  { text: "implementations", size: 21 },
  { text: "resolving", size: 19 },
  { text: "adhere", size: 18 },
  { text: "community", size: 18 },
  { text: "adhering", size: 16 },
  { text: "prototypes", size: 16 },
  { text: "prototype", size: 15 },
  { text: "maintainability", size: 14 },
  { text: "understands", size: 14 },
  { text: "maintains", size: 13 },
  { text: "drives", size: 13 },
  { text: "demonstrating", size: 13 },
  { text: "identifies", size: 13 },
  { text: "implemented", size: 12 },
  { text: "iterative", size: 12 },
  { text: "presenting", size: 12 },
  { text: "delivers", size: 11 },
  { text: "adheres", size: 11 },
  { text: "contributes", size: 11 },
  { text: "delivered", size: 11 },
];

const SoftSkillsKeywords = InitialSoftSkillsKeywords.slice(0, 40);

var InitialMiscKeywords = [
  { text: "experience", size: 1980 },
  { text: "requirements", size: 1586 },
  { text: "team", size: 1108 },
  { text: "code", size: 1022 },
  { text: "work", size: 841 },
  { text: "product", size: 806 },
  { text: "responsibilities", size: 803 },
  { text: "applications", size: 764 },
  { text: "technical", size: 687 },
  { text: "systems", size: 639 },
  { text: "knowledge", size: 610 },
  { text: "solutions", size: 601 },
  { text: "high", size: 579 },
  { text: "skills", size: 549 },
  { text: "build", size: 526 },
  { text: "technologies", size: 526 },
  { text: "business", size: 525 },
  { text: "working", size: 525 },
  { text: "quality", size: 512 },
];

const MiscKeywords = InitialMiscKeywords.slice(3, 20);

const AllJavaKeywords = { TechKeywords, ConceptKeywords, SoftSkillsKeywords, MiscKeywords }

export default AllJavaKeywords;
