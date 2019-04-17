# **Closures, Promises, Async/Await, Generators**

## **Asynchronous and Synchronous** 
- S: each line executes one after another
  - example
    ```javascript
    let n = 5;
    n += 1;
    console.log(n);
    ```
  - output will be $6$
- A: Lines execute interchangely depending on the implementation
  - example
    ```javascript
    setTimeout(function(){
        console.log("hello");
    }, 1000);
    console.log("world");
    ```
  - output will be 
    ```
    world
    hello (because "hello" is delayed for 1,000 ms)
    ```
---
## **Closures and callbacks**
---
## **Promises**
```javascript
    function somePromiseFunc() {
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                // NOTE: Either resolve or reject
                resolve("data");
                // reject whenever there is an error
                reject({message: "some error"});    
            }, 1000)
        }) 
    }

    somePromiseFunc()
    .then(data=>console.log(data))
    .catch(error=>console.log(error.message));
```

---
## **Await**
- very similar to **Promises**
- for any async, we can add `await` at the front
- example
    ```javascript
    async function someAsyncFunc() {
        const response = await fetch(apiUrl);
        const data     = await response.json();
        return data;
    }

    someAsyncFunc()
    .then(data=>console.log(data));
    ```
## **Generator**
- create an iterator
    ```javascript
    function * gen() {
        yield 1;
        yield 2;
        yield 3;
    }

    const iterator = gen();
    console.log(iterator.next().value); // output 1
    console.log(iterator.next().value); // output 2
    console.log(iterator.next().value); // output 3
    console.log(iterator.next().value); // output Undefined
    console.log(iterator.next());       // output true
    ```
- 