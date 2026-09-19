# Backend Engineering & System Design Mastery Roadmap

> A living document. Progress, notes, and session state live in the **📌 Current State** block near the top. The **Living Error Journal** lives at the bottom. Reopen this link on any device to pick up exactly where you left off.

**Legend**: `[MUST-KNOW]` mandatory core hands-on build · `[SHOULD-KNOW]` senior production engineering standards · `[EXPERT]` conceptual literacy & high-scale awareness (no build required unless annotated `[EXPERT · buildable]`) · `[NOTE]` informational pointer; indicates a topic deferred to a later level.

**How we'll actually work through this**: for each subtopic, I explain it in full depth — what/why/how/failure modes — with code in the layer it belongs to (`routes → controllers → services → repository → config`), plus diagrams/flowcharts where they help, and I generate a dedicated course-material file for that subtopic. No forced quizzes, no interview-Q&A files. Every subtopic ends with a Learner Confirmation (1-sentence restatement + 1 place you'd use it in your current project) before we move on, at your pace.

**Stack**: Node.js + TypeScript + Express as the constant. Every other tool (Postgres, MongoDB, Redis, Kafka, etc.) is chosen per-project based on what best teaches that project's concept — 100% free/open-source/self-hostable via Docker, no paid services required anywhere in this roadmap.

---

## 🤖 AI Instructor Guidelines (Operating Rules)

- **Dual-Mode Delivery & Zero-Auto-Execution Protocol** — Code and commands are delivered strictly inside chat response blocks (never auto-written to disk or executed via shell by the AI). The AI operates in one of two distinct modes depending on the subtopic:
  - **Mode A: Code Implementation Mode** (when building project code files): Delivers **EXACTLY ONE CODE FILE PER RESPONSE**, wrapped alongside its markdown explanation breakdown:
    1. **5 Ws & 1 H Breakdown** (*Who, What, Where, When, Why, and How* this file fits into production architecture).
    2. **Architectural Placement & Flow** (where this file sits in `routes → controllers → services → repository → config`).
    3. **Complete Production-Grade Code Block** (the single code file delivered with zero placeholders or omitted lines).
    4. **TypeScript Syntax & Design Callout** (explaining specific TS features, generics, types, or interfaces used).
  - **Mode B: Conceptual & Explanation-Heavy Mode** (when covering engine internals, theory, or system design trade-offs): AI instructors are explicitly authorized and expected to provide long, comprehensive, in-depth explanations with execution flowcharts, diagrams, step-by-step traces, failure modes, and code snippets where applicable. Rushing or artificially truncating complex topics is prohibited.
- **Course-material files, not quizzes or interview files** — every subtopic gets a dedicated, detailed course-material file (theory, code, diagrams/flowcharts). No forced active-recall quizzes, no separate interview-prep Q&A files.
- **Session Resume Protocol** — On the first message of any new session, the AI reads **📌 Current State**, restates: *"Last time we finished [X] and next is [Y]. Ready?"*, and waits for confirmation before proceeding.
- **Learner Confirmation Bar** — Every subtopic across all modes (Mode A Code Implementation & Mode B Conceptual) ends with a mandatory Learner Confirmation before moving on. Confirmation of understanding must include: (1) a one-sentence restatement of the concept, and (2) one place the learner would use it in their current project. This ensures active synthesis rather than passive agreement.
- **Stuck Protocol (Handling "I don't understand")** — When a learner says "I don't understand X," the AI: (1) re-explains using a different analogy or concrete code example, (2) offers a smaller scope option (*"do you want just the minimum to move on, or the full depth?"*), and (3) logs the topic as "revisit" in Session Notes if the learner opts to move forward. Revisited topics are re-approached at the next level that uses them.
- **Prerequisite / cross-reference tags** — recurring concepts (consistent hashing, Raft, Bloom filters, rate limiting, etc.) carry `[Prerequisites: ...]` / `[See Also: ...]` tags so later topics build on earlier ones instead of re-explaining from scratch.
- **Proactive Case Study & Systems Paper Triggers (Module A & B)** — Whenever a subtopic is reached or completed (e.g., Level 0C.5 API Versioning), the AI instructor will automatically check Module A (Case Studies) and Module B (Seminal Papers) for any cross-referenced items (e.g., *Stripe's Date-Based API Versioning Case Study*) and explicitly prompt you: *"We've just reached/completed Level 0C.5! This unlocks [Case Study/Paper Name]. Would you like to dive into its engineering breakdown/digest right now, or keep moving forward on the core roadmap path?"*
- **Level 7 Awareness Protocol** — AI writes one concise, high-impact conceptual explanation per subtopic (what it is, why it exists, where it's used in production at scale), and you confirm understanding by restating it in your own words (following the **Learner Confirmation Bar**) before we move on.
- **Open-Source Code Dissection Drills** — Beyond writing our own code, we actively inspect and explain real production open-source modules (e.g. BullMQ Redis Lua scripts, Express router stack, Debezium CDC connectors, Envoy rate-limit filters) to master reading unfamiliar high-grade codebases.
- **Mock Staff Architect Design Defense & Capstone Protocol** — At major system design milestones (Level 4 Unified Platform and every Level 5 MAANG Capstone), you independently sketch your architecture on paper/Excalidraw at your own pace (no timer/pressure). You then present your design, and the AI acts as a FAANG Staff Engineer / Principal Architect, grilling your design on single points of failure (SPOFs), scalability spikes (10x/100x), edge cases, and trade-offs before revealing the reference solution and conducting a Gap Analysis.
- **Living Error Journal & Drill Failure Diagnostic Protocol** — When a drill or build fails, the first action is to enter diagnostic mode: isolate the failure, form a hypothesis, test it, and categorize the root cause as (a) a bug in our code, (b) an environment/config issue, or (c) a genuine learning gap. Log (a) and (c) into our **Session Error Journal** at the bottom with its symptom, root cause, and key system design takeaway; skip (b) unless it recurs.
- **Progressive TypeScript Mastery & TS Callouts** — Production TypeScript patterns (Generics, Discriminated Unions, Zod schema inference, Utility Types `Omit`/`Pick`/`Partial`) are introduced progressively in context as we build. Every code delivery includes a concise **"TS Syntax & Design Callout"** explaining why specific TypeScript constructs were chosen.
- **Production Portfolio README Artifact** — At the completion of every project (Level 0A through Level 4), we generate a production-grade `README.md` complete with C4 Container diagrams, benchmark load-test results, core architectural trade-offs, and a Staff-level *"What I would do differently at 10x scale"* section.
- **Level Architecture Retrospective & Lessons Learned** — At the conclusion of every level, we write a concise **Level Retrospective** artifact summarizing key trade-offs mastered, anti-patterns avoided, and personal engineering cheat-sheets to compound learning alongside the Error Journal.
- **Zero-spend guarantee** — every tool, database, or AI model used across every project is free, open-source, and self-hostable via Docker (or a free-tier API where local hardware genuinely can't run it locally). Never a paid subscription or paid cloud tier.
- **Session handoff** — whenever you say something like "that's enough for today," I update the **📌 Current State** section at the top with exactly where we stopped and what's next, before we close out.

---

## 📌 Current State

> Single source of truth for session tracking, updated at the end of every session. Note: The Living Error Journal lives at the bottom of this document.

- **Current Level**: `Level 0A completed → starting Level 0B.0`
- **Current Project**: `production-service-core (Stage 1: Architecture Scaffold completed → Stage 2: Security, Auth & Idempotency)`
- **Overall Completion**: `7 subtopics completed (0A.0, 0A.1, 0A.2, 0A.3, 0A.4, 0A.5, 0A.6) — ~10% of total roadmap (100% of Level 0A)`
- **Next Starting Point**: **Level 0B.0 — Redis Foundations & Key-Value State Operations**
- **Last Session Date**: `2026-09-19`
- **Session Notes**: `Completed Level 0A.4 (Type-Safe Env Config with Zod), Level 0A.5 (Request Validation Middleware with ZodType & error.issues), and Level 0A.6 (Structured Concurrency: Promise combinators, AbortController cancellation, p-limit bounded concurrency, & Express router layer/route internals). Level 0A Foundations complete.`

---

## 🧩 The Projects (built side by side, connected later)

Instead of one giant master project, each project below is scoped to teach a specific cluster of system-design concepts. Later levels connect them (e.g. the chat service and the notification service eventually share an event bus).

| Level | Project Repo / Deliverable | Primary Concepts Exercised | Build Scope & Deliverable Boundaries |
| :--- | :--- | :--- | :--- |
| **0A, 0B, 0C & 0D** | **Production Service Core**<br>*(Single Hardened Repo)* | **Stage 0A**: Clean layered architecture, typed error handling, Pino logging, Zod validation<br>**Stage 0B**: Auth (JWT/Argon2id), OTP, MFA, RBAC/ABAC, Helmet, CORS, Rate Limiting, Idempotency<br>**Stage 0C**: SQL internals, isolation levels, transactions, pool tuning, PgBouncer, migrations, money precision, i18n/l10n, versioning<br>**Stage 0D**: Testcontainers, MSW, TCP/TLS/DNS/HTTP2-3, graceful shutdown, profiling, cron | **Full Production-Hardened REST API**<br>• *Stage 0A*: Core architecture & logging (No Auth/Locks)<br>• *Stage 0B*: Auth & Security Hardening<br>• *Stage 0C*: Data Correctness & SQL Foundations<br>• *Stage 0D*: Ops, Protocols & Test Suite Release |
| **1** | **URL Shortener** | Caching patterns, cache stampede/penetration, Base62 encoding, hot-key handling | **Shorten + redirect + Redis cache + analytics endpoint**<br>❌ *No auth* |
| **2** | **Product Catalog / Search** | Indexing strategy, full-text/inverted index search, CDC sync pipeline, pagination at scale, GraphQL & DataLoader batching | **CRUD + REST/GraphQL search + pagination + Postgres/Elasticsearch CDC sync**<br>❌ *No auth* |
| **3A, 3B & 3C** | **Order Processing & Real-Time Gateway** | **Stage 3A**: Event-driven architecture, Outbox pattern, Saga orchestration, Kafka queues<br>**Stage 3B**: WebSockets at scale, Pub/Sub fan-out, presence tracking, geo-indexing (H3/Geohash)<br>**Stage 3C**: Staff architecture diagramming & presentation workshop | **Checkout $\rightarrow$ Outbox $\rightarrow$ Kafka $\rightarrow$ Saga** (3A)<br>**WebSocket Gateway + Geo dispatch** (3B)<br>**C4 Topology & Staff Presentation Workshop** (3C) |
| **4** | **Unified Production Platform** | Wiring 1–3B behind API gateway, OpenTelemetry, Grafana observability, K8s, Canary rollouts | **Wire Services 1–3B behind Envoy Gateway + Observability + Runbook** |
| **5** | **MAANG Capstone System Designs** | High-scale architecture, 6-Stage Blueprint, capacity math, deep dives, failure modes | 📝 **Design-Only (Untimed Paper Drills & Mock Defenses)**<br>❌ *No production code build* |
| **6** | **Extreme Distributed Systems** | Low-latency DPDK/eBPF, active-active Spanner/Paxos, cell architecture, Wasm | 📖 **Awareness Protocol Only**<br>❌ *No hands-on build required* |
| **7** | **AI Infrastructure & Systems** | Vector indexing (HNSW/IVF), RAG evaluation, LLM Gateways, agent sandboxing, feature stores | 🛠️ **Hybrid**: Code Drills (7.1–7.5) + AI Gateway RAG Capstone (7.6) |

---

## Level 0A — Foundations: Clean Backend Architecture

_Project Repo: `production-service-core` (Stage 1: Architecture Scaffold)_

> 📦 **Level 0A Build Scope & Deliverables**:
> - **Deliverable**: `production-service-core` repository **Stage 1 (Architecture Scaffold)**.
> - **Core Features**: Node.js Event Loop & Microtask internals + Clean layered REST architecture + Pino logging + AsyncLocalStorage request correlation IDs + Zod schema validation + RFC 7807 typed error handling envelopes.
> - ❌ **Scope Boundaries**: *Stage 1 focus — no authentication, no authorization, no database transactions, no complex locks.*

### 0A.0 Node.js Concurrency & Event Loop Mental Model

- `[MUST-KNOW]` Single-Threaded Concurrency Model — Why Node.js uses an event-driven loop instead of thread-per-request OS threads (Node vs Java/Go concurrency models), non-blocking I/O fundamentals
- `[MUST-KNOW]` Microtasks vs Macrotasks Execution Order — `process.nextTick` queue vs `Promise` microtask queue vs `setImmediate` macrotasks, unhandled rejection execution flow, and why async microtask bugs break Express error-handling middleware
- `[MUST-KNOW]` `async/await` Execution Mechanics & Scheduling — How JavaScript generators/promises pause function execution without blocking the single thread
- `[NOTE]` *Deep Libuv phase transitions, V8 GC algorithms, stream backpressure, and worker threads are covered in Level 1.1b after building your first production API services.*

### 0A.1 Architecture & Project Structure

- `[MUST-KNOW]` Clean layered architecture: `Config → Routes → Controllers → Services → Repository → DB`
- `[MUST-KNOW]` Dependency Injection / Inversion of Control (manual constructor DI first, container-based later)
- `[MUST-KNOW]` Interface-driven design for repositories/services (swappable storage engines)
- `[SHOULD-KNOW]` Architecture Decision Records (ADR) — how to document a design decision properly

### 0A.2 Error Handling & Resilience

- `[MUST-KNOW]` Centralized Error Architecture — `AppError` base class + typed subclasses (`BadRequestError`, `NotFoundError`, `ConflictError`, etc.)
- `[MUST-KNOW]` Error Classification Taxonomy — Categorizing Client (4xx) vs Server (5xx) vs Upstream Integration vs Unknown Uncaught errors
- `[SHOULD-KNOW]` Stable Error Codes & Domain Identifiers — Machine-readable error codes (e.g., `AUTH_INVALID_TOKEN`, `PAYMENT_CARD_DECLINED`) for programmatic client handling, monitoring, and SLA tracking
- `[MUST-KNOW]` Standardized API Error Envelopes — RFC 7807 problem details specification (`type`, `title`, `status`, `detail`, `instance`, `code`)
- `[SHOULD-KNOW · Revisit in Level 4 SRE]` Error Observability, Grouping & Deduplication — Sentry-style stack trace fingerprinting & error grouping (collapsing 1,000 duplicate user exceptions into 1 actionable incident), error sampling policies (log 100% of 5xx server errors, sample 4xx client noise), and Error Rate vs Error Budget operational distinctions `[Cross-Reference: Level 4.2 SRE SLI/SLO Budgets]`
- `[MUST-KNOW]` `asyncHandler` Wrapper Pattern — Eliminating repetitive try/catch blocks in controllers
- `[MUST-KNOW]` Operational vs Programmer Errors — `unhandledRejection` / `uncaughtException` handling and process restart strategies

### 0A.3 Logging, Tracing & Context Propagation [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Structured JSON Logging Architecture (Pino) & Runtime Log Level Strategy — Defining explicit `DEBUG` vs `INFO` vs `WARN` vs `ERROR` runtime policies per environment and code path
- `[MUST-KNOW]` Distributed Tracing Concepts & Mental Model — Traces vs Spans, Root Span, Child Spans, Span Attributes, and Parent-Child span hierarchy (conceptual foundation before full OpenTelemetry SDK collectors `[Cross-Reference: Level 4.2]`)
- `[SHOULD-KNOW]` W3C Trace Context Specification (`traceparent` Header) — Standard format (`00-{trace_id}-{parent_id}-{trace_flags}`), propagating trace context across HTTP boundaries and asynchronous call chains
- `[MUST-KNOW]` `AsyncLocalStorage` for Request-Scoped Context Propagation — Automatic correlation ID, trace ID, span ID, and tenant context propagation across asynchronous call chains without parameter drilling
- `[MUST-KNOW]` Log-Trace Correlation Discipline — Injecting `traceId` and `spanId` into every Pino log envelope via `AsyncLocalStorage` so every structured log line maps back to a specific span
- `[SHOULD-KNOW]` Dynamic Runtime Log Level Toggling — Flipping log levels dynamically at runtime (via HTTP admin endpoint or signal) without restarting the process during active incident debugging
- `[SHOULD-KNOW]` High-Volume Path Log Sampling — Sampling 1% of high-throughput success logs while capturing 100% of 5xx server error logs to optimize logging cost vs observability
- `[MUST-KNOW]` Standardized Structured Field Conventions — Enforcing mandatory log envelope schema fields (`userId`, `requestId`, `tenantId`, `traceId`, `spanId`, `durationMs`, `errorCode`, `httpMethod`, `path`)
- `[MUST-KNOW]` Granular PII Redaction Policy — Explicit PII classification rules per field (passwords, JWTs, credit card numbers, SSNs, IP addresses, emails) with Pino serializer redaction paths
- `[MUST-KNOW]` Request/Response Audit Logging Middleware — Redacted request/response payloads, status codes, and execution duration logging

### 0A.4 Configuration & Environment Management

- `[MUST-KNOW]` Type-Safe Environment Validation (Zod) — Fail-fast schema validation on service startup for required configuration parameters
- `[SHOULD-KNOW]` Layered Configuration Hierarchy & Overrides — Multi-tier configuration resolution precedence (`base defaults` $\rightarrow$ `environment-specific overrides` $\rightarrow$ `runtime secret overrides`)
- `[EXPERT · Revisit in Level 4]` Runtime Hot Configuration Reloading — Dynamic configuration updates without process redeployments (watching local config files, Kubernetes `ConfigMap` volume mounts, or etcd/Consul key-value stores)
- `[EXPERT · Revisit in Level 4]` Configuration Drift Detection & Audit — Detecting and alerting when running memory configuration drifts from git-backed infrastructure source-of-truth
- `[MUST-KNOW]` Secrets Handling Conventions — Environment variable injection vs secret manager integration, `.env.example` schema templates, preventing secret leakages in dumps

### 0A.5 Validation, Sanitization & Type Safety

- `[MUST-KNOW]` Schema validation of body/params/query with Zod
- `[MUST-KNOW]` DTOs and strict typing, zero `any`
- `[MUST-KNOW]` Preventing injection (SQLi, NoSQLi, XSS, HTTP parameter pollution)

### 0A.6 Structured Concurrency & Advanced Async Patterns [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Advanced Promise Execution Controls — `Promise.all` vs `Promise.allSettled` vs `Promise.any` vs `Promise.race` (exact execution semantics, unhandled rejection pitfalls, and partial failure handling strategies)
- `[MUST-KNOW]` Request & Query Cancellation with `AbortController` / `AbortSignal` — propagating cancellation signals across HTTP fetch requests, Node.js streams, and asynchronous operations `[Conceptual Teaser: PostgreSQL query cancellation & Redis command aborts covered when DBs are introduced in 0B/0C]`
- `[SHOULD-KNOW]` Advanced `AsyncLocalStorage` Contexts — request-scoped DB transaction handles, tenant context propagation, feature flag overrides, and correlation context propagation without parameter drilling
- `[SHOULD-KNOW]` Structured Concurrency Discipline — ensuring child background tasks are explicitly joined or cancelled before parent HTTP handlers return
- `[SHOULD-KNOW]` Unhandled Promise Rejection Tracing — linking asynchronous stack traces back to originating HTTP request correlation IDs
- `[MUST-KNOW]` Parallelism vs Concurrency vs Throughput — rate-limiting async operations using `p-limit`, `p-map`, worker thread pools (`worker_threads`), and backpressure management

🧪 **`[DRILL 0A]`**: Build & test the clean layered _Starter Service Core_ with Pino request-scoped correlation IDs, Zod validation, and typed `AppError` envelopes.
🔎 **`[DISSECTION 0A]`**: Inspect Express.js core (`lib/router/layer.js` & `route.js`) — explain how the internal middleware execution chain and error-handling matchers work under the hood.

---

## Level 0B — Request Lifecycle: Auth, Security & Idempotency

_Project Repo: `production-service-core` (Stage 2: Security, Auth & Idempotency Module)_

> 📦 **Level 0B Build Scope & Deliverables**:
> - **Deliverable**: `production-service-core` **Stage 2 (Auth & Request Hardening)**.
> - **Core Hardening**: Security headers (Helmet, CORS), JWT access/refresh token rotation, password hashing (Argon2id), real OTP signup flow via free-tier email/SMS (Resend / Brevo / Twilio free tier) with Redis sliding window & exponential backoff, MFA/TOTP, RBAC/ABAC policy gates, session revocation blacklisting, rate limiting algorithms (GCRA, sliding window, token bucket), and HTTP idempotency key middleware.
> - ℹ️ **Prerequisite Assumption**: *Assumes basic CRUD & simple SQL query familiarity (PostgreSQL table schemas, `SELECT`/`INSERT`/`UPDATE`). Level 0B uses standard repository queries to store users, hashes, and roles. Deep SQL internals (isolation levels, pool tuning, PgBouncer, zero-downtime migrations, banker's rounding) are explicitly taught and hardened in Level 0C.*
> - ❌ **Scope Boundaries**: *Auth & Request lifecycle focus — database isolation/locking, testing harnesses, and protocol infrastructure deferred to 0C & 0D.*

### 0B.0 Redis Foundations & Key-Value State Operations [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Redis Core Mental Model & In-Memory Architecture — Single-threaded event loop, RAM-speed key-value storage vs disk-based SQL databases, when to use Redis (ephemeral state, counters, locks, sessions) vs PostgreSQL (durable entity storage)
- `[MUST-KNOW]` Node.js Redis Integration (`ioredis`) — Connection handling, client initialization, error listener reconnection handling, and async command execution (`await redis.get/set`)
- `[MUST-KNOW]` Core Key Operations & Expiration TTL Semantics — String operations (`GET`, `SET`, `DEL`, `EXISTS`), Key Expiration TTLs (`EXPIRE`, `PEXPIRE`, `TTL`), and volatile key automatic eviction
- `[MUST-KNOW]` Atomic Operations & Race Condition Prevention — Atomic increment/decrement (`INCR`, `DECRBY`), atomic conditional set (`SET key value EX seconds NX`), and basic Redis Lua scripting for multi-command atomic execution `[Prerequisite for 0B.1 Rate Limiting & 0B.3 Idempotency]`
- `[MUST-KNOW]` Essential Data Structures — Hashes (`HSET`/`HGETALL` for user sessions), Sets (`SADD`/`SISMEMBER` for token blacklists), and Sorted Sets (`ZADD`/`ZREMRANGEBYSCORE` for sliding-window log rate limiting)
- `[NOTE]` *Distributed Redis Cluster, Sentinel HA, persistence tuning (RDB/AOF), and advanced caching strategies (L1 vs L2, cache-aside, stampede mitigation) are deferred to Level 1.5 & Level 2.2.*

### 0B.1 Authentication, Real OTP Signup & Authorization

- `[MUST-KNOW]` JWT access + refresh token architecture, rotation
- `[SHOULD-KNOW]` OAuth2 Social Login & Single Sign-On (SSO) Integration — Passport.js / OpenID Connect (Google/GitHub OIDC providers), Authorization Code Flow with PKCE, user identity linking, and token conversion
- `[MUST-KNOW]` Secure cookie vs header storage (`HttpOnly`, `SameSite`, `Secure`)
- `[MUST-KNOW]` Real OTP Verification Signup Flow — Sending live OTPs via free-tier Resend / Brevo (Email) or Twilio / MSG91 (SMS), rate-limiting OTP resends with Redis sliding window, exponential backoff, and idempotent resend verification
- `[MUST-KNOW]` Password hashing (Argon2id/bcrypt) + account lockout after N failed attempts
- `[SHOULD-KNOW]` Multi-Factor Authentication (MFA / 2FA) & TOTP — Time-based One-Time Password generation (`speakeasy`/`otplib`), QR code provisioning, backup recovery codes, and MFA verification middleware
- `[SHOULD-KNOW]` Password Reset & Passwordless Magic Links — Secure short-lived token generation, email magic links (`crypto.randomBytes`), single-use token invalidation, and rate-limiting password resets
- `[MUST-KNOW]` Role-Based & Attribute-Based Access Control (RBAC & ABAC) — Roles, dynamic permissions, hierarchical permission inheritance, context-aware policy gates (e.g. `user:edit_own_resource`), and audit trail logging for sensitive role changes
- `[EXPERT · buildable]` Immutable & Tamper-Evident Audit Logging System — Append-only audit logs, cryptographic tamper-evidence (hash chains / Merkle tree logging), standardized audit event schemas (`who`, `what`, `when`, `where`, `why`, actor vs subject), regulatory retention rules (e.g. 7 years for financial records), and SIEM integration / syslog forwarding pipelines for compliance proof
- `[MUST-KNOW]` Session revocation & token blacklisting (Redis)

### 0B.2 Request Security Essentials & Rate Limiting Engine [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Security headers (Helmet: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, etc.)
- `[MUST-KNOW]` CORS done properly (origin whitelisting, preflight cache `Access-Control-Max-Age`, credential handling)
- `[MUST-KNOW]` Rate Limiting Algorithms & Engineering Deep Dive — Fixed Window vs Sliding Window Log vs Sliding Window Counter vs Token Bucket vs Leaky Bucket (smooth output rate) vs GCRA (Generic Cell Rate Algorithm - single-key Redis memory efficient rate limiter) vs Concurrent Request Limiting (capping in-flight active requests) vs Server Load-Adaptive Rate Limiting (dynamically tightening rate limits when CPU/RAM or DB pool saturates) `[Cross-Reference: Level 4.1 Rate Control Taxonomy]`
- `[SHOULD-KNOW]` Request Device Fingerprinting & IP Geolocation — Parsing `X-Forwarded-For`, trusted proxies, MaxMind GeoIP lookup for suspicious login detection, and User-Agent device parsing
- `[MUST-KNOW]` Payload size limits + payload compression (brotli/gzip middleware trade-offs)

### 0B.3 Third-Party Integration & Enterprise Idempotency System [EXPLANATION-HEAVY]

- `[SHOULD-KNOW · Revisit in Level 3A/4]` Retries, Circuit Breakers & Retry Budgeting Discipline — Exponential backoff with full jitter, Circuit breaker pattern (closed $\rightarrow$ open $\rightarrow$ half-open states), Retry Budgeting (capping total retry requests at max 10% of overall service traffic to prevent retry storms), Retry Amplification Prevention (preventing cascading retries across multi-tier call chains Client $\rightarrow$ Gateway $\rightarrow$ Service $\rightarrow$ DB), and Hedged Requests (firing parallel backup requests after p99 latency threshold to cut tail latency)
- `[MUST-KNOW]` Webhook signature verification (HMAC-SHA256)
- `[MUST-KNOW]` HTTP Idempotency Key Architecture — Redis storage, lock-based deduplication, TTL management & storage cost vs safety trade-offs, payload caching & replay response semantics
- `[MUST-KNOW]` DB-Write Idempotency & SQL Collision Handling — `ON CONFLICT DO NOTHING` vs `DO UPDATE`, `WHERE NOT EXISTS`, detecting idempotency key collision (same key with different payload error responses)
- `[SHOULD-KNOW]` Read & Multi-Step Task Idempotency `[Prerequisite Teaser — Distributed Saga step compensation idempotency covered in full in Level 3A.3]` — Idempotency keys for expensive/side-effecting endpoints, multi-step workflow compensation idempotency, and replay-safe read operations

🧪 **`[DRILL 0B]`**: Build & test real OTP verification signup with Argon2id password hashing, Redis sliding window rate-limiting, and HTTP idempotency key deduplication.
🔎 **`[DISSECTION 0B]`**: Inspect `express-rate-limit` & `ioredis` scripts — read and explain atomic Lua script execution for sliding-window rate limiting in Redis.

---

## Level 0C — Data Correctness & Protocol Foundations

_Project Repo: `production-service-core` (Stage 3: Data Correctness & API Engine)_

> 📦 **Level 0C Build Scope & Deliverables**:
> - **Deliverable**: `production-service-core` **Stage 3 (Data & Protocol Engine)**.
> - **Core Engineering**: SQL transactions, isolation levels, optimistic vs pessimistic locking, connection pool tuning, PgBouncer, read replica routing, zero-downtime expand-contract migrations, soft-delete vacuuming, money/currency precision (`NUMERIC`/`BIGINT`/banker's rounding), Unicode & grapheme cluster safety, SQL 3-valued logic, deep HTTP status & conditional requests (`If-Match`/ETag optimistic concurrency), response headers (`Sunset`/`Deprecation` RFCs), multi-version REST API routing (URI path, custom header, date-based version transformation layer), and breaking change detection in CI (`openapi-diff`).
> - ❌ **Scope Boundaries**: *Focus on data integrity & protocol contracts — testing infrastructure, OS profiling, and Docker deployment deferred to Level 0D.*

### 0C.1 SQL & Query Fundamentals [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Joins, subqueries, aggregates, `GROUP BY`/`HAVING` — quick refresh with production-style examples
- `[MUST-KNOW]` Transactions: `BEGIN/COMMIT/ROLLBACK/SAVEPOINT`
- `[MUST-KNOW]` Isolation levels (Dirty/Non-Repeatable/Phantom reads) & anomaly prevention — you'll _see_ each anomaly happen in code
- `[MUST-KNOW]` Optimistic locking (version column + retry) vs pessimistic locking (`SELECT ... FOR UPDATE`) — when to use which, with financial transfer examples
- `[SHOULD-KNOW]` MongoDB CRUD basics + client-session transactions

### 0C.2 Database Access Layer, Connection Management & Migrations [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Connection pool tuning (min/max, idle/acquire timeouts)
- `[MUST-KNOW]` Unit-of-work pattern, transaction boundaries
- `[MUST-KNOW]` Migrations & idempotent seeding
- `[MUST-KNOW]` Production Database Migrations & Zero-Downtime Schema Evolution — Lock-safe migrations (avoiding `ACCESS EXCLUSIVE` table locks on live DBs), Expand-Contract pattern (nullable column addition → dual-write deploy → batched backfill → old column drop), batched idempotent background backfills, rollback safety (reversible vs irreversible migrations), migration tooling comparison (Prisma Migrate vs Kysely vs `node-pg-migrate` vs Flyway), testing migrations against production-sized copies, and schema drift CI enforcement `[Cross-Reference: Level 6.3 Live Schema Migrations]`
- `[MUST-KNOW]` Soft-Delete Pattern, Hard Deletion & Data Retention Lifecycle — `deleted_at` query filtering, cascade soft-delete, automated database vacuuming of expired soft-deleted records, and audit logging
- `[SHOULD-KNOW]` Database Connection Pool Exhaustion & Backpressure — Inspecting `pg_stat_activity`, waiting query chains, lock graph inspection, statement timeout vs query timeout vs pool acquire timeout differences, PgBouncer (transaction pooling vs session pooling, prepared statement handling), connection backpressure (queue depth limits, reject-when-full behavior), and Read Replica Routing (splitting read/write connections, handling replication lag anomalies)

### 0C.3 Data Correctness & Domain Fundamentals (Money, Unicode & Nulls) [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Money, Currency & Numeric Precision Architecture — Why floating-point money causes production bugs (`0.1 + 0.2 !== 0.3`), integer minor units (cents) vs arbitrary-precision decimal libraries (`decimal.js`, `big.js`), PostgreSQL column selection (`NUMERIC` vs `MONEY` vs `BIGINT`), BigInt vs number overflow (IDs, timestamps, balances), currency ISO 4217 minor unit variations (JPY = 0 decimals, KWD = 3 decimals), rounding algorithms (banker's rounding, half-up, half-even), currency conversion pipelines (rate sources, historical rates, spread), and tax calculation precision (VAT/GST/US sales tax nexus rules)
- `[MUST-KNOW]` Text Encoding, Unicode & Internationalization Security — UTF-8 vs UTF-16 vs ASCII internal byte representations, Unicode normalization (`NFC`, `NFD`, `NFKC`, `NFKD`) for email uniqueness & username collision prevention, Grapheme clusters (emoji, flag sequences, ZWJ family sequences, skin tone modifiers) where string length $\neq$ character count, string length vs byte length vs grapheme length for DB column sizing & truncation, case folding edge cases (Turkish dotless `ı`, German `ß`), URL encoding (`encodeURIComponent` vs `encodeURI`, `%20` vs `+`), CSV/JSON formula injection security (`=cmd|...`), and null-byte/control character input sanitization
- `[MUST-KNOW]` Null Semantics, Optionality & SQL Three-Valued Logic — `null` vs `undefined` vs missing keys across JSON serialization, PostgreSQL, and TypeScript, SQL three-valued logic (`NULL = NULL` evaluates to `UNKNOWN`), optional & nullable field modeling across validation schemas (Zod `.optional()` vs `.nullable()`, Protobuf field presence vs Avro unions), and API design consistency rules (`empty array []` vs `null` vs `404` for empty collection responses)
- `[EXPERT · buildable]` Backend Internationalization (i18n) & Localization (l10n) Architecture — Locale-aware API header negotiation (`Accept-Language`), UTC timestamp storage with timezone-aware query conversion, localized error response templates, multi-language database column modeling (JSONB vs translation tables), Unicode CLDR pluralization rules (`zero`/`one`/`two`/`few`/`many`/`other`), locale-aware number formatting (decimal separators, digit grouping `1,000` vs `1.000`), currency display formatting (symbol positioning, spacing), Right-to-Left (RTL) bidirectional text handling & string order preservation, culture-aware name formatting (given vs family name ordering), country-specific address schema formatting, and database ICU locale-aware collation (e.g. Swedish vs German string sorting rules)

### 0C.4 Deep HTTP Semantics & Protocol Controls

- `[MUST-KNOW]` Status Code Taxonomy & Discipline — 400 Bad Request vs 422 Unprocessable Entity vs 409 Conflict vs 412 Precondition Failed, 401 Unauthorized vs 403 Forbidden, 402 Payment Required, 405 Method Not Allowed
- `[MUST-KNOW]` Reading & Implementing IETF RFC Specifications — Navigating IETF RFC structures (MUST/SHOULD/MAY RFC 2119 keywords), extracting normative requirements directly from official specs (RFC 7807 Problem Details, RFC 8594 Sunset, RFC 9745 Deprecation, RFC 7239 Forwarded header) without relying on secondary summary blog posts
- `[MUST-KNOW]` HTTP Layer Optimistic Concurrency & Conditional Requests — `If-Match`, `If-None-Match`, `If-Unmodified-Since`, `If-Modified-Since`, ETag validation
- `[SHOULD-KNOW]` Range Requests & Large Media Streams — `Range`, `Content-Range`, `206 Partial Content` (video streaming, large chunk downloads)
- `[MUST-KNOW]` Redirect Semantics & Method Preservation — 301 Moved Permanently vs 302 Found vs 307 Temporary Redirect vs 308 Permanent Redirect (method preservation rules)
- `[MUST-KNOW]` Response Location & Retry Headers — `201 Created` with `Location` header, `429 Too Many Requests` / `503 Service Unavailable` with `Retry-After` headers
- `[MUST-KNOW]` Protocol Methods & Content Negotiation — `OPTIONS`, `HEAD`, `TRACE`, `Accept`, `q=` weights, `Vary` headers

### 0C.5 API Versioning, Deprecation & Evolution Engine

- `[MUST-KNOW]` REST API Versioning Mechanics & Trade-Off Space — URI path (`/v1/users`), Custom Header (`X-API-Version: 2`), Accept Header / Media Type (`application/vnd.myapi.v2+json`), Query Param (`/users?version=2`), Date-Based Versioning (Stripe-style `Stripe-Version: 2024-01-15` per-request transformation layer), and Additive-Only / No-Versioning strategies `[Cross-Reference: Protocol-specific versioning for GraphQL & gRPC covered in Level 1.1; Webhooks in Level 3A.5]`
- `[MUST-KNOW]` Categorizing Change Boundaries — Breaking (field removal, type mutation, semantic shifts, error code changes) vs Non-Breaking (optional fields, new endpoints) vs Gray-Area (adding required request fields, changing defaults/validation)
- `[SHOULD-KNOW]` Deprecation & Sunset Lifecycle Protocols — RFC 8594 `Sunset` response headers, RFC 9745 `Deprecation` response headers, multi-stage deprecation windows (6-month notice / 12-month support), client version usage tracking middleware, automated migration changelogs, and scheduled brownout tests
- `[SHOULD-KNOW]` Implementation & Routing Patterns — Gateway version routing (Envoy/Kong path & header filters `[See Cross-Reference: Level 4.1]`), controller-level in-app routing, Stripe-style per-version response transformation layers, and parallel version deployment
- `[SHOULD-KNOW]` Versioning Failure Modes & Anti-Patterns — Version explosion, version freeze, silent breaking changes, ghost un-deletable versions, consumer lock-in, and over-versioning
- `[EXPERT]` Spec, SDK & Tooling Integration — Multi-version OpenAPI/Swagger specs, `openapi-diff` breaking change detection in CI, API contract style guide enforcement (Spectral / Vacuum CLI linting for API naming & response envelope consistency), versioned client SDK generation, and per-version Pact contract testing

📜 **`[RFC-SPEC DRILL 0C.4]`**: Read RFC 7807 (*Problem Details for HTTP APIs*) directly from the official IETF specification (not a summary). Implement compliant `application/problem+json` error responses directly from the spec. Then read RFC 8594 (*Sunset Header Field*) and RFC 9745 (*Deprecation Header Field*) directly from IETF specs, and add compliant `Deprecation` and `Sunset` headers to your v1 API endpoints.
🧪 **`[DRILL 0C]`**: Build a v1 $\rightarrow$ v2 migration in `production-service-core`. Implement expand-contract DB schema evolution, money rounding precision tests, `Deprecation`/`Sunset` headers, ETag validation (`If-Match`), and version usage tracking before returning a `410 Gone` after sunset.
🔎 **`[DISSECTION 0C]`**: Inspect PostgreSQL query logs (`pg_stat_activity` & lock graph) during competing pessimistic `SELECT FOR UPDATE` transaction locks.

---

## Level 0D — Enterprise Testing, Networking & Operations

_Project Repo: `production-service-core` (Stage 4: Complete Production-Hardened Release)_

> 📦 **Level 0D Build Scope & Deliverables**:
> - **Deliverable**: `production-service-core` **Stage 4 (Hardened Release)** fully containerized in Docker with an automated test suite.
> - **Core Engineering**: Test Pyramid implementation (Unit, Integration, Contract/E2E), Testcontainers (ephemeral Postgres & Redis in Docker), MSW/Nock mock servers, factory fixture builders, low-level networking (TCP/UDP, TLS 1.3 handshakes, DNS resolution, HTTP/1.1 vs HTTP/2 vs HTTP/3 QUIC), Node.js memory leak profiling (`clinic.js`, `--inspect`, heap snapshots), container limits (OOMKilled, cgroups, file descriptors), K8s preStop hooks & graceful shutdown signal handling, distributed cron scheduling (DST edge cases, Redlock leases), Husky + lint-staged pre-commit automation, OpenAPI DX stack, and production multi-stage Dockerfile.
> - ❌ **Scope Boundaries**: *Single service repo hardening complete — microservice gateways and event streams deferred to Level 3A & 4.*

### 0D.1 Networking & Protocol Foundations [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Transport Layer Protocols (TCP vs UDP) — TCP 3-way handshake (`SYN`, `SYN-ACK`, `ACK`), connection teardown (`FIN`/`RST`), TCP windowing & socket backpressure, socket exhaustion handling (`ulimit -n`), TCP keep-alive, vs UDP trade-offs in DNS lookups & real-time streams
- `[SHOULD-KNOW]` TLS/SSL Cryptographic Security & Certificate Lifecycle — TLS 1.2 vs 1.3 handshake mechanics (0-RTT/1-RTT latency impact), cipher suites, SNI, ALPN protocol negotiation, mTLS (mutual TLS), wildcard vs SAN certificates, automated ACME / Let's Encrypt issuance & renewal
- `[MUST-KNOW]` DNS Infrastructure & Resolution Pipeline — Record types (`A`, `AAAA`, `CNAME`, `MX`, `TXT`, `NS`), recursive vs authoritative resolution flow, DNS caching & TTL propagation delays, split-horizon DNS, negative DNS caching behavior
- `[MUST-KNOW]` HTTP Protocol Evolution (HTTP/1.1 vs HTTP/2 vs HTTP/3) — HTTP/1.1 (head-of-line blocking, Keep-Alive connection pools) vs HTTP/2 (binary framing layer, stream multiplexing over single TCP connection, HPACK header compression) vs HTTP/3 (QUIC protocol over UDP, 0-RTT connection establishment, IP migration resilience)

### 0D.2 Enterprise Testing Strategy & Infrastructure

- `[MUST-KNOW]` The Backend Test Pyramid — unit tests (pure domain logic), integration tests (API endpoints against DB), and contract/e2e tests
- `[MUST-KNOW]` Real Infrastructure Testing with Testcontainers — spinning up ephemeral, isolated PostgreSQL and Redis Docker containers programmatically for integration test execution (zero DB mocking)
- `[MUST-KNOW]` Mocking & Stubbing Third-Party APIs — MSW (Mock Service Worker) and Nock for intercepting outbound HTTP calls to third-party providers (Resend, Twilio, Stripe) in automated test runs
- `[MUST-KNOW]` Test Fixtures & Factories — deterministic test data generation using `@faker-js/faker` and factory builders

### 0D.3 Production Profiling, Resource Limits & Operating Environment

- `[SHOULD-KNOW]` Memory Leak Profiling & Heap Snapshots — Node.js `--inspect` memory profiling, heap snapshots (`v8.getHeapSnapshot()`), inspecting uncollected event listeners and unclosed database connection handles under load via `clinic.js` (Doctor & Bubbleprof)
- `[SHOULD-KNOW · Revisit in Level 4]` Resource Limits & OS-Level Constraints — Node.js V8 heap limits (`--max-old-space-size`), file descriptor limits (`ulimit -n`, socket exhaustion handling), CPU cgroup throttling in K8s/Docker containers, container RAM limits & container OOMKilled diagnosis (`--memory`), disk I/O & egress network bandwidth throttling, and end-to-end backpressure propagation (TCP window $\rightarrow$ socket buffer $\rightarrow$ app queue $\rightarrow$ client) `[Revisited in Level 4 when running K8s pods with real cgroup memory limits, CPU quotas, and OOMKilled pod troubleshooting]`
- `[MUST-KNOW]` Health check endpoints (liveness vs readiness probes)
- `[MUST-KNOW]` Graceful Shutdown & Connection Draining Lifecycle — `SIGTERM`/`SIGINT` signal traps, draining in-flight HTTP requests, closing DB connection pools, Kubernetes `preStop` lifecycle hooks (delaying SIGTERM until K8s endpoints list updates), and draining long-lived persistent connections (WebSocket client reconnect frame broadcasting & gRPC stream `GOAWAY` frames)
- `[MUST-KNOW]` Strict TypeScript, lint/format, pre-commit hooks (Husky + lint-staged)
- `[SHOULD-KNOW]` Background task offloading (event emitters/`setImmediate` for non-blocking side-effects)
- `[SHOULD-KNOW]` Distributed Cron & Scheduled Task Semantics — Cron vs Interval vs One-shot timer semantics, timezone-aware scheduling ("9am in user's local timezone"), Daylight Saving Time (DST) scheduling pitfalls (handling skipped vs repeated hours during clock transitions), job overlap prevention (skip-if-running concurrency controls, Redlock distributed leases), and job execution observability (last run timestamp, next run schedule, execution duration percentiles, failure rate tracking)

### 0D.4 OpenAPI Tooling, DX Stack & Dockerization

- `[SHOULD-KNOW]` OpenAPI/Swagger Auto-Generated Docs & Developer Experience (DX) Stack — OpenAPI-first development (spec-driven code generation), API contract style guide enforcement (Spectral / Vacuum linting rules in CI), SDK generation (multi-language client SDKs via OpenAPI Generator / Orval), interactive API documentation UI (Scalar, Redoc, Stoplight), API versioning & changelog automation (spec diffing via `openapi-diff`), and automated team Postman / Bruno collection export pipelines
- `[EXPERT]` Developer Portals & Interactive API Playgrounds — Self-service developer onboarding, self-service API key provisioning & usage quota dashboards, interactive API playgrounds (live request execution in docs with environment switching), automated consumer API changelog & deprecation notification pipelines (email/Slack webhooks), and dedicated consumer Sandbox/Test environments isolated from production data
- `[MUST-KNOW]` Docker Compose local dev environment + production multi-stage Dockerfile

🧪 **`[DRILL 0D]`**: Write integration tests using Testcontainers (ephemeral PostgreSQL & Redis) and MSW for external API mocks. Implement a `SIGTERM` graceful shutdown handler with K8s `preStop` delay and zero-downtime connection draining.
🔎 **`[DISSECTION 0D]`**: Run `clinic.js` against a simulated memory-leaking route under load; analyze the heap profile flamegraph to isolate the uncollected closure.


---

## Level 1 — Intermediate: Core APIs, Efficient Data Access & Caching

_Project: URL Shortener Service_

> 📦 **Level 1 Build Scope & Deliverables**:
> - **Deliverable**: Express/TypeScript **URL Shortener Microservice** with Redis caching & Base62 encoding.
> - **Core Features**: `POST /shorten` (Base62 key generation), `GET /:code` (302 redirect with LRU Redis caching), and `GET /:code/analytics` (click count & latency metrics).
> - ❌ **Scope Boundaries**: *No authentication middleware, no user account management.*

### 1.1 API & Protocol Design [EXPLANATION-HEAVY]

- `[MUST-KNOW]` REST resource modeling, idempotency, cursor vs offset pagination
- `[MUST-KNOW]` Webhook Ingestion & Inbound Hook Reliability — Inbound HTTP webhook endpoints, HMAC-SHA256 signature verification, immediate 202 Accepted response decoupling, dead-letter queue (DLQ) routing, and replay protection `[Note: Covers inbound webhooks we receive; outbound webhook delivery engines are covered in 3A.5]`
- `[SHOULD-KNOW]` GraphQL Production Architecture — Resolvers, N+1 problem & DataLoader batching, GraphQL Federation / Schema Stitching, Schema Evolution & `@deprecated` Directives Lifecycle, Persisted Queries (automatic persisted queries / APQ for reduced payload size & query injection prevention), Gateway-Level Query Complexity & Cost Analysis (static query depth limits, dynamic field-cost calculation AST analysis, and pre-execution query cost rejection at the gateway), WebSocket-based Subscriptions, self-hosted Schema Registries (Hive / Apollo alternative), and Multi-Tiered GraphQL Caching Strategies (Gateway/Edge full response HTTP caching via `@cacheControl` directives vs Client-side normalized entity caching like Apollo Client / Urql)
- `[SHOULD-KNOW]` High-Performance API Protocols & Serialization Tuning — HTTP/2 & HTTP/3 multiplexing & connection reuse in production, response compression trade-offs (Brotli vs gzip), JSON serialization optimization (`fast-json-stringify` vs `JSON.stringify`), and Protocol Buffers vs JSON serialization benchmarks
- `[EXPERT]` Binary Wire-Format Serialization & Content Negotiation — JSON vs MessagePack vs CBOR wire-format tradeoffs (payload size compression, CPU parsing overhead, schema requirements, browser ecosystem support), HTTP header content negotiation for binary payloads (`Accept: application/x-msgpack` vs `Accept: application/cbor`), and quantitative decision thresholds for transitioning HTTP REST endpoints from JSON to binary serialization
- `[SHOULD-KNOW]` WebSockets/SSE/gRPC Deep Dive — Protocol selection matrices, gRPC Protobuf Package Versioning (`myapi.v1` / `myapi.v2`) & Immutable Field Numbering Rules, gRPC Server Reflection (`grpc-reflection` for dynamic service discovery without `.proto` files), gRPC Health Checking Protocol (`grpc.health.v1.Health` standard for load balancing & Kubernetes probes), and `gRPC-Web` proxy compatibility layer for browser-to-backend RPC calls `[Cross-Reference: Scaling WebSockets to millions of connections comes in Level 3B]`

📜 **`[gRPC PROTOCOL DRILL 1.1]`**: Define a `.proto` service contract (`service OrderService { rpc CreateOrder (OrderRequest) returns (OrderResponse); rpc StreamOrderUpdates (OrderStreamRequest) returns (stream OrderStatusUpdate); }`). Implement a working Node.js gRPC server using `@grpc/grpc-js` and `@grpc/proto-loader`. Implement standard `grpc.health.v1.Health` probes, enable gRPC server reflection, and test unary & server-streaming RPC calls using `grpcurl` or Postman gRPC client.

### 1.1b Deep Node.js Engine & Runtime Internals `[EXPLANATION-HEAVY]`

> 💡 **Explanation-Heavy Topic**: Node.js runtime mechanics (Libuv phase transitions, V8 memory & GC, stream backpressure) are examined here in full depth after mastering basic API building. AI instructors provide comprehensive explanations with execution flowcharts and step-by-step trace breakdowns.

- `[MUST-KNOW]` Libuv Event Loop Architecture & Phases — Timers (`setTimeout`/`setInterval`) $\rightarrow$ Pending I/O Callbacks $\rightarrow$ Idle/Prepare $\rightarrow$ Poll (I/O execution & socket polling) $\rightarrow$ Check (`setImmediate`) $\rightarrow$ Close Callbacks, event loop starvation risks (recursive `nextTick` / microtask loops)
- `[SHOULD-KNOW]` V8 Engine Memory Model & Garbage Collection — V8 Heap structure (New Space / Scavenger GC vs Old Space / Mark-Sweep-Compact GC), C++ Native Memory vs V8 Heap (`Buffer`/`ArrayBuffer`), V8 heap limits (`--max-old-space-size`), memory leak patterns (dangling closures, global event listeners)
- `[MUST-KNOW]` Node.js Streams, Pipes & Backpressure Management — Readable, Writable, Transform, and Duplex stream pipelines, `highWaterMark` buffer thresholds, handling `drain` events, avoiding memory spikes during high-throughput I/O
- `[SHOULD-KNOW]` Process Threads, Clustering & Worker Threads — Single-threaded main event loop vs libuv thread pool (`UV_THREADPOOL_SIZE` for crypto/fs/zlib) vs `worker_threads` (CPU-bound offloading) vs OS-level cluster process fork (`cluster` module)

---

### 1.2 Relational & Document Data Modeling [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Domain Data Modeling Discipline — normalization (1NF to 3NF) vs tactical denormalization, entity-relationship design, aggregate boundaries
- `[MUST-KNOW]` Embedding vs referencing in MongoDB, avoiding unbounded arrays, document schemas vs relational schemas

### 1.3 Advanced SQL & High-Performance Querying [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Index types: single, composite (leftmost-prefix rule), partial, expression/functional, JSONB GIN indexes
- `[MUST-KNOW]` Covering indexes / index-only scans
- `[MUST-KNOW]` Reading `EXPLAIN ANALYZE` — Seq Scan vs Index Scan vs Bitmap Heap Scan, spotting disk-based sorts
- `[MUST-KNOW]` N+1 detection & resolution (eager loading, batching, production detection via Datadog APM, Prisma query logs, `pg_stat_statements`)
- `[MUST-KNOW]` Slow query log analysis (`auto_explain` module, `pg_stat_statements` top query analysis)
- `[SHOULD-KNOW]` Query plan regression detection (CI plan diffing, index scan vs seq scan assertion gates)
- `[SHOULD-KNOW]` Index bloat & maintenance (`REINDEX CONCURRENTLY`, `pg_stat_user_indexes` usage stats, bloat ratio calculations)
- `[MUST-KNOW]` Keyset (cursor) pagination vs offset pagination at scale
- `[MUST-KNOW]` CTEs vs subqueries, avoiding accidental Cartesian products
- `[MUST-KNOW]` Window functions (`ROW_NUMBER`, `RANK`, `LAG`/`LEAD`) for top-N-per-group, running totals
- `[SHOULD-KNOW]` Row locking + `SKIP LOCKED` for lock-free queue-style polling
- `[MUST-KNOW]` Atomic upserts (`ON CONFLICT DO UPDATE`), bulk operations
- `[MUST-KNOW]` Keeping transactions short — never hold a DB lock across a network call
- `[MUST-KNOW]` Time & Date Handling in Distributed Systems — UTC storage everywhere vs local timezone rendering, Daylight Saving Time (DST) edge cases in scheduling/billing, Leap seconds real-world impact, IANA `tzdata` database updates & dependency management

### 1.4 Efficient MongoDB Querying & Aggregations

- `[MUST-KNOW]` Aggregation pipeline (`$match/$group/$lookup/$facet`) instead of app-side joins
- `[MUST-KNOW]` Compound, multikey, text, and sparse indexes in MongoDB, reading `.explain()`

### 1.5 Caching — Your First System Design Concepts [EXPLANATION-HEAVY]

- `[MUST-KNOW]` HTTP Caching Semantics & Protocol Headers — `Cache-Control` directives (`max-age`, `s-maxage`, `no-cache`, `no-store`, `private`, `public`, `stale-while-revalidate`), ETag generation (strong vs weak ETags), `If-None-Match` / `If-Modified-Since` conditional GETs (`304 Not Modified`), and `Vary` headers
- `[MUST-KNOW]` In-Process L1 Local Cache vs Remote L2 Cache — Node.js `lru-cache` memory caching vs distributed Redis caching trade-offs (sub-millisecond memory speed vs invalidation sync complexity)
- `[SHOULD-KNOW]` Cache Warming & Pre-Population Strategies — Async post-deployment cache warming jobs, pre-hydrating hot keys before live traffic cutover, and cache pre-refreshing
- `[MUST-KNOW]` Negative Caching & Null-Caching — Caching "not found" results (`404` responses / `null` DB lookups) to prevent repeated DB query penetration attacks `[See Also: 1.6 Bloom Filters]`
- `[SHOULD-KNOW]` Database Prepared Statement & Query Plan Caching — PostgreSQL prepared statement caching, query execution plan caching (`auto_explain`), and PgBouncer prepared statement handling
- `[MUST-KNOW]` DNS Caching & Resolution Semantics — Operating system & Node.js DNS caching, DNS TTLs, propagation delays, and negative DNS caching behavior
- `[MUST-KNOW]` Cache-aside, write-through, write-back, read-through, refresh-ahead
- `[MUST-KNOW]` Cache stampede/thundering herd (mutex, early expiry)
- `[MUST-KNOW]` Cache avalanche (TTL jitter), hot-key mitigation (local L1 + Redis L2)
- `[SHOULD-KNOW]` LRU/LFU eviction internals

### 1.6 Foundational Data Structures for Systems [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Consistent hashing concept `[Prerequisite Teaser — full mathematical depth & ring implementation in Level 3A.1]`
- `[SHOULD-KNOW]` Bloom filters (hashing, false-positive probability math, bit-array sizing), HyperLogLog, Count-Min Sketch
- `[MUST-KNOW]` B-Trees/B+Trees vs LSM-Trees (why Postgres uses one and Cassandra the other)

### 1.7 Basic Technical Communication & Component Sketching

- `[MUST-KNOW]` Basic Technical Communication & Component Sketching — Simple C4 Container diagrams for your application (`Routes → Controller → Service → DB → Redis`), distinguishing solid data flow arrows vs dashed event links, and hands-on sketching using Excalidraw / Mermaid.js `[Preview — full depth & enterprise presentation in Level 3C]`

📊 **Drill 1**: Benchmark the shortener's redirect path with and without caching under `autocannon` load; measure the actual QPS delta.
🔎 **Code Dissection 1**: Inspect BullMQ's core Redis Lua scripts (`addJob.lua`, `moveToActive.lua`) — explain how atomic job state transitions and lock renewals operate without race conditions.

---

## Level 2 — High: Storage, Search & Data Engine Internals

_Project: Product Catalog / Search Service_

> 📦 **Level 2 Build Scope & Deliverables**:
> - **Deliverable**: Express/TypeScript **Product Catalog & Search Engine** with dual REST + GraphQL API query interface.
> - **Core Components**: PostgreSQL (relational product inventory & pricing) + Elasticsearch or Meilisearch (full-text product search & faceted filters).
> - **Sync Pipeline**: Asynchronous CDC / Dual-Write event pipeline syncing product updates from Postgres to the Search Engine.
> - **Endpoints / Queries**: REST `GET /products/search` + GraphQL `query { searchProducts(...) { id title category price { amount currency } } }` (with DataLoader batching to prevent N+1 query execution on category resolvers) and `POST /products` (creates product in Postgres + syncs to search).
> - **Verification**: Benchmark `EXPLAIN ANALYZE` on Postgres indexed queries vs Elasticsearch search engine latency under 100k seeded product rows.

### 2.1 RDBMS Internals & Storage Engines [EXPLANATION-HEAVY]

- `[MUST-KNOW]` ACID + WAL (write-ahead log) crash recovery
- `[MUST-KNOW]` MVCC and tuple visibility
- `[SHOULD-KNOW]` Vacuuming, HOT updates, visibility maps, checkpointing

### 2.2 NoSQL & Specialized Data Stores [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Document stores (MongoDB), Key-Value (Redis/DynamoDB), Wide-column (Cassandra/ScyllaDB — partition/clustering keys, tunable consistency $R+W>N$ `[Prerequisite Teaser — Quorum math & CAP/PACELC trade-offs formalized in Level 3A.4]`), Graph (Neo4j)
- `[EXPERT]` Time-Series DBs & Columnar OLAP Query Patterns (TimescaleDB/ClickHouse) — hypertable partitioning, columnar memory layout, vector aggregate functions, retention policies, and continuous aggregate materialized views

### 2.3 Search Systems & Inverted Indexes [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Inverted index mechanics, TF-IDF, BM25 scoring
- `[MUST-KNOW]` Elasticsearch/OpenSearch cluster architecture: shards, replicas, near-real-time indexing
- `[MUST-KNOW]` Fuzzy search, autocomplete (n-grams), faceted search

### 2.4 Unstructured Storage: Object Storage & CDN Architecture [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Enterprise File Upload Architecture — Direct-to-Cloud Presigned URLs (bypassing backend server memory bottlenecks), Multipart Chunked Uploads for large files (parallel chunk ingestion + S3 ETag assembly), single & batch/bulk file processing (`busboy` / `multer` memory vs disk streaming), and file MIME validation / antivirus virus scan gates
- `[MUST-KNOW]` File Metadata Database Lifecycle — Storing file metadata records (UUID, S3 Key, ETag, bucket, size, checksum) in PostgreSQL before/after cloud upload completion, atomic database status state machines (`PENDING_UPLOAD → UPLOADED → FAILED`), and orphan file garbage collection cron jobs
- `[MUST-KNOW]` Storage Driver & Adapter Pattern — Building a swappable Object Storage interface (AWS S3 vs MinIO vs Google Cloud Storage vs Local Disk)
- `[MUST-KNOW]` S3/MinIO internals: presigned URLs, multipart upload, versioning
- `[MUST-KNOW]` CDN internals & Edge Caching — edge POP selection, cache-key normalization, origin shielding, `Surrogate-Control` & CDN revalidation via HTTP conditional GETs `[See Also: 1.5 HTTP Caching]`

📊 **`[DRILL 2]`**: Compare `Seq Scan` cost on the catalog table before/after adding the right index; show the plan diff.
🔎 **`[DISSECTION 2]`**: Inspect MinIO S3 server source (`cmd/multipart-handlers.go`) — explain how multipart chunk ingestion, ETags verification, and block assembly are implemented.

---

## Level 3A — Distributed Data & Async Event Architecture

_Project: Order Processing Service_

> 📦 **Level 3A Build Scope & Deliverables**:
> - **Deliverable**: Express/TypeScript **Order Processing Engine** with Stripe / Razorpay (test mode) payment gateway integration, HMAC webhook verification, nightly batch reconciliation pipeline, Kafka event streaming & transactional outbox.
> - **Core Features**: Checkout endpoint $\rightarrow$ Payment Gateway (Stripe/Razorpay test mode) $\rightarrow$ HMAC Webhook handler $\rightarrow$ Postgres Outbox table $\rightarrow$ CDC/Debezium $\rightarrow$ Kafka topic $\rightarrow$ Saga Orchestrator $\rightarrow$ Nightly Reconciliation Job.
> - ❌ **Scope Boundaries**: *100% backend & event-driven — no UI/frontend views.*

### 3A.1 Scalability & Load Balancing [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Vertical vs horizontal scaling, eliminating single points of failure
- `[MUST-KNOW]` L4 vs L7 load balancing
- `[MUST-KNOW]` Load balancing algorithms: round robin, least connections, consistent hashing (full mathematical depth, virtual nodes, ring partitioning), power-of-two-choices
- `[MUST-KNOW]` Stateless backend design (JWT vs sticky sessions vs shared Redis state)

### 3A.2 Database Scaling & Sharding [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Replication: single-leader, multi-leader, leaderless/quorum ($R+W>N$)
- `[MUST-KNOW]` Sharding: range-based, hash-based (consistent hashing `[See Also: 3A.1]`), directory-based
- `[SHOULD-KNOW]` Zero-downtime resharding concepts
- `[SHOULD-KNOW]` Multi-Tenant System Architecture — Tenant onboarding & automated workspace provisioning, isolation guarantees, per-tenant rate limits & quotas (tiered plans), per-tenant observability (dashboards & alerting), tenant data export & deletion (GDPR compliance), and tenant migration across DB shards/cells
- `[MUST-KNOW]` Multi-Tenant Database Architecture — pool (shared DB/schema with tenant_id & Row-Level Security / RLS) vs silo (database-per-tenant) vs schema-per-tenant isolation models

### 3A.3 Messaging, Payments & Event-Driven Architecture [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Message Queue Engine Ecosystem — RabbitMQ exchange routing (direct, topic, fanout, headers), NATS JetStream (lightweight streaming alternative to Kafka), Redpanda (Kafka-compatible, Zookeeper-free C++ engine), and BullMQ
- `[MUST-KNOW]` Message Deduplication & Exactly-Once Transactional Semantics — Broker-level deduplication (Kafka idempotent producer), Kafka transactional producers (`read_committed` isolation), deduplication tables with DB transactions, and atomic upserts
- `[MUST-KNOW]` Real Payment Gateway Integration & Webhook Security — Integrating Stripe / Razorpay test mode (zero spend), cryptographic HMAC webhook signature verification, handling out-of-order & duplicate webhook deliveries via idempotency keys and stateful DB deduplication
- `[MUST-KNOW]` Batch / Scheduled Job Orchestration & Nightly Reconciliation Pipeline — Building multi-step batch reconciliation jobs (detecting missed payment webhooks, matching gateway ledger vs internal DB orders, generating discrepancy reports) using BullMQ / Redis distributed locks
- `[MUST-KNOW]` Message Queues (BullMQ/RabbitMQ: competing consumers, dead-letter queues) vs Event Streams (Kafka: partitions, consumer groups, log compaction)
- `[EXPERT]` Kafka Consumer Group Rebalancing & Assignment Protocols — Eager Stop-the-World rebalancing vs Incremental Cooperative Sticky Assignor (preventing consumer group throughput freezes during pod scaling)
- `[EXPERT]` Kafka Tiered Storage & Log Lifecycle — Local high-speed NVMe storage (hot tier) vs S3/GCS object storage (cold tier) log offloading, log segment retention policies, and compaction tombstone cleanup
- `[MUST-KNOW]` Message Ordering Guarantees & Constraints — per-partition strict ordering, per-key routing, global total ordering trade-offs (single partition throughput bottleneck vs multi-partition parallel throughput), and handling out-of-order events with sequence numbers / Lamport clocks
- `[MUST-KNOW]` Idempotent Consumer Patterns & Exactly-Once Semantics — At-least-once message delivery realities, consumer deduplication tables (processed message IDs with DB transactions), stateful idempotency checks, atomic DB upserts, and preventing duplicate side-effects (emails, charges)
- `[SHOULD-KNOW]` Event sourcing & CQRS
- `[MUST-KNOW]` Transactional outbox pattern + CDC
- `[MUST-KNOW]` Saga pattern: orchestration vs choreography — Per-saga-step compensation idempotency guarantees, compensating transactions, Saga execution state tracking, and failure recovery
- `[SHOULD-KNOW]` Data Serialization & Schema Management — Avro vs Protobuf vs JSON Schema trade-offs, Schema Registry operations (Buf CLI schema linting & breaking change detection, Confluent Schema Registry), backwards/forwards/full compatibility rules & CI enforcement, data contract testing (producer/consumer agreements), and step-by-step 4-stage event schema evolution lifecycle
- `[MUST-KNOW]` Queue Backpressure & Buffer Control — reactive streams, queue buffer limits, dead-letter queue routing, and high-watermark consumer throttling
- `[SHOULD-KNOW]` Client-Side Flow Control & Adaptive Load Shedding — TCP windowing & socket backpressure, handling client retry storms with exponential backoff & jitter, and adaptive load shedding under sudden traffic spikes

### 3A.4 Consistency, Consensus & Coordination [EXPLANATION-HEAVY]

- `[MUST-KNOW]` CAP & PACELC trade-offs, made concrete with real decisions
- `[MUST-KNOW]` Consensus algorithms: Raft/Paxos at a working level (leader election, log replication, safety invariants)
- `[MUST-KNOW]` Distributed locks & coordination (Redlock, etcd/ZooKeeper leases — built on consensus)
- `[SHOULD-KNOW]` 2PC/3PC, TCC, compensation workflows
- `[SHOULD-KNOW]` Clock sync: NTP, monotonic vs wall clocks, hybrid logical clocks

### 3A.5 Enterprise Outbound Webhook Delivery System [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Outbound Webhook Delivery Pipeline Architecture — Event trigger → Outbound Delivery Queue → Worker Pool → HMAC Payload Signing → External Consumer Endpoint
- `[SHOULD-KNOW]` Webhook Subscription Management — Per-tenant endpoint registration, secret rotation with dual-active HMAC secret windows, event-type subscription filtering, and Webhook Event Schema Versioning & Backward-Compatible Payload Evolution
- `[SHOULD-KNOW]` Webhook Resilience & Observability — Exponential backoff retries with jitter, dead-letter queue (DLQ) routing after max retries, circuit breaker per subscriber domain, delivery latency percentiles, and self-hosted local testing with Svix / Hookdeck / `webhook.site`

💥 **`[CHAOS 3A]`**: Kill primary DB/broker mid-checkout write; observe Outbox pattern recovery & Saga compensation execution.
🔎 **`[DISSECTION 3A]`**: Inspect Debezium Engine's Postgres CDC connector source — explain how write-ahead log (WAL) decoding and LSN (Log Sequence Number) position tracking maintain exactly-once event streaming.

---

## Level 3B — Real-Time Distributed Systems & Multi-Channel Messaging

_Project: Real-Time Location/Chat & Notification Gateway Service_

> 📦 **Level 3B Build Scope & Deliverables**:
> - **Deliverable**: Node.js/TypeScript **Real-Time WebSocket Gateway, Spatial Matching & WhatsApp Notification Service**.
> - **Core Features**: WebSocket connection management + Redis Pub/Sub cluster fan-out + Presence tracking + Geohash/Uber H3 spatial index pings + WhatsApp Cloud API (free tier) multi-channel notification dispatcher.
> - ❌ **Scope Boundaries**: *No message history UI — focused purely on gateway connection density, pub/sub latency, spatial indexing, and multi-channel notification routing.*

### 3B.1 Real-Time State & Persistent Connection Management [EXPLANATION-HEAVY]

- `[MUST-KNOW]` WebSocket connection & state management at scale (handling connection density, C10M problem, connection heartbeat protocols)
- `[MUST-KNOW]` Stateful vs stateless gateway routing for persistent connections

### 3B.2 Pub/Sub Fan-Out, Spatial Indexing & Multi-Channel Notification Router [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Redis Pub/Sub fan-out architecture across gateway nodes
- `[MUST-KNOW]` Presence tracking at scale (online/offline state, Redis Bitmaps & Hashes)
- `[MUST-KNOW]` Geo-indexing & proximity querying (Geohash vs Uber H3 hex-indexing for fast spatial lookups)
- `[MUST-KNOW]` Multi-Channel Notification Dispatcher — Integrating WhatsApp Cloud API (official Meta API free-tier session messages) as a primary real-time notification channel alongside WebSockets, with provider fallback and template payload rendering

💥 **`[CHAOS 3B]`**: Disconnect 10,000 WebSocket connections simultaneously; observe reconnect storm, Redis Pub/Sub fan-out latency, and backpressure.
🔎 **`[DISSECTION 3B]`**: Inspect `socket.io-redis-adapter` source code — explain how inter-node WebSocket packet broadcast and room state synchronization are orchestrated.

---

## Level 3C — Staff System Design Presentation & Diagramming Workshop

_Mastering Enterprise Cloud Topologies & Executive Design Presentation before the Level 4 Staff Defense_

### 3C.1 The Staff Engineer Presentation Framework [EXPLANATION-HEAVY]

- `[MUST-KNOW]` **The Staff Engineer Presentation Framework** — Structured 5-step presentation flow: (1) Scoping Requirements & Setting SLAs, (2) Back-of-the-Envelope Capacity Math, (3) High-Level Architecture Walkthrough, (4) Deep-Dive into Core Components & Data Schemas, (5) Proactively Defending Trade-offs & SPOFs.

### 3C.2 Enterprise Architecture Diagramming

- `[MUST-KNOW]` **Enterprise Cloud Topology Diagramming** — Visualizing multi-region architectures, edge routing (CloudFront/Route53), API Gateways, CDC event streams (Kinesis/Debezium), Event Buses (EventBridge/Kafka), Serverless vs Containerized logic tiers, Data Layer isolation (Single View / Report DB / Data Lake), and Cross-Region Replication.
- `[MUST-KNOW]` **The C4 Model for Visual System Architecture** — Context, Container, Component, and Code level diagrams; distinguishing sync API calls (solid arrows), async events (dashed arrows), and storage access links.
- `[MUST-KNOW]` **Diagramming Tools & Industry Practice** — Hands-on diagramming using Mermaid.js, Excalidraw, and cloud architecture stencils.

---

## Level 4 — Enterprise: Production Readiness at Scale

_Project: Unified Production Platform (wiring Projects 1–3 together under enterprise hardening)_

> 📦 **Level 4 Build Scope & Scope Boundaries**:
> - **MVP (Minimum Viable Version - Required to complete Level 4)**:
>   - **Gateway & Auth Tier**: Envoy or Express Gateway with JWT validation & Redis distributed rate limiting.
>   - **Service Integration**: Wire Production Service Core (Level 0B + 0C + 0D) + Product Catalog (Level 2) + Order Processing Engine (Level 3A) together behind Gateway (using gRPC Protobuf for high-performance internal inter-service RPC communication and REST/GraphQL for edge Gateway client calls).
>   - **Observability Tier**: Prometheus metrics + Grafana dashboard (p95/p99 latency, RPS, error rates) + OpenTelemetry trace propagation across services.
>   - **CI/CD & Hardening**: Helm / Docker Compose deployment with an automated `k6` load-test script in CI and a written **Production Operations Runbook**.
> - **Stretch Goals (Optional)**:
>   - Chaos injection via Pumba / Chaos Mesh in Docker container.
>   - Automated Canary rollout script with error-rate automatic rollback.

### 4.1 Microservices & Gateway [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Domain-driven design basics (bounded contexts)
- `[MUST-KNOW]` API Gateway Deep Dive & Multi-Gateway Architecture — Path-based, header-based, and weight-based routing, Multi-Gateway Topologies (External Edge Gateway for internet WAF/Auth vs Internal Mesh Gateway for microservice-to-microservice mTLS & rate limiting), Version routing at the gateway (`/v1/*` vs `/v2/*` path routing, header-based version routing `X-API-Version`), gateway auth context injection (JWT validation at gateway & forwarding user headers), config-driven vs code-driven rate limiting, gateway observability (per-route metrics & tracing), self-hosted options (Kong, Tyk, Traefik, APISIX, KrakenD), and Gateway Anti-Patterns (leaking domain business logic into gateway plugins, single-point-of-failure monolithic gateway bottlenecks, unnecessary double-hop latency penalties) `[See Also: Level 0C.5 API Versioning Engine]`
- `[MUST-KNOW]` Traffic & Rate Control Taxonomy Matrix — Rate Limiting (requests per time window), Throttling (deliberately slowing down/delaying responses vs blocking), Quotas (total usage over extended billing cycles), Admission Control (limiting max concurrent in-flight requests), and Load Shedding (dropping low-priority traffic under CPU/RAM pressure)
- `[SHOULD-KNOW]` Multi-Tenant Rate Limiting & Quota Management — Per-tenant tiered quotas (free/pro/enterprise), burst allowance token buckets, quota reset semantics (calendar month vs rolling 30 days), soft vs hard limits, and usage dashboard alerts
- `[MUST-KNOW]` Multi-Tiered Rate Limiting Architecture — Edge Rate Limiting (Cloudflare WAF / AWS Shield DDoS protection) vs Gateway Rate Limiting (Envoy/Kong distributed token bucket) vs Application-Level Rate Limiting (Redis Express middleware) `[See Also: 0B.2 Security Essentials & Rate Limiting]`

> 📌 **Diagram: Request path through three rate-limiting tiers**
```
Client Request ───▶ [Edge: Cloudflare WAF] ───▶ [Gateway: Envoy Token Bucket] ───▶ [App: Express/Redis Sliding Window] ───▶ Service Logic
                      (DDoS / IP Block)                (Global QPS Cap)                  (User / Route Tier Limits)
```
- `[SHOULD-KNOW]` Multi-Tier Rate Limiting Failure Modes & Blast Radius — edge bypass attacks, gateway Redis rate-limiter cluster failopen vs failclosed policies, application rate-limit lock contention, and compute cost trade-offs
- `[MUST-KNOW]` Resilience patterns: circuit breaker, bulkhead, rate limiting at the gateway

### 4.1b Graceful Degradation & Adaptive Load Shedding [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Graceful Degradation Strategies — Serving stale cache data during backend DB degradation, disabling non-critical UI/API widgets, and fallback response chains (primary DB → replica → L2 cache → default fallback payload)
- `[MUST-KNOW]` Bulkhead Isolation in Practice — Isolating thread pools, connection pools, and worker queues per dependency to prevent cascading failures
- `[SHOULD-KNOW]` Adaptive Load Shedding & Overload Protection — Rejecting low-priority API traffic when server CPU/RAM saturates (`503 Service Unavailable` with `Retry-After` headers), sliding window queue depth limits, and user-facing degradation banners / status page signals
- `[SHOULD-KNOW]` Chaos Engineering for Degradation — Deliberately injecting degradation modes in staging to verify fallback mechanisms

### 4.1c Advanced Gateway Edge Networking & Infrastructure Controls

- `[MUST-KNOW]` Load Balancer Health Check Mechanics & Threshold Tuning — Active (synthetic ping probes) vs Passive (in-line error rate detection) health checking, flap dampening, rise/fall failure threshold tuning, and grace period configuration
- `[MUST-KNOW]` Network Address Translation (NAT), Proxies & Header Propagation — Reverse proxy NAT traversal, trusted proxy configuration discipline, and handling client IP context headers (`X-Forwarded-For`, `X-Real-IP`, RFC 7239 `Forwarded` headers) `[Cross-Reference: Core TCP, TLS, DNS & HTTP/1–3 protocols established in Level 0D.1]`

### 4.2 Observability, Log Shipping & SRE On-Call Operations [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Metrics (Prometheus/Grafana), Structured Logs (Pino), and OpenTelemetry Distributed Tracing Architecture — `@opentelemetry/sdk-trace-node`, W3C Trace Context header propagation (`traceparent`/`tracestate`), automatic instrumentation (HTTP/Express/PG/Redis), span attributes discipline (avoiding high-cardinality label traps, semantic conventions), trace context propagation across Kafka / BullMQ queues and webhooks, trace ID in every log line, and self-hosted backends (Jaeger vs Tempo vs SigNoz)
- `[MUST-KNOW]` Production Log Shipping & Aggregation Pipeline — Stdout logging → Vector / Fluent Bit log collector → Grafana Loki / OpenSearch log indexing, log retention tiers (hot/warm/cold), PII scrubbing at the pipeline level, and trace-to-log correlation by Trace ID
- `[SHOULD-KNOW]` Observability Cost & High-Cardinality Management — avoiding the high-cardinality metric label trap in Prometheus, log volume control, dynamic trace sampling strategies (head-based vs tail-based sampling)
- `[MUST-KNOW]` SLIs/SLOs/Error Budgets & Modern Burn-Rate Alerting — defining Service Level Indicators/Objectives, error budget management, and multi-window multi-burn-rate alerting rules (e.g., paging on 2% budget burn in 1 hour vs warning on 5% burn in 6 hours per Google SRE practices)
- `[SHOULD-KNOW]` Business Metrics & Product Observability Engine — Emitting and tracking business-level KPIs (signups, successful order volume, payment conversion rate, churn indicators), User Journey Funnel Drop-off Tracking, P0 Business Anomaly Alerting (e.g. alerting when checkout completion rate drops by >30% even if technical HTTP error rate appears green), and Correlating Technical Performance to Business Impact (linking p99 latency spikes directly to checkout conversion degradation)
- `[MUST-KNOW]` On-Call Engineering & Incident Management Operations — Alert routing via Grafana OnCall / PagerDuty / Opsgenie, primary/secondary/manager escalation policies, alert fatigue tuning, silencing rules, runbook-linked alerts, Incident Command roles (Incident Commander, Tech Lead, Comms Lead), stakeholder updates, and error budget enforcement policies (deployment freezes upon budget exhaustion)
- `[MUST-KNOW]` Incident response: blameless postmortems, five whys, actionable tracked follow-ups, and writing an enterprise-grade **Production Operations Runbook** artifact for the Unified Platform's top 3 failure modes (e.g., Redis cluster memory exhaustion, Kafka consumer group lag spike, PostgreSQL primary failover timeout) with trigger alerts, diagnostic commands, mitigation steps, and rollback procedures
- `[MUST-KNOW]` Backup/restore, PITR, RTO/RPO, Backup Encryption & KMS Key Rotation (AES-256 envelope encryption for automated database snapshots, managing KMS key rotation without corrupting historical PITR backups)
- `[EXPERT]` Disaster Recovery & Multi-Region Architecture Engine — Active-passive vs active-active vs active-active-active trade-offs & costs, Regional vs Global Service Categorization (identifying stateless regional services vs stateful global data bottlenecks), Cross-Region Request Routing (latency-based, geo-proximity, health-check failover routing), Data Replication Topologies (cross-region single-leader read replicas vs multi-leader replication vs quorum consensus), Multi-Region Conflict Resolution (Last-Write-Wins / LWW, vector clocks, CRDTs `[See Also: Level 6.2 Active-Active Geo-CRDTs]`), database failover (managed vs manual, split-brain prevention), read replica promotion (promotion steps, data loss windows), async vs sync & physical vs logical data replication strategies, and Game Day execution methodology:
  - `[MUST-KNOW]` Game Day Execution — executing step-by-step incident runbooks under simulated cluster outage scenarios
  - `[MUST-KNOW]` RTO Measurement — timing Recovery Time Objective from outage trigger to healthy traffic restoration
  - `[MUST-KNOW]` RPO Measurement — calculating Recovery Point Objective data loss delta from WAL / replica snapshot timestamp
- `[MUST-KNOW]` Load/stress/spike/soak testing, chaos engineering basics

### 4.3 Security & Compliance [EXPLANATION-HEAVY]

- `[MUST-KNOW]` OAuth2 (PKCE) / OIDC
- `[MUST-KNOW]` Secrets Management & Operational Secret Rotation — HashiCorp Vault dynamic secrets, secret rotation without downtime (dual-secret window), database IAM credential rotation, API key rotation, and CI secret sprawl detection (TruffleHog/Gitleaks)
- `[MUST-KNOW]` OWASP API Security Top 10
- `[SHOULD-KNOW]` Advanced Application Security — SSRF (Server-Side Request Forgery) mitigation (DNS pinning, internal private IP blocking), unsafe deserialization protection, and Supply-Chain Security & Software Bill of Materials (SBOM generation via Syft, container & dependency vulnerability scanning via Trivy/Snyk)
- `[EXPERT]` CI/CD Pipeline Security & Artifact Attestation — Cryptographically signed commits & verified build pipelines (Sigstore, Cosign, SLSA Level 3 compliance framework), Build Provenance Attestation (verifying artifact build origin & git commit SHA), Dependency Confusion & Namespace Squatting Protection (scoped npm registries & private package isolation), Pre-commit & Pre-push CI Secret Scanning (TruffleHog, Gitleaks hooks), and Container Image Signing & Enforcement (Cosign, Docker Notary, K8s Kyverno / OPA Gatekeeper verification policy)
- `[EXPERT]` Privacy Engineering & Global Compliance Architecture — GDPR cascading deletion pipelines (`right-to-be-forgotten`), CCPA/CPRA opt-out mechanisms, HIPAA health data encryption & Business Associate Agreement (BAA) isolation, PCI-DSS payment scope minimization & tokenization, data residency & localization enforcement (in-region data isolation), cross-border data transfer controls (Schrems II & Standard Contractual Clauses / SCCs), jurisdiction-aware PII classification, technical & legal definitions of Pseudonymization vs Anonymization, user right-to-access & data rectification APIs, and granular per-purpose consent tracking management

### 4.4 Cloud-Native, GitOps & FinOps Cost Engineering [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Infrastructure-as-Code (IaC) with Terraform / OpenTofu — declarative state management, state locking, modular infrastructure provisioning, drift detection, and automated K8s cluster / cloud resource deployment via CI/CD pipelines
- `[MUST-KNOW]` Kubernetes essentials: pods, deployments, services, ingress, HPA
- `[MUST-KNOW]` CI/CD, GitOps & Production Deployment Sequencing — Declarative GitOps workflows (ArgoCD/Flux), zero-downtime deployment sequencing (running DB schema migrations via K8s InitContainers/Helm pre-install hooks BEFORE app pod rollouts), Expand-Contract migration step orchestration, and health-check gate verification
- `[MUST-KNOW]` Feature Flags & Progressive Delivery Engineering — Release vs ops vs experiment flags, server-side vs edge evaluation (OpenFeature SDK / Unleash), user segment targeting rules, percentage rollouts, API Version Rollouts as Progressive Delivery (canary v2 rollout to 1% → 10% → 100% of traffic), flag debt cleanup, and per-tenant kill switches `[See Also: Level 0C.5 API Versioning Engine]`
- `[SHOULD-KNOW]` Consumer-Driven Contract Testing (Pact) — schema evolution validation & non-breaking API contract enforcement across microservice boundaries in CI/CD pipelines
- `[MUST-KNOW]` Automated Performance Regression Testing in CI — automated k6/Autocannon load testing scripts executing as quality gates to fail PR builds on p99 latency regressions
- `[SHOULD-KNOW]` Automated Chaos & Resilience Gates in Staging — fault injection testing (pod kills, latency injection via Pumba/Chaos Mesh) integrated into deployment pipelines before production cutover
- `[SHOULD-KNOW]` FinOps Cost Engineering & Operational Cost Tracking — OpenCost / Kubecost for K8s container cost attribution, cloud resource tagging, per-service/per-team/per-tenant cost dashboards, cost anomaly spike alerts, cloud egress cost optimization, and unit economics trends ($/request, $/tenant, $/transaction over time)
- `[MUST-KNOW]` Self-Hosted vs Managed Infrastructure Decision Framework — Evaluating cost thresholds, engineering team operational overhead, custom control vs time-to-market speed, regulatory compliance boundaries, reliability/SLA guarantees, and bidirectional migration paths (self-hosted Docker/K8s $\rightarrow$ managed cloud PaaS/DBaaS and cloud cost repatriation back to self-hosted/bare-metal)
- `[MUST-KNOW]` Multi-Environment Deployment & Parity Discipline — 12-Factor App methodology (config separation, backing service abstraction, dev/prod parity), Staging vs Production Drift Mitigation (feature flag synchronization, data shape alignment, load parity), Production-Like Test Data Pipelines (anonymized data subsetting, synthetic data generation), Ephemeral Preview Environments (per-PR dynamic K8s namespace provisioning), and Deployment Rollback Protocols (instant automated image rollback vs roll-forward-only schema migration policies)
- `[MUST-KNOW]` Deployment Strategy Trade-Off Comparison Matrix — Blue-Green (2x compute cost overhead, instant router cutover/rollback, stateful DB migration challenges) vs Canary (1%-100% granular traffic routing, low initial blast radius, requires deep observability metrics) vs Rolling Deployments (zero extra infrastructure cost, gradual pod replacement, harder mid-rollout rollback complexity), and deployment selection decision matrices for production workloads

### 4.4b Shift-Right Testing & Production Verification

- `[SHOULD-KNOW]` Production Canary Testing & Probes — Automated smoke tests against canary instances, synthetic endpoint monitoring probes (Grafana Synthetic / Checkly), dark launches (routing production traffic to new code paths without user impact), shadow traffic duplication (mirroring live production requests to new versions), and controlled production chaos testing (isolated blast radius & kill switches)

### 4.5 When Not To Reach For It: A Staff Engineer's Restraint Checklist [EXPLANATION-HEAVY]

- `[MUST-KNOW]` **When NOT to Use Microservices** — Why modular monoliths (single deployable, strict domain boundaries) are superior for early/mid-stage products; operational overhead of distributed tracing, network boundaries, independent deployment pipelines, and multi-service Saga transaction complexity vs in-process DB transactions.
- `[MUST-KNOW]` **When NOT to Use Kafka / Complex Event Streams** — When SQS, RabbitMQ, BullMQ/Redis Streams, or PostgreSQL transactional outbox are sufficient; operational burden of ZooKeeper/KRaft cluster management, partition rebalancing stalls, log retention disk management, and partition key hot-spots.
- `[MUST-KNOW]` **When NOT to Use Distributed Caching (Redis/Memcached)** — When in-process L1 local cache (`lru-cache`, Guava) or HTTP response headers (`Cache-Control`, CDN) are sufficient; invalidation synchronization race conditions, network hop latency, serialization CPU overhead, and Redis cluster memory cost.
- `[MUST-KNOW]` **When NOT to Use Asynchronous Event-Driven Architectures** — When synchronous HTTP/gRPC API calls are simpler, easier to debug, and provide immediate client response feedback; eventual consistency anomalies, out-of-order execution bugs, DLQ processing debt, and distributed call-chain tracing complexity.
- `[MUST-KNOW]` **When NOT to Database-Shard** — When vertical instance scaling (larger NVMe DB node), read-replicas, partitioning, or tactical denormalization suffice; cross-shard joins, distributed re-sharding migrations, loss of ACID multi-row transactions, and global unique ID generation complexity.
- `[MUST-KNOW]` **When NOT to Add a CDN / Edge Infrastructure** — When static assets are small/infrequently accessed or served directly behind an Nginx/Envoy reverse proxy; origin shielding overhead, cache key invalidation complexity, purge latency, and edge bandwidth cost trade-offs.
- `[MUST-KNOW]` **When NOT to Use GraphQL** — When REST endpoints with Zod/OpenAPI contracts or gRPC suffice; N+1 query vulnerability, loss of native HTTP response caching, gateway query parser CPU overhead, and GraphQL Schema Federation operational complexity.
- `[MUST-KNOW]` **When NOT to Use NoSQL / Document Stores** — When data requires relational integrity, multi-entity transactions, or ad-hoc analytics; document duplication debt, schema-less application runtime bug accumulation, and client-side join performance penalties.

🏛️ **`[DEFENSE 4]`**: You present your Unified Production Platform architecture (wiring Production Service Core 0B + 0C + 0D + Product Catalog 2 + Order Processing 3A, with optional Real-Time Chat 3B stretch goal, behind Envoy Gateway with OpenTelemetry, K8s, and Canary rollouts). The AI conducts a formal 30-minute Staff Architect Mock Interview, grilling your design on: 10x/100x traffic spikes, multi-region failover, gateway throughput bottlenecks, database connection pool exhaustion, and cascading failure isolation.
🔎 **`[DISSECTION 4]`**: Inspect Envoy Proxy's rate-limiting filter definitions (`ratelimit.proto` & Envoy rate-limit service) — explain gRPC interface design for high-throughput edge filters.

---

## Level 5 — MAANG: High-Scale System Design Capstones [EXPLANATION-HEAVY]

_Design-depth walkthroughs executed like a senior FAANG staff architect. **Level 5 is strictly Design-Only (Untimed Active Paper Drills & Mock Staff Defenses)** — building all 10 systems at MAANG scale in production code would take 6+ months; instead, you master them by sketching architecture at your own pace (no pressure/timer), presenting to the AI for an active Staff Architect Defense, and evaluating against reference solution blueprints:_

> 📦 **Standardized 6-Stage Capstone Blueprint**:
>
> 1. **Requirements & Scope**: Functional requirements + Non-Functional (p99 latency, 99.999% availability, consistency guarantees).
> 2. **Capacity Estimation & Math**: QPS/RPS, RAM cache sizing, disk IOPS, network ingress/egress bandwidth, 5-year storage growth.
> 3. **High-Level Design (HLD) & Architecture Diagramming**: End-to-end component flow (DNS/Edge → API Gateway → Logic Services → Event Bus → Tiered Storage → Cross-Region Replication).
> 4. **Low-Level Component Deep-Dive (LLD)**: Exact database schemas/indexes, key generation, partition keys, API contracts, local L1/L2 caching.
> 5. **Technical Trade-offs & Evaluation**: SQL vs NoSQL vs Columnar vs Inverted Index, push vs pull, sync vs async boundaries.
> 6. **Failure Modes, Bottlenecks & Edge Cases**: Partition failures, hot-key mitigation, split-brain, queue lag, network partition recovery.

> 🏛️ **Active Capstone Defense Protocol**:
> For every capstone, you execute an **untimed active design drill & defense**:
>
> 1. **Sketch at Your Pace**: You independently sketch the HLD, back-of-envelope math, and component boundaries on paper or Excalidraw (no timer/pressure).
> 2. **Staff Architect Mock Defense**: You present your design, and the AI acts as a FAANG Staff Engineer, grilling your choices on SPOFs, 10x/100x traffic spikes, and failure modes.
> 3. **Design Doc Artifact**: You write a 1-page System Design Document artifact (`system_design.md`) per capstone (10 distinct 1-page documents total across Level 5) summarizing requirements, capacity math, HLD, and trade-offs.
> 4. **Reference Overlay & Gap Analysis**: We compare your design doc against the staff-architect reference blueprint to identify missing cache tiers, capacity under-estimations, or unhandled edge cases.

---

### 🏗️ The 10 High-Scale Capstones

#### 5.1 URL Shortener at 100M DAU Scale

- **5.1.1 Requirements & Capacity**: 100M daily active users (DAU), 10:1 read-to-write ratio, 100M write requests/day (~1,200 write QPS avg, ~2,500 write QPS peak), 1B read requests/day (~11,500 read QPS avg, ~25,000–50,000 read QPS peak; load-test capacity design for 100,000 QPS peak).
- **5.1.2 HLD & Component Flow**: Edge CDN → API Gateway → Shortening Service → Redis L2 Cache → Base62 Key Generator → Distributed NoSQL (Cassandra/DynamoDB).
- **5.1.3 Deep-Dive Topics**: Pre-generated unique ID key generation service (KGS) vs on-the-fly hash collision handling; Base62 encoding strategy; LRU Redis caching for hot links (top 20%).
- **5.1.4 Trade-offs & Failure Modes**: Base62 vs UUID vs auto-increment; KGS single point of failure mitigation; cache stampede on viral short URLs.
- 🏛️ **`[DEFENSE 5.1]`**: _Sketch URL Shortener on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

#### 5.2 Distributed Key-Value Store (Dynamo-Style)

- **5.2.1 Requirements & Capacity**: Sub-10ms read/write p99 latency, zero single point of failure, configurable read/write consistency ($N, R, W$).
- **5.2.2 HLD & Component Flow**: Client SDK → Anycast Load Balancer → Coordinator Node → Consistent Hash Ring → Partitioned Storage Engines (LSM-Tree / RocksDB).
- **5.2.3 Deep-Dive Topics**: Consistent hashing with virtual nodes; Sloppy Quorum & Hinted Handoff; Vector clocks / Lamport timestamps for concurrent write conflict resolution; Read Repair & Anti-Entropy via Merkle trees.
- **5.2.4 Trade-offs & Failure Modes**: Strong consistency vs High availability (CAP theorem in practice); Network partitions during multi-node writes; Cascading node failures on ring resharding.
- 🏛️ **`[DEFENSE 5.2]`**: _Sketch Dynamo KV Store on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

#### 5.3 Real-Time Chat & Presence Platform (WhatsApp / Discord Style)

- **5.3.1 Requirements & Capacity**: 50M total concurrent WebSocket connections across the cluster fleet (~100k–500k active connections per gateway node across a 100–500 node fleet), 2B messages/day, sub-100ms message delivery, online/offline presence tracking.
- **5.3.2 HLD & Component Flow**: Client → Gateway Cluster (WebSocket/gRPC) → Connection Manager → Presence Service (Redis Bitmaps/Hashes) → Message Routing Engine → Kafka Event Bus → Distributed Storage (ScyllaDB / Cassandra).
- **5.3.3 Deep-Dive Topics**: Connection state holding & heartbeat protocols; Channel/Group message fan-out strategies; Sequence numbering for message ordering; Push notification fallback for offline users.
- **5.3.4 Trade-offs & Failure Modes**: WebSocket connection density per node (C10M problem); Group chat fan-out amplification (100k member group write amplifications); Disconnected client re-syncing without gaps.
- 🏛️ **`[DEFENSE 5.3]`**: _Sketch Chat & Presence on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

#### 5.4 Geo-Spatial Ride Dispatch System (Uber / Lyft Style)

- **5.4.1 Requirements & Capacity**: 1M active drivers updating location every 4s, 100k trip requests/min, sub-2s matching latency, real-time location tracking.
- **5.4.2 HLD & Component Flow**: Driver App → Location Ingestion Service → Geo-Index Cluster (Redis Geo / H3 spatial index) → Matching Engine → Rider App API → Trip State Machine DB.
- **5.4.3 Deep-Dive Topics**: Geohash vs Uber H3 hex-indexing for fast spatial proximity queries; Memory-efficient driver location storage; Distributed lock reservation for driver matching (preventing double-dispatch).
- **5.4.4 Trade-offs & Failure Modes**: In-memory spatial index vs DB spatial indexes (PostGIS); Driver location ping throttling under cellular congestion; Surge pricing calculation pipeline delays.
- 🏛️ **`[DEFENSE 5.4]`**: _Sketch Uber Dispatch on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

#### 5.5 Financial Ledger & Payments Engine (Stripe / Square Style)

- **5.5.1 Requirements & Capacity**: Double-entry bookkeeping, absolute zero discrepancy guarantee, ACID compliant, auditability, 10k transactions/sec.
- **5.5.2 HLD & Component Flow**: Merchant API → Idempotency Gateway → Payment Orchestrator → Ledger Service (Postgres / Spanner) → Async Settlement Consumer → Bank/PSP Adapters.
- **5.5.3 Deep-Dive Topics**: Double-entry journal entry schemas (Debits = Credits constraint); Strict idempotency key lifecycle with locking; Two-phase commit (2PC) or Saga orchestration for multi-bank settlements.
- **5.5.4 Trade-offs & Failure Modes**: Relational ACID database vs Distributed Event Ledger; Handling external payment gateway timeouts/unknown states; Reconciliation pipeline for out-of-order webhook callbacks.
- 🏛️ **`[DEFENSE 5.5]`**: _Sketch Payment Ledger on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

#### 5.6 Scalable News Feed & Social Timeline (Twitter / Instagram Style)

- **5.6.1 Requirements & Capacity**: 300M daily active users (DAU), 500M posts/day (~6,000 tweets/sec average write QPS, ~50,000–150,000 tweets/sec peak write QPS during breaking events), 12B timeline reads/day (~140,000 avg read QPS, ~300,000 peak read QPS), timeline generation latency < 200ms p99.
- **5.6.2 HLD & Component Flow**: User App → Post Ingestion Service → Fanout Worker Pool → Redis Timeline Cache → Storage Cluster → News Feed Query API.
- **5.6.3 Deep-Dive Topics**: Fanout-on-Write (Push model for regular users) vs Fanout-on-Read (Pull model for celebrity/hot accounts with millions of followers); Hybrid fanout architecture; Timeline pagination mechanics.
- **5.6.4 Trade-offs & Failure Modes**: Memory consumption of timeline Redis caches vs DB query overhead; Celebrity post spikes ("Justin Bieber effect"); Cache eviction of inactive user feeds.
- 🏛️ **`[DEFENSE 5.6]`**: _Sketch News Feed on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

#### 5.7 Video Streaming & Transcoding Pipeline (YouTube / Netflix Style)

- **5.7.1 Requirements & Capacity**: 100k video uploads/day, HLS/DASH multi-bitrate adaptive streaming, global sub-second startup latency.
- **5.7.2 HLD & Component Flow**: Video Upload API → S3 Raw Bucket → Transcoding Orchestrator (Temporal/Step Functions) → Worker Farm (FFmpeg) → HLS Segmenter → S3 Master Bucket → CDN POP Network.
- **5.7.3 Deep-Dive Topics**: Chunked/multipart video ingestion; Adaptive Bitrate Streaming (ABR) file partitioning (`.m3u8` playlists & `.ts` segments); Dynamic CDN origin shielding & edge caching strategies.
- **5.7.4 Trade-offs & Failure Modes**: CPU-intensive transcoding worker scaling vs spot instance preemption; CDN cache miss spikes on newly released viral videos; Storage cost optimization (hot vs cold tier video archiving).
- 🏛️ **`[DEFENSE 5.7]`**: _Sketch Video Pipeline on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

#### 5.8 Distributed Notification Platform (Twilio / Firebase Style)

- **5.8.1 Requirements & Capacity**: 1B notifications/day across Push (APNs/FCM), SMS, Email, and In-App channels with rate-limiting & preference enforcement.
- **5.8.2 HLD & Component Flow**: Triggering Services → Gateway API → User Preference Engine → Message Priority Queues (RabbitMQ/Kafka) → Provider Adapters (SendGrid/Twilio/FCM) → Feedback Receiver.
- **5.8.3 Deep-Dive Topics**: Per-user channel preferences & quiet hours rules; Priority queueing (transactional OTP notifications vs promotional marketing); Distributed rate-limiting per provider & per user.
- **5.8.4 Trade-offs & Failure Modes**: Provider downtime fallback routing; Duplicate notification suppression; Handling massive broadcast campaigns (e.g., 50M push notifications in 5 minutes).
- 🏛️ **`[DEFENSE 5.8]`**: _Sketch Notification Engine on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

#### 5.9 Cloud Storage & File Sync Engine (Dropbox / Google Drive Style)

- **5.9.1 Requirements & Capacity**: 500M users, multi-device real-time sync, delta synchronization, block-level deduplication.
- **5.9.2 HLD & Component Flow**: Desktop/Mobile Client → Block Splitter → Metadata API → Content-Defined Chunking Engine → S3 Block Store → Notification Server (Long Polling/WebSockets).
- **5.9.3 Deep-Dive Topics**: Fast CDC (Content-Defined Chunking using Rabin Fingerprinting); SHA-256 block deduplication across tenants; File metadata database schemas; Efficient delta sync algorithms (rsync style).
- **5.9.4 Trade-offs & Failure Modes**: Local file system watcher events vs sync server polling; Conflict resolution when same file edited offline on two devices; Network interruption during multi-gigabyte upload.
- 🏛️ **`[DEFENSE 5.9]`**: _Sketch Cloud Sync Engine on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

#### 5.10 Real-Time Collaborative Document Editor (Google Docs / Figma Style)

- **5.10.1 Requirements & Capacity**: Multi-user concurrent editing in same document, sub-50ms keystroke sync, conflict-free state convergence, undo/redo history.
- **5.10.2 HLD & Component Flow**: Client Editor → WebSocket Gateway → Room/Document Server → State Conflict Engine → Snapshot DB (Postgres) + Transaction Log DB.
- **5.10.3 Deep-Dive Topics**: Operational Transformation (OT) vs Conflict-Free Replicated Data Types (CRDTs: LWE/Yjs/Automerge); Operation sequence numbers & vector clocks; Document snapshot generation & log compaction.
- **5.10.4 Trade-offs & Failure Modes**: Centralized server OT vs Peer-to-peer CRDT memory footprint; Network jitter causing out-of-order operation arrival; Room server failover with active WebSocket connections.
- 🏛️ **`[DEFENSE 5.10]`**: _Sketch Collaborative Editor on paper at your pace → Present to Staff Architect for live grilling → Overlay reference blueprint & Gap Analysis._

---

## Level 6 — Extreme Distributed Systems (Awareness Protocol Only) [EXPLANATION-HEAVY]

_No hands-on build for this level — AI writes one concise, high-impact conceptual breakdown per subtopic (what it is, why it exists, where it's used in production at scale), and you confirm literacy by restating the core mechanics in your own words before advancing._

### 6.1 Ultra-Low Latency Engineering

- `[EXPERT]` Kernel-bypass concepts (DPDK, eBPF zero-copy networking) — sub-microsecond trading systems and packet processing
- `[EXPERT]` LMAX Disruptor pattern — lock-free ring buffer, mechanical sympathy, zero-allocation data structures in ultra-high-throughput exchanges

### 6.2 Globally Distributed Active-Active Architecture

- `[EXPERT]` Geo-distributed DB architecture (Spanner, CockroachDB), TrueTime, Paxos across multi-region active-active deployments
- `[EXPERT]` Multi-region active-active routing (Anycast, edge compute) & Geo-CRDT conflict resolution

### 6.3 Zero-Downtime & Self-Healing Operations

- `[EXPERT]` Billion-row live schema migrations (dual-write, shadow verification, atomic cutover) on multi-terabyte production databases
- `[EXPERT]` Cell-based architecture — partitioning infrastructure into isolated blast-radius cells for fault isolation

### 6.4 WebAssembly in the Backend & Edge Compute

- `[EXPERT]` Wasm runtime internals (Wasmtime, Wasmer), `proxy-wasm` plugin filters in Envoy gateways, sandboxed user-code execution

### 6.5 Advanced Consensus Engines & Formal Verification

- `[EXPERT]` Raft vs Multi-Paxos vs EPaxos (Egalitarian Paxos without leader bottlenecks)
- `[EXPERT]` TLA+ & Formal Verification — mathematically proving distributed protocol correctness (how AWS / MongoDB prevent subtle concurrency bugs)

### 6.6 Distributed Clocks & Physical Time Mechanics

- `[EXPERT]` NTP vs PTP (Precision Time Protocol) vs Hybrid Logical Clocks (HLCs)
- `[EXPERT]` Bounded clock uncertainty & external consistency — Google Spanner TrueTime (GPS + Atomic clocks) vs CockroachDB HLCs

---

## Level 7 — High-Scale AI Infrastructure & Systems Engineering (Extension / Optional)

_Building high-performance backend infrastructure for AI models, vector search, RAG pipelines, and autonomous agents. **Level 7 is a Hybrid Module**: Subtopics 7.1–7.5 feature hands-on code drills (benchmarking vector search, building Express LLM Gateways with Redis caching, Docker sandbox isolation), while Capstone 7.6 is a comprehensive design defense with an optional prototype build._

### 7.1 Vector Storage Engines & Similarity Indexing [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Vector Embeddings & High-Dimensional Distance Metrics — Cosine similarity, Dot product, Euclidean distance ($L_2$) vector space math
- `[MUST-KNOW]` Vector Indexing Algorithms — Hierarchical Navigable Small World (HNSW) graph search, Inverted File Index (IVF), and Product Quantization (PQ) vector compression
- `[MUST-KNOW]` Self-Hosted Vector Databases — PostgreSQL `pgvector` extension vs standalone Qdrant/Milvus cluster architecture; hybrid metadata filtering (pre-filtering vs post-filtering) `[Cross-ref Level 3A.2 Database Scaling]`
- `[SHOULD-KNOW]` Failure Modes & Bottlenecks — High HNSW RAM consumption, vector index rebuild latency/locking, curse of dimensionality, embedding drift during re-indexing
- 🧪 **`[DRILL 7.1]`**: Benchmark HNSW vs IVF index recall precision ($@k$) and query p99 latency on a 1M vector dataset using `pgvector` / `Qdrant`.

### 7.2 Production Retrieval-Augmented Generation (RAG) Infrastructure & Evaluation [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Multi-Stage Retrieval Pipelines — Sparse (BM25 full-text keyword) + Dense (Vector embedding) Hybrid Search integration `[Cross-ref Level 1.5 Search & Caching]`
- `[SHOULD-KNOW]` Reciprocal Rank Fusion (RRF) & Cross-Encoder Re-Ranking — Re-ranking top-$k$ candidate documents before context window injection
- `[MUST-KNOW]` Chunking & Embedding Strategies — Semantic chunking, sliding window overlap, parent-child document retrieval, and semantic embedding cache layers
- `[SHOULD-KNOW]` Rigorous RAG Evaluation Framework — Offline eval (NDCG@k, Recall@k, Context Recall, Context Precision, Faithfulness via Ragas) vs Online eval (LLM-as-a-judge, A/B query testing, human feedback loops)
- `[SHOULD-KNOW]` Failure Modes & Bottlenecks — Hallucination due to retrieval noise, context window truncation, retrieval drift, stale document chunk updates
- 🧪 **`[DRILL 7.2]`**: Build a high-throughput hybrid RAG retrieval pipeline with cross-encoder re-ranking and measure context recall@10.

### 7.3 LLM Gateway & Inference Serving Infrastructure [EXPLANATION-HEAVY]

- `[EXPERT]` LLM Serving Optimization Mechanics — KV-Cache memory management, PagedAttention, Continuous Batching, Quantization (AWQ/GPTQ/GGUF fp16 -> int4/int8 trade-offs), and serving runtimes (vLLM, TGI, Ollama internal architectures)
- `[MUST-KNOW]` Streaming Response APIs — Server-Sent Events (SSE) and gRPC streaming for token-by-token generation with client backpressure handling `[Cross-ref Level 3A.3 Messaging]`
- `[MUST-KNOW]` Enterprise LLM Gateway Router — Multi-provider failover routing (OpenAI/Anthropic/Local vLLM), semantic caching (caching prompt embeddings in Redis), token rate-limiting (token bucket per tenant), and usage/cost accounting
- `[SHOULD-KNOW]` Failure Modes & Bottlenecks — KV-cache OOM spikes during long context requests, tail latency spikes during continuous batching saturation, provider rate limit exhaustion
- 🧪 **`[DRILL 7.3]`**: Build an Express/TypeScript LLM Gateway with semantic prompt caching (Redis + pgvector), SSE streaming, and tenant token rate-limiting.

### 7.4 Autonomous Agent Orchestration, Guardrails & Execution [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Agent Architecture & Loops — ReAct (Reason + Act) loop, Plan-and-Execute pattern, Short-term vs Long-term Agent Memory (Vector DB + Redis session state), and Multi-Agent Orchestration graphs (LangGraph/XState) `[Cross-ref Level 3A.3 Task Queues]`
- `[MUST-KNOW]` Tool Execution & Sandboxing — Safe tool-calling schemas, Docker containerized code execution sandboxes, dynamic schema generation, asynchronous task queue execution
- `[MUST-KNOW]` Safety Guardrails & Dynamic Steering — Input sanitization (PII redaction, prompt injection defense), output schema enforcement (Zod/TypeBox), structured JSON repair, and failure recovery (max iteration limits, tool retry fallbacks)
- `[SHOULD-KNOW]` Failure Modes & Bottlenecks — Infinite reasoning loops, tool-calling schema hallucination, memory leaks across multi-turn agent sessions, untrusted code sandbox escape risk
- 🧪 **`[DRILL 7.4]`**: Build a sandboxed AI Agent tool-calling execution engine with Zod schema validation and Docker container isolation.

### 7.5 Real-Time Feature Stores & ML Pipeline Infra [EXPLANATION-HEAVY]

- `[MUST-KNOW]` Dual-Storage Feature Store Architecture — Online Feature Store (sub-5ms Redis/DynamoDB lookups) vs Offline Feature Store (S3/Parquet batch analytics)
- `[SHOULD-KNOW]` Feature Synchronization & Ingestion — Real-time stream feature ingestion (Kafka + Feast) vs batch ETL synchronization
- `[EXPERT]` Point-in-Time Correctness — Preventing data leakage in ML training sets via temporal joins
- `[EXPERT]` Recommender System Pipelines — Candidate generation → Ranking → Re-ranking → Business logic filters
- `[SHOULD-KNOW]` Failure Modes & Bottlenecks — Online/Offline feature asymmetry, stream ingestion lag causing stale feature serving, memory pressure on online Redis cache
- 🧪 **`[DRILL 7.5]`**: Implement an online feature store using Redis & Feast, fetching real-time user features at sub-5ms p99 latency.

---

### 🏆 Level 7 Capstone Build — Production Enterprise AI Gateway & Hybrid RAG Engine [EXPLANATION-HEAVY]

_Build an enterprise-grade AI Gateway and Hybrid RAG Engine in TypeScript/Docker with semantic caching, multi-provider fallback, vector search, and evaluation metrics._

- **7.6.1 Requirements & Capacity**: 1,000 QPS prompt throughput, sub-20ms cache hit response, streaming token responses, sub-100ms hybrid retrieval latency across 500k embedded documents.
- **7.6.2 HLD & Component Flow**: Client Request → Enterprise LLM Gateway → Semantic Cache (Redis + pgvector) → [If Cache Miss] BM25 + Vector Hybrid Retrieval → Cross-Encoder Re-Ranker → vLLM / External Provider Router → SSE Streaming Response Generator → Usage Billing Audit Queue (Kafka).
- **7.6.3 Deep-Dive Topics**: PagedAttention vs KV-Cache reuse; Hybrid RAG (BM25 + pgvector) with RRF re-ranking; Semantic prompt embedding distance thresholds; Token-bucket rate limiting per tenant API key.
- **7.6.4 Trade-offs & Failure Modes**: High precision vs recall in semantic caching; Fallback latency penalty when primary LLM provider times out; RAM footprint of cross-encoder models vs latency.
- 🏛️ **`[DEFENSE 7.6]`**: _Sketch Enterprise AI Gateway & RAG Engine on paper at your pace → Present to Staff Architect for live grilling → Write 1-page design doc artifact → [Optional] Build prototype implementation in TypeScript/Docker._

---

## 📖 Module A — Enterprise & MAANG Case Study Vault

_Mapped directly to roadmap levels for active reinforcement during topics. Each gets researched fresh (with current sources) when we cover it._

- **Discord's migration from Cassandra to ScyllaDB** `[Reinforces Level 2.2 NoSQL & Level 3A.2 Database Scaling]`
- **Instagram's Postgres sharding strategy** `[Reinforces Level 0C.1 SQL & Level 3A.2 Database Scaling]`
- **GitHub's zero-downtime MySQL → Vitess sharding migration** `[Reinforces Level 3A.2 Database Scaling & Sharding]`
- **Shopify's Pods architecture (scaling the monolith via cells)** `[Reinforces Level 4.1 Microservices, Level 4.5 Staff Restraint & Level 6.3 Cell Architecture]`
- **Amazon Prime Video's microservices → monolith reversal** `[Reinforces Level 4.1 Microservices & Level 4.5 Staff Restraint]`
- **Segment's famous $1M Kafka incident postmortem** `[Reinforces Level 3A.3 Event Streams, Level 3A.5 Webhooks & Level 4.5 Staff Restraint]`
- **Cloudflare's postmortem culture & global outage RCAs** `[Reinforces Level 4.2 SRE & Level 4.1 Gateway Edge]`
- **Reddit's queue architecture & early scaling post-mortems** `[Reinforces Level 3A.3 Messaging & Event Streams]`
- **Stripe's ledger and idempotency-key architecture** `[Reinforces Level 0B.3 Idempotency & Level 5.5 Ledger]`
- **Stripe's date-based API versioning and per-request transformation layer** `[Reinforces Level 0C.5 API Versioning Engine & Level 4.1 Gateway Routing]`
- **Uber's H3 geospatial indexing and dispatch system evolution** `[Reinforces Level 3B.2 Real-Time Spatial & Level 5.4 Uber]`
- **Netflix's chaos engineering culture & multi-region setup** `[Reinforces Level 4.2 SRE & Level 6.2 Active-Active]`
- **Airbnb's service mesh & migration to SOA** `[Reinforces Level 4.1 Microservices & Gateway]`
- **Facebook/Meta's TAO (social graph) and Haystack (photo storage)** `[Reinforces Level 1.5 Caching, Level 2.2 Graph Stores, Level 2.4 Unstructured Storage & Module B TAO Paper]`
- **Google GFS & Bigtable Architecture in Practice** `[Reinforces Level 2.2 Wide-Column, Level 2.4 Object Storage & Module B Papers]`
- **Amazon's original Dynamo paper vs DynamoDB productization** `[Reinforces Level 3A.4 Consensus & Level 5.2 Dynamo KV]`
- **Slack's job queue and channel fan-out architecture** `[Reinforces Level 3A.3 Messaging & Level 5.3 Real-Time Chat]`
- **WhatsApp's famously small server footprint** `[Reinforces Level 1.1b Deep Node.js Engine & Level 5.3 Chat]`
- **LinkedIn's Kafka origin story** `[Reinforces Level 3A.3 Messaging & Event Streams]`
- **Figma/Google Docs: CRDT vs OT trade-offs in practice** `[Reinforces Level 5.10 Collaborative Editor]`

---

## 📄 Module B — Seminal Systems Papers [EXPLANATION-HEAVY]

_Classic systems papers mapped directly to roadmap levels. Mapped with estimated reading time budgets, depth targets, and "why this matters today" relevance annotations._

- **Lamport's Time, Clocks, and the Ordering of Events (Lamport, 1978)** `[Reinforces Level 3A.4 & Level 6.6]` — *Time Budget: 45 mins | Target: Full Deep Read* (Logical clocks, partial ordering, total ordering state machines).
  💡 *Why this matters today: Foundation of all distributed event sequencing, hybrid logical clocks (HLC), and multi-datacenter event ordering.*
- **Sagas (Garcia-Molina & Salem, 1987)** `[Reinforces Level 3A.3 Event Architecture]` — *Time Budget: 45 mins | Target: Abstract & Architecture Only* (Long-lived transactions split into compensating step pairs).
  💡 *Why this matters today: The blueprint for modern microservice distributed transactions and eventual consistency without 2PC.*
- **Paxos Made Simple (Lamport, 2001)** `[Reinforces Level 3A.4 Consensus]` — *Time Budget: 60 mins | Target: Full Deep Read* (Proposer/Acceptor/Learner phases, consensus invariant proofs).
  💡 *Why this matters today: The bedrock consensus protocol underpinning Spanner, Chubby, Cassandra, and distributed state machines.*
- **Chord: A Scalable Peer-to-peer Lookup Service (Stoica et al., 2001)** `[Reinforces Level 3A.1 Scalability & Sharding]` — *Time Budget: 45 mins | Target: Abstract & Architecture Only* (Distributed Hash Tables (DHT), finger tables, consistent hashing keyspace routing).
  💡 *Why this matters today: The precursor to modern database sharding, Dynamo node placement, and distributed cache ring routing.*
- **Google GFS Paper (Ghemawat et al., 2003)** `[Reinforces Level 2.4 Object/File Storage]` — *Time Budget: 45 mins | Target: Abstract & Architecture Only* (Single master bottleneck trade-offs, 64MB chunking, append-only record streams).
  💡 *Why this matters today: Inspired HDFS, S3 architectures, and modern blob storage engines.*
- **Google MapReduce Paper (Dean & Ghemawat, 2004)** `[Reinforces Level 2.4 Data Pipelines]` — *Time Budget: 45 mins | Target: Abstract & Architecture Only* (Map vs Reduce phase split, worker fault tolerance, data locality optimization).
  💡 *Why this matters today: Launched modern big data processing (Hadoop, Spark, Flink).*
- **Google Bigtable Paper (Chang et al., 2006)** `[Reinforces Level 2.2 Wide-Column Stores]` — *Time Budget: 60 mins | Target: Abstract & Architecture Only* (SSTable/LSM-tree mechanics, GFS dependency, sparse multidimensional sorted map).
  💡 *Why this matters today: Underpins Cassandra, HBase, RocksDB, and high-throughput write-heavy storage engines.*
- **Amazon Dynamo Paper (DeCandia et al., 2007)** `[Reinforces Level 2.2 KV Stores & Level 3A.2 Sharding]` — *Time Budget: 90 mins | Target: Full Deep Read* (Consistent hashing, vector clocks, quorum reads/writes `N+R>W`, sloppy quorums & hinted handoff).
  💡 *Why this matters today: The foundational paper for eventual consistency, AP system design, DynamoDB, and ScyllaDB.*
- **Google Dapper Paper (Sigelman et al., 2010)** `[Reinforces Level 0A.3 Trace Correlation & Level 4.2 SRE]` — *Time Budget: 45 mins | Target: Abstract & Architecture Only* (Trace context propagation, span IDs, low-overhead out-of-band trace sampling).
  💡 *Why this matters today: The exact blueprint for OpenTelemetry, Jaeger, Zipkin, and microservice distributed tracing.*
- **Google Dremel Paper (Melnik et al., 2010)** `[Reinforces Level 2.2 Columnar OLAP]` — *Time Budget: 45 mins | Target: Abstract & Architecture Only* (Columnar nested storage representation, multi-level execution trees, in-situ record shredding/assembly).
  💡 *Why this matters today: The origin of Apache Parquet, Apache ORC, BigQuery, and modern analytical database execution engines.*
- **Apache ZooKeeper Paper (Hunt et al., 2010)** `[Reinforces Level 3A.4 Distributed Coordination]` — *Time Budget: 60 mins | Target: Full Deep Read* (ZAB atomic broadcast protocol, hierarchical z-node tree, linearizable writes & watch triggers).
  💡 *Why this matters today: Teaches distributed locking, leader election, and config coordination used in early Kafka and Hadoop.*
- **Apache Kafka Paper (Kreps et al., 2011)** `[Reinforces Level 3A.3 Event Streams]` — *Time Budget: 60 mins | Target: Full Deep Read* (Distributed commit log, zero-copy `sendfile` I/O, partition consumer scaling).
  💡 *Why this matters today: Shifted industry paradigms from transient message queues (RabbitMQ/SQS) to durable event log streaming.*
- **Google Spanner Paper (Corbett et al., 2012)** `[Reinforces Level 3A.4 Consistency & Level 5 Capstones]` — *Time Budget: 90 mins | Target: Full Deep Read* (TrueTime API with GPS/atomic clocks, Paxos state machines, external consistency guarantees).
  💡 *Why this matters today: Proved globally distributed ACID transactions across regions are possible at scale (CockroachDB/Yugabyte).*
- **Jay Kreps' The Log Manifesto (Kreps, 2013)** `[Reinforces Level 3A.3 Event Streams & CDC]` — *Time Budget: 45 mins | Target: Full Deep Read* (Log as central source of truth, CDC event sourcing, stream-table duality).
  💡 *Why this matters today: The most influential blog/paper defining modern Event-Driven Architecture, Debezium CDC, and Event Sourcing.*
- **Facebook TAO Paper (Bronson et al., 2013)** `[Reinforces Level 1.5 Caching & Level 2.2 Graph Stores]` — *Time Budget: 60 mins | Target: Full Deep Read* (Distributed social graph read-through cache, write-through invalidation, regional leader/follower tiers).
  💡 *Why this matters today: Demonstrates how to build multi-region read-heavy graph caching systems at petabyte scale.*
- **Raft Consensus Paper (Ongaro & Ousterhout, 2014)** `[Reinforces Level 3A.4 Consensus]` — *Time Budget: 120 mins | Target: Full Deep Read* (Leader election, log replication, safety invariants, joint consensus membership changes).
  💡 *Why this matters today: Replaced Paxos as the understandable consensus algorithm powering etcd, Kubernetes, Vitess, and Consul.*
- **Amazon Aurora Paper (Verbitski et al., 2017)** `[Reinforces Level 2.1 RDBMS Internals & Level 3A.2 Database Scaling]` — *Time Budget: 60 mins | Target: Full Deep Read* (Log is the database, decoupled compute & storage, asynchronous quorum writes across 6 storage nodes).
  💡 *Why this matters today: Defined modern cloud-native database design by decoupling compute nodes from log-structured storage.*

---

## 🔧 Module C — Hardware & OS Internals (Optional Deep-Dive Track) [EXPLANATION-HEAVY]

_Not part of the core path — pull from here only if/when you want to go a level deeper than high-level application backend engineering._

- **OS process/thread model, virtual memory, paging, context switching** `[Cross-Reference: Level 0A.0 Node.js Concurrency & Level 1.1b Node Internals]`
- **Filesystem internals (inodes, journaling, `fsync`, `mmap`)** `[Cross-Reference: Level 1.5 Storage Mechanics & Level 3A.3 Commit Logs]`
- **Linux CPU scheduler (CFS), memory allocators (`jemalloc`/`tcmalloc`)** `[Cross-Reference: Level 1.1b Deep Node.js Engine & Level 6.1 Low Latency]`
- **`io_uring`, kernel bypass (DPDK/eBPF) concepts** `[Cross-Reference: Level 6.1 Ultra-Low Latency Engineering]`
- **NUMA, SIMD, cache-line/false-sharing awareness** `[Cross-Reference: Level 6.1 Lock-Free Ring Buffers]`
- **V8 / Node.js GC internals, heap dumps & flame graph profiling** `[Cross-Reference: Level 1.1b Node Internals & Level 0D.3 Memory Leak Profiling]`

### 🛠️ Living Error Journal (Bugs Encountered & Root-Caused)

_Whenever a drill or build fails, we enter diagnostic mode (isolate failure $\rightarrow$ form hypothesis $\rightarrow$ test hypothesis) and categorize the root cause: (a) code bug, (b) environment/config issue, or (c) learning gap. We log (a) and (c) here with their symptom, root cause, and key system design takeaway; (b) is skipped unless it recurs._

| #            | Subtopic / Drill | Symptom / Bug Encountered | Underlying Root Cause | Key System Design Takeaway |
| ------------ | ---------------- | ------------------------- | --------------------- | -------------------------- |
| _(none yet)_ | _(none)_         | _(none)_                  | _(none)_              | _(none)_                   |
