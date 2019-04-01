### Lecture 1
- Random Variable
- Sampling
  - def: *Sampling is the process of taking a smaller group of subjects from a larger population*
  - simple random sample
    - everybody has an equal chance to be selected
    - **statistical inference**: embodies some features of the population
      - population parameter
        - def: *A numerical quantity that describes some characteristic of a population*
        - example: *Mean*

      - Sample statistic
        - def: *A numerical quantity that describes some characteristic of the sample*


- Sample statistic is a random variable
  - another sample --> different sample statistics
  - new data --> histogram of all of the values of the statistic
  - histogram --> estimator of the sampling distribution


- Approximating the Sampling Distribution
  1. whether the sampling distribution becomes more concentrated as the sample size increases. If yes, what is the point of concentration (**LLN**)
  2. The shape of the sampling distribution as the sample size increases (**CLT**)

- **The Law of Large Numbers (LLN)**
  - draw *independent* observations at *random* from any population with finite mean µ
  - let n be the sample size. As n gets larger, `X_bar -> µ`
  - **Averages Approximate Expectations**
  - **Sample Statistics Approxiamte Population Statistics**

- **OLS**
  - `1/n * ∑(X_i = X_1 + X_2 + X_3 + ...)`
  - Covariance Rules
  - Variance Rules
  - `Y_i = a + X_i * beta + u_i`
  - `beta = cov(X, Y) / var(X, Y)`
  - `cov(X, Y) / var(X) = beta + cov(X, u) / var(X)`