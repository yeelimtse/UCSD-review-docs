# **ECON 120C**
---
## Lecture 1
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

---
## Lecture 2
- ### **Sample Distribution**
  - distribution of sample **X_bar** can be very **different** than that of the population **µ**
  - As the sample size **increases**, the variance of X_bar **decreases**
  - The shape of the distribution of X_bar depends on that of the population distribution
  - **Normal population**
    - N(µ, σ<sup>2</sup> / n): distribution of sample mean X_bar of n idependent observations
    - N(µ, σ<sup>2</sup>) is the **normal distribution** with mean µ and variance σ
    - N(0, 1) is the **standard normal distribution**
    - Even if the population is **not normal**
      - As sample size **increases**
        - the distribution looks less like that of population, and more like a Normal distribution
        - When sample size is large enough, distribution of X_bar is close to Normal
- ### **Central Limit Theorem**
  - def: **As the sample size gets large enough, sampling distribution becomes almost Normal regardless of the shape of the population**
  - X_bar ~ N(µ, σ<sup>2</sup> / n)
  - for the t-stats, we have **Z<sub>n</sub> = √n (X_bar - µ) / (σ ~ N(0, 1))**
  - 
- ### **Asymptotic  Distributions OSL Estimators**