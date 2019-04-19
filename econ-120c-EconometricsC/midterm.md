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

## **Casusality and Causal Model**
- **Bivariate Case**
  - steps:
    1. set x to each of its possible values
    2. let y respond freely without any further intervention
    3. todo
    4. todo

  - definition
    - let `c(x)` be the unique value of y for each x
    - we call `c(x)` the response function
    - If `c(x)` is not a constant function, then we say that x causes y. In such case, we call c(x) the casual function
    - when x causes y, we write `y ← c(x)`
      - the arrow indicates the causality and causal direction
      - x is **set** and y is **free** to respond 
      - x is the **cause**, y is the **effect**

  - **No intervention, no causality**
    - settable vairable if we can intervene at will to set it to any desired value
    - exmaple: *race*
    - free variable 
      - if we do not intervene to set its value

  - Notation
    - `y ← c(x)` signifies that the LHS and RHS are not exchangable
    - causes and effects are different
    - `y = c(x)` is **incorrect** because it encodes the *exchangablility* of the two sides: `y = c(x)` **iff** `c(x) = y`


  - example 1
    - y: earnings, x: years of schooling
    - assume: no other variables will cause any difference in earnings
    - Test whether x causes y, follow the **4 steps**
    - basically, **force** an individual to have 8, 9, 10 years of schooling and observe the corresponding earnings
    - ask: *do different years of schooling lead to different earnings?*
    - **active partition problem** todo
    - Mostly likely, x causes y

  - example 2
    - y: 0 or 1 indicating whether it will rain or not
    - x: percentage of people carrying an umbrealla
    - Test whether x causes y, set the percentage at different levels by **forcing** individuals to carry unbrellas
    - Key: *Individuals cannot decide to carry an unbrella or not*
    - y will not change, so x does **NOT** cause y in this example


- Causality vs Prediction todo

- Casusality and Causal Model - Multivariate Case
  - definition
    - x = (x<sub>f</sub>, x<sub>o</sub>) where x<sub>f</sub> is a scalar vairable and is the **focus** of interest and x<sub>o</sub> consists of all **other** variables


- *Ceteris Paribus* effect
  - **other things equal**
  - the effect of one vairable holding all others equal
  - when x<sub>f</sub> is continuous, `c` is differentiable: ∆(x<sub>f</sub>, x<sub>o</sub>) = todo 
  - when x<sub>f</sub> is discrete, we define: todo
  - interpretation: todo

- Bring Models to Data and Linear Causal Model
  - Bring Causal Models to Data
  - Linear Causal Model

## **Predictive Model**
- definition
  - given 2 variables x, y. Want to predict Y based on X
  - `ß* = cov(x, y) / var(x)`
  - `å* = Ey - (Ex)ß*`
  - Note: *these variables are purely statistic objects, no physical, economical, etc meanings*
  - Define `e` to be the difference between Y and the linear function å* + Xß*
  - `Y = (å* + Xß*) + e`, where this model satisfies
  - `Ee = Ey - (å* + Exß*) = 0` and `cov(x, e) = 0`
- interpretation
  - if x changes by 1 unit, then we expect y to change by ß* units
  - when observe a change in X, other things(observables and unobservables) may have changed
  - "All else being equal" condition may not be met
  - The expected change of β units could be due to the change of X **and/or** other variables that change with X
  - **Passive Prediction**
    - make predictions based on the data for which no predictor is exogeously changed
    - data is passively observed
    - **do not need causality**
    - pattern discovery is generally used for passive prediction
      - example
        - a student graduates from high school is related to his mother's level of education
        - we can use the observed level of education for a student's mother to predict whether the sutdent will graduate from high school
        - different from predicting the outcome when we exogenously change the level of education the mother attained.
  - (å*, ß*) = argmin<sub>a,b</sub>f(a, b), where f(a, b) = E\[(Y-a-Xb)<sup>2</sup>\]
- **Best linear approximation**
  - define `m(x) = E(Y|X = x)`, which is the conditional mean function
  - this is a function of x: for each given x, we can compute `E(Y|X = x)` and assign this value to *m(x)*
  - $\alpha^* + x \cdot \beta^*$: the best **linear prediction** function under the **mean squared loss**
    - the target behind the linear regression by the OSL

## **Causal Model**
- for a linear causal model 

  $Y ← \alpha + X\beta + u$ 
- where u stands for other and possibly unobserved causal factors
- interpretation $\beta$
  - If we intervene and set X to change by 1 unit while keeping all else constant, Y will change by β units
  - The di§erence between $\beta^*$ and $\beta$ lies in whether all else has been kept as equal.
- active prediction
  - If we want to predict the consequence of some action on an outcome of interest, we need to establish a causal or structural relationship
  - example
    1. predict final grade in econ 120c if increase study time by one hour per week
         - assume all other conditions have been kept as equal
         - so you are making an active prediction
    2. body weight (Y), considering switching to a whole-grain-only diet (X)
          - may want to make an active prediction of Y based on X
    3. music can significantly influence sales
         - actively vary music tempo played in stores from very slow to quick and observe the results on sales
- a comparison
  - | Model               |  correlation | slope | Analysis |
    |---------------------|:------------:|------:|----------|
    | Predictive Analysis | left-aligned | $1600 |          |
    | Causal Inference    |   centered   |   $12 |          |

## **Bias of OLS Estimators for the Ceteris Paribus Causal Effect**
- $Y = \alpha + X \cdot \beta + u$
- $\beta$ will be the same as $\beta^*$ if there is no correlation between $X$ and $u$
- The mean of $u$ is 0, denote $Eu = 0$.