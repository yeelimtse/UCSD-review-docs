# **What is Covariance?**
- **COV(X, Y) = E[(X - E[X])(Y - E[Y])]**
  - E[X] is the expected value of X
  - E[Y] is the expected value of Y
- Example
  - Let's say `X = 1, E[X] = 0`, and `Y = 3, E[Y] = 4`
  - If we plug in the numbers into the equation above
  - we have `COV(X, Y) = 1 x (-1) = -1`
  - **NOTE: This means**
    - X was above its expected value while Y was below its expected
    - If we kept doing this for the entire population, and this happened, it would make sense that COV(X, Y) is negative because when one goes up, the other one goes down. If they have a positive COV, then they would have gone up or down together. **The degree to which they do it toegther is the magnitude of the covariance**
- Simplify the equation to,
    ```
    COV(X, Y) = E[XY] - E[X]E[Y]
    ```
  - E[XY] is an approximation of `XY_bar`
  - E[X]E[Y] is `Y_bar * X_bar`
  - So `COV = XY_bar - Y_bar * X_bar`
  - The slope of our regression line is **m_hat = (XY_bar - Y_bar * X_bar)/(X<sup>2</sup>_bar - X_bar<sup>2</sup>)**
  - Or `COV(X, Y) / Var(X)`
  - Note: **`COV(X, X) = Var(X)`**