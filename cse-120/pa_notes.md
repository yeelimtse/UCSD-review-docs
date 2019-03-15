## **PA1 - Context Switch**
---
### part A
- each process has a single thread of control and its own private memory.

**Fork ()** 
- is a system call, used to create a new process with memory identical to the caller
- in the created process, returns 0
- in the caller process, returns the id of the created process
- caller keeps running after calling fork () (*in our UMIX system only*)

**Exit ()**
- terminates a process
- if not called, a process will terminate once hit the end of clause

**Review questions:**
1. Change the program to print the value of pid in the code executed by the child.  What does it print, and why?
    - It should print 0 because after the parent process executed, the child 
    - process got executed and Fork () will return 0 in child's process.

2. Remove the Exit () statement.  What happens, and why?
   - If we remove the Exit () statement, in the child's process, the code
   - will keep executing the following two Printf statement. The reason being 
   - that one process will not stop until it reaches the end of the code. 

--- 
### part B
1. Can you explain the order of what gets printed based on the code?
   - The Print statement of parent got executed first and after parent 
   - process reached the end, the first and second child's print statements were executed in order. 

2. Why do you think the first child executes before the second child?
   - It is because the first child is created before the second child, and the system is a single-thread system.
  
3. Move the two print statements executed by the parent to just after
where it says HERE.  How can you print the pid of the first child?
   - Save the pid of the first child before hands.

---
### part C
**Yield (pid)**
- caller process yields to process pid
- when yield returns, return the id of whoever yields back to the caller
  - for example, if A calls yield to B, and in B, it yields to C, and then C yields back to A. The yield function called by A should return C


1. Can you explain the order of what gets printed based on the code?
	- The parent process first executes, then it yields to its first child whose pid is 2. Since parent process yields, the first child process is executed. After the first child process exits, it returns to the unfinished parent process, printing yield message. 
 	- Same process for the second child process.

---
### part D & E
1. Can you explain the order of what gets printed based on the code?	
   - The loop runs 3 times so child 1, 2, and 3 got created in order. After the loop terminated, parent process started to yielding. It first yield to child 4 because the last time c = 4. Then it went into child 4, so "4 starting". Then it went to handoff function, in which child 4 yielded to the previous child. Repeated all the way to parent process. 

   - Then it went back to parent process. Since Yield function returns the identifier of the process that yielded to the one that is now running, r = 2 in this case. So it printed "1 resumed by 2, yielding to 4". 

   - Then it returned to child 4, right after Yield function in handoff function. It loopped back to parent and then exited one by one in order. 

---
## **PA2 - Scheduling**
---
## **PA3 - Threading**
---
## **PA4 - Threading**
---
**setjmp (env)**
- cause a process to save parts of its context in env
- env is a jmp_buf structure defined in <setjmp.h>
- returns twice 
  - 0 the first time 
  - a value other than 0 the second  time


**longjmp (env, t)**
- causes a process to do a non-local jump to the location where setjmp (env) was called - _the last time?_ 
-  example
   -  if there are 3 procedures, A, B, and C.
   -  A called setjmp(env), which saved some information of A
   -  then A called B, B called C
   -  C is now running and it calls longjmp(env, t)
   -  then CONTROL returns to where setjmp(env) was called by A
- __can only jump to a pending procedure that had called setjmp(env)__
  - A did not return before __longjmp__ was called
  - if a call was made after returning to A, then something is going to be messed up. because the context would be different than before


**In terms of tranfering control - twice returns of setjmp**
- first time - return 0 meaning "I just set the env"
- second time - return from calling longjmp, it returns t if t ≠ 0; otherwise, return 1

**MyInitThreads ()**
- initilization, must be called first

**MyCreateThread (f, p)**
- create a thread to execute function f
- return nothing, p?
- **not executing until another thread yield to it**

**MyYieldThread (t)**
- make running thread yield to thread t
- return the ID of the thread yielded (whoever called yield)

**MyGetThread ()**
- return the ID of currently running thread

**MySchedThread ()**
- make the current thread give up CPU
- allow another thread to be scheduled
- determine which thread wll be selected to run
- **when no other thread exists, choose the same one**

**MyExitThread ()**
- causes the currently running thread to exit
---
### **Issues**
**MyYieldThread (t)**
- it assumes there are only two threads
- it assumes the calling thread always yields to the other (when in fact, we must allow for the possibility that a thread might yield to itself)
---
### **Part A**
1. Can you account for the output order: A: t=1, B: t=2, C: t=4, D: t=5?
   - t = 1 comes first because no setjmp or longjmp have been called yet
   - then calls setjmp for the first time, store context at point A to env, then returns 0 and goes into the if block
   - In if, set t = 2, so t = 2 gets printed, and longjmp is called
   - Here the control will jump back to where setjmp was called before - **line 97**
   - Since it is returned from longjmp, and t ≠ 0, setjmp here will return 2
   - t = 2 goes into else block so t = 4 gets printed
   - After incrementing t, t = 5 gets printed

2. Make the following minimal changes so that the order is ACBD rather
than ABCD: (a) change the test in the conditional to != rather than ==,
and (b) move the longjmp statement so that it is just after Point C.
Can you explain why the printed values of t are 1, 2, 2, 3?
   - t = 1 comes first because no setjmp or longjmp have been called yet
   - Since setjmp is first called in **line 97**, it returns 0 and t gets updated
   - Goes to else block and increments t to 2, so t = 2 gets printed
   - Then longjmp will throw the control back to **line 97**. For this time, setjmp will return 2
   - In if block, t gets updated to 2 so t = 2 gets printed again
   - Condition block ends and t gets incremented, t = 3 gets printed

3. Change the test in the conditional back to ==, and move the longjmp
statement to just after Point D.  Can you account for the process's
behavior?
   - Infinite throwing control
   - Print statements involve in are **line 103** and **line 106**

4. Change back to the original setup (conditional test is ==, longjmp
is immediately after Point B).  Change setjmp to Setjmp and longjmp to
Longjmp.  What do Setjmp and Longjmp do?  When you run the program, you
should notice different behavior; why?  Hint: consider how the stack of
activation records changes over time.
   - Inside Setjmp
   - Inside Setjmp1
   - B: t = 2
   - Inside Longjmp
   - Inside Longjmp1
   - Kernel Panic! Segmentation fault/bad virtual memory reference

1. Now change Setjmp to Setjmp1 and Longjmp to Longjmp1.  When you run
the program, do you notice any different behavior?  Can you explain why?
Hint: this behavior can only be justified by considering what must be
saved in (and restored from) env.

---
### **Part C**
**MyCreateThread()** 
- should be generalized - value between `0` and `MAXTHREADS-1` are allowed
- if no more thread can be created, return -1 (when there are `MAXTHREADS` active threads)
- Threads IDs should be integers that are assigned in increasing order
- Values should be reused AFTER having reached MAXTHREADS-1, again starting from 0
- But a value that is in use should be skipped over 

**MyYieldThread (t)**
- needs to be generalized so that any thread can yield to any other thread, including itself
- -1 should be returned if t is invalid **or** if there is no calling thread 
- (i.e., if the return from MyYieldThread is due to a call to MySchedThread)
- if T calls yield, then return the ID of whoever returns back to T

**MySchedThread ()**
- implement FIFO
- if a thread calls MySchedThread (), it should be placed at the end of a queue
- whichever thread is at the front should be selected for execution
- If a thread calls MyYieldThread (t), then the calling thread should be placed at the end of the queue
- then t should be removed from queue

**MyExitThread ()**
- cause the currently running thread to exit
- clear the thread table accordingly
- Finally, it may call MySchedThread () to pass control to another thread,
- Unless there is no thread to run, in which case it should call Exit ()