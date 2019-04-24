# **ECON 120C**
---
## Sampling, Law of Large Numbers, and Consistency of OSL estimator
- ### Random Variable
  - def: *a variable whose value is a numerical outcome of a random phenomenon*
- ### Sampling
  - def: *Sampling is the process of taking a smaller group of subjects from a larger population*
  - simple random sample
    - everybody has an equal chance to be selected
    - **statistical inference**: embodies some features of the population
      - population parameter
        - def: *A numerical quantity that describes some characteristic of a population*
        - example: *Mean*
      - Sample statistic
        - def: *A numerical quantity that describes some characteristic of the sample*
        - example: *Average*
- Sample statistic is a random variable
  - another sample --> different sample statistics
  - new data --> histogram of all of the values of the statistic
  - histogram --> estimator of the sampling distribution
  - it provides information about **amount of variation and the nature of the variation**
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
    1. If \(Y=V+W\), cov(X,Y) = cov(X,V) + cov(X,W)
    2. If \(Y=bZ\), where b is a constant, cov(X,Y) = bcov(X,Z)
    3. If \(Y=b\), where b is a constant, cov(X,Y) = 0
  - Variance Rules
    1. If \(Y=V+W\), var(Y) = var(V) + var(W) + 2cov(V,W)
    2. If \(Y=bZ\), where b is a constant, var(Y) = b<sup>2</sup>var(X,Z)
    3. If \(Y=b\), where b is a constant, var(Y) = 0
    4. If \(Y=V+b\), where b is a constant, var(Y) = var(V)
  - In OLS, we have
    - **Y<sub>i</sub> = a + X<sub>i</sub> * beta + u<sub>i</sub>**
    - **beta = cov(X, Y) / var(X, Y)**
    - **cov(X, Y) / var(X) = beta + cov(X, u) / var(X)**
    - Note: 
      - *as sample size increases, ß becomes arbitrarily close to ß(real ß)*
      - *ß in our OLS estimator is denoted as ß_hat*
---
## Sampling, Law of Large Numbers, and Consistency of OSL estimator (continue)
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
  - When the sample is large enough, the distribution of is very close to a Normal distribution
  - X_bar ~ N(µ, σ<sup>2</sup> / n)
  - for the t-stats, we have **Z<sub>n</sub> = (X_bar - µ) / (σ/√n)**
    - example 
      - Suppose that ACT score in a recent year had the distribution with mean µ = 18.6 and standard deviation σ = 5.9
      - Now take a SRS of 50 students who took the test. What are the mean and standard deviation of the sample mean score X_bar of these 50 students?
      - What is the probability that the mean score of these students is 21 or higher?
      - Soln:
        - Mean = 18.6
        - Standard Deviation: 0.8344 (5.9/√50)
        - P(X_bar ≥ 21) = P(Z ≥ (21 - 18.6) / 0.834) = P(Z ≥ 2.8778)
        - = 1 - P(Z < 2.88) = 0.2%
        - About 0.2 % of all random samples of size 50 would have a mean score of 21 or higher.
- ### **Asymptotic Distributions OSL Estimators**
  - Review: **ß_hat = ß + cov(X, u)/var(X)**
--- 
## **Introduction to Causal Inference**
- Why do we care about ß in OLS? Because we can use it to predict the future
- **Passive Prediction**
  - To predict the future, we are the **passive observer** and we do not control the changes in the predictors
  - If we **observe** that more people are carrying umbrellas, then we predict that it is more likely to rain
- **Active Prediction**
  - To predict the effect of interventions, we are the **active participant**
  - If we **force** more people to carry umbrellas, would this change the probability of raining
- Note: **Correlation Does NOT imply Causation (more details in [OLS explaination](https://github.com/yeelimtse/UCSD-review-docs/blob/master/others/What%20is%20OLS.md))**
  - Example: Hot chocolate
    - A strong correlation has been found in a certain city in the northeastern United States between **weekly sales of hot chocolate** and **weekly sales of facial tissues**
    - If you regress weekly sales of facial tissues on weekly sales of hot chocolate, you find a statistically significant relationship
    - But Does this mean *hot chocolate causes people to need facial tissues*? **NOT NECESSARY**
  - Another Example: TV
    - Rich nations have more TV sets
    - Rich nations have longer life expectancies because of better nutrition, clean water, and health care
    - **But There is no cause-and-effect tie between TV sets and length of life**
    - Note: **data from an observational study, in the absence of any other evidence, simply cannot be used to establish causation.**
  - A reasonable correlation would be the following
    - In terms of `X is the direct cause of Y`, `X → Y`
      1. X: Amount of fertilizer; Y: yield of corn
      2. X: Weight of a car; Y: Mileage per Gallon
      3. X: Dosage of a drug; Y: the survival rate of the mice
    - Mutual Causality
      - X = advertising expenditures and Y = occupancy rates for hotels
      - X = Police Spending Y = Crime Rate
  - In conclusion
    - A correlation between two variables X and Y can reflect many types of relationship among X, Y, and one or more omitted variables
    - A correlation between a predictor X and a response Y, even if it is very strong, is not by itself good evidence that changes in X actually cause changes in Y
## **Casusality and Causal Model**
- **Bivariate Case**
  - steps:
    1. set x to each of its possible values
    2. let y respond freely without any further intervention
    3. observe that y takes a unique value for each setting of x 
    4. ask: does y take different values for different x? If yes, then x causes y. Otherwise, x does not cause y.
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
    - free variable (if we do not intervene to set its value)
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
- Causality vs Prediction
  - Causality: how things actually work
  - Prediction: how things are related, associated, move together
- **Casusality and Causal Model - Multivariate Case**
  - definition
    - x = (x<sub>f</sub>, x<sub>o</sub>) where x<sub>f</sub> is a scalar vairable and is the **focus** of interest and x<sub>o</sub> consists of all **other** variables
- *Ceteris Paribus* effect
  - **other things equal**
  - the effect of one vairable holding all others equal
  - when x<sub>f</sub> is continuous, `c` is differentiable: ∆(x<sub>f</sub>, x<sub>o</sub>) = todo 
  - when x<sub>f</sub> is discrete, we define: todo
  - interpretation: 
    - The linear causal model says that if we change x<sub>f</sub> by 1 unit, then y will change by β units, all else being equal
- **Bring Models to Data and Linear Causal Model**
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
  - **`Ee = Ey - (å* + Exß*) = 0` and `cov(x, e) = 0`**
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
- for a linear causal model $Y ← \alpha + X\beta + u$ 
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
  - | Model               |  correlation | Interpretation |
    |---------------------|:------------:|------:|
    | Predictive Analysis | Y = α<sup>\*</sup>+Xβ<sup>\*</sup> + e | By construction cov (X, e) = 0, other variables run their own course, all else may not be equal |
    | Causal Inference    |   Y = α + X β + u   |  Cov (X, u) may not be zero, all other variables kept constant |
  - No Causality does not imply no predictability
    - Example
      ```
      y ← ax + u
      x ← by + v
      ```
      - x : crime rate; y : police spending
      - The two di§erent causal directions may not happen at exactly the same time, but if we observe the variables not very frequently, then y ← ax + u and x ← by + v can be regarded as happening simultaneously over each observation interval
      - Suppose that the values of (u, v ) are generated as an iid sequence of pairs (Ui, Vi) such that
      ```
      (Ui, Vi) ~ N(𝜎uu 𝜎uv, 𝜎uv 𝜎vv)
      ```
      - We do not observe (Ui, Vi)
      - The reduced form (the equilibrium solution in terms of Ui and Vi) is given by
      ```
      Xi = 1/(1-ab) * (bUi + Vi)
      Yi = 1/(1-ab) * (Ui + aVi)
      ```
      - It is easy to show that
      ```
      β* = cov(Xi, Yi)/var(Xi) = 

            b𝜎uu + (1+ab)𝜎uv + a𝜎vv
            -----------------------
            b^2 * 𝜎uu + 2b𝜎uv + 𝜎vv
      ```
      - Sufficient freedom exists to deliver a wide range of possible value for β
      - For example, when 𝜎uu = 0, we have
      ```
      β* = a𝜎vv/𝜎vv = a
      ```
      - Or if 𝜎vv = 0, we have `β* = 1/b`
      - Or if `𝜎uv = -(b𝜎uu + a𝜎vv)/(1+ab)` gives `β* = 0` so that Xi is useless as a predictor of Yi
- Summary
  - The optimal linear prediction interpretation of β* holds regardless whether we have each of the following
    1. x is the cause of y.
    2. y is the cause of x.
    3. x and y are mutually non-causal, although both have a common cause.
    4. x and y mutually cause each other in the presence of additional causal variables.
## **Bias of OLS Estimators for the Ceteris Paribus Causal Effect**
- $Y = \alpha + X \cdot \beta + u$
- $\beta$ will be the same as $\beta^*$ if there is no correlation between $X$ and $u$
- The mean of $u$ is 0, denote $Eu = 0$.

## **Instrumental Variable**
- randomization
  - `Y = å+Xß+u`
  - X is randomly assigned