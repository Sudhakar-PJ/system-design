# 🧠 SYSTEM DESIGN MASTER CLASS: ROADMAP & MEMORY PANEL

> **AI AGENT INSTRUCTION & STATE FILE**
> This file is a dual-purpose document: it is the master syllabus and the **persistent memory tracker** for your System Design journey. Any AI assisting with this course MUST read, follow, and update this file dynamically.

---

## 🤖 AI Instructor Guidelines & Operating Rules

When teaching the user using this roadmap, all AI models MUST adhere strictly to the following rules:

### 1. Code Delivery & Teaching Method (CRITICAL)
- 🛑 **NO Automatic Code Writing / File Overwriting**: During teaching, the AI **MUST NOT** write project code to files or execute shell commands directly unless requested.
- 💬 **File-by-File Chat Delivery**: Present all code snippets, directory structures, and instructions directly in the chat, **one file at a time**. Never dump massive multi-file code blocks at once.
- 🏗️ **Iterative Ground-Up Project Building**: To make concepts practical, we will build a single, evolving **Production-Grade E-Commerce & Multi-Tenant Platform** from the ground up, progressively adding new components (caching, database sharding, message brokers, microservices, vector search, LLM serving) as we advance through the roadmap.

### 2. Pre-Topic & Topic Execution Protocol
For every new Topic/Subtopic, the AI MUST follow this 5-step lifecycle:

```
[ Step 1: Pre-Topic Discussion ] ──► [ Step 2: User Confirmation ] ──► [ Step 3: Deep Explanation ]
                                                                                │
[ Step 5: Ready to Proceed Check ] ◄── [ Step 4: Documentation & Progress ] ◄────┘
```

1. **Step 1: Pre-Topic Discussion**:
   - Discuss what will be learned, its real-world importance, and how it fits into our master project.
   - Ask the user if they have any specific additions or custom questions for this topic before starting.
2. **Step 2: Confirmation**:
   - Wait for the user to explicitly confirm they are ready ("I'm ready", "Let's go", etc.).
3. **Step 3: Comprehensive Deep-Dive Explanation**:
   - Explain the topic in-depth covering: **What, Why, How, When, Where, Whom, Whose**, edge cases, and failure modes.
   - Walk through code step-by-step (file by file) for our project.
4. **Step 4: Post-Topic Documentation & Progress Update**:
   - Update `SYSTEM_DESIGN_ROADMAP.md` (check `[x]`, update dashboard percentage & learner log).
   - Create a detailed **Course Material File** under `docs/course_materials/` (containing all theory, code snippets, architecture diagrams, and additional details).
   - Create an **Interview Questions File** under `docs/interview_prep/` (containing beginner to senior FAANG-level interview Q&A for this specific topic).
5. **Step 5: Next Step Confirmation**:
   - Ask the user if they are ready to proceed to the next topic or starter project step.

---

## 📊 Dashboard & Active Progress Status

- **Current Status**: 🟡 `Starting Level 0 (Comprehensive Backend Best Practices)`
- **Active Level**: **Level 0: Production Backend Best Practices Starter Project**
- **Active Module**: `0.1 Production-Grade Layered Architecture & Dependency Injection`
- **Overall Completion**: `0% (0 / 140 Subtopics Completed)`
- **Last Updated**: `2026-09-10`

---

## 🗺️ Roadmap Overview

```
 [ Level 0: Best Practices ] ──► [ Level 1: Basics ] ──► [ Level 2: Intermediate ] ──► [ Level 3: Advanced ]
 (Architecture, Error Handling,  (Networking, APIs,       (Databases, Caching,         (Distributed Systems,
  Security, Logging, Auth, DB)   Node.js Internals)       Storage, File Systems)       Scalability, Messaging)
                                                                                                │
                                                                                                ▼
 [ Level 7: God Level ] ◄── [ Level 6: AI Systems ] ◄── [ Level 5: FAANG ] ◄── [ Level 4: Enterprise ]
 (Extreme Throughput,        (RAG, Vector DBs, LLM       (Classic Designs,            (Microservices, Mesh,
  Geo-Distributed)            Inference, Agents)          System Patterns)             Observability, K8s)
```

---

## 📚 Detailed Syllabus & Progress Checklist

### 🛠️ Level 0: Production Backend Best Practices (Starter Project)

> *Goal: Master all enterprise backend engineering best practices by building a bulletproof TS/Node.js starter service.*

#### 0.1 Architecture & Project Structure
- [ ] **Clean Layered Architecture**: `Config` -> `Routes` -> `Controllers` -> `Services` -> `Repositories` -> `Database/ORM`.
- [ ] **Dependency Injection (DI) & Inversion of Control (IoC)**: Manual Constructor DI vs Container-based DI (Awilix / TS-ED) for decoupled, testable code.
- [ ] **Interface-Driven Design**: Writing strict Repository & Service contracts (Interfaces) to swap storage engines seamlessly.

#### 0.2 Error Handling & Resilience
- [ ] **Centralized Error Architecture**: Custom `AppError` base class, HTTP subclasses (`BadRequestError`, `NotFoundError`, `UnauthorizedError`, `ForbiddenError`, `ConflictError`, `InternalServerError`, `RateLimitError`).
- [ ] **Async Error Handling & Process Safety**: Express 5 / `express-async-errors`, catching unhandled rejections (`unhandledRejection`) and uncaught exceptions (`uncaughtException`).
- [ ] **Operational vs Programmer Errors**: Distinguishing recoverable errors from critical process failures.
- [ ] **Standardized API Error Envelope**: Implementing RFC 7807 Problem Details and unified JSON error structures `{ success: false, error: { code, message, details, timestamp } }`.

#### 0.3 Logging, Tracing & Context Propagation
- [ ] **Structured JSON Logging**: Production logging with `Pino` (fast JSON serialization), log levels (`debug`, `info`, `warn`, `error`).
- [ ] **Correlation ID Propagation**: Using Node.js `AsyncLocalStorage` to trace a single request ID across HTTP requests, service layers, DB queries, and external API calls.
- [ ] **Log Sanitization & Redaction**: Automatically redacting sensitive keys (`password`, `token`, `creditCard`, `authorization`) from logs.
- [ ] **HTTP Request/Response Audit Logging**: Middleware logging response times, status codes, and user agents.

#### 0.4 Configuration & Environment Management
- [ ] **Type-Safe Environment Validation**: Validating `.env` schema at startup with `Zod`, crashing early if required env vars are missing.
- [ ] **Multi-Environment Strategy**: Development, Testing, Staging, and Production config layering.
- [ ] **Secrets & Security Credentials**: Key rotation strategies, environment secrets isolation, `.env.example` templates.

#### 0.5 Validation, Sanitization & Type Safety
- [ ] **Request Schema Validation**: Strict validation of `req.body`, `req.params`, `req.query` using `Zod`.
- [ ] **Data Transfer Objects (DTOs)**: TypeScript DTO interfaces, strict type guards, zero `any` usage.
- [ ] **Input Sanitization**: Preventing XSS, SQL Injection (parameterized queries), NoSQL injection, and HTTP Parameter Pollution (HPP).

#### 0.6 Authentication & Authorization Best Practices
- [ ] **JWT Access & Refresh Token Architecture**: Short-lived Access Tokens (15m) + Long-lived Refresh Tokens (7d) with token rotation.
- [ ] **Secure Cookie vs Header Storage**: `HttpOnly`, `SameSite=Strict`, `Secure` cookies for Refresh Tokens vs `Authorization: Bearer` for Access Tokens.
- [ ] **Password Security**: Hashing with `Argon2id` / `Bcrypt` (salting, memory & cost parameters).
- [ ] **Role-Based (RBAC) & Attribute-Based (ABAC) Access Control**: Middleware enforcement for roles (`ADMIN`, `USER`, `SELLER`) and resource ownership.
- [ ] **Session Revocation & Token Blacklisting**: In-memory / Redis token revocation lists for instant user logout & password resets.

#### 0.7 Database Access, ORM & Data Layer Best Practices
- [ ] **Connection Pool Tuning**: Configuring min/max connections, idle timeouts, acquire timeouts, preventing pool exhaustion under load.
- [ ] **Transactions & Atomic Operations**: Database transactions (Prisma / Drizzle / Kysely), Unit of Work pattern, automatic rollback on error.
- [ ] **Database Migrations & Seeding**: Version-controlled migrations, idempotent seed scripts.
- [ ] **Query Performance & N+1 Prevention**: Detecting N+1 queries, query indexing rules, batching requests.

#### 0.8 Security Best Practices (OWASP Top 10 API Security)
- [ ] **Security Headers (`Helmet`)**: Setting CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
- [ ] **CORS Configuration**: Strict origin whitelisting, credentials configuration, preflight caching (`maxAge`).
- [ ] **Rate Limiting & Brute Force Protection**: IP & User-based rate limiting using `express-rate-limit` + Redis store.
- [ ] **Payload Size & Compression**: Request body size limiting (`10kb` limit to prevent DoS) and response compression (`compression` middleware).

#### 0.9 Standardized API Design & Response Formatting
- [ ] **API Success Response Envelope**: `{ success: true, data: ..., meta: { page, limit, totalPages, totalItems } }`.
- [ ] **HTTP Status Code Conventions**: Proper usage of 200, 201, 204, 400, 401, 403, 404, 409, 422, 429, 500, 503.
- [ ] **API Versioning**: Route-based versioning (`/api/v1/...`).

#### 0.10 Health Checks, Graceful Shutdown & Production Readiness
- [ ] **Health Check Endpoints**: `/health/live` (Liveness probe) & `/health/ready` (Readiness probe checking DB/Redis connections).
- [ ] **Graceful Shutdown Lifecycle**: Catching `SIGINT` / `SIGTERM`, stopping new connection acceptance, finishing active HTTP requests, closing DB connection pools safely within a timeout window.

#### 0.11 Automated Testing Strategy
- [ ] **Unit Testing**: Testing Services and Controllers in isolation using `Vitest` / `Jest` with mocks.
- [ ] **Integration Testing**: Testing HTTP endpoints using `Supertest` against a real test database.

---

### 🟢 Level 1: Foundations & Core Fundamentals (Basics)

#### 1.1 Networking Basics & Communication Protocols
- [ ] **TCP/IP & OSI Model**: Layers 1–7, packet routing, three-way handshake, TCP congestion control vs UDP.
- [ ] **HTTP Evolution (HTTP/1.1 vs HTTP/2 vs HTTP/3 QUIC)**: Multiplexing, HOL blocking, binary frames, zero-RTT connection establishment.
- [ ] **Real-Time Protocols (WebSockets, SSE, gRPC, WebRTC)**:
  - [ ] WebSockets in Node.js (ws/socket.io), socket state management, heartbeat mechanisms.
  - [ ] Server-Sent Events (SSE) streaming responses in Express.
  - [ ] gRPC & Protocol Buffers with `@grpc/grpc-js` (Unary vs Streaming RPCs).
  - [ ] WebRTC peer-to-peer data channels, STUN/TURN/ICE server architecture.
- [ ] **Domain Name System (DNS)**: Records (A, AAAA, CNAME, NS), TTL, GeoDNS, latency-based routing.
- [ ] **TLS/SSL Encryption**: Handshake mechanics, symmetric vs asymmetric encryption, SNI, TLS termination at proxy.

#### 1.2 Client-Server Architecture & API Design
- [ ] **RESTful API Design**: Resource modeling, HTTP verbs, status codes, idempotency, Offset vs Cursor-based pagination.
- [ ] **GraphQL Architecture**: Schema design, Resolvers, Query/Mutation/Subscriptions, N+1 query problem, DataLoader pattern in TypeScript.
- [ ] **API Versioning Strategies**: Path, Query parameter, Header-based versioning.
- [ ] **Node.js & Express Internals**:
  - [ ] Libuv Event Loop phases (Timers, Pending callbacks, Poll, Check, Close).
  - [ ] Single-thread event loop execution vs Worker Threads (`worker_threads`).
  - [ ] Clustering & Process Management (`cluster` module, PM2, IPC communication).
  - [ ] Node.js Streams API (`Readable`, `Writable`, `Transform`, handling backpressure).

#### 1.3 Core Data Structures & Algorithms for Systems
- [ ] **Consistent Hashing**: Hash ring topology, virtual nodes, partition key placement.
- [ ] **Cache Eviction Algorithms**: LRU (Doubly Linked List + HashMap), LFU (Frequency buckets).
- [ ] **Probabilistic Data Structures**:
  - [ ] Bloom Filters (Membership testing, false positive tuning).
  - [ ] HyperLogLog (Cardinality estimation for distinct counts).
  - [ ] Count-Min Sketch (Frequency tracking over massive data streams).
- [ ] **Storage Indexing Data Structures**:
  - [ ] B-Trees / B+ Trees (Node branching, disk block alignment).
  - [ ] LSM-Trees (Log-Structured Merge-Trees, MemTable, SSTables, Leveled Compaction).
  - [ ] Trie (Prefix Tree for routing and autocomplete).
  - [ ] Merkle Trees (Hash trees for data integrity verification in distributed DBs).

---

### 🟡 Level 2: Data Persistence & Storage Layer (Intermediate)

#### 2.1 Relational Database Management Systems (RDBMS)
- [ ] **RDBMS Architecture (PostgreSQL / MySQL)**:
  - [ ] ACID Guarantees & WAL (Write-Ahead Logging).
  - [ ] Transaction Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable).
  - [ ] Indexing Deep-Dive: B-Tree, Hash, GIN, GiST, Composite & Covering Indexes.
  - [ ] Query Optimization: `EXPLAIN ANALYZE`, index scans vs sequential scans, query rewrites.
  - [ ] Connection Pooling: PgBouncer, Knex/Prisma connection pool configuration.

#### 2.2 NoSQL Databases & Storage Models
- [ ] **Document Stores (MongoDB)**: BSON format, embedding vs referencing, indexing, aggregation framework.
- [ ] **Key-Value Stores (Redis, AWS DynamoDB)**: Memory management, RDB vs AOF persistence, Dynamo paper architecture.
- [ ] **Wide-Column Stores (Apache Cassandra / ScyllaDB)**: Partition/Clustering keys, SSTables, tunable consistency ($R + W > N$).
- [ ] **Graph Databases (Neo4j)**: Nodes, edges, Cypher queries, graph traversal for recommendations.

#### 2.3 Caching Patterns & Strategies
- [ ] **Cache Architectures**: Local in-memory cache vs Distributed Redis Cluster / Sentinel.
- [ ] **Caching Strategies**: Cache-Aside, Write-Through, Write-Back (Write-Behind), Refresh-Ahead.
- [ ] **Cache Pitfalls & Mitigations**:
  - [ ] Cache Stampede / Thundering Herd (Mutex locking, XFetch early expiration).
  - [ ] Cache Penetration (Bloom filters, null object caching).
  - [ ] Cache Avalanche (TTL jitter).

#### 2.4 Object Storage & CDNs
- [ ] **Object Storage (AWS S3)**: Bucket layout, presigned URLs, multipart uploads, lifecycle policies.
- [ ] **Content Delivery Networks (CDNs)**: Edge caching, Origin shielding, Dynamic Content Acceleration, Cloudflare Workers / CloudFront.

---

### 🟠 Level 3: Distributed Systems Core & Scalability (High / Advanced)

#### 3.1 Scalability Fundamentals & Load Balancing
- [ ] **Vertical vs Horizontal Scaling**: Bottleneck identification, eliminating Single Points of Failure (SPOF).
- [ ] **Load Balancing**: Layer 4 (TCP/IP, HAProxy) vs Layer 7 (HTTP, Nginx, Envoy).
- [ ] **Load Balancing Algorithms**: Round Robin, Weighted Least Connections, Consistent Hashing, P2C.
- [ ] **Stateless Backend Design**: JWT vs Session Stores, Sticky Sessions vs Shared Redis State.

#### 3.2 Database Scaling & Partitioning
- [ ] **Replication Architecture**: Single-Leader (Primary-Replica), Multi-Leader, Leaderless (Quorum).
- [ ] **Sharding Strategies**: Range-based, Hash-based, Directory-based sharding.
- [ ] **Rebalancing & Resharding**: Zero-downtime shard splitting and data migration.

#### 3.3 Asynchronous Messaging & Event-Driven Architecture
- [ ] **Message Queues vs Event Streams**:
  - [ ] Message Queues (BullMQ / RabbitMQ): AMQP, competing consumers, dead letter queues.
  - [ ] Event Streams (Kafka / Redpanda): Topics, partitions, consumer groups, offset retention.
- [ ] **Event-Driven Patterns**:
  - [ ] Event Sourcing & CQRS pattern.
  - [ ] Transactional Outbox Pattern & CDC (Debezium).
  - [ ] Saga Pattern (Orchestration vs Choreography).

#### 3.4 Distributed Consistency & Consensus
- [ ] **CAP & PACELC Theorems**: Trade-off matrix in production systems.
- [ ] **Consensus Algorithms**: Raft (Leader election, log replication) & Paxos.
- [ ] **Distributed Locking**: Redlock algorithm, Zookeeper / etcd leased locks.
- [ ] **Distributed Clocks**: Lamport Timestamps, Vector Clocks, Google Spanner TrueTime.

---

### 🔴 Level 4: Enterprise & Production Readiness (Enterprise Level)

#### 4.1 Microservices Architecture & Service Mesh
- [ ] **Domain-Driven Design (DDD)**: Bounded contexts, aggregates, entities, domain events.
- [ ] **API Gateway Pattern**: Authentication, rate limiting, request routing (Kong, Traefik).
- [ ] **Service Mesh (Istio / Linkerd)**: Sidecar proxies (Envoy), mTLS, traffic management.
- [ ] **Resilience Patterns**: Circuit Breakers (Opossum), Bulkheads, Rate Limiting (Token Bucket, Sliding Window).

#### 4.2 Observability & Reliability Engineering
- [ ] **Three Pillars of Observability**:
  - [ ] **Metrics**: Prometheus metrics collection & Grafana Dashboards.
  - [ ] **Logging**: Log aggregation with Grafana Loki / ELK Stack & Pino/Winston structured logs.
  - [ ] **Tracing**: Distributed tracing with OpenTelemetry, Jaeger, Zipkin.
- [ ] **SLAs, SLOs, & SLIs**: Defining service objectives and error budgets.
- [ ] **Chaos Engineering**: Injecting failures with Chaos Mesh.

#### 4.3 Enterprise Security & Compliance
- [ ] **Auth Protocols**: OAuth 2.0 (PKCE), OIDC, JWT revocation & rotation strategies.
- [ ] **Network & Data Security**: WAF, Zero Trust, AES-256 KMS encryption, OWASP API Security Top 10.

#### 4.4 Cloud-Native & DevOps
- [ ] **Docker & Containerization**: Multi-stage Node.js Dockerfiles, non-root users, signal forwarding.
- [ ] **Kubernetes Orchestration**: Deployments, StatefulSets, Ingress, HPA custom metrics.
- [ ] **CI/CD & GitOps**: Terraform, ArgoCD, Blue-Green & Canary deployment strategies.

---

### 🟣 Level 5: FAANG & High-Scale System Design Cases (FAANG Level)

#### 5.1 System Design Interview Methodology
- [ ] **4-Step Interview Framework**: Requirements -> High-Level Design -> Deep Dive -> Trade-offs & Wrap-up.

#### 5.2 FAANG System Design Case Studies
- [ ] **URL Shortener (TinyURL)**: Hash encoding, DB sharding, Redis cache, 100M DAU scale.
- [ ] **API Rate Limiter**: Distributed Token Bucket with Redis Lua scripts.
- [ ] **Distributed Web Crawler**: URL Frontier, Bloom Filters, robots.txt parsing.
- [ ] **Distributed Key-Value Store**: Consistent hashing, vector clocks, SSTables.
- [ ] **Video Streaming Platform (YouTube/Netflix)**: Transcoding pipeline, HLS/DASH, CDN chunking.
- [ ] **Real-Time Chat App (WhatsApp/Slack)**: WebSockets, message delivery states, end-to-end encryption.
- [ ] **Social Media News Feed (Twitter/Instagram)**: Fanout-on-Write vs Fanout-on-Read, timeline cache.
- [ ] **Geo-Spatial Ride Sharing (Uber/Lyft)**: Geohashing, Uber H3 index, real-time matching engine.
- [ ] **E-Commerce & Flash Sale (Amazon)**: Distributed inventory locking, payment idempotency.
- [ ] **Collaborative Editor (Google Docs/Notion)**: Operational Transformation (OT) vs CRDTs.

---

### 🤖 Level 6: Modern AI-Integrated System Design (AI Systems)

#### 6.1 AI & LLM Infrastructure Fundamentals
- [ ] **GPU & Compute Infrastructure**: VRAM requirements, FP16/BF16/INT4 quantization.
- [ ] **Inference Lifecycle**: Tokenization -> Embeddings -> KV-Cache -> Autoregressive Generation.

#### 6.2 Vector Databases & Semantic Search Architecture
- [ ] **Vector Indexing**: HNSW graphs, IVFFlat, Product Quantization (PQ).
- [ ] **Vector Engines**: Milvus, Qdrant, Pinecone, pgvector.

#### 6.3 Retrieval-Augmented Generation (RAG) at Scale
- [ ] **Advanced RAG**: Hybrid search (BM25 + Vector RRF), Cross-Encoder Re-ranking, Semantic Caching.

#### 6.4 LLM Serving Optimization
- [ ] **Inference Frameworks**: vLLM, TensorRT-LLM, PagedAttention, Continuous Batching.
- [ ] **Streaming APIs**: SSE & gRPC streams for LLM token generation in Node.js.

#### 6.5 Autonomous AI Agents Architecture
- [ ] **Agent Reasoning**: ReAct loops, sandboxed execution (E2B/Docker), tool-calling schemas.
- [ ] **Multi-Agent Systems**: Task orchestration using BullMQ + Redis async queues.

---

### ⚡ Level 7: God Level - Extreme Distributed Systems

#### 7.1 Ultra-Low Latency Engineering
- [ ] **Kernel Bypass**: DPDK, eBPF zero-copy networking.
- [ ] **LMAX Disruptor Pattern**: Ring buffer, zero-allocation lock-free data structures.

#### 7.2 Globally Distributed Active-Active Architecture
- [ ] **Geo-Distributed DBs**: Google Spanner / CockroachDB (TrueTime API, Paxos).
- [ ] **Multi-Region Active-Active**: Geo-CRDTs, Anycast IP routing, Edge Compute (Cloudflare Workers).

#### 7.3 Zero-Downtime & Self-Healing Operations
- [ ] **Billion-Row Live Schema Migrations**: Dual-write, shadow verification, atomic cutover.
- [ ] **Cell-Based Architecture**: Infrastructure isolation to minimize blast radius.

---

## 📝 Learner Log & Milestone History

> **Note for AI**: Append entries here whenever a module is completed after a successful quiz/exercise.

| Date | Completed Subtopic | Quiz Score / Feedback | Key Takeaways & Concepts Mastered |
|---|---|---|---|
| *Pending* | *None yet* | *N/A* | *Course initialization* |

---

> 💡 **Ready to Start?** Tell the AI: **"Let's start Level 0: Pre-Topic Discussion"** or type `/next` to begin your journey!
