# **Quick Sort Explained**

## **Recursive Algorithm Go Through**
- **pivot**
  - correct position in final, sorted array
  - Items to the left are smaller
  - items to the right are larger
- Algorithm with example
  - Here is an unsorted list
    ```
    2, 6, 5, 0, 3, 8, 7, 1
    ```
  - choose a pivot and put the pivot at the end of the list
    ```
    2, 6, 5, 0, 8, 7, 1, (3)
    ```
  - `item_from_left` that is larger than pivot
  - `item_from_right` that is smaller than pivot 
  - Search from the LHS, find `item_from_right` = 6
  - Search from the RHS, find `item_from_left` = 1
  - Switch,
    ```
    2, (6), 5, 0, 8, 7, (1), 3
    2, 1, 5, 0, 8, 7, 6, 3
    ```
  - Continue, for 5 and 0
    ```
    2, 1, (5), (0), 8, 7, 6, 3
    2, 1, 0, 5, 8, 7, 6, 3
    ```
  - **Stop** when index of `item_from_left` > `item_from_right`
  - Swap pivot with `item_from_left`
    ```
    2, 1, 0, (5), 8, 7, 6, 3
    2, 1, 0, 3, 8, 7, 6, 5
    ```
  - Recursion on the rest LHS and RHS
    - RHS
        ```
        8, 7, 6, 5
        ```
    - Pick 7 as the pivot and ...
    - LHS
        ```
        2, 1, 0
        ```
    - Pick 1 as the pivot and ...
---
## **Pseudocode**
```python
def QS(A as arr, low as int, high as int):
    if (low < high):
        pivot_position = Partition(A, low, high)
        QS(A, low, pivot_position)
        QS(A, pivot_position + 1, high)

def Partition(A as arr, low as int, high as int):
    pivot = A[low]
    leftwall = low
    for i = low + 1 to high:
        if A[i] < pivot:
            swap (A[i], A[leftwall])
            leftwall = leftwall + 1
    
    swap(pivot, A[leftwall])
    return leftwall
```
## **Runtime and performance**
- worst case: $O(n^2)$
- average case: $O(n\cdot log(n))$, when pivot is select appropriately
---
## **KEY: how to choose pivot**
- median-of-three method:
  - look at the first, middle, last items in the array
  - sort these 3 items and pick the middle one from the sorted 3 items as the pivot
---