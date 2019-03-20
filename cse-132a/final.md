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
    - Client (Full programming language) + DB Server (**[JDBC assignment]()**)
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
---
# query processing (includes join minimization)
---
# schema design
---
# concurrency control (up to and excluding shared locks)
---
