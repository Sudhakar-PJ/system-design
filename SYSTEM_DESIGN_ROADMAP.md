# 🧠 SYSTEM DESIGN MASTER CLASS: ROADMAP & MEMORY PANEL

> **AI AGENT INSTRUCTION & STATE FILE**
> This file is a dual-purpose document: it is the master syllabus and the **persistent memory tracker** for your System Design journey. Any AI assisting with this course MUST read, follow, and update this file dynamically.

---

## 🤖 AI Instructor Guidelines & Operating Rules

When teaching the user using this roadmap, all AI models MUST adhere strictly to the following rules:

### 1. Code Delivery & Teaching Method (CRITICAL)
- 🛑 **NO Automatic Code Writing / File Overwriting**: During teaching, the AI **MUST NOT** write project code to files or execute shell commands directly unless requested.
- 💬 **File-by-File Chat Delivery**: Present all code snippets, directory structures, and instructions directly in the chat, **one file at a time**. Never dump massive multi-file code blocks at once.
- 🧪 **Dedicated Console API Test Scripts**: For every topic/subtopic, provide a standalone executable test script named with its subtopic number (e.g., `tests/manual_tests/0.1_architecture.test.ts`) directly in the chat, along with the exact terminal command for the **user to execute in their console** (`npx tsx tests/manual_tests/0.1_architecture.test.ts`). The test output must display color-coded console logs covering:
  - ✅ **Success Cases**: Happy path requests returning expected responses.
  - ❌ **Failure Cases**: Invalid input payloads, 400 Bad Requests, 401 Unauthorized, 404 Not Found, 500 Internal Errors.
  - ⚠️ **Edge Cases**: Empty fields, extreme string lengths, special characters, zero values, boundary limits.
  - 🔄 **Duplicate & Race Condition Cases**: Sending concurrent identical requests to test idempotency keys and locks.
- 🏗️ **Iterative Ground-Up Project Building**: To make concepts practical, we will build a single, evolving enterprise super-platform (**NexusEngine**) from the ground up, progressively adding new components as we advance through the roadmap. The project integrates 5 core sub-engines + 1 infrastructure layer:
  - 💰 **1. Trading, Ledger & Payments Engine**: ACID transactions, row locking (`FOR UPDATE SKIP LOCKED`), Redis distributed locks (`Redlock`), idempotency key deduplication, double-entry financial ledger accounting, payment webhooks, and Event Sourcing/CQRS.
  - 📍 **2. Geospatial Mobility & Dispatch Engine**: Real-time GPS location streams over WebSockets/SSE, spatial indexing (Geohashing, Uber H3, QuadTrees), $<10\text{ms}$ proximity lookup, dynamic surge pricing algorithms, and driver-rider state machines.
  - 💬 **3. Real-Time Workspace & Collaboration Engine**: WebSockets, SSE, gRPC, Operational Transformation / CRDTs for multi-user live document co-editing, presence detection ("who's online"), S3 multipart file chunking, and RBAC/ABAC authorization.
  - 🎬 **4. Media Processing & Content Feed Engine**: Distributed async worker queues (BullMQ/Kafka), video transcoding pipelines (FFmpeg to HLS/DASH), timeline feed fanout (Fanout-on-Write vs Read), CDN edge caching, and Neo4j graph recommendations.
  - 🤖 **5. AI Vector Knowledge Base & Agent Engine**: Vector database indexing (pgvector/Qdrant), Hybrid Search (BM25 + RRF), RAG document retrieval pipelines, vLLM token streaming (SSE/gRPC), sandboxed execution (Docker/microVMs), and multi-agent queues.
  - ⚡ **6. Distributed Systems & Infrastructure Layer**: Envoy API Gateway, L4/L7 Load Balancing, Consistent Hashing, Database Sharding, Single-Leader/Leaderless Replication, Raft consensus, OpenTelemetry tracing, RED metrics, Multi-Region Active-Active Geo-CRDTs, and zero-copy eBPF socket networking.

### 2. Pre-Topic & Topic Execution Protocol
For every new Topic/Subtopic, the AI MUST follow this 6-step lifecycle:

```
[ Step 1: Pre-Topic Discussion ] ──► [ Step 2: User Confirmation ] ──► [ Step 3: Deep Explanation & Code ]
                                                                                │
                                                                                ▼
[ Step 6: Ready to Proceed Check ] ◄── [ Step 5: Docs & Progress Log ] ◄── [ Step 4: Console Test Execution ]
```

1. **Step 1: Pre-Topic Discussion**:
   - Discuss what will be learned, its real-world importance, and how it fits into our master project.
   - Ask the user if they have any specific additions or custom questions for this topic before starting.
2. **Step 2: User Confirmation**:
   - Wait for the user to explicitly confirm they are ready ("I'm ready", "Let's go", etc.).
3. **Step 3: Comprehensive Deep-Dive Explanation**:
   - Explain the topic in-depth covering: **What, Why, How, When, Where, Whom, Whose**, edge cases, and failure modes.
   - Walk through implementation code step-by-step (file by file) for our project.
4. **Step 4: Executable Console Test Creation & User Console Execution**:
   - Create a standalone **Console API Test Script** named with the subtopic number (e.g. `tests/manual_tests/0.1_architecture.test.ts`).
   - Provide the exact terminal command (`npx tsx tests/manual_tests/<subtopic_number>_<name>.test.ts`) in the chat for the **user to run in their console** and observe color-coded outputs for:
     - ✅ **Success Cases**: Happy path requests returning expected responses.
     - ❌ **Failure Cases**: Invalid input payloads, 400 Bad Requests, 401 Unauthorized, 404 Not Found, 500 Internal Errors.
     - ⚠️ **Edge Cases**: Empty fields, extreme string lengths, special characters, boundary limits.
     - 🔄 **Duplicate & Concurrency Cases**: Sending concurrent identical requests to test idempotency keys and locks.
5. **Step 5: Post-Topic Documentation & Progress Update**:
   - Update `SYSTEM_DESIGN_ROADMAP.md` (check `[x]`, update dashboard percentage & learner log).
   - Create a detailed **Course Material File** under `docs/course_materials/` (containing all theory, code snippets, architecture diagrams, and additional details).
   - Create an **Interview Questions File** under `docs/interview_prep/` (containing beginner to senior FAANG-level interview Q&A for this specific topic).
6. **Step 6: Next Step Confirmation**:
   - Ask the user if they are ready to proceed to the next topic or starter project step.

---

## 📊 Dashboard & Active Progress Status

- **Current Status**: 🟡 `Starting Level 0 (Mastering Backend Best Practices)`
- **Active Level**: **Level 0: Production Backend Best Practices Starter Project**
- **Active Module**: `0.1 Architecture & Project Structure`
- **Overall Completion**: `0% (0 / 173 Subtopics Completed)`
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
  Geo-Distributed)            Inference, Aggents)         System Patterns)             Observability, K8s)
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
- [ ] **Async Error Handling & Process Safety**: Express 5 / `express-async-errors`, `asyncHandler` wrapper pattern (higher-order wrapper to eliminate repetitive try-catch blocks in Express controllers), catching unhandled rejections (`unhandledRejection`) and uncaught exceptions (`uncaughtException`).
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

#### 0.6 Authentication, Authorization & User Blocking Best Practices
- [ ] **JWT Access & Refresh Token Architecture**: Short-lived Access Tokens (15m) + Long-lived Refresh Tokens (7d) with token rotation.
- [ ] **Secure Cookie vs Header Storage**: `HttpOnly`, `SameSite=Strict`, `Secure` cookies for Refresh Tokens vs `Authorization: Bearer` for Access Tokens.
- [ ] **Password Security & Account Lockout**: Hashing with `Argon2id` / `Bcrypt` (salting, cost parameters) + temporary account locking in Redis after *N* failed attempts.
- [ ] **Role-Based (RBAC) & Attribute-Based (ABAC) Access Control**: Middleware enforcement for roles (`ADMIN`, `USER`, `SELLER`) and resource ownership.
- [ ] **Session Revocation, Token Blacklisting & User Banning**: Redis token revocation, instant user logout, and global user-status check middleware (`user.status === 'BLOCKED'`).

#### 0.7 Database Access, ORM & Data Layer Best Practices
- [ ] **Connection Pool Tuning**: Configuring min/max connections, idle timeouts, acquire timeouts, preventing pool exhaustion under load.
- [ ] **Transactions & Atomic Operations**: Database transactions (Prisma / Drizzle / Kysely), Unit of Work pattern, automatic rollback on error.
- [ ] **Database Migrations & Seeding**: Version-controlled migrations, idempotent seed scripts.
- [ ] **Soft Delete Pattern & Base Audit Tracing**: `deletedAt` soft deletes with automatic filtering, tracking `createdAt`, `updatedAt`, `createdBy`, `updatedBy`.

#### 0.8 Practical SQL Efficient Querying & N+1 Prevention Masterclass
- [ ] **N+1 Problem & Resolution**: Identifying N+1 queries in ORMs (Prisma, Drizzle, TypeORM, Kysely), using eager loading (`JOIN`), batching, and DataLoader pattern.
- [ ] **Index-Aware Querying & Optimization**: Single vs Composite indexes, Leftmost prefix rule, Covering indexes (Index-Only scans), avoiding index invalidation (e.g. `WHERE LOWER(email)`).
- [ ] **Partial & Functional/Expression Indexes**: Creating partial indexes (`WHERE status = 'ACTIVE'`) to drastically reduce index size, and expression indexes (`CREATE INDEX ON users (LOWER(email))`).
- [ ] **Efficient Pagination**: Offset pagination pitfalls (`LIMIT 10 OFFSET 100000` scanning 100k rows) vs Keyset / Cursor-based pagination (`WHERE id > last_seen_id LIMIT 10`).
- [ ] **Selective Projection & CTEs**: Fetching only required columns (`SELECT id, name` vs `SELECT *`), avoiding Cartesian products in multi-table JOINs, Common Table Expressions (CTEs) vs Subqueries.
- [ ] **Window Functions Mastery**: Solving Top-N per group queries, running totals, and time-series deltas using `ROW_NUMBER()`, `RANK()`, `LAG()`, `LEAD()`, `OVER (PARTITION BY ...)`.
- [ ] **Row Locking & Deadlock Avoidance**: Concurrency control with row locking (`SELECT ... FOR UPDATE`), lock-free non-blocking queue polling (`SKIP LOCKED`), and preventing transaction deadlocks.
- [ ] **JSONB Querying & GIN Indexing**: Storing & querying semi-structured JSON data directly in SQL (`->`, `->>`, `@>`) and indexing JSONB fields with GIN (Generalized Inverted Index).
- [ ] **Execution Plan Diagnosis (`EXPLAIN ANALYZE`)**: Reading execution plans: `Seq Scan` vs `Index Scan` vs `Bitmap Heap Scan`, cost estimates, identifying disk-based sorts (`External sort Disk`), and `work_mem` tuning.
- [ ] **Atomic UPSERT & High-Throughput Bulk Operations**: `INSERT ON CONFLICT DO UPDATE` (PostgreSQL) / `ON DUPLICATE KEY UPDATE` (MySQL), batching with `UNNEST()`, and bulk imports.
- [ ] **Transaction Scope & DB Integrity Anti-Patterns**: Ultra-short transaction scopes (never holding DB locks during 3rd-party HTTP calls), and DB-level `CHECK`/`UNIQUE` constraints over app-level checks.

#### 0.9 Practical MongoDB Efficient Querying & Aggregation Masterclass
- [ ] **Schema Design & Embedding vs Referencing**: Knowing when to embed documents vs reference (`ObjectId`), avoiding document growth limits (16MB BSON limit) & unbounded arrays.
- [ ] **N+1 Prevention in MongoDB**: Overcoming `populate()` performance overhead using native aggregation `$lookup` optimization.
- [ ] **Aggregation Pipeline Mastery**: Multi-stage aggregation pipelines using `$match`, `$project`, `$group`, `$unwind`, `$lookup`, `$facet` for complex single-roundtrip queries.
- [ ] **Indexing & Covered Queries**: Single, Compound, Multikey (arrays), Text, and Sparse indexes; using `.explain("executionStats")` to eliminate `COLLSCAN` in favor of `IXSCAN` and `PROJECTION_COVERED`.
- [ ] **Cursor Pagination & Projections**: Selective projection `{ field: 1 }` to shrink payload size, range-based cursor pagination (`_id > lastId`) over `.skip().limit()`.

#### 0.10 Security Best Practices & Threat Mitigation (OWASP Top 10)
- [ ] **Security Headers (`Helmet`)**: Setting CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
- [ ] **CORS Configuration**: Strict origin whitelisting, credentials configuration, preflight caching (`maxAge`).
- [ ] **Rate Limiting & Brute Force Protection**: IP & User-based rate limiting using `express-rate-limit` + Redis store.
- [ ] **Dynamic IP Blacklisting & Geoblocking**: Maintaining dynamic IP blocklists in Redis/memory to reject malicious requests before hitting business logic.
- [ ] **Payload Size & Compression**: Request body size limiting (`10kb` limit to prevent DoS) and response compression (`compression` middleware).

#### 0.11 Standardized API Design & Response Formatting
- [ ] **API Success Response Envelope**: `{ success: true, data: ..., meta: { page, limit, totalPages, totalItems } }`.
- [ ] **HTTP Status Code Conventions**: Proper usage of 200, 201, 204, 400, 401, 403, 404, 409, 422, 429, 500, 503.
- [ ] **API Versioning**: Route-based versioning (`/api/v1/...`).

#### 0.12 Health Checks, Graceful Shutdown & Production Readiness
- [ ] **Health Check Endpoints**: `/health/live` (Liveness probe) & `/health/ready` (Readiness probe checking DB/Redis connections).
- [ ] **Graceful Shutdown Lifecycle**: Catching `SIGINT` / `SIGTERM`, stopping new connection acceptance, finishing active HTTP requests, closing DB connection pools safely within a timeout window.

#### 0.13 Automated Testing Strategy
- [ ] **Unit Testing**: Testing Services and Controllers in isolation using `Vitest` / `Jest` with mocks.
- [ ] **Integration Testing**: Testing HTTP endpoints using `Supertest` against a real test database.

#### 0.14 Code Quality, Strict TS & Git Hooks
- [ ] **Strict TypeScript Rules**: `strict: true`, `noImplicitAny`, `noUnusedLocals`, `exactOptionalPropertyTypes`.
- [ ] **Automated Code Formatting & Linting**: ESLint + Prettier rules configured for clean code style.
- [ ] **Git Hooks & Pre-Commit Guards**: `Husky` + `lint-staged` running linting and type-checking automatically before commits.

#### 0.15 Background Task Offloading (In-Process Async Work)
- [ ] **Non-Blocking Async Execution**: Offloading low-priority non-blocking tasks (e.g. sending welcome email/audit events) using Node.js event emitters or `setImmediate` so main HTTP responses return instantly.

#### 0.16 Automated API Documentation (OpenAPI / Swagger)
- [ ] **OpenAPI 3.0 / Swagger Setup**: Generating automated interactive Swagger UI at `/docs` using Zod schemas / TypeScript types (`zod-to-openapi`).

#### 0.17 Containerization & Local Dev Setup (Docker & Docker Compose)
- [ ] **Local Multi-Container Dev Environment**: `docker-compose.yml` orchestrating PostgreSQL, Redis, and App with hot-reloading (`tsx`).
- [ ] **Production-Grade Dockerfile**: Multi-stage build, non-root user execution, `NODE_ENV=production`, layer caching.

#### 0.18 Third-Party API Integrations & Resiliency Patterns
- [ ] **Adapter/Wrapper Pattern**: Decoupling 3rd party providers (Twilio for SMS/WhatsApp, SendGrid/Resend for Email, Stripe/Razorpay for Payments) behind abstract interfaces.
- [ ] **Resilience Mechanics**: Retries with Exponential Backoff + Jitter, Circuit Breaker pattern for 3rd party outages, Provider Failover strategies.
- [ ] **Inbound Webhook Security**: Verifying cryptographic webhook signatures (HMAC SHA-256) for 3rd party events.

#### 0.19 Scheduled Tasks & Distributed Cron Jobs
- [ ] **Cron Execution Architecture**: In-process timers (`node-cron`) vs Distributed Queue Schedulers (`BullMQ` repeatable jobs).
- [ ] **Cluster Execution Locks**: Using Redis distributed locks (`Redlock`) to ensure cron jobs execute exactly once across multi-instance server deployments.
- [ ] **Cron Idempotency & Monitoring**: Idempotent execution tracking, handling missed execution windows, and job failure alerts.

#### 0.20 API Idempotency & Outbound HTTP Resilience
- [ ] **API Idempotency Key Handling**: `Idempotency-Key` header parsing and Redis request deduplication for non-idempotent operations (`POST /payments`, `POST /orders`).
- [ ] **Outbound HTTP Request Resilience**: Timeouts, socket connection pooling (`Agent` keep-alive), and `AbortController` cancellation for external API calls (`axios`/`fetch`).

#### 0.21 Application Telemetry Metrics, Feature Flags & DTO Mapping
- [ ] **Application RED Metrics**: Exposing Prometheus RED metrics (`prom-client` for request counts, error rates, and p50/p95/p99 latency histograms).
- [ ] **Dynamic Feature Flags**: Redis/in-memory feature toggling for enabling/disabling endpoints dynamically without deployment.
- [ ] **Entity-to-DTO Mapping**: Decoupling Database ORM models from public API envelopes using explicit Mapper functions to avoid leaking internal columns.

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
