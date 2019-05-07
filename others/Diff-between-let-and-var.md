# **What is the difference between `let` and `var` in javascript?**
`let` is a new syntax in **ES6**. It is very similar to `var`. Both syntaxes are used for declaration, but the difference being:
- the scope. Considering the following code
    ```js
    function loop() {
        for (let i = 0; i < 3; i++) {
            console.log(i);
        }
        <!-- The following line causes an error -->
        console.log(i);
    }

    function loop() {
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        <!-- This line prints 3 -->
        console.log(i);
    }
    ```
- Note that `var` declares a function-scoped variable whereas `let` declares a **blocked-scope** variable.
- `var` declared variables are attached to `window` object, which potentially causes problems
  - If we are importing other library, and your var-declared variable has the same name as one of the variables from the library. That variable will overwrites yours.
- You can re-declare a variable using `var` but not `let`
  - `var i = 0;` and `var i = 1;` will work
  - `let i = 0;` and `let i = 1;` will NOT work
  - The reason why we can re-declare using `var` is that the compiler will check if there is an `a` in the scope. If yes, then simply overwrites its original value. If no, then creates an `a` and assign it with some value.