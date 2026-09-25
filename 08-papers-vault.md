# Papers Vault

> 18 seminal systems papers, tagged by tier. Read them **inline** as you reach the relevant concept.
> Each paper has a digest → read → analysis treatment. The AI instructor can generate a deep-dive analysis on request.

---

## How to Use This Vault

Papers are read **during the tier where their concept is taught**, not in a separate phase. When you reach T3.1 (Paxos), you read *Paxos Made Simple*. When you reach T4.3 (Dynamo), you read *Dynamo*.

**Reading depth**:
- **Digest** — AI-generated summary + key takeaways (always provided when the tier begins)
- **Deep read** — read the paper itself, with guided commentary from the AI
- **Analysis** — you write a 1-page paper analysis (only for papers marked "Deep Read" depth)

**On-demand deep dives**: If you want a full breakdown of any paper, say *"go deeper on [paper name]."* The AI generates a `paper-deep-dives/[slug].md` file.

---

## Paper Table

| # | Paper | Year | Tier | Reading Depth | Time Budget |
|---|---|---|---|---|---|
| 1 | Lamport — Time, Clocks, and the Ordering of Events | 1978 | T1.2 | Deep Read | 45 min |
| 2 | Lamport, Shostak, Pease — Byzantine Generals | 1982 | T1.1 | Architecture Only | 40 min |
| 3 | Fischer, Lynch, Paterson — Impossibility | 1985 | T1.3 | Deep Read | 40 min |
| 4 | Garcia-Molina & Salem — Sagas | 1987 | T3.2 | Architecture Only | 45 min |
| 5 | Stoica et al. — Chord | 2001 | T1.5 | Architecture Only | 45 min |
| 6 | Lamport — Paxos Made Simple | 2001 | T3.1 | Deep Read | 90 min |
| 7 | Ghemawat et al. — GFS | 2003 | T4.8 | Architecture Only | 45 min |
| 8 | Chang et al. — Bigtable | 2006 | T4.8 | Architecture Only | 60 min |
| 9 | DeCandia et al. — Dynamo | 2007 | T2.1, T4.3 | Deep Read | 90 min |
| 10 | Sigelman et al. — Dapper | 2010 | T3.5.9 | Architecture Only | 45 min |
| 11 | Melnik et al. — Dremel | 2010 | T3.5.6, T4.8 | Architecture Only | 45 min |
| 12 | Hunt et al. — ZooKeeper | 2010 | T3.3 | Deep Read | 60 min |
| 13 | Kreps et al. — Kafka | 2011 | T4.1 | Deep Read | 60 min |
| 14 | Corbett et al. — Spanner | 2012 | T3.4, T4.2 | Deep Read | 90 min |
| 15 | Bronson et al. — TAO | 2013 | T3.5.1 | Deep Read | 60 min |
| 16 | Kreps — The Log Manifesto | 2013 | T3.2 | Deep Read | 45 min |
| 17 | Ongaro & Ousterhout — Raft | 2014 | T3.1 | Deep Read | 120 min |
| 18 | Verbitski et al. — Amazon Aurora | 2017 | T2.3, T4.8 | Deep Read | 60 min |

**Total reading**: ~18 hours across the full curriculum.

---

## Paper Entries

### 1. Lamport — Time, Clocks, and the Ordering of Events in a Distributed System (1978)

**Ties to**: T1.2 (Time, Clocks & Ordering).

**Reading Depth**: Deep Read. **Time**: 45 min.

**What it covers**: The foundational paper on logical time. Introduces "happened-before" relation, Lamport clocks, and the distinction between partial and total ordering of events.

**Why this matters today**: Every distributed system that needs to reason about event order (Kafka, Spanner, CockroachDB, CRDTs) builds on this paper. HLCs and hybrid clocks are direct descendants.

**Key concepts to extract**:
- Happened-before relation (causality)
- Lamport clocks (logical timestamps)
- Total ordering via tie-breaking
- Physical clock skew problem
- State machine replication

**Read before**: implementing any distributed ordering.

---

### 2. Lamport, Shostak, Pease — The Byzantine Generals Problem (1982)

**Ties to**: T1.1 (Why Distributed Systems Are Hard).

**Reading Depth**: Architecture Only. **Time**: 40 min.

**What it covers**: The formalization of the Byzantine failure model — nodes that can fail maliciously or arbitrarily. Establishes the 3f+1 requirement for tolerating f Byzantine faults.

**Why this matters today**: Blockchain consensus, aerospace systems, and any adversarial environment where nodes cannot be trusted. Most systems assume non-Byzantine failures, but understanding the boundary matters.

**Key concepts to extract**:
- Byzantine vs crash-stop failures
- 3f+1 replication requirement
- Oral messages vs signed messages
- The impossibility of 3-node consensus with 1 Byzantine

---

### 3. Fischer, Lynch, Paterson — Impossibility of Distributed Consensus with One Faulty Process (1985)

**Ties to**: T1.3 (Consistency Models).

**Reading Depth**: Deep Read. **Time**: 40 min.

**What it covers**: The FLP impossibility result — no deterministic consensus algorithm can guarantee termination in a fully asynchronous system with even one faulty process.

**Why this matters today**: Explains why every real consensus algorithm (Paxos, Raft) relies on either partial synchrony or randomization to make progress. Understanding FLP prevents unrealistic expectations about consensus.

**Key concepts to extract**:
- The asynchronous model
- The bivalence argument
- Why consensus needs either partial synchrony or randomization
- The gap between theory and practice

---

### 4. Garcia-Molina & Salem — Sagas (1987)

**Ties to**: T3.2 (Distributed Transactions).

**Reading Depth**: Architecture Only. **Time**: 45 min.

**What it covers**: The original Sagas paper — long-lived transactions split into a sequence of local transactions, each with a compensating action. Provides eventual consistency without 2PC.

**Why this matters today**: The blueprint for microservice distributed transactions. Every Saga-based orchestration (Temporal, Cadence, Step Functions) descends from this.

**Key concepts to extract**:
- Long-lived transactions
- Compensating transactions
- Choreography vs orchestration (implicit vs explicit)
- Semantic atomicity
- Step execution guarantees

---

### 5. Stoica et al. — Chord: A Scalable Peer-to-Peer Lookup Service (2001)

**Ties to**: T1.5 (Consistent Hashing & Load Distribution).

**Reading Depth**: Architecture Only. **Time**: 45 min.

**What it covers**: Chord — a distributed hash table (DHT) using consistent hashing with a finger table for O(log N) lookups. Foundational work for structured P2P.

**Why this matters today**: The math behind consistent hashing in Dynamo, Cassandra, and modern distributed caches. Chord formalized the ring structure.

**Key concepts to extract**:
- Consistent hashing ring
- Finger tables (O(log N) routing)
- Node joins and departures
- Virtual nodes
- Key lookup correctness

---

### 6. Lamport — Paxos Made Simple (2001)

**Ties to**: T3.1 (Consensus Fundamentals).

**Reading Depth**: Deep Read. **Time**: 90 min.

**What it covers**: Lamport's simplified explanation of Paxos — the proposer/acceptor/learner protocol for reaching consensus in the presence of failures.

**Why this matters today**: The bedrock consensus protocol. Underpins Spanner, Chubby, Cassandra (lightweight), and virtually every modern distributed state machine.

**Key concepts to extract**:
- Proposer / Acceptor / Learner roles
- Prepare and Accept phases
- Majority quorum requirement
- Safety invariants
- Multi-Paxos (stable leader optimization)

**Read before**: T3.1 Raft.

---

### 7. Ghemawat et al. — GFS: Google File System (2003)

**Ties to**: T4.8 (GFS / Bigtable / Aurora).

**Reading Depth**: Architecture Only. **Time**: 45 min.

**What it covers**: GFS — Google's distributed file system with a single master, chunk servers, and 64MB chunks. Designed for large sequential reads and append-heavy workloads.

**Why this matters today**: Inspired HDFS, Colossus, and influenced S3 architecture. The single-master design trade-off remains instructive.

**Key concepts to extract**:
- Single master design (and its trade-offs)
- Chunk-based storage (64MB)
- Replication and consistency model
- Append-only record streams
- Master failover

---

### 8. Chang et al. — Bigtable: A Distributed Storage System for Structured Data (2006)

**Ties to**: T4.8 (GFS / Bigtable / Aurora).

**Reading Depth**: Architecture Only. **Time**: 60 min.

**What it covers**: Bigtable — Google's wide-column store built on GFS. Introduces SSTables, LSM-tree structure, and sparse multi-dimensional sorted maps.

**Why this matters today**: Direct ancestor of Cassandra, HBase, RocksDB, and modern LSM-based storage engines.

**Key concepts to extract**:
- Sparse multi-dimensional sorted map
- SSTable format
- LSM-tree writes and compaction
- Column families
- Tablet splitting

**Read before**: T4.8 Aurora.

---

### 9. DeCandia et al. — Dynamo: Amazon's Highly Available Key-Value Store (2007)

**Ties to**: T2.1 (Replication), T4.3 (Dynamo / DynamoDB).

**Reading Depth**: Deep Read. **Time**: 90 min.

**What it covers**: Dynamo — Amazon's eventually consistent KV store. Introduces consistent hashing, vector clocks, quorum-based replication (R + W > N), sloppy quorums, hinted handoff, and Merkle tree anti-entropy.

**Why this matters today**: The foundational paper for AP system design, DynamoDB, Cassandra, Riak, and every eventually consistent KV store.

**Key concepts to extract**:
- Consistent hashing with virtual nodes
- Vector clocks for conflict detection
- Quorum reads/writes
- Sloppy quorums and hinted handoff
- Merkle trees for replica sync
- Eventual consistency in practice

**Read before**: T4.3 DynamoDB productization.

---

### 10. Sigelman et al. — Dapper: A Large-Scale Distributed Systems Tracing Infrastructure (2010)

**Ties to**: T3.5.9 (Observability at Scale).

**Reading Depth**: Architecture Only. **Time**: 45 min.

**What it covers**: Dapper — Google's distributed tracing system. Introduces trace context propagation, span IDs, parent-child relationships, and out-of-band low-overhead sampling.

**Why this matters today**: The direct blueprint for OpenTelemetry, Jaeger, Zipkin, and every modern tracing system.

**Key concepts to extract**:
- Trace context propagation via headers
- Span ID hierarchy
- Head-based vs tail-based sampling
- Low-overhead tracing (out-of-band)
- Trace ID as cross-service correlation

**Read before**: T3.5.9 OpenTelemetry architecture.

---

### 11. Melnik et al. — Dremel: Interactive Analysis of Web-Scale Datasets (2010)

**Ties to**: T3.5.6 (OLAP), T4.8 (Bigtable).

**Reading Depth**: Architecture Only. **Time**: 45 min.

**What it covers**: Dremel — Google's columnar query engine for nested data. Introduces record shredding and assembly, multi-level execution trees, and in-situ querying.

**Why this matters today**: The origin of Apache Parquet, Apache ORC, and modern analytical database execution engines (BigQuery, DuckDB).

**Key concepts to extract**:
- Columnar nested storage
- Record shredding and assembly
- Multi-level execution trees
- In-situ analysis (query data where it lives)
- Relevance to Parquet/ORC

---

### 12. Hunt et al. — ZooKeeper: Wait-free Coordination for Internet-Scale Systems (2010)

**Ties to**: T3.3 (Distributed Locks & Coordination).

**Reading Depth**: Deep Read. **Time**: 60 min.

**What it covers**: ZooKeeper — a coordination service for distributed systems. Introduces the ZAB atomic broadcast protocol, hierarchical z-node tree, and linearizable writes with watches.

**Why this matters today**: The reference for distributed coordination. Powers early Kafka, Hadoop, HBase, and countless distributed systems.

**Key concepts to extract**:
- ZAB atomic broadcast
- Hierarchical z-node namespace
- Linearizable writes, FIFO client order
- Watches (one-time notifications)
- Ephemeral nodes for liveness

**Read before**: T4.1 Kafka (pre-KRaft architecture).

---

### 13. Kreps et al. — Kafka: A Distributed Messaging System for Log Processing (2011)

**Ties to**: T4.1 (Kafka).

**Reading Depth**: Deep Read. **Time**: 60 min.

**What it covers**: Kafka — a distributed commit log for high-throughput event streaming. Introduces partitions, consumer groups, zero-copy I/O, and log-based messaging.

**Why this matters today**: Shifted the industry from transient message queues (RabbitMQ, SQS) to durable event log streaming. Powers event-driven architectures at massive scale.

**Key concepts to extract**:
- Distributed commit log model
- Partitioning and consumer groups
- Zero-copy sendfile I/O
- Log retention and compaction
- Replication with ISR

**Read before**: T4.1 Kafka deep dive.

---

### 14. Corbett et al. — Spanner: Google's Globally-Distributed Database (2012)

**Ties to**: T3.4 (Time in Distributed Transactions), T4.2 (Spanner).

**Reading Depth**: Deep Read. **Time**: 90 min.

**What it covers**: Spanner — Google's globally distributed, externally consistent database. Introduces TrueTime (GPS + atomic clocks), Paxos state machines per shard, and global ACID transactions.

**Why this matters today**: Proved globally distributed ACID transactions across regions are possible at scale. Directly inspired CockroachDB, YugabyteDB, TiDB.

**Key concepts to extract**:
- TrueTime API (bounded clock uncertainty)
- Paxos groups per shard
- External consistency
- Read-write vs snapshot reads
- Directory-based sharding
- Global transaction commit protocol

**Read before**: T4.2 Spanner deep dive.

---

### 15. Bronson et al. — TAO: Facebook's Distributed Data Store for the Social Graph (2013)

**Ties to**: T3.5.1 (Caching at Scale).

**Reading Depth**: Deep Read. **Time**: 60 min.

**What it covers**: TAO — Facebook's distributed graph store for the social graph. Introduces read-through caching with write-through invalidation, and a two-tier regional leader/follower architecture.

**Why this matters today**: Demonstrates how to build multi-region read-heavy caching systems at petabyte scale. A masterclass in cache invalidation strategy.

**Key concepts to extract**:
- Read-through caching
- Write-through invalidation
- Regional leader/follower tiers
- Cache consistency across regions
- Graph-aware data modeling

---

### 16. Kreps — The Log: What Every Software Engineer Should Know About Real-Time Data's Unifying Abstraction (2013)

**Ties to**: T3.2 (Distributed Transactions).

**Reading Depth**: Deep Read. **Time**: 45 min.

**What it covers**: Jay Kreps' essay on the log as the central abstraction of distributed systems — from database WALs to Kafka topics to event sourcing.

**Why this matters today**: The most influential blog/paper defining modern Event-Driven Architecture, CDC, and Event Sourcing. Rewires how you think about system integration.

**Key concepts to extract**:
- Log as central source of truth
- CDC via log tailing
- Stream-table duality
- Event sourcing
- Log-based system integration

**Read before**: T3.2 Transactional Outbox.

---

### 17. Ongaro & Ousterhout — In Search of an Understandable Consensus Algorithm (Raft) (2014)

**Ties to**: T3.1 (Consensus Fundamentals).

**Reading Depth**: Deep Read. **Time**: 120 min.

**What it covers**: Raft — an understandable consensus algorithm that decomposes into leader election, log replication, and safety. Designed as a Paxos alternative that's easier to implement and teach.

**Why this matters today**: Powers etcd, Kubernetes, Consul, Vitess, TiKV, and CockroachDB. The consensus protocol for modern infrastructure.

**Key concepts to extract**:
- Leader election with randomized timeouts
- Log replication and commit rules
- Term numbers and voting
- Membership changes (joint consensus)
- Log compaction via snapshots
- Safety invariants

**Read before**: T3.1 Raft deep dive.

---

### 18. Verbitski et al. — Amazon Aurora: Design Considerations for High Throughput Cloud-Native Relational Databases (2017)

**Ties to**: T2.3 (Storage Engines), T4.8 (GFS / Bigtable / Aurora).

**Reading Depth**: Deep Read. **Time**: 60 min.

**What it covers**: Aurora — Amazon's cloud-native relational database. Introduces the "log is the database" design, decoupled compute and storage, and 6-way quorum replication.

**Why this matters today**: Defined modern cloud-native database architecture. Its storage-layer separation has been adopted by many subsequent systems.

**Key concepts to extract**:
- Log-is-the-database architecture
- Decoupled compute and storage
- 6-way quorum (4/6 write, 3/6 read)
- Storage layer durability
- Continuous backup via log

---

## Papers by Tier

**Read during T1**: Lamport (1978), Byzantine Generals (1982), FLP (1985), Chord (2001)
**Read during T2**: Dynamo (2007), Bigtable (2006), Aurora (2017)
**Read during T3**: Sagas (1987), Paxos (2001), ZooKeeper (2010), The Log Manifesto (2013), Raft (2014), Spanner (2012)
**Read during T3.5**: Dapper (2010), Dremel (2010), TAO (2013)
**Read during T4**: Kafka (2011), GFS (2003), Bigtable (2006), Dynamo (2007), Spanner (2012), Aurora (2017)

---

## On-Demand Deep Dives

To request a deep dive on any paper:
- Say: *"Go deeper on [paper name]."*
- The AI generates `paper-deep-dives/[slug].md` with a 5-part structure:
  1. 💡 Context & Why It Matters
  2. 🔬 Technical Deep Dive
  3. 📐 Diagrams / Schemas / Architecture
  4. ⚠️ Trade-offs, Failure Modes & What Went Wrong
  5. 🎯 What You Can Apply