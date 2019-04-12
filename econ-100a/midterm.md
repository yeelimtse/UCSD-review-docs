# ECON 100A
---
- ### Elasticity
  - `E = % ∆y / % ∆x`: between two points
  - `E = ∂f(x) * x / f(x)`: at one specific points
  - Example:
    1. `Q = a - bp` 
       - E<sub>Q,p</sub> = -b * p / (a - bp)

    2. `Q = 7*p`
       - slope = 7, E<sub>Q,p</sub> = 7 * p / (7*p) = **1**
       - constant, always gets the same value
       - functions of the form f(x) = c * x<sup>ß</sup> have **constant** elasticity, `E = ß`

  - If a function has a constant elasticity, then it is a power function
  - Example questions:
     1. If the **elasticity** of supply is 0.75, and a price change has caused the quantity supplied to go down by 9%, what must be the percentage price change?
        - E<sub>Q,P</sub> = Δ% quantity / Δ% price
        - `0.75 = -9% / Δ% price`
        - `Δ% price = -12%`
        
     2. If the **elasticity** of demand for poutine with respond to income is -0.5, the initial income is $40K per year, and they are initially purchasing 50 plates per year. How many plates will be purchased if the income rises to $56K per year?
        - e = -0.5
        - E<sub>Q,I</sub> = Δ% quantity / Δ% income
        - `Δ% of income = (56 - 40) / 40 = 40%`
        - `-0.5 = Δ% quantity / 40%`
        - `Δ% quantity = -20%`
        - new quantity = 50 * (1 - 20%) = 40
     
     3. Give a specific exmaple of a linear function `f(x) = a + bx` such that the value of the function is 2 when x = 1 and the **elasticity** of this function is 1 when `x = y`.
        - condition one: `a + b = 2`
        - condition two: `E = f'(x) * x / f(x)` → `E = b = 1`
        - Thus, `a = 1`, and `b = 1`
        - Function will be `f(x) = x + 1`
      
     4. How would adding a positive constant to a function f(x) affect its **elasticity**? Given f is strictly positive, strictly increasing x > 0.
        - `E = f'(x) * x / f(x)`
        - Adding a constant does **not** change `f'(x)` but **increases** `f(x)`
        - Thus, the term `x / f(x)` will decrease. E will decrease.
     
     5. Could a pair of functions, f and g, satisfy both of the following conditions at the same time. If **YES**, give an example; if **NO**, explain why not.
        
        i. f'(7) > g'(7) > 0

        ii. 0 < E<sub>f(x), x</sub>(7) < E<sub>g(x), x</sub>(7), f(7) > 0, g(7) > 0
        
        - 0 < f'(7) * x / f(7) < g'(7) * x / g(7)
        - f(x) = x, g(x) = x<sup>2</sup>/100

- ### Properties of indifference curve map
  1. bundles on indifference curves further from the origin are preferred over those on indifference curves closer to the origin
  2. indifference curves do not cross
  3. indifference curves slope downward
  - Hard question
    - give an exmaple of consumer preference over (x, y) where x > 0, y > 0 satisfying **completeness, transiticity, and "more is better" assumptions**, for which each indifference curve contain a single bundle (binary bundle,either A or B, never be indifferent)
      - (x<sub>1</sub>, y<sub>1</sub>) > (x<sub>2</sub>, y<sub>2</sub>) if x<sub>1</sub> + y<sub>1</sub> > x<sub>2</sub> + y<sub>2</sub>
      - TODO

- ### Utility Functions
  - summarizes a consumer's preference by assigning a numerical value to each possible bundle
  - x ≥ y is equivalent to U(x) ≥ U(y)
  - any positive monotonic transformation of U leaves consumer preferences unchanged
  - F is a positive monotonic transformation if for any x > y, F(x) > F(y)
    - U = x + y
    - U = 2x + y does not work because y is not multiplied by a constant
    - U = 2(x + y), fine
    - U = (2(x + y) + 3)<sup>3</sup>, fine

- Then, the indifference curve is a level curve of the utility function
  - U_bar = u(q<sub>1</sub>, q<sub>2</sub>)

- Cobb Douglas 
  - U = √(q<sub>1</sub>, q<sub>2</sub>)
  - q<sub>2</sub> = U_bar<sup>2</sup>/q<sub>1</sub>