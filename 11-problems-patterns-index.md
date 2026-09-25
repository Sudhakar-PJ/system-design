# Problems → Patterns Index

> A grep-able lookup table. When you think "which pattern solves this?", come here first.
> Organized by problem category. Cross-references to tiers and Backend Engineering where relevant.

---

## Consistency & Correctness

| Problem | Pattern | Tier |
|---|---|---|
| "Reads see stale data after writes" | Read-your-writes, session consistency | T1.3, T3.5.8 |
| "Users see replies before originals" | Causal consistency | T1.3 |
| "Replicas drift silently" | Read repair, anti-entropy, Merkle trees | T1.4 |
| "Multi-leader writes conflict" | Vector clocks, LWW, CRDTs | T1.2, T3.5.4 |
| "Need global ordering of events" | Lamport clocks, HLC, TrueTime, TSO | T1.2, T3.4 |
| "CAP doesn't help me decide" | PACELC (latency vs consistency during normal ops) | T1.3 |
| "Consensus never terminates" | FLP — need partial synchrony or randomization | T1.3 |
| "Cross-region strong consistency" | Spanner-style TrueTime + Paxos | T3.4, T4.2 |

---

## Time & Clock

| Problem | Pattern | Tier |
|---|---|---|
| "Wall clock drifts, ordering breaks" | Monotonic clocks, logical clocks | T1.2, T3.4 |
| "Lease violates mutual exclusion under drift" | Bounded clock skew, fencing tokens | T3.3, T3.4 |
| "No globally sortable timestamp" | TSO, TrueTime | T3.4, T4.2 |
| "Can't measure latency accurately" | Monotonic clock (`process.hrtime` / `performance.now`) | T1.2 |

---

## Consensus & Coordination

| Problem | Pattern | Tier |
|---|---|---|
| "Nodes must agree on order" | Paxos, Raft | T3.1 |
| "Paxos too hard to implement" | Raft | T3.1 |
| "Leader bottleneck in high-throughput clusters" | Multi-Paxos, EPaxos | T3.1 |
| "Coordination across nodes" | ZooKeeper, etcd, Consul | T3.3 |
| "Two workers run same job" | Distributed locks with fencing tokens | T3.3 |
| "Split-brain writes diverge" | Quorum-based failover | T3.5.4, T3.1 |
| "Coordinator crash blocks participants" | Sagas, TCC instead of 2PC | T3.2 |

---

## Distributed Transactions

| Problem | Pattern | Tier |
|---|---|---|
| "ACID across nodes is slow" | Sagas, TCC, outbox | T3.2 |
| "DB commit + event publish divergence" | Transactional outbox | T3.2 |
| "Duplicate side effects on retry" | Idempotency keys | T3.2 |
| "Coordinator failure blocks 2PC" | 3PC (with sync assumptions) or Sagas | T3.2 |
| "Cross-region ACID" | Spanner-style Paxos groups + TrueTime | T3.4, T4.2 |

---

## Replication & Durability

| Problem | Pattern | Tier |
|---|---|---|
| "Leader fails, service down" | Replica promotion, quorum failover | T2.1, T3.1 |
| "Async replication loses data on crash" | Synchronous replication (with latency cost) | T2.1 |
| "Replication lag causes stale reads" | Read-your-writes, sticky sessions | T2.1, T3.5.8 |
| "Replicas drift silently" | Merkle tree anti-entropy, read repair | T1.4, T2.1 |
| "Write amplification on LSM" | Compaction tuning | T2.3 |

---

## Sharding & Partitioning

| Problem | Pattern | Tier |
|---|---|---|
| "Adding a node reshuffles all keys" | Consistent hashing with virtual nodes | T1.5, T2.2 |
| "All writes go to one shard" | Range + hash hybrid, salting | T2.2 |
| "Hot shard from celebrity key" | Key salting, sharded cache, L1+L2 | T2.2, T3.5.1 |
| "Cross-shard query is slow" | Scatter-gather, denormalization, materialized views | T2.2, T3.5.6 |
| "Resharding causes outage" | Dual-write + shadow reads + cutover | T2.2, T3.5.7 |
| "Data residency (GDPR)" | Geo-sharding, cell isolation | T2.2, T3.5.10 |

---

## Storage Engines

| Problem | Pattern | Tier |
|---|---|---|
| "Read-heavy workload" | B-tree storage engine | T2.3 |
| "Write-heavy workload" | LSM-tree storage engine | T2.3 |
| "Crash recovery" | Write-ahead log (WAL), fsync tuning | T2.3 |
| "Readers block writers" | MVCC | T2.3 |
| "OLAP aggregation queries" | Columnar storage | T2.3, T3.5.6 |
| "Bloom filter false positive" | Proper bit-array sizing | T2.4 |

---

## Load Balancing & Routing

| Problem | Pattern | Tier |
|---|---|---|
| "Homogeneous backend, simple LB" | Round-robin | T1.5 |
| "Heterogeneous backends" | Weighted RR, least-conn | T1.5 |
| "LB becomes coordination bottleneck" | Power-of-two-choices | T1.5 |
| "Global traffic steering" | Anycast, GeoDNS, latency-based routing | T1.5, T3.5.4 |
| "Flapping nodes cause churn" | Health check flap damping | T1.5 |

---

## Caching at Scale

| Problem | Pattern | Tier |
|---|---|---|
| "DB overloaded by read traffic" | Cache-aside with L2 (Redis) | T3.5.1 |
| "Cache stampede after expiry" | Single-flight mutex, TTL jitter | T3.5.1 |
| "Hot key saturates cache node" | Sharded cache, L1 (in-process) + L2 | T3.5.1 |
| "Stale cache after write" | Write-invalidate, versioned keys | T3.5.1 |
| "Cross-region staleness" | Versioned keys, invalidate-aware routing | T3.5.1 |
| "Cache penetration (non-existent keys)" | Negative caching | T3.5.1 |
| "CDN origin overload" | Origin shielding, edge caching | T3.5.1 |
| "Personalized data cached at edge" | Cache-key normalization with user context | T3.5.1 |

---

## Rate Limiting & Admission Control

| Problem | Pattern | Tier |
|---|---|---|
| "Rate limit across multiple instances" | Redis-backed distributed limiter | T3.5.2 |
| "Bursty client traffic" | Token bucket (burst allowance) | T3.5.2 |
| "Memory-efficient limiter" | GCRA (single-key) | T3.5.2 |
| "DDoS at edge" | WAF rate limiting, edge throttling | T3.5.2 |
| "Rate limiter outage" | Fail-open policy for non-critical limits | T3.5.2 |
| "One tenant starves others" | Per-tenant quotas with burst allowances | T3.5.2, Backend T7.7 |

---

## Backpressure & Reliability

| Problem | Pattern | Tier |
|---|---|---|
| "Unbounded queue → OOM" | Bounded queues everywhere | T3.5.3 |
| "Cascading failures from slow dependency" | Circuit breaker, bulkhead isolation | T3.5.3 |
| "Retry storm during incident" | Exponential backoff + jitter, retry budgeting | T3.5.3 |
| "Overload without graceful degradation" | Load shedding, priority queues | T3.5.3 |
| "No total latency budget" | Deadline propagation across hops | T3.5.3 |

---

## Multi-Region & Cells

| Problem | Pattern | Tier |
|---|---|---|
| "Regional outage takes down service" | Multi-region active-active | T3.5.4 |
| "Active-active conflict" | CRDTs, vector clocks, LWW (with care) | T3.5.4, T1.2 |
| "Split-brain across regions" | Quorum-based failover | T3.5.4 |
| "One tenant's failure impacts others" | Cell-based architecture with blast radius targets | T3.5.5 |
| "Migrate tenant across cells" | Zero-downtime cell migration (dual-route) | T3.5.5 |

---

## Schema Evolution & Migration

| Problem | Pattern | Tier |
|---|---|---|
| "ALTER TABLE locks production" | Expand-contract pattern | T3.5.7 |
| "Migration at billions of rows" | Batched, idempotent, rate-limited backfill | T3.5.7 |
| "Rollback a bad migration" | Forward-only or reversible migration planning | T3.5.7 |
| "Multi-service coordinated change" | Contract-first migration | T3.5.7 |
| "Manual ALTER on huge tables" | gh-ost, pt-online-schema-change | T3.5.7 |

---

## Search & Analytics

| Problem | Pattern | Tier |
|---|---|---|
| "Full-text search at scale" | Sharded inverted index (Elasticsearch) | T3.5.6 |
| "Cross-shard search query" | Scatter-gather | T3.5.6 |
| "Time-series data grows unbounded" | Partitioning by time + tags, retention tiers | T3.5.6 |
| "Analytical queries slow on row storage" | Columnar storage, Dremel-style shredding | T3.5.6 |
| "Stale materialized view" | Incremental refresh + backfill | T3.5.6 |
| "Schema migration breaks search index" | Blue-green index rebuild | T3.5.6 |

---

## Observability

| Problem | Pattern | Tier |
|---|---|---|
| "Distributed trace storage explodes" | Head/tail-based sampling | T3.5.9 |
| "Global metrics view" | Prometheus federation | T3.5.9 |
| "Log storage costs explode" | Hot/warm/cold tiers | T3.5.9 |
| "Alert fatigue" | Multi-window burn-rate SLO alerts | T3.5.9 |
| "Prometheus index explodes" | Label cardinality discipline | T3.5.9 |

---

## Security at Scale

| Problem | Pattern | Tier |
|---|---|---|
| "Lateral movement after breach" | mTLS, zero-trust architecture | T3.5.10 |
| "Secret rotation causes outage" | Dual-secret windows | T3.5.10 |
| "DDoS reaches origin" | Edge rate limiting, WAF | T3.5.2, T3.5.10 |
| "Data residency (GDPR, etc.)" | Region-aware data placement | T3.5.10 |

---

## Real Systems (T4)

| Problem | System Reference | Tier |
|---|---|---|
| "Event streaming at scale" | Kafka (partitioned commit log) | T4.1 |
| "Globally distributed ACID" | Spanner (TrueTime + Paxos) | T4.2 |
| "Eventually consistent KV at scale" | Dynamo/DynamoDB | T4.3 |
| "Wide-column storage" | Cassandra/ScyllaDB | T4.4 |
| "Cached state at scale" | Redis Cluster | T4.5 |
| "Service mesh internals" | Envoy/Istio | T4.6 |
| "Global content delivery" | Cloudflare/Akamai CDN | T4.7 |
| "Distributed file systems" | GFS, Bigtable, Aurora | T4.8 |

---

## Cross-References to Backend Engineering

Many patterns here build on topics covered at the **usage level** in Backend Engineering. See specific `Ref: Backend` tags in tier files. Key cross-references:

| Pattern (here) | Usage Covered In (Backend) |
|---|---|
| Rate limiting at scale | Backend T3c.5, T4.6 |
| Caching at scale | Backend T3c.6, T5.5 |
| Idempotency at distributed scale | Backend T4.7, T5.1 |
| Backpressure & reliability patterns | Backend T5.4 |
| Multi-tenancy design | Backend T7.7 |
| Observability at scale | Backend T6.6 |
| CDN edge caching | Backend T5.6 |
| Service mesh usage | Backend T7.4 |
| Search engine usage | Backend T7.6 |