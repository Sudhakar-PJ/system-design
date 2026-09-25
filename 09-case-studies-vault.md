# Case Studies Vault

> 26 real-world engineering stories, tagged by tier. Read on demand — the AI never proactively suggests them.
> Each case study reinforces specific tiers. Say "go deeper on [case study]" to generate a full analysis.

---

## How to Use This Vault

Case studies are **read on demand**. They are not part of the linear tier progression — you read them when you want to see how a real system applied what you're learning.

**On-demand deep dives**: If you want a full breakdown of any case study, say *"go deeper on [case study name]."* The AI generates a `case-study-deep-dives/[slug].md` file with a 5-part structure.

**Length**: Short entries below are ~200 words each. Deep dives are ~600 lines each.

---

## Case Study Table

| # | Case Study | Primary Tier | Why It Matters |
|---|---|---|---|
| 1 | Discord's migration from Cassandra to ScyllaDB | T4.4 | When wide-column NoSQL makes sense — and when C++ rewrite beats it |
| 2 | Instagram's Postgres sharding strategy | T2.2 | How to scale Postgres to hundreds of millions of users |
| 3 | GitHub's zero-downtime MySQL → Vitess migration | T3.5.7 | Live migration of a sharded database without downtime |
| 4 | Shopify's Pods architecture | T3.5.5 | Scaling a monolith via cells (not microservices) |
| 5 | Amazon Prime Video's microservices → monolith reversal | T3.5.5 | When microservices cost 90% more than a monolith |
| 6 | Segment's $1M Kafka incident postmortem | T4.1 | How a Kafka cluster failure cost $1M in a day |
| 7 | Cloudflare's postmortem culture & global outage RCAs | T4.6 | Templates for incident postmortems at scale |
| 8 | Reddit's queue architecture & early scaling postmortems | T3.5.3 | When queues become the bottleneck |
| 9 | Stripe's ledger and idempotency-key architecture | T3.2 | The canonical design for safe retries in payments |
| 10 | Stripe's date-based API versioning | T3.5.7 | The cleanest approach to long-lived public APIs |
| 11 | Uber's H3 geospatial indexing | T3.5.6 | Hexagonal grids vs geohash for spatial queries |
| 12 | Netflix's chaos engineering culture | T3.5.3 | Resilience is verified, not assumed |
| 13 | Airbnb's service mesh & migration to SOA | T4.6 | Moving a monolith to a service mesh |
| 14 | Facebook/Meta's TAO (social graph) | T3.5.1 | Distributed graph caching at petabyte scale |
| 15 | Facebook/Meta's Haystack (photo storage) | T2.5 | Optimizing storage for write-once, read-many workloads |
| 16 | Google GFS & Bigtable in practice | T4.8 | How Google actually used these systems |
| 17 | Amazon's original Dynamo paper vs DynamoDB productization | T4.3 | Theory vs practice in distributed KV |
| 18 | Slack's job queue and channel fan-out architecture | T4.1 | Job queues and fan-out at Slack scale |
| 19 | WhatsApp's famously small server footprint | T3.5.5 | Small engineering team, huge scale — through efficiency |
| 20 | LinkedIn's Kafka origin story | T4.1 | How Kafka was born from LinkedIn's data pipeline needs |
| 21 | Figma/Google Docs: CRDT vs OT trade-offs in practice | T3.5.4 | Two approaches to collaborative editing |
| 22 | Cloudflare's 2020 BGP outage | T4.6 | Route leak took down 15% of the internet |
| 23 | AWS S3's 2017 outage | T4.5 | Typo in a command during maintenance took down a region |
| 24 | Facebook's 2021 BGP + DNS outage | T4.6 | Self-inflicted outage from a BGP change |
| 25 | Roblox's 2021 73-hour outage | T3.3 | Consul + HashiCorp stack cascading failure |
| 26 | GitLab's 2017 database incident | T3.5.7 | Accidental data deletion + restore story |
| 27 | Knight Capital's 2012 trading loss | T3.5.7 | Deployment bug that lost $460M in 45 minutes |
| 28 | Google's 2020 authentication outage | T3.3 | Quota system failure cascaded across Google services |
| 29 | Slack's 2021 outage | T3.5.3 | Traffic spike + capacity mismatch |
| 30 | Heroku's 2021 DNS outage | T4.7 | DNS management failure took down downstream services |
| 31 | Netflix's multi-region failover | T3.5.4 | Active-active across regions in practice |
| 32 | Stripe's rate limiter design | T3.5.2 | Public engineering blog on production rate limiting |

> **Note**: Rows 22–32 are the "20 additions" confirmed earlier. Some are "strong candidates" and some are "niched but valuable" — all are reinforced by specific tiers.

---

## Case Study Entries (Sample — full entries generated on demand)

### 1. Discord's migration from Cassandra to ScyllaDB

**Tier**: T4.4 (Cassandra / ScyllaDB)

**Why it matters**: Discord migrated from Cassandra to ScyllaDB (a C++ rewrite of Cassandra) to solve tail latency issues. The migration demonstrates when a rewrite (same data model, different engine) beats a re-architecture, and how to do a zero-downtime database migration at petabyte scale.

**Key lessons**:
- Tail latency vs average latency — why Cassandra's JVM GC caused p99 spikes
- ScyllaDB's shard-per-core architecture vs Cassandra's JVM
- The migration path: dual-write, backfill, verify, cutover
- When C++ performance matters enough to justify the migration

---

### 6. Segment's $1M Kafka incident postmortem

**Tier**: T4.1 (Kafka)

**Why it matters**: Segment's Kafka cluster failed in a way that cost them ~$1M in a single day. The postmortem covers cascading failures, retry storms, and the operational discipline that prevented recurrence.

**Key lessons**:
- Kafka consumer lag under backpressure
- Retry storms amplifying an outage
- Insufficient monitoring on cluster health
- The blast radius of a shared infrastructure failure
- Postmortem culture: what to write, what to skip

---

### 22. Cloudflare's 2020 BGP outage

**Tier**: T4.6 (Envoy / Service Mesh)

**Why it matters**: A BGP route leak at a transit provider took down 15% of the internet (including Cloudflare's traffic) for ~30 minutes. Demonstrates how dependent modern systems are on inter-domain routing — and why any single point of failure at the network layer is catastrophic.

**Key lessons**:
- BGP route leaks propagate globally in seconds
- Anycast doesn't protect against upstream failures
- DNS + BGP are critical dependencies
- Postmortem discipline for events outside your control

---

### 25. Roblox's 2021 73-hour outage

**Tier**: T3.3 (Distributed Locks & Coordination)

**Why it matters**: Roblox's Consul cluster failure cascaded into a 73-hour outage. The postmortem covers coordination service dependency, cascading failure modes, and the operational cost of distributed infrastructure.

**Key lessons**:
- Consul as a critical-path dependency
- Cascade amplification across interdependent services
- The cost of a long outage
- Why "single cluster, single failure domain" is dangerous

---

### 31. Netflix's multi-region failover

**Tier**: T3.5.4 (Multi-Region Active-Active)

**Why it matters**: Netflix actively runs an active-active multi-region architecture, with chaos engineering (Chaos Monkey) validating failover regularly. The engineering blog covers region routing, data replication, and the cost of running two regions.

**Key lessons**:
- Active-active doubles infrastructure cost — Netflix accepts it for resilience
- Regional routing via latency-based DNS
- Cross-region data replication (async, eventual)
- Chaos engineering validates failover
- When active-active is worth the cost

---

### 32. Stripe's rate limiter design

**Tier**: T3.5.2 (Rate Limiting at Scale)

**Why it matters**: Stripe's engineering blog describes their production rate limiter — token bucket, Redis-backed, distributed across their fleet. A concrete look at how a hyperscale system handles rate limiting.

**Key lessons**:
- Token bucket for burst tolerance
- Redis Lua scripts for atomic operations
- Fail-open policy for limiter outages
- Per-tenant limits and per-endpoint limits
- Distributed rate limiting without SPOF

---

## Case Studies by Tier (Full Mapping)

**Read during T1**:
- Cloudflare 2020 BGP outage
- Facebook 2021 BGP + DNS outage
- AWS S3 2017 outage

**Read during T2**:
- Instagram Postgres sharding
- Discord Cassandra → ScyllaDB
- Google GFS & Bigtable
- Amazon Dynamo vs DynamoDB
- Facebook Haystack

**Read during T3**:
- Roblox 73-hour outage
- Google authentication outage
- Stripe idempotency architecture
- LinkedIn Kafka origin story
- Figma/Google Docs CRDT vs OT

**Read during T3.5**:
- Segment Kafka incident
- Reddit queue architecture
- Slack 2021 outage
- Netflix multi-region failover
- Stripe rate limiter design
- Slack job queue
- Facebook TAO
- Shopify Pods
- Amazon Prime Video reversal
- WhatsApp small footprint
- GitHub Vitess migration
- GitLab 2017 database incident
- Knight Capital 2012
- Uber H3
- Cloudflare postmortem culture
- Netflix chaos engineering
- Facebook TAO (caching angle)
- Heroku 2021 DNS outage

**Read during T4**:
- Discord Cassandra → ScyllaDB (deep)
- Segment Kafka incident (deep)
- All others as reinforcement

---

## On-Demand Deep Dives

To request a deep dive on any case study:
- Say: *"Go deeper on [case study name]."*
- The AI generates `case-study-deep-dives/[slug].md` with a 5-part structure:
  1. 💡 Context & Why It Matters
  2. 🔬 Technical Deep Dive
  3. 📐 Diagrams / Schemas / Architecture
  4. ⚠️ Trade-offs, Failure Modes & What Went Wrong
  5. 🎯 What You Can Apply

**Slug examples**:
- `discord-cassandra-scylladb.md`
- `segment-kafka-incident.md`
- `cloudflare-2020-bgp-outage.md`
- `roblox-73-hour-outage.md`
- `netflix-multi-region-failover.md`
- `stripe-rate-limiter.md`