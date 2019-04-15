# **Statistical NPL**
---
- **Review of Probability**
  - Joint: $p(X = x, Y=y)$
  - Conditional: $p(X=x|Y=y)=p(X=x,Y=y)/p(Y=y)$
  - Always True: $p(X=x, Y=y)=p(X=x|Y=y)\cdot p(Y=y)=p(Y=y|X=x)\cdot p(X=x)$
  - somtimes true: $p(X=x, Y=y)=p(X=x)\cdot p(Y=y)$
- **Language Model**
  - def: *a probability distribution over sequences of words (sentences)*
  - `p(sequence of words) -> R`
    - estimate p from example sequences

- **Naive Language Model**
  - have N training sentences
  - for any sentences, x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>
  - c(x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>): frequency of x<sub>i</sub> seen
  - A naive estimate: p(x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>) = c(x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>)/N
  - **Assigns probability zero to any sentence not in the training data**
  - Need models that **generalize** to new test sentences
    - Markove Processes == **n-gram Models**
    - chain rule: `P(X1 = x1) · P(X2 = x2|X1 = x1) · P(P X3 = x3|X2 = x2, X1 = x1)`
    - example: trigram
      - consists
        - a finite set V
        - a param q(w|u, v) for each trigram u, v, w
          - u, v ∈ V
          - w ∈ V ∪ {STOP}
      - **MLE: Maxi likelihood Estimate**
        - q(w<sub>i</sub>|w<sub>i-2</sub>, w<sub>i-1</sub>) = count(w<sub>i-2</sub>, w<sub>i-1</sub>, w<sub>i</sub>) / count(w<sub>i-2</sub>, w<sub>i-1</sub>)
        - q(laughs|the, dog) = count(the, dog, laughs) / count(the, dog)
      - Increasing n-gram order: **sparsity**
        - Larger n-grams capture more dependencies, but sparsity is an issue
        - so we build a few different n-gram models (**vary n**)
        - compare them using a measure of language model "goodness"
          - **evaluation**: perplexity
            - 2<sup>-(1/M * ∑<sup>m</sup><sub>i = 1</sub>log<sub>2</sub>p(s<sub>i</sub>))</sup>
            - is a branching factor
              - assign p of 1 to the test data -> perplexity = 1
              - assign p of 1/|V| to every word -> perplexity = V
              - assign p of 0 to anything -> perplexity = infinity
          - **estimation techniques**
            1. **Smoothing**
                - flattens spiky distribution
                - add-one (*Laplace*) smoothing
                  - q(w<sub>i</sub>|w<sub>i-2</sub>, w<sub>i-1</sub>) = (count(w<sub>i-2</sub>, w<sub>i-1</sub>, w<sub>i</sub>) + 1) / (count(w<sub>i-2</sub>, w<sub>i-1</sub>) + |V|)
                  - Tends to reassign too much mass to unseen events
                  - so can be adjusted to add δ where 0 < δ < 1
                  - normalized by δ|V| instead of |V|
            2. **Linear Interpolation**
                - $q(w_i|w_{i-2}, w_{i-1}) =$
                - $\lambda_1 \times q_{ML}(w_1|w_{i-2}, w_{i-1}) +$
                - $\lambda_2 \times q_{ML}(w_i|w_{i-1}) +$
                - $\lambda_3 \times q_{ML}(w_i)$
                - where $\lambda_1 + \lambda_2 + \lambda_3 = 1$, $\lambda_i ≥ 0$
                - How to estimate $\lambda$ values
                  - use the **validation** set to pick $\lambda$
                  - pick the $\lambda$ that give the highest probability of validation
                    - grid search 
                    - expectation Maximization (EM)
            3. **Discounting methods**
                - $count*(x) = count(x) - 0.5$
                - Missing probability mass
                  - $\alpha(w_{i-1})=1-\Sigma_w(Count^*(w_{i-1}, w)/Count(w_{i-1}))$
                - discount value: $0 || 1$
            4. 

- 