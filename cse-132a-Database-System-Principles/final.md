# **CSE 132A Final Review** 
---
Authors Mao L. & Yilin X. - CSE 132A Winter 2019
---

# recursive queries
- how expressive is SQL?
  - **Theory of Computation**: SQL can only use *polynomial* space which is bounded by the original database
  - Example: *Is there a way to get from City1 to City2 **with any number of stops**?*
    - **Basic SQL cannot do this** -- limitation
    - solution - **recursive SQL**

- Transitive closure of a Graph
  - Example: *Is there a way to get from City1 to City2 **with at most 1 and 2 stops**?*
    ```
    SELECT x.from, y.to
    FROM flight x, flight y
    WHERE x.from = "city1" AND x.to = y.from AND y.to = "city2"
    ```
    - Note that **SQL can’t express arbitrary k times of stopover**
    - Problem being **Do NOT know how further we need to go**
    - General: Transitive Closure of a Graph
      - Find the pairs of nodes `<x, y>` that are connected by some directed path
      - Distance(x, y): length of shortest path
      - Diameter(G): length of the maximum distance
      - Example: *Relation G contains pairs `(A, B)` as a path*
        - Original graphs and adding “at distance k” until **no new nodes are added**
        - Distance cannot be larger than the total number of nodes in G

    - Solution: **extensioni on SQL to include Recursion**
        ```
        CREATE RECURSIVE VIEW T AS
        SELECT * FROM G
        UNION
        SELECT x.A, y.B
        FROM G x, T y
        WHERE x.B = y.A
        ```
      - Semantics: 
        - define a view **T** in terms of the original graph **G**
        - union the **changes** with the current **T**
        - Termination is **guaranteed** because there are finitely many tuples one can add to T (at most n^2 → Number of iterations: diameter of T)


    - Alternative Solution:
        ```
        WITH RECURSIVE T AS
        SELECT * FROM G
        UNION
        SELECT x.A, y.B
        FROM G x, T y
        WHERE x.B = y.A
        ```
      - Difference being *this is not a view but a **table***

  - Problematic Example
    - Never terminates
        ```
        CREATE RECURSIVE VIEW T as 
        SELECT a, 0 AS n FROM R
        UNION
        SELECT a, n + 1 as N FROM T
        ```
    - Most systems don’t support numeric operations on the recursive query
  - To overcome the limitation - **Embedded SQL**
    - Client (Full programming language) + DB Server (**[JDBC assignment](https://github.com/yeelimtse/UCSD-review-docs/blob/master/cse-132a/assignments/assignment2/PA2.pdf)**)
        ```
        T = G
        Delta = G
        while Delta != 0 do
            T_old = T
            T = 
                SELECT * from T
                UNION
                SELECT x.A, y.B FROM G x, T y
                WHERE x.B = y.A
            Delta = T - T_old
        return T
        ```
    - Optimization
        ```
        T = G
        Delta = G
        while Delta != 0 do
            T_old = T
            T = 
                SELECT * from T
                UNION
                SELECT x.A, y.B FROM G x, Delta y
                WHERE x.B = y.A
            Delta = T - T_old
        return T
        ```
      - Semi-naive: 
        - *instead of using T, we use Delta → use at least one new tuple every time*
        - So we avoid of double counting **the edges already exist in T**
        - No guarantee that it eliminates **all** recomputation. But in practice is better
    - Faster Convergence: *Double Recursion*
        ```
        T = G
        Delta = G
        while Delta != 0 do
            T_old = T
            T = 
                SELECT * from T
                UNION
                SELECT x.A, y.B FROM T x, T y
                WHERE x.B = y.A
            Delta = T - T_old
        return T
        ```
      - Converges in `log(diameter(G))` iterations
      - If use three T’s, it change log base 2 to log base 3. Not a big gain
      - It depends on the implementation whether to use the double recursion
      
    - Semi-naive on Double Recursion: *use at least one new tuple every time*
        ```
        T = G
        Delta = G
        while Delta != 0 do
            T_old = T
            T = 
                SELECT * FROM T
                UNION
                SELECT x.A, y.B FROM Delta x, T y WHERE x.B = y.A
                UNION
                SELECT x.A, y.B FROM T x, Delta y WHERE x.B = y.A
            Delta = T - T_old
        return T
        ```

---
# relational algebra
- Big picture
  - SQL → Relational Algebra (procedure, provides some operations) → Query Rewriting (more efficient) → Query Execution Plan → Execution

- Projection **π**
  - Eliminate some columns → Keep all elements in X
  - R table name; X are attributes of R
  - πx(R): no duplicates of values of x
  - Cut the table *vertically* 

- Selection **σ**
  - Select tuples satisfying condition of the form `(att =/≠ value/att2)`
  - σ_cond(R), where **cond** is a condition involving only attributes of R
  - Cut the table *horizontally*

- Union(U), Difference(-)
  - Apply to tables with the same attributes (*duplicates are eliminated*)
  - Union and difference of sets of tuples in R and S
  - Note: r - s: only keep those in R but not in S. (p. 73, Feb 12)

- Join
  - Operation combining tuples from two tables. (same as natural joins)
  - If common: Join on the matching terms (*some rows might be lost*)
  - If no common: cross product

- Renaming **(δ_(actor -> actor 1))**
  - Change the name of attribute (can rename multiple at once)
  - The contents are not changed

- **Examples**
  1. *Titles of currently playing movies*
        ```
        π_title(Schedule)
        ```
  2. *Titles of moviews by Berto*
        ```
        π_title(σ_director=’Berto’(Movie))
        ```
  3. *Titles and directors of currently playing movies*
        ```
        π_title, director (Movie ⋈ Schedule)
        ```
  4. *Pairs of actors acting together in some movie*
        ```
        π_actor1, actor2(δ_(actor -> actor1) movie ⋈ δ_(actor -> actor2) movie)
        ```
       - Renaming is important, otherwise movie joining movie will output original movie
       - Denote **we assume there is only one actor in every movie**
       - If we want to distinct actors, we need `σ_actor1 ≠ actor2` at the beginning
  5. *Find actors playing in every movie by Berto*
        ```
        π_actor(movie) - 
        π_actor[π_actor(movie) ⋈ π_titles(σ_director=’Berto’(Movie)) - π_actor,title(movie)]
        ```
     - Non-monotonic needs **difference**
     - `π_actor(movie) ⋈ π_titles(σ_director=’Berto’(Movie))`
       - Find **all** combination of all actors and titles by Berto
     - `πactor(movie) ⋈ πtitles(σdirector=’Berto’(Movie)) - πactor,title(movie)`
       - Find actors for which there is a movie by Berto in which they do not act
- Other operations
  - Insertection ∩
  - Division /:
    - R / S : `{a|<a,b> in R for every b in S}`
      - If b has value **1, 2**, and in R there is only one pair `<a1, 1>` but on `<a1, 2>`
      - Then `a1` will not be in the output of R / S
    - Universal quantification
    - Example: *Find actors playing in every movie by Berto*
        ```
        π_titles, actor(Movie) / π_titles(σdirector=’Berto’(Movie))
        ```
- Note
  - π is like “there exists”
  - / is like “for all”
  - `R / S = πA(R) - πA[πA(R) ⋈ S) - R]`

- Theorem
  - Calculus and algebra are equivalent (p.84, Feb 12/14)
  - π -- ∃
  - σ -- t(A) comp c
  - U -- V
  - ⋈ -- Λ
  - \- -- ¬
  - ÷ -- ∀


---
# query processing basics (includes join minimization)
- Conversion between SQL, Calculus, Algebra
  - Example: *Find the theaters showing movies by Bertolucci*
    - SQL
        ```
        SELECT s.theater
        FROM schedule s, movie m
        WHERE s.title = m.title AND m.director = 'Berto"
        ```
    - Tuple Calculus
        ```
        {t: theater | ∃ s ∈ schedule ∃ m ∈ movie [ t(theater) = m(theater) ∧ s(title) = m(title) ∧ m(director) = Berto] }
        ```
    - Relational algebra: `π_theater(Schedule ⋈ σ_director=’Berto’(movie))`

  - Examle: *Find the drinkers who frequent some bars serving Coors*
    - `π_drinker(frequent ⋈ σ_beer=’Coop’(serves))`
  - Examle: *Find the drinkers who frequent at least one bar serving a beer they like*
    - `π_drinker(frequent ⋈ serves ⋈ likes)`
  - Examle: *Find the drinkers who frequent ONLY bars serving beer they like*
    - `π_drinker(frequent) - π_drinker[frequent - π_drinker, bar(serves ⋈ likes)]`
  
- Query Rewriting
  - Modify the query to make it more efficient and correct
  - Without considering the current database

  - Static Optimization
    - `R ⋈ R → R`
    - `R - R → ∅`
    - `∅ ⋈ R → ∅`
    - R:AB, S: BC
    - Pushing selection: `σA=a(R ⋈ S) → σ_(A=a) (R) ⋈ S`
    - Column eleminiaton: `π_A, B(R ⋈ S) → R ⋈ π_B(S)`
    - Cascading projections: `π_A(π_A,B(T)) → π_A(T)`

  - Other techniques
    - Nested query decorrelation
    - Example: *P(A, B), Q(C, D)*
        ```
        SELECT count(*) FROM p
        WHERE a < (SELECT MAX(q.c) FROM q WHERE p.b = q.d
        ```
        rewrite as 
        ```
        SELECT count(distinct p.*) FROM  p, q
        WHERE b = d AND a < c
        ```
    - View unfolding
    - Example: *(A, B, C)*
        ```
        CREATE VIEW v(d, e, f) AS SELECT a, b, sum(c) FROM R
        GROUP BY a, b;
        SELECT d, sum(f) AS total FROM v GROUP BY D
        ```
        rewrite as
        ```
        SELECT a AS d, sum(C) AS total
        FROM R
        GROUP BY A
        ```
- Query Evaluation Plan
  - Additional decisions on evaluation of rewritten query, with partial information about database
    - Statistical information on data (*size of the tables*)
    - Common subexpressions
    - Availability of **indexes** (allows you to locate data on disk)

- MIN of Joins - *minimize the number of tuples in the **FROM** clause (join minimization)*
  - Example: movie database
    ```
    SELECT m1.director
    FROM movie m1, movie m2, movie m3, schedule s1, schedule s1, schedule s2
    WHERE m1.director = m2.director AND m2.actor = m3.actor AND m1.title = s1.title AND m3.title = s2.title
    ```
    - m2, m3, s2 can be eliminated 
    ```
    SELECT m1.director
    FROM movie m1, schedule s1
    WHERE m1.title = s1.title
    ```
    - 4 joins --> 1 join

  - Example: *Find theaters showing a title by Berto and a title in which Winger acts*
    ```
    SELECT s1.theater
    FROM schedule s1, schedule s2, movie m1, movie m2
    WHERE s1.theater = s2.theater AND s1.title = m1.title AND m1.director = 'Berto' AND s2.title = m2.title AND m2.actor = 'Winger'
    ```
    **with additional constrains**: each title has only one director and each theater shows only one title → x = y, m2.director = ‘Berto’
    ```
    SELECT s1.theater
    FROM movie m1, schedule s1
    WHERE s1.title = m1.title AND m2.director = "Berto" 
    AND m2.actor = "Winger"
    ```
  - Origins of Redundant Joins
    - Complex queries written by humans
    - Queries resulting from view unfolding
      - Example: Patience and doctors from “Scripps”, (p. 85-96, Feb 19)
    - Very complex SQL queries generated by tools

---
# schema design - TODO
---
# concurrency control (up to and excluding shared locks)
- Underneath implementation level: *Multiple users may access the database at the same time*
- **Transaction**
  - ACID properties
    - **A**tomicity: *happened or not, completes or not, results visible or not*
    - **C**onsistency: *correctness of DB is preserved*
    - **I**solation: *each transaction is unaware of other transactions executing concurrently*
    - **D**urability: *results are permanently installed within DB*

  - **Two possible Outcome**
    - **C**ommit: *completes and results installed permanently in DB*
    - **A**bort: *execution failed and results not installed in DB*

- Guarantee Serializability
  - With no interleaving is OK but **not desired**
  - If an execution has the same effect as a serial execution then it’s also acceptable

- Serial schedule: T1 followed by T2 or T2 followed by T1
- Interleaving schedule: T1 leaves before completing executing and jumps to T2
- **Test Serializability**: *only on the order of read/write schedule*
  - **Conflict equivalent**: S1 can be transformed into S2 by a series of swaps of adjacent non-conflicting actions:
    - Actions on different data
    - Read/read on the same data

  - **Conflict Serializable**: if the schedule is conflict equivalent to some serial schedule. 
    - Example: *Swap the order*
      ```
      SC = r1(A)w1(A)r2(A)w2(A)r1(B)w1(B)r2(B)w2(B)
      SC’ = r1(A)w1(A)r1(B)w1(B)r2(A)w2(A)r2(B)w2(B) → T1 followed by T2
      ```
      - Acyclic: T1 always comes before T2. 

    - Example: *Not possible*
      ```
      SD = r1(A)w1(A)r1(B)w1(B)r2(A)w2(A)r2(B)w2(B)r1(B)w1(B)
      ```
      - More general: T1 → T2 and T2 → T1: 
        - circle and SD cannot be rearranged into serial schedule
        - SD is not “equivalent” to any serial schedule. SD is “bad”

- **Precedence Graph** P(S) [S as a schedule]
  - Nodes: transactions in S; Edge Ti → Tj whenever:
    - Pi(A),Qj(A) are actions in S
    - Pi(A) <_s Pj(A)
    - At least one of Pi, Qj is a **write**
    - Example: *Find the P(S) for the following*
      - `S = w3(A)w2(C)r1(A)w1(B)r1(C)w2(A)r4(A)w4(D)`
      - There is an edge from T1 to T2 and another from T2 to T1
      - **NOT serializable**
- Lemmas and Theorems
  - S1, S2 are conflict equivalent ==> P(S1) = P(S2)
  - But the **converse** is **not** always true
  - **P(S1) is acyclic <==> S1 conflict serializable**
    - Take the one Transaction with no incoming edge to the front
    - Repeat to serialize
    - Any **topological** sort of the precedence graph is serializable

- Enforce Serializable Schedules
  1. Optimistic Concurrency Control
       - run system, recording P(S) check for P(S) cycles
       - declare if execution was good or abort transactions as soon as they generate a cycle.  

  2. Prevent P(S) cycles from occurring (**more practical**): *By lock*

- **Lock**: a locking protocol
  - Two new actions: li(A), ui(A) - *lock, unlock*
  - Rules 
    - well-formed transactions: *pi(A) requires li(A) pre, and will unlock A*
    - legal scheduler: *Only one transaction can have a lock identity at one time*

- **Two Phase Locking** (*2PL*)
  - Transaction has two phases: locking phase and unlocking phase. Ti = … li(A) …. Ui (A)…. 
  - might result in deadlock
  - Theorem: 2PL ==> conflict serialization

- Sample Locking System
  - Don’t trust transactions to request / release locks
  - Hold all locks until transaction commits

- The objects to lock
  - Relations/Tuple/Disk block
  - Large objects (e.g. Relations): need few locks and low concurrency
  - Small objects (e.g. tuples, fields): need more locks and more concurrency 

---
