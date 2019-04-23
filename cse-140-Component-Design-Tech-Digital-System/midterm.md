# **Components and Design Techniques for Digital Systems**

---
### **Intro**
- Integrated Circuit
  - def: *many digital operations on the same material*
  - complex circuits: **8 billions transitors**

- **Moore's Law**
  - transistor counts double every **2** years 
    - **wider** applications
    - **larger** market
    - **higher** revenue
    - **more** R & D


---
## **Combinational Logic (Midterm 1)**
- **binary** inputs
- no memory
- ### Basic CMOS - inverter
  - transistors as switches TODO

- ### Handy tools
  - **Demorgan's Theorem**
    - `Y = (AB)' = A' + B'`
    - `Y = (A + B)' = A'B'`
  - **Consensus Theorem**
    - `AB + AC + B'C = AB + B'C`, *AC* is covered by the first and last term
    - `(A + B)(A + C)(B' + C) = (A + B)(B' + C)`, *A + C * is covered by the first and last term
      - proof:
        - Venn Diagrams
        - Boolean Algebra
            ```
            AB + AC + B'C
            = AB + AC * 1 + B'C             identity
            = AB + AC * (B + B') + B'C      complement
            = AB + ABC + AB'C + B'C         distributive
            = AB(1 + C) + (A + 1)B'C        distributive
            = AB + B'C
            
            (A + B)(A + C)(B' + C)
            = (A + B)(A + C + 0)(B' + C)
            = (A + B)(A + C + BB')(B' + C)
            = (A + B)(A + C + B)(A + C + B')(B' + C)
            = (A + B + 0 * C)(A * 0 + B' + C)
            = (A + B)(B' + C)
            ```
        - Logic Simulation (*Table*)
      - examples
        - `A + A'B` = `A + B`
        - `AB + A'CD` = `A + BCD`
        - `AB + A'CD + BCDE` = `A + BCD`
  - **Shannon's Expansion**
    - assumes a switching algebra system
    - divide a switching function into smaller functions
    - pick a variable `x`, partition the switching function into two cases: `x = 1` and `x = 0`
        ```
        f(x, y, z, ...) = xf(x = 1, y,z, ...) + x'f(x = 0, y, z, ...)
        ```
    - example
      - `f(x) = xf(1) + x'f(0)`
        ```
        f(x) = x'
        f(x) = x * 1' + x' * 0'
        f(x) = 0 + x'
        ```
      - `f(x, y) = xf(1, y) + x'f(0, y)`
        ```
        f(x, y) = x + x'y
        f(x, y) = x * (1 + 1'y) + x' * (0 + 0'y)
        f(x, y) = x * 1 + x' * y
        f(x, y) = x + x'y
        ```
      - `f(a ,b, c) = a'b' + bc + ab'c`
        ```
        f(a ,b, c) = af(1, b, c) + a'f(0, b, c)
        f(a ,b, c) = a(1'b' + bc + b'c) + a'(0'b' + bc)
        f(a ,b, c) = a(bc + b'c) + a'(b' + bc)
        f(a ,b, c) = a((b + b')c) + a'(b' + bc + c)
        f(a ,b, c) = ac + a'(b' + c)
        f(a ,b, c) = ac + a'b' + a'c
        f(a ,b, c) = c + a'b'
        ```
      - Sums 
        ```
        f(x, y) = (x + f(x = 0, y))(x' + f(x = 1, y))
        ```
      - decompose the switching function into functions
        ```
        f(x, y) = xf(1, y) + x'f(0, y)
        = x(yf(1, 1) + y'f(1, 0)) + x'(yf(0, 1) + y'f(0, 0))
        = xyf(1, 1) + xy'f(1, 0) + x'yf(0, 1) + x'y'f(0, 0)
        ``` 
        ```
        f(x, y) = (x' + f(1, y))(x + f(0, y))
        = (x' + (y' + f(1, 1))(y + f(1, 0)) )(x + (y' + f(0, 1))(y + f(0, 0)) )
        ```
      - remark: *the choice of the variable for expansion is a nontrivial question*

- ### Specification
  - Binary addition
    - Half adder
      - input: a, b
      - output: sum, carry
      - switching expressions
        - sum(a, b) = a'b + ab'
        - carry(a, b) = ab
      - Arithmetic: 2c<sub>out</sub> + sum = a + b + c<sub>in</sub>
      - minterm - product
      - maxterm - addition
  - Incompletely Specified Function
    - do not care set is important because it allows us to min the function
      - either the input does not happen
      - or the input happens, but the output is ignored
    - Three types of output
      - F: on-set, output is 1
      - R: off-set, output is 0
      - D: don't-care-set: output can be either 1 or 0
    - Aim: **MIN # of terms, # of literals**
    - **K-Maps**
      - **adjacency** of miniterms (maxterms): *two miniterms are adjacent if they differ by only one vairable*
        - example
          - abc & a'bc: by consensus theorem, bc is the consensus
          - abc + a'b'c: consensus is bcb'c, which is 0, cannot use better expression, so they are NOT adjacent
          - abcde and a'bcde are adjacent
          - a'b'cde and abc'd'e' are not adjacent because their consensus is an **empty set**
      - Two-variable function 
        - `f(A,B)`
            
            |     | B=0  | B=1 |
            |-----|------|-----|
            | A=0 | A'B' | A'B |
            | A=1 | AB'  | AB  |

        - output table
            
            |     | B=0  | B=1 |
            |-----|------|-----|
            | A=0 | 0 | 1 |
            | A=1 | 1  | 1 |
            
        - Row A=1 is true and Column B=1 is true, so `f(A,B)=A+B`
        - For 2-variable functions, have 2 variables, 4 entries, 4 combinations
        - For n-variable functions, have n variables, 2<sup>n</sup> entries, 2<sup>n</sup> combinations
      - Three-variable function
        - `f(a,b,c)`
            
            |     | (0,0) | (0,1) | (1,0) | (1,1) |
            |-----|-------|-------|-------|-------|
            | c=0 | 0,1   | 2,1   | 6,1   | 4,1   |
            | c=1 | 1,0   | 3,0   | 7,0   | 5,0   |

        - So `f = c'` because `c=0` row has all true values
        - Note: adjacency applies here
          - m<sub>0</sub>, and m<sub>4</sub>, m<sub>1</sub> are adjacent
          - m<sub>0</sub> and m<sub>5</sub> are not adjacent because they differ by **2 variables**
      - **Boolean Algebra vs K-maps**
        - variables = planes
        - product terms = rectangles
        - miniterms = cells
        - consensus theorem = adjacency
      - Implicants, Prime Implicants, Essential Prime Implicants definitions
        - Implicants  
          - A product term that has non-empty insersection with on-set F and does not intersect with off-set R
        - Prime Implicants
          - An implicant that is **not covered** by any other implicants
        - Essential PI
          - A PI that has **an element in on-set F** but is **not covered** by any other PIs
      - Four-variable function
        - `f(a,b,c,d)`
          
          | cd&ab | 00 | 01 | 10 | 11 |
          |-------|----|----|----|----|
          | 00    | 1  | 0  | 0  | 1  |
          | 01    | 0  | 1  | 0  | 1  |
          | 10    | 1  | 1  | 0  | 0  |
          | 11    | 1  | 1  | 0  | 1  |

        - Procedure for finding the minimal function via K-maps
          1. Convert truth table to K-map
          2. Group the adjacent ones: include the largest number of adjacent ones(Prime)
          3. Create new groups to cover all ones in the map: include **essential prime implicants**
          4. Select the groups that result in the minimal sum of products
      - Five-variable function
        - **simply divide to 2 size of 16 K-maps, with `a=0` and `a=1`**
      - Six-variable function
        - **simply divide to 4 size of 16 K-maps, with `a=0 & b=0`, `a=0 & b=1`, `a=1 & b=0`, and `a=1 & b=1`**
---
## **Sequential Nerworks (Midterm 2)**
- **memory** + **time steps (Clock)**
---
## **Data Path Subsystem (Final)**
---
## **Control Subsystem (Final)**
