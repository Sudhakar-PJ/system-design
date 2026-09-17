# Backend Engineering & System Design Mastery Roadmap

> A living document. Progress, notes, and session handoff state live at the bottom and get updated as we go — reopen this link on any device to pick up exactly where you left off.

**Legend**: `[CORE]` must-know for every level · `[ADVANCED]` deeper specialization · `[AWARENESS]` conceptual literacy only, no hands-on build required.

**How we'll actually work through this**: for each subtopic, I explain it in full depth — what/why/how/failure modes — with code in the layer it belongs to (`routes → controllers → services → repository → config`), plus diagrams/flowcharts where they help, and I generate a dedicated course-material file for that subtopic. No forced quizzes, no interview-Q&A files. You confirm understanding in your own words before we move on, at your pace.

**Stack**: Node.js + TypeScript + Express as the constant. Every other tool (Postgres, MongoDB, Redis, Kafka, etc.) is chosen per-project based on what best teaches that project's concept — 100% free/open-source/self-hostable via Docker, no paid services required anywhere in this roadmap.

---

## 🤖 AI Instructor Guidelines (Operating Rules)

- **Strict Single-File & Zero-Auto-Execution Protocol** — Code and terminal commands are delivered strictly inside chat response blocks (never auto-written to disk or executed via shell by the AI). Every single response delivers **EXACTLY ONE FILE AT A TIME**, accompanied by:
  1. **5 Ws & 1 H Breakdown** (*Who, What, Where, When, Why, and How* this file fits into production architecture).
  2. **Core Concept Explanation** (architectural theory & trade-offs).
  3. **Complete Production-Grade Code Block** (zero placeholders, zero omitted lines).
  4. **TypeScript Syntax & Design Callout** (explaining specific TS features, generics, types, or interfaces used).
- **Course-material files, not quizzes or interview files** — every subtopic gets a dedicated, detailed course-material file (theory, code, diagrams/flowcharts). No forced active-recall quizzes, no separate interview-prep Q&A files.
- **Prerequisite / cross-reference tags** — recurring concepts (consistent hashing, Raft, Bloom filters, rate limiting, etc.) carry `[Prerequisites: ...]` / `[See Also: ...]` tags so later topics build on earlier ones instead of re-explaining from scratch.
- **Level 7 Awareness Protocol** — AI writes one concise, high-impact conceptual explanation per subtopic (what it is, why it exists, where it's used in production at scale), and you confirm understanding by restating it in your own words before we move on.
- **Open-Source Code Dissection Drills** — Beyond writing our own code, we actively inspect and explain real production open-source modules (e.g. BullMQ Redis Lua scripts, Express router stack, Debezium CDC connectors, Envoy rate-limit filters) to master reading unfamiliar high-grade codebases.
- **Mock Staff Architect Design Defense & Capstone Protocol** — At major system design milestones (Level 4 Unified Platform and every Level 5 MAANG Capstone), you independently sketch your architecture on paper/Excalidraw at your own pace (no timer/pressure). You then present your design, and the AI acts as a FAANG Staff Engineer / Principal Architect, grilling your design on single points of failure (SPOFs), scalability spikes (10x/100x), edge cases, and trade-offs before revealing the reference solution and conducting a Gap Analysis.
- **Living Error Journal & Bug Post-Mortems** — Any bug, race condition, unexpected exception, memory leak, or architectural flaw encountered during building or load-testing is logged into our **Session Error Journal** at the bottom with its symptom, root cause, and key system design takeaway.
- **Progressive TypeScript Mastery & TS Callouts** — Production TypeScript patterns (Generics, Discriminated Unions, Zod schema inference, Utility Types `Omit`/`Pick`/`Partial`) are introduced progressively in context as we build. Every code delivery includes a concise **"TS Syntax & Design Callout"** explaining why specific TypeScript constructs were chosen.
- **Production Portfolio README Artifact** — At the completion of every project (Level 0A through Level 4), we generate a production-grade `README.md` complete with C4 Container diagrams, benchmark load-test results, core architectural trade-offs, and a Staff-level *"What I would do differently at 10x scale"* section.
- **Level Architecture Retrospective & Lessons Learned** — At the conclusion of every level, we write a concise **Level Retrospective** artifact summarizing key trade-offs mastered, anti-patterns avoided, and personal engineering cheat-sheets to compound learning alongside the Error Journal.
- **Zero-spend guarantee** — every tool, database, or AI model used across every project is free, open-source, and self-hostable via Docker (or a free-tier API where local hardware genuinely can't run it locally). Never a paid subscription or paid cloud tier.
- **Session handoff** — whenever you say something like "that's enough for today," I update the **Session Handoff State** section at the bottom with exactly where we stopped and what's next, before we close out.

---

## 📊 Progress Dashboard

- **Current Level**: `Not started — Level 0A.1`
- **Current Project**: `production-service-core (Stage 1)`
- **Overall Completion**: `0 subtopics completed`
- **Last session**: `—`

---

## 🧩 The Projects (built side by side, connected later)

Instead of one giant master project, each project below is scoped to teach a specific cluster of system-design concepts. Later levels connect them (e.g. the chat service and the notification service eventually share an event bus).

| Level | Project Repo / Deliverable | Primary Concepts Exercised | Build Scope & Deliverable Boundaries |
| :--- | :--- | :--- | :--- |
| **0A & 0B** | **Production Service Core**<br>*(Single Hardened Repo)* | **Stage 0A**: Clean layered architecture, typed error handling, Pino logging, Zod validation<br>**Stage 0B**: Auth (JWT/Argon2id), SQL transactions, pool tuning, Redis rate-limiting, idempotency, Docker | **Full Production-Hardened REST API**<br>• *Stage 0A*: Core architecture & logging (No Auth/Locks)<br>• *Stage 0B*: Production hardening release |
| **1** | **URL Shortener** | Caching patterns, cache stampede/penetration, Base62 encoding, hot-key handling | **Shorten + redirect + Redis cache + analytics endpoint**<br>❌ *No auth* |
| **2** | **Product Catalog / Search** | Indexing strategy, full-text/inverted index search, CDC sync pipeline, pagination at scale | **CRUD + search + pagination + Postgres/Elasticsearch CDC sync**<br>❌ *No auth* |
| **3A** | **Order Processing Service** | Event-driven architecture, Outbox pattern, Saga orchestration, Kafka queues | **Checkout $\rightarrow$ Outbox $\rightarrow$ Kafka $\rightarrow$ Saga $\rightarrow$ Compensation**<br>❌ *No UI (100% backend/event-driven)* |
| **3B** | **Real-Time Location & Chat** | WebSockets at scale, Pub/Sub fan-out, presence tracking, geo-indexing (H3/Geohash) | **WebSocket Gateway + presence tracking + Geo dispatch**<br>❌ *No message history UI* |
| **4** | **Unified Production Platform** | Wiring 1–3B behind API gateway, OpenTelemetry, Grafana observability, K8s, Canary rollouts | **Wire Services 1–3B behind Envoy Gateway + Observability + Runbook** |
| **5** | **MAANG Capstone System Designs** | High-scale architecture, 6-Stage Blueprint, capacity math, deep dives, failure modes | 📝 **Design-Only (Untimed Paper Drills & Mock Defenses)**<br>❌ *No production code build* |
| **6** | **Extreme Distributed Systems** | Low-latency DPDK/eBPF, active-active Spanner/Paxos, cell architecture, Wasm | 📖 **Awareness Protocol Only**<br>❌ *No hands-on build required* |
| **7** | **AI Infrastructure & Systems** | Vector indexing (HNSW/IVF), RAG evaluation, LLM Gateways, agent sandboxing, feature stores | 🛠️ **Hybrid**: Code Drills (7.1–7.5) + AI Gateway RAG Capstone (7.6) |

---

## Level 0A — Foundations: Clean Backend Architecture

_Project Repo: `production-service-core` (Stage 1: Architecture Scaffold)_

> 📦 **Level 0A Build Scope & Deliverables**:
> - **Deliverable**: `production-service-core` repository **Stage 1 (Architecture Scaffold)**.
> - **Core Features**: Clean layered REST architecture + Pino logging + AsyncLocalStorage request correlation IDs + Zod schema validation + RFC 7807 typed error handling envelopes.
> - ❌ **Scope Boundaries**: *Stage 1 focus — no authentication, no authorization, no database transactions, no complex locks.*

### 0A.1 Architecture & Project Structure

- `[CORE]` Clean layered architecture: `Config → Routes → Controllers → Services → Repository → DB`
- `[CORE]` Dependency Injection / Inversion of Control (manual constructor DI first, container-based later)
- `[CORE]` Interface-driven design for repositories/services (swappable storage engines)
- `[CORE]` Architecture Decision Records (ADR) — how to document a design decision properly

- `[CORE]` Centralized Error Architecture — `AppError` base class + typed subclasses (`BadRequestError`, `NotFoundError`, `ConflictError`, etc.)
- `[CORE]` Error Classification Taxonomy — Categorizing Client (4xx) vs Server (5xx) vs Upstream Integration vs Unknown Uncaught errors
- `[CORE]` Stable Error Codes & Domain Identifiers — Machine-readable error codes (e.g., `AUTH_INVALID_TOKEN`, `PAYMENT_CARD_DECLINED`) for programmatic client handling, monitoring, and SLA tracking
- `[CORE]` Standardized API Error Envelopes — RFC 7807 problem details specification (`type`, `title`, `status`, `detail`, `instance`, `code`)
- `[CORE]` Error Observability, Grouping & Deduplication — Sentry-style stack trace fingerprinting & error grouping (collapsing 1,000 duplicate user exceptions into 1 actionable incident), error sampling policies (log 100% of 5xx server errors, sample 4xx client noise), and Error Rate vs Error Budget operational distinctions `[Cross-Reference: Level 4.2 SRE SLI/SLO Budgets]`
- `[CORE]` `asyncHandler` Wrapper Pattern — Eliminating repetitive try/catch blocks in controllers
- `[CORE]` Operational vs Programmer Errors — `unhandledRejection` / `uncaughtException` handling and process restart strategies

### 0A.3 Logging, Tracing & Context Propagation

- `[CORE]` Structured JSON Logging Architecture (Pino) & Runtime Log Level Strategy — Defining explicit `DEBUG` vs `INFO` vs `WARN` vs `ERROR` runtime policies per environment and code path
- `[CORE]` Dynamic Runtime Log Level Toggling — Flipping log levels dynamically at runtime (via HTTP admin endpoint or signal) without restarting the process during active incident debugging
- `[CORE]` High-Volume Path Log Sampling — Sampling 1% of high-throughput success logs while capturing 100% of 5xx server error logs to optimize logging cost vs observability
- `[CORE]` Standardized Structured Field Conventions — Enforcing mandatory log envelope schema fields (`userId`, `requestId`, `tenantId`, `traceId`, `durationMs`, `errorCode`, `httpMethod`, `path`)
- `[CORE]` Granular PII Redaction Policy — Explicit PII classification rules per field (passwords, JWTs, credit card numbers, SSNs, IP addresses, emails) with Pino serializer redaction paths
- `[CORE]` `AsyncLocalStorage` for Request-Scoped Context Propagation — Automatic correlation ID and tenant context propagation across asynchronous call chains without parameter drilling
- `[CORE]` Request/Response Audit Logging Middleware — Redacted request/response payloads, status codes, and execution duration logging

- `[CORE]` Type-Safe Environment Validation (Zod) — Fail-fast schema validation on service startup for required configuration parameters
- `[CORE]` Layered Configuration Hierarchy & Overrides — Multi-tier configuration resolution precedence (`base defaults` $\rightarrow$ `environment-specific overrides` $\rightarrow$ `runtime secret overrides`)
- `[CORE]` Runtime Hot Configuration Reloading — Dynamic configuration updates without process redeployments (watching local config files, Kubernetes `ConfigMap` volume mounts, or etcd/Consul key-value stores)
- `[CORE]` Configuration Drift Detection & Audit — Detecting and alerting when running memory configuration drifts from git-backed infrastructure source-of-truth
- `[CORE]` Secrets Handling Conventions — Environment variable injection vs secret manager integration, `.env.example` schema templates, preventing secret leakages in dumps

### 0A.5 Validation, Sanitization & Type Safety

- `[CORE]` Schema validation of body/params/query with Zod
- `[CORE]` DTOs and strict typing, zero `any`
- `[CORE]` Preventing injection (SQLi, NoSQLi, XSS, HTTP parameter pollution)

### 0A.6 Structured Concurrency & Advanced Async Patterns

- `[CORE]` Advanced Promise Execution Controls — `Promise.all` vs `Promise.allSettled` vs `Promise.any` vs `Promise.race` (exact execution semantics, unhandled rejection pitfalls, and partial failure handling strategies)
- `[CORE]` Request & Query Cancellation with `AbortController` / `AbortSignal` — propagating cancellation signals across HTTP fetch requests, PostgreSQL query executions, Redis commands, and Node.js streams
- `[CORE]` Advanced `AsyncLocalStorage` Contexts — request-scoped DB transaction handles, tenant context propagation, feature flag overrides, and correlation context propagation without parameter drilling
- `[CORE]` Structured Concurrency Discipline — ensuring child background tasks are explicitly joined or cancelled before parent HTTP handlers return
- `[CORE]` Unhandled Promise Rejection Tracing — linking asynchronous stack traces back to originating HTTP request correlation IDs
- `[CORE]` Parallelism vs Concurrency vs Throughput — rate-limiting async operations using `p-limit`, `p-map`, worker thread pools (`worker_threads`), and backpressure management

🧪 **`[DRILL 0A]`**: Build & test the clean layered _Starter Service Core_ with Pino request-scoped correlation IDs, Zod validation, and typed `AppError` envelopes.
🔎 **`[DISSECTION 0A]`**: Inspect Express.js core (`lib/router/layer.js` & `route.js`) — explain how the internal middleware execution chain and error-handling matchers work under the hood.

---

## Level 0B — Production Hardening & Resilience

_Project Repo: `production-service-core` (Stage 2: Production Hardening Release)_

> 📦 **Level 0B Build Scope & Deliverables**:
> - **Deliverable**: `production-service-core` repository **Stage 2 (Hardened Release)** running in Docker.
> - **Core Hardening**: Security middleware (Helmet, CORS, Rate Limiting), JWT auth with real OTP signup flow via free-tier email/SMS (Resend / Brevo / Twilio free tier) with real exponential backoff & idempotent resend logic, structured logging (Pino), Graceful shutdown, Transactional DB operations (Prisma/Kysely + Postgres), Redis caching layer, and HTTP Idempotency key middleware.
> - **Testing Tier**: Comprehensive automated test suite with Testcontainers (ephemeral Postgres & Redis instances per test suite), MSW / Nock for mocking third-party OTP & payment HTTP APIs, and factory-bot fixture generators.
> - ❌ **Scope Boundaries**: *Single service repo hardening — no microservice gateways or cross-service event streams.*

### 0B.1 Authentication, Real OTP Signup & Authorization

- `[CORE]` JWT access + refresh token architecture, rotation
- `[CORE]` OAuth2 Social Login & Single Sign-On (SSO) Integration — Passport.js / OpenID Connect (Google/GitHub OIDC providers), Authorization Code Flow with PKCE, user identity linking, and token conversion
- `[CORE]` Secure cookie vs header storage (`HttpOnly`, `SameSite`, `Secure`)
- `[CORE]` Real OTP Verification Signup Flow — Sending live OTPs via free-tier Resend / Brevo (Email) or Twilio / MSG91 (SMS), rate-limiting OTP resends with Redis sliding window, exponential backoff, and idempotent resend verification
- `[CORE]` Password hashing (Argon2id/bcrypt) + account lockout after N failed attempts
- `[CORE]` Multi-Factor Authentication (MFA / 2FA) & TOTP — Time-based One-Time Password generation (`speakeasy`/`otplib`), QR code provisioning, backup recovery codes, and MFA verification middleware
- `[CORE]` Password Reset & Passwordless Magic Links — Secure short-lived token generation, email magic links (`crypto.randomBytes`), single-use token invalidation, and rate-limiting password resets
- `[CORE]` Role-Based & Attribute-Based Access Control (RBAC & ABAC) — Roles, dynamic permissions, hierarchical permission inheritance, context-aware policy gates (e.g. `user:edit_own_resource`), and audit trail logging for sensitive role changes
- `[CORE]` Immutable & Tamper-Evident Audit Logging System — Append-only audit logs, cryptographic tamper-evidence (hash chains / Merkle tree logging), standardized audit event schemas (`who`, `what`, `when`, `where`, `why`, actor vs subject), regulatory retention rules (e.g. 7 years for financial records), and SIEM integration / syslog forwarding pipelines for compliance proof
- `[CORE]` Session revocation & token blacklisting (Redis)

### 0B.2 SQL & Query Fundamentals (since you know basics but want depth)

- `[CORE]` Joins, subqueries, aggregates, `GROUP BY`/`HAVING` — quick refresh with production-style examples
- `[CORE]` Transactions: `BEGIN/COMMIT/ROLLBACK/SAVEPOINT`
- `[CORE]` Isolation levels and the anomalies they prevent (dirty/non-repeatable/phantom reads) — you'll _see_ each anomaly happen
- `[CORE]` Optimistic locking (version column + retry) vs pessimistic locking (`SELECT ... FOR UPDATE`) — when to use which, with a financial-transfer example
- `[CORE]` MongoDB CRUD basics + client-session transactions

### 0B.3 Database Access Layer & Backend i18n/l10n Handling

- `[CORE]` Connection pool tuning (min/max, idle/acquire timeouts)
- `[CORE]` Unit-of-work pattern, transaction boundaries
- `[CORE]` Migrations & idempotent seeding
- `[CORE]` Production Database Migrations & Zero-Downtime Schema Evolution — Lock-safe migrations (avoiding `ACCESS EXCLUSIVE` table locks on live DBs), Expand-Contract pattern (nullable column addition → dual-write deploy → batched backfill → old column drop), batched idempotent background backfills, rollback safety (reversible vs irreversible migrations), migration tooling comparison (Prisma Migrate vs Kysely vs `node-pg-migrate` vs Flyway), testing migrations against production-sized copies, and schema drift CI enforcement `[Cross-Reference: Level 6.3 Live Schema Migrations]`
- `[CORE]` Soft-Delete Pattern, Hard Deletion & Data Retention Lifecycle — `deleted_at` query filtering, cascade soft-delete, automated database vacuuming of expired soft-deleted records, and audit logging
- `[CORE]` Database Connection Pool Exhaustion & Backpressure — Inspecting `pg_stat_activity`, waiting query chains, lock graph inspection, statement timeout vs query timeout vs pool acquire timeout differences, PgBouncer (transaction pooling vs session pooling, prepared statement handling), connection backpressure (queue depth limits, reject-when-full behavior), and Read Replica Routing (splitting read/write connections, handling replication lag anomalies)
- `[CORE]` Backend Internationalization (i18n) & Localization (l10n) Architecture — Locale-aware API header negotiation (`Accept-Language`), UTC timestamp storage with timezone-aware query conversion, localized error response templates, multi-language database column modeling (JSONB vs translation tables), Unicode CLDR pluralization rules (`zero`/`one`/`two`/`few`/`many`/`other`), locale-aware number formatting (decimal separators, digit grouping `1,000` vs `1.000`), currency display formatting (symbol positioning, spacing), Right-to-Left (RTL) bidirectional text handling & string order preservation, culture-aware name formatting (given vs family name ordering), country-specific address schema formatting, and database ICU locale-aware collation (e.g. Swedish vs German string sorting rules)

### 0B.4 Security Essentials

- `[CORE]` Security headers (Helmet: CSP, HSTS, etc.)
- `[CORE]` CORS done properly
- `[CORE]` Rate Limiting Algorithms & Engineering Deep Dive — Fixed Window vs Sliding Window Log vs Sliding Window Counter vs Token Bucket vs Leaky Bucket (smooth output rate) vs GCRA (Generic Cell Rate Algorithm - single-key Redis memory efficient rate limiter) vs Concurrent Request Limiting (capping in-flight active requests) vs Server Load-Adaptive Rate Limiting (dynamically tightening rate limits when CPU/RAM or DB pool saturates) `[Cross-Reference: Level 4.1 Rate Control Taxonomy]`
- `[CORE]` Request Device Fingerprinting & IP Geolocation — Parsing `X-Forwarded-For`, trusted proxies, MaxMind GeoIP lookup for suspicious login detection, and User-Agent device parsing
- `[CORE]` Payload size limits + compression

### 0B.5 API Versioning, Deprecation & Evolution Engine

- `[CORE]` Versioning Strategies & Trade-Off Space — URI path (`/v1/users`), Custom Header (`X-API-Version: 2`), Accept Header / Media Type (`application/vnd.myapi.v2+json`), Query Param (`/users?version=2`), Date-Based Versioning (Stripe-style `Stripe-Version: 2024-01-15` per-request transformation layer), and Additive-Only / No-Versioning strategies
- `[CORE]` Categorizing Change Boundaries — Breaking (field removal, type mutation, semantic shifts, error code changes) vs Non-Breaking (optional fields, new endpoints) vs Gray-Area (adding required request fields, changing defaults/validation)
- `[CORE]` Deprecation & Sunset Lifecycle Protocols — RFC 8594 `Sunset` response headers, RFC 9745 `Deprecation` response headers, multi-stage deprecation windows (6-month notice / 12-month support), client version usage tracking middleware, automated migration changelogs, and scheduled brownout tests
- `[CORE]` Implementation & Routing Patterns — Gateway version routing (Envoy/Kong path & header filters `[See Cross-Reference: Level 4.1]`), controller-level in-app routing, Stripe-style per-version response transformation layers, and parallel version deployment
- `[CORE]` Versioning Across API Protocols — REST (path/header), GraphQL (schema evolution + `@deprecated` directives), gRPC (protobuf package `myapi.v1` / `myapi.v2` & immutable field numbers), WebSockets (handshake version negotiation), and Webhook event schema versioning
- `[CORE]` Versioning Failure Modes & Anti-Patterns — Version explosion, version freeze, silent breaking changes, ghost un-deletable versions, consumer lock-in, and over-versioning
- `[CORE]` Spec, SDK & Tooling Integration — Multi-version OpenAPI/Swagger specs, `openapi-diff` breaking change detection in CI, API contract style guide enforcement (Spectral / Vacuum CLI linting for API naming & response envelope consistency), versioned client SDK generation, and per-version Pact contract testing

### 0B.5b Deep HTTP Semantics & Protocol Controls

- `[CORE]` Status Code Taxonomy & Discipline — 400 Bad Request vs 422 Unprocessable Entity vs 409 Conflict vs 412 Precondition Failed, 401 Unauthorized vs 403 Forbidden, 402 Payment Required, 405 Method Not Allowed
- `[CORE]` HTTP Layer Optimistic Concurrency & Conditional Requests — `If-Match`, `If-None-Match`, `If-Unmodified-Since`, `If-Modified-Since`, ETag validation
- `[CORE]` Range Requests & Large Media Streams — `Range`, `Content-Range`, `206 Partial Content` (video streaming, large chunk downloads)
- `[CORE]` Redirect Semantics & Method Preservation — 301 Moved Permanently vs 302 Found vs 307 Temporary Redirect vs 308 Permanent Redirect (method preservation rules)
- `[CORE]` Response Location & Retry Headers — `201 Created` with `Location` header, `429 Too Many Requests` / `503 Service Unavailable` with `Retry-After` headers
- `[CORE]` Protocol Methods & Content Negotiation — `OPTIONS`, `HEAD`, `TRACE`, `Accept`, `q=` weights, `Vary` headers

### 0B.6 Enterprise Testing Strategy & Production Profiling

- `[CORE]` The Backend Test Pyramid — unit tests (pure domain logic), integration tests (API endpoints against DB), and contract/e2e tests
- `[CORE]` Real Infrastructure Testing with Testcontainers — spinning up ephemeral, isolated PostgreSQL and Redis Docker containers programmatically for integration test execution (zero DB mocking)
- `[CORE]` Mocking & Stubbing Third-Party APIs — MSW (Mock Service Worker) and Nock for intercepting outbound HTTP calls to third-party providers (Resend, Twilio, Stripe) in automated test runs
- `[CORE]` Test Fixtures & Factories — deterministic test data generation using `@faker-js/faker` and factory builders
- `[CORE]` Memory Leak Profiling & Heap Snapshots — Node.js `--inspect` memory profiling, heap snapshots (`v8.getHeapSnapshot()`), inspecting uncollected event listeners and unclosed database connection handles under load via `clinic.js` (Doctor & Bubbleprof)
- `[CORE]` Resource Limits & OS-Level Constraints — Node.js V8 heap limits (`--max-old-space-size`), file descriptor limits (`ulimit -n`, socket exhaustion handling), CPU cgroup throttling in K8s/Docker containers, container RAM limits & container OOMKilled diagnosis (`--memory`), disk I/O & egress network bandwidth throttling, and end-to-end backpressure propagation (TCP window $\rightarrow$ socket buffer $\rightarrow$ app queue $\rightarrow$ client)
- `[CORE]` Health check endpoints (liveness vs readiness)
- `[CORE]` Graceful Shutdown & Connection Draining Lifecycle — `SIGTERM`/`SIGINT` signal traps, draining in-flight HTTP requests, closing DB connection pools, Kubernetes `preStop` lifecycle hooks (delaying SIGTERM until K8s endpoints list updates), and draining long-lived persistent connections (WebSocket client reconnect frame broadcasting & gRPC stream `GOAWAY` frames)
- `[CORE]` Strict TypeScript, lint/format, pre-commit hooks (Husky + lint-staged)
- `[CORE]` Background task offloading (event emitters/`setImmediate` for non-blocking side-effects)
- `[CORE]` OpenAPI/Swagger Auto-Generated Docs & Developer Experience (DX) Stack — OpenAPI-first development (spec-driven code generation), API contract style guide enforcement (Spectral / Vacuum linting rules in CI), SDK generation (multi-language client SDKs via OpenAPI Generator / Orval), interactive API documentation UI (Scalar, Redoc, Stoplight), API versioning & changelog automation (spec diffing via `openapi-diff`), and automated team Postman / Bruno collection export pipelines
- `[CORE]` Developer Portals & Interactive API Playgrounds — Self-service developer onboarding, self-service API key provisioning & usage quota dashboards, interactive API playgrounds (live request execution in docs with environment switching), automated consumer API changelog & deprecation notification pipelines (email/Slack webhooks), and dedicated consumer Sandbox/Test environments isolated from production data
- `[CORE]` Docker Compose local dev environment + production multi-stage Dockerfile

### 0B.7 Third-Party Integration & Enterprise Idempotency System

- `[CORE]` Retries, Circuit Breakers & Retry Budgeting Discipline — Exponential backoff with full jitter, Circuit breaker pattern (closed $\rightarrow$ open $\rightarrow$ half-open states), Retry Budgeting (capping total retry requests at max 10% of overall service traffic to prevent retry storms), Retry Amplification Prevention (preventing cascading retries across multi-tier call chains Client $\rightarrow$ Gateway $\rightarrow$ Service $\rightarrow$ DB), Strict Idempotency Requirements for retry safety `[See Also: 0B.7 Idempotency Keys]`, and Hedged Requests (firing parallel backup requests after p99 latency threshold to cut tail latency)
- `[CORE]` Webhook signature verification (HMAC)
- `[CORE]` HTTP Idempotency Key Architecture — Redis storage, lock-based deduplication, TTL management & storage cost vs safety trade-offs, payload caching & replay response semantics
- `[CORE]` DB-Write Idempotency & SQL Collision Handling — `ON CONFLICT DO NOTHING` vs `DO UPDATE`, `WHERE NOT EXISTS`, detecting idempotency key collision (same key with different payload error responses)
- `[CORE]` Distributed Saga Step & Read Idempotency — Per-saga-step compensation idempotency guarantees, idempotency keys for expensive/side-effecting `GET`/search endpoints
- `[CORE]` Distributed Cron & Scheduled Task Semantics — Cron vs Interval vs One-shot timer semantics, timezone-aware scheduling ("9am in user's local timezone"), Daylight Saving Time (DST) scheduling pitfalls (handling skipped vs repeated hours during clock transitions), job overlap prevention (skip-if-running concurrency controls, Redlock distributed leases), and job execution observability (last run timestamp, next run schedule, execution duration percentiles, failure rate tracking)

### 0B.9 Data Correctness & Domain Fundamentals (Money & Unicode)

- `[CORE]` Money, Currency & Numeric Precision Architecture — Why floating-point money causes production bugs (`0.1 + 0.2 !== 0.3`), integer minor units (cents) vs arbitrary-precision decimal libraries (`decimal.js`, `big.js`), PostgreSQL column selection (`NUMERIC` vs `MONEY` vs `BIGINT`), BigInt vs number overflow (IDs, timestamps, balances), currency ISO 4217 minor unit variations (JPY = 0 decimals, KWD = 3 decimals), rounding algorithms (banker's rounding, half-up, half-even), currency conversion pipelines (rate sources, historical rates, spread), and tax calculation precision (VAT/GST/US sales tax nexus rules)
- `[CORE]` Text Encoding, Unicode & Internationalization Security — UTF-8 vs UTF-16 vs ASCII internal byte representations, Unicode normalization (`NFC`, `NFD`, `NFKC`, `NFKD`) for email uniqueness & username collision prevention, Grapheme clusters (emoji, flag sequences, ZWJ family sequences, skin tone modifiers) where string length $\neq$ character count, string length vs byte length vs grapheme length for DB column sizing & truncation, case folding edge cases (Turkish dotless `ı`, German `ß`), URL encoding (`encodeURIComponent` vs `encodeURI`, `%20` vs `+`), CSV/JSON formula injection security (`=cmd|...`), and null-byte/control character input sanitization
- `[CORE]` Null Semantics, Optionality & SQL Three-Valued Logic — `null` vs `undefined` vs missing keys across JSON serialization, PostgreSQL, and TypeScript, SQL three-valued logic (`NULL = NULL` evaluates to `UNKNOWN`), optional & nullable field modeling across validation schemas (Zod `.optional()` vs `.nullable()`, Protobuf field presence vs Avro unions), and API design consistency rules (`empty array []` vs `null` vs `404` for empty collection responses)

🧪 **`[DRILL 0B.8]`**: Build a v1 $\rightarrow$ v2 migration in `production-service-core`. Implement one breaking field rename, one non-breaking addition, `Deprecation`/`Sunset` response headers, and version usage tracking middleware before returning a `410 Gone` after sunset.
🔎 **`[DISSECTION 0B]`**: Inspect `express-rate-limit` & `ioredis` scripts — read and explain atomic Lua script execution for sliding-window rate limiting in Redis.

---

## Level 1 — Intermediate: Core APIs, Efficient Data Access & Caching

_Project: URL Shortener Service_

> 📦 **Level 1 Build Scope & Deliverables**:
> - **Deliverable**: Express/TypeScript **URL Shortener Microservice** with Redis caching & Base62 encoding.
> - **Core Features**: `POST /shorten` (Base62 key generation), `GET /:code` (302 redirect with LRU Redis caching), and `GET /:code/analytics` (click count & latency metrics).
> - ❌ **Scope Boundaries**: *No authentication middleware, no user account management.*

### 1.1 API & Protocol Design

- `[CORE]` REST resource modeling, idempotency, cursor vs offset pagination
- `[CORE]` Webhook Ingestion & Inbound Hook Reliability — Inbound HTTP webhook endpoints, HMAC-SHA256 signature verification, immediate 202 Accepted response decoupling, dead-letter queue (DLQ) routing, and replay protection
- `[CORE]` GraphQL Production Architecture — Resolvers, N+1 problem & DataLoader batching, GraphQL Federation / Schema Stitching, Persisted Queries (automatic persisted queries / APQ for reduced payload size & query injection prevention), Gateway-Level Query Complexity & Cost Analysis (static query depth limits, dynamic field-cost calculation AST analysis, and pre-execution query cost rejection at the gateway), WebSocket-based Subscriptions, self-hosted Schema Registries (Hive / Apollo alternative), and Multi-Tiered GraphQL Caching Strategies (Gateway/Edge full response HTTP caching via `@cacheControl` directives vs Client-side normalized entity caching like Apollo Client / Urql)
- `[CORE]` High-Performance API Protocols & Serialization Tuning — HTTP/2 & HTTP/3 multiplexing & connection reuse in production, response compression trade-offs (Brotli vs gzip), JSON serialization optimization (`fast-json-stringify` vs `JSON.stringify`), and Protocol Buffers vs JSON serialization benchmarks
- `[CORE]` Binary Wire-Format Serialization & Content Negotiation — JSON vs MessagePack vs CBOR wire-format tradeoffs (payload size compression, CPU parsing overhead, schema requirements, browser ecosystem support), HTTP header content negotiation for binary payloads (`Accept: application/x-msgpack` vs `Accept: application/cbor`), and quantitative decision thresholds for transitioning HTTP REST endpoints from JSON to binary serialization
- `[CORE]` WebSockets/SSE/gRPC Deep Dive — Protocol selection matrices, gRPC Server Reflection (`grpc-reflection` for dynamic service discovery without `.proto` files), gRPC Health Checking Protocol (`grpc.health.v1.Health` standard for load balancing & Kubernetes probes), and `gRPC-Web` proxy compatibility layer for browser-to-backend RPC calls `[Cross-Reference: Scaling WebSockets to millions of connections comes in Level 3B & 3C]`
- `[CORE]` Node.js internals: event loop phases, streams & backpressure, clustering

---

### 1.2 Relational Data Modeling & Indexing Strategy

- `[CORE]` Domain Data Modeling Discipline — normalization (1NF to 3NF) vs tactical denormalization, entity-relationship design, aggregate boundaries
- `[CORE]` Index types: single, composite (leftmost-prefix rule), partial, expression/functional
- `[CORE]` Covering indexes / index-only scans
- `[CORE]` JSONB querying + GIN indexes
- `[CORE]` Reading `EXPLAIN ANALYZE` — Seq Scan vs Index Scan vs Bitmap Heap Scan, spotting disk-based sorts

### 1.3 Advanced SQL & High-Performance Querying

- `[CORE]` N+1 detection & resolution (eager loading, batching, production detection via Datadog APM, Prisma query logs, `pg_stat_statements`)
- `[CORE]` Slow query log analysis (`auto_explain` module, `pg_stat_statements` top query analysis)
- `[CORE]` Query plan regression detection (CI plan diffing, index scan vs seq scan assertion gates)
- `[CORE]` Index bloat & maintenance (`REINDEX CONCURRENTLY`, `pg_stat_user_indexes` usage stats, bloat ratio calculations)
- `[CORE]` Keyset (cursor) pagination vs offset pagination at scale
- `[CORE]` CTEs vs subqueries, avoiding accidental Cartesian products
- `[CORE]` Window functions (`ROW_NUMBER`, `RANK`, `LAG`/`LEAD`) for top-N-per-group, running totals
- `[CORE]` Row locking + `SKIP LOCKED` for lock-free queue-style polling
- `[CORE]` Atomic upserts (`ON CONFLICT DO UPDATE`), bulk operations
- `[CORE]` Keeping transactions short — never hold a DB lock across a network call
- `[CORE]` Time & Date Handling in Distributed Systems — UTC storage everywhere vs local timezone rendering, Daylight Saving Time (DST) edge cases in scheduling/billing, Leap seconds real-world impact, IANA `tzdata` database updates & dependency management

### 1.4 Efficient MongoDB Querying

- `[CORE]` Embedding vs referencing, avoiding unbounded arrays
- `[CORE]` Aggregation pipeline (`$match/$group/$lookup/$facet`) instead of app-side joins
- `[CORE]` Index types (compound, multikey, text, sparse), reading `.explain()`

### 1.5 Caching — Your First System Design Concepts

- `[CORE]` HTTP Caching Semantics & Protocol Headers — `Cache-Control` directives (`max-age`, `s-maxage`, `no-cache`, `no-store`, `private`, `public`, `stale-while-revalidate`), ETag generation (strong vs weak ETags), `If-None-Match` / `If-Modified-Since` conditional GETs (`304 Not Modified`), and `Vary` headers
- `[CORE]` In-Process L1 Local Cache vs Remote L2 Cache — Node.js `lru-cache` memory caching vs distributed Redis caching trade-offs (sub-millisecond memory speed vs invalidation sync complexity)
- `[CORE]` Cache Warming & Pre-Population Strategies — Async post-deployment cache warming jobs, pre-hydrating hot keys before live traffic cutover, and cache pre-refreshing
- `[CORE]` Negative Caching & Null-Caching — Caching "not found" results (`404` responses / `null` DB lookups) to prevent repeated DB query penetration attacks `[See Also: 1.6 Bloom Filters]`
- `[CORE]` Database Prepared Statement & Query Plan Caching — PostgreSQL prepared statement caching, query execution plan caching (`auto_explain`), and PgBouncer prepared statement handling
- `[CORE]` DNS Caching & Resolution Semantics — Operating system & Node.js DNS caching, DNS TTLs, propagation delays, and negative DNS caching behavior
- `[CORE]` Cache-aside, write-through, write-back, read-through, refresh-ahead
- `[CORE]` Cache stampede/thundering herd (mutex, early expiry)
- `[CORE]` Cache avalanche (TTL jitter), hot-key mitigation (local L1 + Redis L2)
- `[CORE]` LRU/LFU eviction internals

### 1.6 Foundational Data Structures for Systems

- `[CORE]` Consistent hashing concept `[Prerequisite Teaser — full mathematical depth & ring implementation in Level 3A.1]`
- `[CORE]` Bloom filters (hashing, false-positive probability math, bit-array sizing), HyperLogLog, Count-Min Sketch
- `[CORE]` B-Trees/B+Trees vs LSM-Trees (why Postgres uses one and Cassandra the other)

### 1.7 Basic Technical Communication & Component Sketching

- `[CORE]` Basic Technical Communication & Component Sketching — Simple C4 Container diagrams for your application (`Routes → Controller → Service → DB → Redis`), distinguishing solid data flow arrows vs dashed event links, and hands-on sketching using Excalidraw / Mermaid.js `[Preview — full depth & enterprise presentation in Level 3C]`

📊 **Drill 1**: Benchmark the shortener's redirect path with and without caching under `autocannon` load; measure the actual QPS delta.
🔎 **Code Dissection 1**: Inspect BullMQ's core Redis Lua scripts (`addJob.lua`, `moveToActive.lua`) — explain how atomic job state transitions and lock renewals operate without race conditions.

---

## Level 2 — High: Storage, Search & Data Engine Internals

_Project: Product Catalog / Search Service_

> 📦 **Level 2 Build Scope & Deliverables**:
> - **Deliverable**: Express/TypeScript **Product Catalog Microservice** running locally in Docker.
> - **Core Components**: PostgreSQL (relational product inventory & pricing) + Elasticsearch or Meilisearch (full-text product search & faceted filters).
> - **Sync Pipeline**: Asynchronous CDC / Dual-Write event pipeline syncing product updates from Postgres to the Search Engine.
> - **Endpoints**: `GET /products/search?q=...&category=...` (full-text search + faceted filtering) and `POST /products` (creates product in Postgres + syncs to search).
> - **Verification**: Benchmark `EXPLAIN ANALYZE` on Postgres indexed queries vs Search engine latency under 100k seeded product rows.

### 2.1 RDBMS Internals

- `[CORE]` ACID + WAL (write-ahead log) crash recovery
- `[CORE]` MVCC and tuple visibility
- `[ADVANCED]` Vacuuming, HOT updates, visibility maps, checkpointing
- `[CORE]` Isolation levels revisited at the engine level

### 2.2 NoSQL Landscape

- `[CORE]` Document stores (MongoDB), Key-Value (Redis/DynamoDB), Wide-column (Cassandra/ScyllaDB — partition/clustering keys, tunable consistency R+W>N), Graph (Neo4j)
- `[ADVANCED]` Time-Series DBs & Columnar OLAP Query Patterns (TimescaleDB/ClickHouse) — hypertable partitioning, columnar memory layout, vector aggregate functions, retention policies, and continuous aggregate materialized views

---

### 2.3 Object Storage & CDN

- `[CORE]` Enterprise File Upload Architecture — Direct-to-Cloud Presigned URLs (bypassing backend server memory bottlenecks), Multipart Chunked Uploads for large files (parallel chunk ingestion + S3 ETag assembly), single & batch/bulk file processing (`busboy` / `multer` memory vs disk streaming), and file MIME validation / antivirus virus scan gates
- `[CORE]` File Metadata Database Lifecycle — Storing file metadata records (UUID, S3 Key, ETag, bucket, size, checksum) in PostgreSQL before/after cloud upload completion, atomic database status state machines (`PENDING_UPLOAD → UPLOADED → FAILED`), and orphan file garbage collection cron jobs
- `[CORE]` Storage Driver & Adapter Pattern — Building a swappable Object Storage interface (AWS S3 vs MinIO vs Google Cloud Storage vs Local Disk)
- `[CORE]` S3/MinIO internals: presigned URLs, multipart upload, versioning
- `[CORE]` CDN internals & Edge Caching — edge POP selection, cache-key normalization, origin shielding, `Surrogate-Control` & CDN revalidation via HTTP conditional GETs `[See Also: 1.5 HTTP Caching]`

### 2.4 Search Systems

- `[CORE]` Inverted index mechanics, TF-IDF, BM25 scoring
- `[CORE]` Elasticsearch/OpenSearch cluster architecture: shards, replicas, near-real-time indexing
- `[CORE]` Fuzzy search, autocomplete (n-grams), faceted search

📊 **`[DRILL 2]`**: Compare `Seq Scan` cost on the catalog table before/after adding the right index; show the plan diff.
🔎 **`[DISSECTION 2]`**: Inspect MinIO S3 server source (`cmd/multipart-handlers.go`) — explain how multipart chunk ingestion, ETags verification, and block assembly are implemented.

---

## Level 3A — Distributed Data & Async Event Architecture

_Project: Order Processing Service_

> 📦 **Level 3A Build Scope & Deliverables**:
> - **Deliverable**: Express/TypeScript **Order Processing Engine** with Stripe / Razorpay (test mode) payment gateway integration, HMAC webhook verification, nightly batch reconciliation pipeline, Kafka event streaming & transactional outbox.
> - **Core Features**: Checkout endpoint $\rightarrow$ Payment Gateway (Stripe/Razorpay test mode) $\rightarrow$ HMAC Webhook handler $\rightarrow$ Postgres Outbox table $\rightarrow$ CDC/Debezium $\rightarrow$ Kafka topic $\rightarrow$ Saga Orchestrator $\rightarrow$ Nightly Reconciliation Job.
> - ❌ **Scope Boundaries**: *100% backend & event-driven — no UI/frontend views.*

### 3A.1 Scalability & Load Balancing

- `[CORE]` Vertical vs horizontal scaling, eliminating single points of failure
- `[CORE]` L4 vs L7 load balancing
- `[CORE]` Load balancing algorithms: round robin, least connections, consistent hashing (full mathematical depth, virtual nodes, ring partitioning), power-of-two-choices
- `[CORE]` Stateless backend design (JWT vs sticky sessions vs shared Redis state)

### 3A.2 Database Scaling

- `[CORE]` Replication: single-leader, multi-leader, leaderless/quorum
- `[CORE]` Sharding: range-based, hash-based (consistent hashing `[See Also: 3A.1]`), directory-based
- `[CORE]` Zero-downtime resharding concepts
- `[CORE]` Multi-Tenant System Architecture — Tenant onboarding & automated workspace provisioning, isolation guarantees, per-tenant rate limits & quotas (tiered plans), per-tenant observability (dashboards & alerting), tenant data export & deletion (GDPR compliance), and tenant migration across DB shards/cells
- `[CORE]` Multi-Tenant Database Architecture — pool (shared DB/schema with tenant_id & Row-Level Security / RLS) vs silo (database-per-tenant) vs schema-per-tenant isolation models

### 3A.3 Messaging, Payments & Event-Driven Architecture

- `[CORE]` Message Queue Engine Ecosystem — RabbitMQ exchange routing (direct, topic, fanout, headers), NATS JetStream (lightweight streaming alternative to Kafka), Redpanda (Kafka-compatible, Zookeeper-free C++ engine), and BullMQ
- `[CORE]` Message Deduplication & Exactly-Once Transactional Semantics — Broker-level deduplication (Kafka idempotent producer), Kafka transactional producers (`read_committed` isolation), deduplication tables with DB transactions, and atomic upserts
- `[CORE]` Real Payment Gateway Integration & Webhook Security — Integrating Stripe / Razorpay test mode (zero spend), cryptographic HMAC webhook signature verification, handling out-of-order & duplicate webhook deliveries via idempotency keys and stateful DB deduplication
- `[CORE]` Batch / Scheduled Job Orchestration & Nightly Reconciliation Pipeline — Building multi-step batch reconciliation jobs (detecting missed payment webhooks, matching gateway ledger vs internal DB orders, generating discrepancy reports) using BullMQ / Redis distributed locks
- `[CORE]` Message Queues (BullMQ/RabbitMQ: competing consumers, dead-letter queues) vs Event Streams (Kafka: partitions, consumer groups, log compaction)
- `[CORE]` Kafka Consumer Group Rebalancing & Assignment Protocols — Eager Stop-the-World rebalancing vs Incremental Cooperative Sticky Assignor (preventing consumer group throughput freezes during pod scaling)
- `[CORE]` Kafka Tiered Storage & Log Lifecycle — Local high-speed NVMe storage (hot tier) vs S3/GCS object storage (cold tier) log offloading, log segment retention policies, and compaction tombstone cleanup
- `[CORE]` Message Ordering Guarantees & Constraints — per-partition strict ordering, per-key routing, global total ordering trade-offs (single partition throughput bottleneck vs multi-partition parallel throughput), and handling out-of-order events with sequence numbers / Lamport clocks
- `[CORE]` Idempotent Consumer Patterns & Exactly-Once Semantics — At-least-once message delivery realities, consumer deduplication tables (processed message IDs with DB transactions), stateful idempotency checks, atomic DB upserts, and preventing duplicate side-effects (emails, charges)
- `[CORE]` Event sourcing & CQRS
- `[CORE]` Transactional outbox pattern + CDC
- `[CORE]` Saga pattern: orchestration vs choreography
- `[CORE]` Data Serialization & Schema Management — Avro vs Protobuf vs JSON Schema trade-offs, Schema Registry operations (Buf CLI schema linting & breaking change detection, Confluent Schema Registry), backwards/forwards/full compatibility rules & CI enforcement, data contract testing (producer/consumer agreements), and step-by-step 4-stage event schema evolution lifecycle
- `[CORE]` Queue Backpressure & Buffer Control — reactive streams, queue buffer limits, dead-letter queue routing, and high-watermark consumer throttling
- `[CORE]` Client-Side Flow Control & Adaptive Load Shedding — TCP windowing & socket backpressure, handling client retry storms with exponential backoff & jitter, and adaptive load shedding under sudden traffic spikes

### 3A.4 Consistency, Consensus & Coordination

- `[CORE]` CAP & PACELC trade-offs, made concrete with real decisions
- `[CORE]` Consensus algorithms: Raft/Paxos at a working level (leader election, log replication, safety invariants)
- `[CORE]` Distributed locks & coordination (Redlock, etcd/ZooKeeper leases — built on consensus)
- `[CORE]` 2PC/3PC, TCC, compensation workflows
- `[CORE]` Clock sync: NTP, monotonic vs wall clocks, hybrid logical clocks

### 3A.5 Enterprise Outbound Webhook Delivery System

- `[CORE]` Outbound Webhook Delivery Pipeline Architecture — Event trigger → Outbound Delivery Queue → Worker Pool → HMAC Payload Signing → External Consumer Endpoint
- `[CORE]` Webhook Subscription Management — Per-tenant endpoint registration, secret rotation with dual-active HMAC secret windows, event-type subscription filtering, and payload schema versioning
- `[CORE]` Webhook Resilience & Observability — Exponential backoff retries with jitter, dead-letter queue (DLQ) routing after max retries, circuit breaker per subscriber domain, delivery latency percentiles, and self-hosted local testing with Svix / Hookdeck / `webhook.site`

💥 **`[CHAOS 3A]`**: Kill primary DB/broker mid-checkout write; observe Outbox pattern recovery & Saga compensation execution.
🔎 **`[DISSECTION 3A]`**: Inspect Debezium Engine's Postgres CDC connector source — explain how write-ahead log (WAL) decoding and LSN (Log Sequence Number) position tracking maintain exactly-once event streaming.

---

## Level 3B — Real-Time Distributed Systems & Multi-Channel Messaging

_Project: Real-Time Location/Chat & Notification Gateway Service_

> 📦 **Level 3B Build Scope & Deliverables**:
> - **Deliverable**: Node.js/TypeScript **Real-Time WebSocket Gateway, Spatial Matching & WhatsApp Notification Service**.
> - **Core Features**: WebSocket connection management + Redis Pub/Sub cluster fan-out + Presence tracking + Geohash/Uber H3 spatial index pings + WhatsApp Cloud API (free tier) multi-channel notification dispatcher.
> - ❌ **Scope Boundaries**: *No message history UI — focused purely on gateway connection density, pub/sub latency, spatial indexing, and multi-channel notification routing.*

### 3B.1 Real-Time State & Persistent Connection Management

- `[CORE]` WebSocket connection & state management at scale (handling connection density, C10M problem, connection heartbeat protocols)
- `[CORE]` Stateful vs stateless gateway routing for persistent connections

### 3B.2 Pub/Sub Fan-Out, Spatial Indexing & Multi-Channel Notification Router

- `[CORE]` Redis Pub/Sub fan-out architecture across gateway nodes
- `[CORE]` Presence tracking at scale (online/offline state, Redis Bitmaps & Hashes)
- `[CORE]` Geo-indexing & proximity querying (Geohash vs Uber H3 hex-indexing for fast spatial lookups)
- `[CORE]` Multi-Channel Notification Dispatcher — Integrating WhatsApp Cloud API (official Meta API free-tier session messages) as a primary real-time notification channel alongside WebSockets, with provider fallback and template payload rendering

💥 **`[CHAOS 3B]`**: Disconnect 10,000 WebSocket connections simultaneously; observe reconnect storm, Redis Pub/Sub fan-out latency, and backpressure.
🔎 **`[DISSECTION 3B]`**: Inspect `socket.io-redis-adapter` source code — explain how inter-node WebSocket packet broadcast and room state synchronization are orchestrated.

---

## Level 3C — Staff System Design Presentation & Diagramming Workshop

_Mastering Enterprise Cloud Topologies & Executive Design Presentation before the Level 4 Staff Defense_

### 3C.1 The Staff Engineer Presentation Framework

- `[CORE]` **The Staff Engineer Presentation Framework** — Structured 5-step presentation flow: (1) Scoping Requirements & Setting SLAs, (2) Back-of-the-Envelope Capacity Math, (3) High-Level Architecture Walkthrough, (4) Deep-Dive into Core Components & Data Schemas, (5) Proactively Defending Trade-offs & SPOFs.

### 3C.2 Enterprise Architecture Diagramming

- `[CORE]` **Enterprise Cloud Topology Diagramming** — Visualizing multi-region architectures, edge routing (CloudFront/Route53), API Gateways, CDC event streams (Kinesis/Debezium), Event Buses (EventBridge/Kafka), Serverless vs Containerized logic tiers, Data Layer isolation (Single View / Report DB / Data Lake), and Cross-Region Replication.
- `[CORE]` **The C4 Model for Visual System Architecture** — Context, Container, Component, and Code level diagrams; distinguishing sync API calls (solid arrows), async events (dashed arrows), and storage access links.
- `[CORE]` **Diagramming Tools & Industry Practice** — Hands-on diagramming using Mermaid.js, Excalidraw, and cloud architecture stencils.

---

## Level 4 — Enterprise: Production Readiness at Scale

_Project: Unified Production Platform (wiring Projects 1–3 together under enterprise hardening)_

> 📦 **Level 4 Build Scope & Scope Boundaries**:
> - **MVP (Minimum Viable Version - Required to complete Level 4)**:
>   - **Gateway & Auth Tier**: Envoy or Express Gateway with JWT validation & Redis distributed rate limiting.
>   - **Service Integration**: Wire Production Service Core (Level 0B) + Product Catalog (Level 2) + Order Processing Engine (Level 3A) together behind Gateway.
>   - **Observability Tier**: Prometheus metrics + Grafana dashboard (p95/p99 latency, RPS, error rates) + OpenTelemetry trace propagation across services.
>   - **CI/CD & Hardening**: Helm / Docker Compose deployment with an automated `k6` load-test script in CI and a written **Production Operations Runbook**.
> - **Stretch Goals (Optional)**:
>   - Chaos injection via Pumba / Chaos Mesh in Docker container.
>   - Automated Canary rollout script with error-rate automatic rollback.

### 4.1 Microservices & Gateway

- `[CORE]` Domain-driven design basics (bounded contexts)
- `[CORE]` API Gateway Deep Dive & Multi-Gateway Architecture — Path-based, header-based, and weight-based routing, Multi-Gateway Topologies (External Edge Gateway for internet WAF/Auth vs Internal Mesh Gateway for microservice-to-microservice mTLS & rate limiting), Version routing at the gateway (`/v1/*` vs `/v2/*` path routing, header-based version routing `X-API-Version`), gateway auth context injection (JWT validation at gateway & forwarding user headers), config-driven vs code-driven rate limiting, gateway observability (per-route metrics & tracing), self-hosted options (Kong, Tyk, Traefik, APISIX, KrakenD), and Gateway Anti-Patterns (leaking domain business logic into gateway plugins, single-point-of-failure monolithic gateway bottlenecks, unnecessary double-hop latency penalties) `[See Also: Level 0B.5 API Versioning Engine]`
- `[CORE]` Traffic & Rate Control Taxonomy Matrix — Rate Limiting (requests per time window), Throttling (deliberately slowing down/delaying responses vs blocking), Quotas (total usage over extended billing cycles), Admission Control (limiting max concurrent in-flight requests), and Load Shedding (dropping low-priority traffic under CPU/RAM pressure)
- `[CORE]` Multi-Tenant Rate Limiting & Quota Management — Per-tenant tiered quotas (free/pro/enterprise), burst allowance token buckets, quota reset semantics (calendar month vs rolling 30 days), soft vs hard limits, and usage dashboard alerts
- `[CORE]` Multi-Tiered Rate Limiting Architecture — Edge Rate Limiting (Cloudflare WAF / AWS Shield DDoS protection) vs Gateway Rate Limiting (Envoy/Kong distributed token bucket) vs Application-Level Rate Limiting (Redis Express middleware) `[See Also: 0B.4 Security Mechanics]`

> 📌 **Diagram: Request path through three rate-limiting tiers**
```
Client Request ───▶ [Edge: Cloudflare WAF] ───▶ [Gateway: Envoy Token Bucket] ───▶ [App: Express/Redis Sliding Window] ───▶ Service Logic
                      (DDoS / IP Block)                (Global QPS Cap)                  (User / Route Tier Limits)
```
- `[CORE]` Multi-Tier Rate Limiting Failure Modes & Blast Radius — edge bypass attacks, gateway Redis rate-limiter cluster failopen vs failclosed policies, application rate-limit lock contention, and compute cost trade-offs
- `[CORE]` Resilience patterns: circuit breaker, bulkhead, rate limiting at the gateway

### 4.1b Graceful Degradation & Adaptive Load Shedding

- `[CORE]` Graceful Degradation Strategies — Serving stale cache data during backend DB degradation, disabling non-critical UI/API widgets, and fallback response chains (primary DB → replica → L2 cache → default fallback payload)
- `[CORE]` Bulkhead Isolation in Practice — Isolating thread pools, connection pools, and worker queues per dependency to prevent cascading failures
- `[CORE]` Adaptive Load Shedding & Overload Protection — Rejecting low-priority API traffic when server CPU/RAM saturates (`503 Service Unavailable` with `Retry-After` headers), sliding window queue depth limits, and user-facing degradation banners / status page signals
- `[CORE]` Chaos Engineering for Degradation — Deliberately injecting degradation modes in staging to verify fallback mechanisms

### 4.1c Networking, DNS & TLS Fundamentals

- `[CORE]` DNS Infrastructure Fundamentals — Record types (`A`, `AAAA`, `CNAME`, `MX`, `TXT`, `NS`), recursive resolution flow, TTL propagation delays, and split-horizon DNS
- `[CORE]` TLS/SSL Certificate Lifecycle & Automation — Automated certificate issuance & renewal via ACME / Let's Encrypt (`cert-manager` in K8s), wildcard vs Subject Alternative Name (SAN) certificates, and cert expiration monitoring alerts
- `[CORE]` Load Balancer Health Check Mechanics & Threshold Tuning — Active (synthetic ping probes) vs Passive (in-line error rate detection) health checking, flap dampening, rise/fall failure threshold tuning, and grace period configuration
- `[CORE]` Transport Layer Protocol Selection — TCP (reliable, ordered, connection-oriented) vs UDP (connectionless, low-overhead, packet loss tolerant) trade-offs in DNS lookups, video streaming (HLS/WebRTC), and real-time multiplayer state
- `[CORE]` Network Address Translation (NAT), Proxies & Header Propagation — Reverse proxy NAT traversal, trusted proxy configuration discipline, and handling client IP context headers (`X-Forwarded-For`, `X-Real-IP`, RFC 7239 `Forwarded` headers)

### 4.2 Observability, Log Shipping & SRE On-Call Operations

- `[CORE]` Metrics (Prometheus/Grafana), Structured Logs (Pino), and OpenTelemetry Distributed Tracing Architecture — `@opentelemetry/sdk-trace-node`, W3C Trace Context header propagation (`traceparent`/`tracestate`), automatic instrumentation (HTTP/Express/PG/Redis), span attributes discipline (avoiding high-cardinality label traps, semantic conventions), trace context propagation across Kafka / BullMQ queues and webhooks, trace ID in every log line, and self-hosted backends (Jaeger vs Tempo vs SigNoz)
- `[CORE]` Production Log Shipping & Aggregation Pipeline — Stdout logging → Vector / Fluent Bit log collector → Grafana Loki / OpenSearch log indexing, log retention tiers (hot/warm/cold), PII scrubbing at the pipeline level, and trace-to-log correlation by Trace ID
- `[CORE]` Observability Cost & High-Cardinality Management — avoiding the high-cardinality metric label trap in Prometheus, log volume control, dynamic trace sampling strategies (head-based vs tail-based sampling)
- `[CORE]` SLIs/SLOs/Error Budgets & Modern Burn-Rate Alerting — defining Service Level Indicators/Objectives, error budget management, and multi-window multi-burn-rate alerting rules (e.g., paging on 2% budget burn in 1 hour vs warning on 5% burn in 6 hours per Google SRE practices)
- `[CORE]` Business Metrics & Product Observability Engine — Emitting and tracking business-level KPIs (signups, successful order volume, payment conversion rate, churn indicators), User Journey Funnel Drop-off Tracking, P0 Business Anomaly Alerting (e.g. alerting when checkout completion rate drops by >30% even if technical HTTP error rate appears green), and Correlating Technical Performance to Business Impact (linking p99 latency spikes directly to checkout conversion degradation)
- `[CORE]` On-Call Engineering & Incident Management Operations — Alert routing via Grafana OnCall / PagerDuty / Opsgenie, primary/secondary/manager escalation policies, alert fatigue tuning, silencing rules, runbook-linked alerts, Incident Command roles (Incident Commander, Tech Lead, Comms Lead), stakeholder updates, and error budget enforcement policies (deployment freezes upon budget exhaustion)
- `[CORE]` Incident response: blameless postmortems, five whys, actionable tracked follow-ups, and writing an enterprise-grade **Production Operations Runbook** artifact for the Unified Platform's top 3 failure modes (e.g., Redis cluster memory exhaustion, Kafka consumer group lag spike, PostgreSQL primary failover timeout) with trigger alerts, diagnostic commands, mitigation steps, and rollback procedures
- `[CORE]` Backup/restore, PITR, RTO/RPO, Backup Encryption & KMS Key Rotation (AES-256 envelope encryption for automated database snapshots, managing KMS key rotation without corrupting historical PITR backups)
- `[CORE]` Disaster Recovery & Multi-Region Architecture Engine — Active-passive vs active-active vs active-active-active trade-offs & costs, Regional vs Global Service Categorization (identifying stateless regional services vs stateful global data bottlenecks), Cross-Region Request Routing (latency-based, geo-proximity, health-check failover routing), Data Replication Topologies (cross-region single-leader read replicas vs multi-leader replication vs quorum consensus), Multi-Region Conflict Resolution (Last-Write-Wins / LWW, vector clocks, CRDTs `[See Also: Level 6.2 Active-Active Geo-CRDTs]`), database failover (managed vs manual, split-brain prevention), read replica promotion (promotion steps, data loss windows), async vs sync & physical vs logical data replication strategies, and Game Day execution methodology:
  - `[CORE]` Game Day Execution — executing step-by-step incident runbooks under simulated cluster outage scenarios
  - `[CORE]` RTO Measurement — timing Recovery Time Objective from outage trigger to healthy traffic restoration
  - `[CORE]` RPO Measurement — calculating Recovery Point Objective data loss delta from WAL / replica snapshot timestamp
- `[CORE]` Load/stress/spike/soak testing, chaos engineering basics

### 4.3 Security & Compliance

- `[CORE]` OAuth2 (PKCE) / OIDC
- `[CORE]` Secrets Management & Operational Secret Rotation — HashiCorp Vault dynamic secrets, secret rotation without downtime (dual-secret window), database IAM credential rotation, API key rotation, and CI secret sprawl detection (TruffleHog/Gitleaks)
- `[CORE]` OWASP API Security Top 10
- `[CORE]` Advanced Application Security — SSRF (Server-Side Request Forgery) mitigation (DNS pinning, internal private IP blocking), unsafe deserialization protection, and Supply-Chain Security & Software Bill of Materials (SBOM generation via Syft, container & dependency vulnerability scanning via Trivy/Snyk)
- `[CORE]` CI/CD Pipeline Security & Artifact Attestation — Cryptographically signed commits & verified build pipelines (Sigstore, Cosign, SLSA Level 3 compliance framework), Build Provenance Attestation (verifying artifact build origin & git commit SHA), Dependency Confusion & Namespace Squatting Protection (scoped npm registries & private package isolation), Pre-commit & Pre-push CI Secret Scanning (TruffleHog, Gitleaks hooks), and Container Image Signing & Enforcement (Cosign, Docker Notary, K8s Kyverno / OPA Gatekeeper verification policy)
- `[CORE]` Privacy Engineering & Global Compliance Architecture — GDPR cascading deletion pipelines (`right-to-be-forgotten`), CCPA/CPRA opt-out mechanisms, HIPAA health data encryption & Business Associate Agreement (BAA) isolation, PCI-DSS payment scope minimization & tokenization, data residency & localization enforcement (in-region data isolation), cross-border data transfer controls (Schrems II & Standard Contractual Clauses / SCCs), jurisdiction-aware PII classification, technical & legal definitions of Pseudonymization vs Anonymization, user right-to-access & data rectification APIs, and granular per-purpose consent tracking management

### 4.4 Cloud-Native, GitOps & FinOps Cost Engineering

- `[CORE]` Infrastructure-as-Code (IaC) with Terraform / OpenTofu — declarative state management, state locking, modular infrastructure provisioning, drift detection, and automated K8s cluster / cloud resource deployment via CI/CD pipelines
- `[CORE]` Kubernetes essentials: pods, deployments, services, ingress, HPA
- `[CORE]` CI/CD, GitOps & Production Deployment Sequencing — Declarative GitOps workflows (ArgoCD/Flux), zero-downtime deployment sequencing (running DB schema migrations via K8s InitContainers/Helm pre-install hooks BEFORE app pod rollouts), Expand-Contract migration step orchestration, and health-check gate verification
- `[CORE]` Feature Flags & Progressive Delivery Engineering — Release vs ops vs experiment flags, server-side vs edge evaluation (OpenFeature SDK / Unleash), user segment targeting rules, percentage rollouts, API Version Rollouts as Progressive Delivery (canary v2 rollout to 1% → 10% → 100% of traffic), flag debt cleanup, and per-tenant kill switches `[See Also: Level 0B.5 API Versioning Engine]`
- `[CORE]` Consumer-Driven Contract Testing (Pact) — schema evolution validation & non-breaking API contract enforcement across microservice boundaries in CI/CD pipelines
- `[CORE]` Automated Performance Regression Testing in CI — automated k6/Autocannon load testing scripts executing as quality gates to fail PR builds on p99 latency regressions
- `[CORE]` Automated Chaos & Resilience Gates in Staging — fault injection testing (pod kills, latency injection via Pumba/Chaos Mesh) integrated into deployment pipelines before production cutover
- `[CORE]` FinOps Cost Engineering & Operational Cost Tracking — OpenCost / Kubecost for K8s container cost attribution, cloud resource tagging, per-service/per-team/per-tenant cost dashboards, cost anomaly spike alerts, cloud egress cost optimization, and unit economics trends ($/request, $/tenant, $/transaction over time)
- `[CORE]` Self-Hosted vs Managed Infrastructure Decision Framework — Evaluating cost thresholds, engineering team operational overhead, custom control vs time-to-market speed, regulatory compliance boundaries, reliability/SLA guarantees, and bidirectional migration paths (self-hosted Docker/K8s $\rightarrow$ managed cloud PaaS/DBaaS and cloud cost repatriation back to self-hosted/bare-metal)
- `[CORE]` Multi-Environment Deployment & Parity Discipline — 12-Factor App methodology (config separation, backing service abstraction, dev/prod parity), Staging vs Production Drift Mitigation (feature flag synchronization, data shape alignment, load parity), Production-Like Test Data Pipelines (anonymized data subsetting, synthetic data generation), Ephemeral Preview Environments (per-PR dynamic K8s namespace provisioning), and Deployment Rollback Protocols (instant automated image rollback vs roll-forward-only schema migration policies)
- `[CORE]` Deployment Strategy Trade-Off Comparison Matrix — Blue-Green (2x compute cost overhead, instant router cutover/rollback, stateful DB migration challenges) vs Canary (1%-100% granular traffic routing, low initial blast radius, requires deep observability metrics) vs Rolling Deployments (zero extra infrastructure cost, gradual pod replacement, harder mid-rollout rollback complexity), and deployment selection decision matrices for production workloads

### 4.4b Shift-Right Testing & Production Verification

- `[CORE]` Production Canary Testing & Probes — Automated smoke tests against canary instances, synthetic endpoint monitoring probes (Grafana Synthetic / Checkly), dark launches (routing production traffic to new code paths without user impact), shadow traffic duplication (mirroring live production requests to new versions), and controlled production chaos testing (isolated blast radius & kill switches)

🏛️ **`[DEFENSE 4]`**: You present your Unified Production Platform architecture (wiring Production Service Core 0B + Product Catalog 2 + Order Processing 3A, with optional Real-Time Chat 3B stretch goal, behind Envoy Gateway with OpenTelemetry, K8s, and Canary rollouts). The AI conducts a formal 30-minute Staff Architect Mock Interview, grilling your design on: 10x/100x traffic spikes, multi-region failover, gateway throughput bottlenecks, database connection pool exhaustion, and cascading failure isolation.
🔎 **`[DISSECTION 4]`**: Inspect Envoy Proxy's rate-limiting filter definitions (`ratelimit.proto` & Envoy rate-limit service) — explain gRPC interface design for high-throughput edge filters.

---

## Level 5 — MAANG: High-Scale System Design Capstones

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

- **5.1.1 Requirements & Capacity**: 100M active users, 10:1 read-to-write ratio, 1B short links created/mo, storage & cache sizing for 500M QPS peak.
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

- **5.3.1 Requirements & Capacity**: 50M concurrent WebSocket connections, 2B messages/day, sub-100ms message delivery, online/offline presence tracking.
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

- **5.6.1 Requirements & Capacity**: 300M DAU, 50k tweets/posts per second, timeline generation latency < 200ms.
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

## Level 6 — Extreme Distributed Systems (Awareness Protocol Only)

_No hands-on build for this level — AI writes one concise, high-impact conceptual breakdown per subtopic (what it is, why it exists, where it's used in production at scale), and you confirm literacy by restating the core mechanics in your own words before advancing._

### 6.1 Ultra-Low Latency Engineering

- `[AWARENESS]` Kernel-bypass concepts (DPDK, eBPF zero-copy networking) — sub-microsecond trading systems and packet processing
- `[AWARENESS]` LMAX Disruptor pattern — lock-free ring buffer, mechanical sympathy, zero-allocation data structures in ultra-high-throughput exchanges

### 6.2 Globally Distributed Active-Active Architecture

- `[AWARENESS]` Geo-distributed DB architecture (Spanner, CockroachDB), TrueTime, Paxos across multi-region active-active deployments
- `[AWARENESS]` Multi-region active-active routing (Anycast, edge compute) & Geo-CRDT conflict resolution

### 6.3 Zero-Downtime & Self-Healing Operations

- `[AWARENESS]` Billion-row live schema migrations (dual-write, shadow verification, atomic cutover) on multi-terabyte production databases
- `[AWARENESS]` Cell-based architecture — partitioning infrastructure into isolated blast-radius cells for fault isolation

### 6.4 WebAssembly in the Backend & Edge Compute

- `[AWARENESS]` Wasm runtime internals (Wasmtime, Wasmer), `proxy-wasm` plugin filters in Envoy gateways, sandboxed user-code execution

### 6.5 Advanced Consensus Engines & Formal Verification

- `[AWARENESS]` Raft vs Multi-Paxos vs EPaxos (Egalitarian Paxos without leader bottlenecks)
- `[AWARENESS]` TLA+ & Formal Verification — mathematically proving distributed protocol correctness (how AWS / MongoDB prevent subtle concurrency bugs)

### 6.6 Distributed Clocks & Physical Time Mechanics

- `[AWARENESS]` NTP vs PTP (Precision Time Protocol) vs Hybrid Logical Clocks (HLCs)
- `[AWARENESS]` Bounded clock uncertainty & external consistency — Google Spanner TrueTime (GPS + Atomic clocks) vs CockroachDB HLCs

---

## Level 7 — High-Scale AI Infrastructure & Systems Engineering (Extension / Optional)

_Building high-performance backend infrastructure for AI models, vector search, RAG pipelines, and autonomous agents. **Level 7 is a Hybrid Module**: Subtopics 7.1–7.5 feature hands-on code drills (benchmarking vector search, building Express LLM Gateways with Redis caching, Docker sandbox isolation), while Capstone 7.6 is a comprehensive design defense with an optional prototype build._

### 7.1 Vector Storage Engines & Similarity Indexing

- `[AI-CORE]` Vector Embeddings & High-Dimensional Distance Metrics — Cosine similarity, Dot product, Euclidean distance ($L_2$) vector space math
- `[AI-CORE]` Vector Indexing Algorithms — Hierarchical Navigable Small World (HNSW) graph search, Inverted File Index (IVF), and Product Quantization (PQ) vector compression
- `[AI-CORE]` Self-Hosted Vector Databases — PostgreSQL `pgvector` extension vs standalone Qdrant/Milvus cluster architecture; hybrid metadata filtering (pre-filtering vs post-filtering) `[Cross-ref Level 3A.2 Database Scaling]`
- `[AI-CORE]` Failure Modes & Bottlenecks — High HNSW RAM consumption, vector index rebuild latency/locking, curse of dimensionality, embedding drift during re-indexing
- 🧪 **`[DRILL 7.1]`**: Benchmark HNSW vs IVF index recall precision ($@k$) and query p99 latency on a 1M vector dataset using `pgvector` / `Qdrant`.

### 7.2 Production Retrieval-Augmented Generation (RAG) Infrastructure & Evaluation

- `[AI-CORE]` Multi-Stage Retrieval Pipelines — Sparse (BM25 full-text keyword) + Dense (Vector embedding) Hybrid Search integration `[Cross-ref Level 1.5 Search & Caching]`
- `[AI-CORE]` Reciprocal Rank Fusion (RRF) & Cross-Encoder Re-Ranking — Re-ranking top-$k$ candidate documents before context window injection
- `[AI-CORE]` Chunking & Embedding Strategies — Semantic chunking, sliding window overlap, parent-child document retrieval, and semantic embedding cache layers
- `[AI-CORE]` Rigorous RAG Evaluation Framework — Offline eval (NDCG@k, Recall@k, Context Recall, Context Precision, Faithfulness via Ragas) vs Online eval (LLM-as-a-judge, A/B query testing, human feedback loops)
- `[AI-CORE]` Failure Modes & Bottlenecks — Hallucination due to retrieval noise, context window truncation, retrieval drift, stale document chunk updates
- 🧪 **`[DRILL 7.2]`**: Build a high-throughput hybrid RAG retrieval pipeline with cross-encoder re-ranking and measure context recall@10.

### 7.3 LLM Gateway & Inference Serving Infrastructure

- `[AI-CORE]` LLM Serving Optimization Mechanics — KV-Cache memory management, PagedAttention, Continuous Batching, Quantization (AWQ/GPTQ/GGUF fp16 -> int4/int8 trade-offs), and serving runtimes (vLLM, TGI, Ollama internal architectures)
- `[AI-CORE]` Streaming Response APIs — Server-Sent Events (SSE) and gRPC streaming for token-by-token generation with client backpressure handling `[Cross-ref Level 3A.3 Messaging]`
- `[AI-CORE]` Enterprise LLM Gateway Router — Multi-provider failover routing (OpenAI/Anthropic/Local vLLM), semantic caching (caching prompt embeddings in Redis), token rate-limiting (token bucket per tenant), and usage/cost accounting
- `[AI-CORE]` Failure Modes & Bottlenecks — KV-cache OOM spikes during long context requests, tail latency spikes during continuous batching saturation, provider rate limit exhaustion
- 🧪 **`[DRILL 7.3]`**: Build an Express/TypeScript LLM Gateway with semantic prompt caching (Redis + pgvector), SSE streaming, and tenant token rate-limiting.

### 7.4 Autonomous Agent Orchestration, Guardrails & Execution

- `[AI-CORE]` Agent Architecture & Loops — ReAct (Reason + Act) loop, Plan-and-Execute pattern, Short-term vs Long-term Agent Memory (Vector DB + Redis session state), and Multi-Agent Orchestration graphs (LangGraph/XState) `[Cross-ref Level 3A.3 Task Queues]`
- `[AI-CORE]` Tool Execution & Sandboxing — Safe tool-calling schemas, Docker containerized code execution sandboxes, dynamic schema generation, asynchronous task queue execution
- `[AI-CORE]` Safety Guardrails & Dynamic Steering — Input sanitization (PII redaction, prompt injection defense), output schema enforcement (Zod/TypeBox), structured JSON repair, and failure recovery (max iteration limits, tool retry fallbacks)
- `[AI-CORE]` Failure Modes & Bottlenecks — Infinite reasoning loops, tool-calling schema hallucination, memory leaks across multi-turn agent sessions, untrusted code sandbox escape risk
- 🧪 **`[DRILL 7.4]`**: Build a sandboxed AI Agent tool-calling execution engine with Zod schema validation and Docker container isolation.

### 7.5 Real-Time Feature Stores & ML Pipeline Infra

- `[AI-CORE]` Dual-Storage Feature Store Architecture — Online Feature Store (sub-5ms Redis/DynamoDB lookups) vs Offline Feature Store (S3/Parquet batch analytics)
- `[AI-CORE]` Feature Synchronization & Ingestion — Real-time stream feature ingestion (Kafka + Feast) vs batch ETL synchronization
- `[AI-CORE]` Point-in-Time Correctness — Preventing data leakage in ML training sets via temporal joins
- `[AWARENESS]` Recommender System Pipelines — Candidate generation → Ranking → Re-ranking → Business logic filters
- `[AI-CORE]` Failure Modes & Bottlenecks — Online/Offline feature asymmetry, stream ingestion lag causing stale feature serving, memory pressure on online Redis cache
- 🧪 **`[DRILL 7.5]`**: Implement an online feature store using Redis & Feast, fetching real-time user features at sub-5ms p99 latency.

---

### 🏆 Level 7 Capstone Build — Production Enterprise AI Gateway & Hybrid RAG Engine (Design Defense Required, Prototype Build Optional)

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
- **Instagram's Postgres sharding strategy** `[Reinforces Level 1.2 SQL & Level 3A.2 Database Scaling]`
- **Stripe's ledger and idempotency-key architecture** `[Reinforces Level 0B.7 Idempotency & Level 5.5 Ledger]`
- **Stripe's date-based API versioning and per-request transformation layer** `[Reinforces Level 0B.5 API Versioning Engine & Level 4.1 Gateway Routing]`
- **Uber's H3 geospatial indexing and dispatch system evolution** `[Reinforces Level 3B.2 Real-Time Spatial & Level 5.4 Uber]`
- **Netflix's chaos engineering culture & multi-region setup** `[Reinforces Level 4.2 SRE & Level 6.2 Active-Active]`
- **Airbnb's service mesh & migration to SOA** `[Reinforces Level 4.1 Microservices & Gateway]`
- **Facebook/Meta's TAO (social graph) and Haystack (photo storage)** `[Reinforces Level 1.5 Caching, Level 2.3 Storage & Module B TAO Paper]`
- **Google GFS & Bigtable Architecture in Practice** `[Reinforces Level 2.3 Storage & Module B GFS/Bigtable Papers]`
- **Amazon's original Dynamo paper vs DynamoDB productization** `[Reinforces Level 3A.4 Consensus & Level 5.2 Dynamo KV]`
- **Slack's job queue and channel fan-out architecture** `[Reinforces Level 3A.3 Messaging & Level 5.3 Real-Time Chat]`
- **WhatsApp's famously small server footprint** `[Reinforces Level 1.1 Node Internals & Level 5.3 Chat]`
- **LinkedIn's Kafka origin story** `[Reinforces Level 3A.3 Messaging & Event Streams]`
- **Figma/Google Docs: CRDT vs OT trade-offs in practice** `[Reinforces Level 5.10 Collaborative Editor]`

---

## 📄 Module B — Seminal Systems Papers

_Classic systems papers mapped directly to roadmap levels. Annotated with estimated reading time budgets and depth targets (Abstract & Architecture only vs Full Deep Read)._

- **Google MapReduce Paper (Dean & Ghemawat, 2004)** `[Reinforces Level 2.4 Data Pipelines]` — *Time Budget: 45 mins | Target: Abstract & Architecture Only* (Map vs Reduce phase split, worker fault tolerance, data locality optimization).
- **Google Bigtable Paper (Chang et al., 2006)** `[Reinforces Level 2.2 Wide-Column Stores]` — *Time Budget: 60 mins | Target: Abstract & Architecture Only* (SSTable/LSM-tree mechanics, GFS dependency, sparse multidimensional sorted map).
- **Amazon Dynamo Paper (DeCandia et al., 2007)** `[Reinforces Level 2.2 KV Stores & Level 3A.2 Sharding]` — *Time Budget: 90 mins | Target: Full Deep Read* (Consistent hashing, vector clocks, quorum reads/writes `N+R>W`, sloppy quorums & hinted handoff).
- **Apache Kafka Paper (Kreps et al., 2011)** `[Reinforces Level 3A.3 Event Streams]` — *Time Budget: 60 mins | Target: Full Deep Read* (Distributed commit log, zero-copy `sendfile` I/O, partition consumer scaling).
- **Apache ZooKeeper Paper (Hunt et al., 2010)** `[Reinforces Level 3A.4 Distributed Coordination]` — *Time Budget: 60 mins | Target: Full Deep Read* (ZAB atomic broadcast protocol, hierarchical z-node tree, linearizable writes & watch triggers).
- **Raft Consensus Paper (Ongaro & Ousterhout, 2014)** `[Reinforces Level 3A.4 Consensus]` — *Time Budget: 120 mins | Target: Full Deep Read* (Leader election, log replication, safety invariants, joint consensus membership changes).
- **Google Spanner Paper (Corbett et al., 2012)** `[Reinforces Level 3A.4 Consistency & Level 5 Capstones]` — *Time Budget: 90 mins | Target: Full Deep Read* (TrueTime API, Paxos state machines, external consistency guarantees).
- **Amazon Aurora Paper (Verbitski et al., 2017)** `[Reinforces Level 1.2 & Level 2.1 RDBMS Internals]` — *Time Budget: 60 mins | Target: Full Deep Read* (Log is the database, decoupled compute & storage, asynchronous quorum writes across 6 storage nodes).
- **Google GFS Paper (Ghemawat et al., 2003)** `[Reinforces Level 2.3 Object/File Storage]` — *Time Budget: 45 mins | Target: Abstract & Architecture Only* (Single master bottleneck tradeoffs, chunksize selection, record append semantics).
- **Facebook TAO Paper (Bronson et al., 2013)** `[Reinforces Level 1.5 Caching & Level 2.2 Graph Stores]` — *Time Budget: 60 mins | Target: Full Deep Read* (Distributed social graph read-through cache, write-through invalidation, regional leader/follower tiers).

---

## 🔧 Module C — Hardware & OS Internals (Optional Deep-Dive Track)

_Not part of the core path — pull from here only if/when you want to go a level deeper than high-level application backend engineering._

- **OS process/thread model, virtual memory, paging, context switching** `[Cross-Reference: Level 0B.4 Async Execution & Level 1.1 Node Internals]`
- **Filesystem internals (inodes, journaling, `fsync`, `mmap`)** `[Cross-Reference: Level 1.5 Storage Mechanics & Level 3A.3 Commit Logs]`
- **Linux CPU scheduler (CFS), memory allocators (`jemalloc`/`tcmalloc`)** `[Cross-Reference: Level 6.1 Low Latency & Level 0A Engine Setup]`
- **`io_uring`, kernel bypass (DPDK/eBPF) concepts** `[Cross-Reference: Level 6.1 Ultra-Low Latency Engineering]`
- **NUMA, SIMD, cache-line/false-sharing awareness** `[Cross-Reference: Level 6.1 Lock-Free Ring Buffers]`
- **V8 / Node.js GC internals, heap dumps & flame graph profiling** `[Cross-Reference: Level 1.1 Node Internals & Level 0B.6 Memory Leak Profiling]`

---

## 🔄 Session Handoff State

> Updated at the end of each session so we can resume cleanly.

- **Last updated**: _(not started)_
- **Last completed subtopic**: _(none)_
- **Next starting point**: **Level 0A.1 — Architecture & Project Structure**
- **Open notes for next session**: _(none yet)_

### 🛠️ Living Error Journal (Bugs Encountered & Root-Caused)

_Whenever we hit a runtime bug, race condition, or memory leak during building or drills, we log it here with its root cause and key engineering takeaway._

| #            | Subtopic / Drill | Symptom / Bug Encountered | Underlying Root Cause | Key System Design Takeaway |
| ------------ | ---------------- | ------------------------- | --------------------- | -------------------------- |
| _(none yet)_ | _(none)_         | _(none)_                  | _(none)_              | _(none)_                   |
