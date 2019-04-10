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
---
## **Sequential Nerworks (Midterm 2)**
- **memory** + **time steps (Clock)**
---
## **Data Path Subsystem (Final)**
---
## **Control Subsystem (Final)**
