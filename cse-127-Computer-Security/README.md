# **CSE 127 Computer Security**
---
- ### **Lecture 2**
- Threat Model
  - TODO
- **Main topic: Buffer Overflows**
  - How buffer overflow vulnerabilities can be exploited
  - Definition: TODO
  - Morris Worm
  - What we need to know
    - How C arrays work
      - Abstraction: fixed length thing with numbers of cells
      - Reality: According to the **language spec**, writing to the end of the array is acceptable.
    - What is memory layout like
      - Kernel
      - User stack
      - Shared libs
      - Heap
      - Static data
      - Text segment
      - Unused
    - What is the Stack
      - stack is divided into frames
        - arguments
        - return address
        - stack frame pointer
        - local variables
      - ...
  - When the input argument is longer than expected, it might overwrites the stack and possibly changes the return address or other values, and thus we might have a Segmentation Fault (core dumped).
  - Jump to attacker-supplied code (**Shellcode**)
    - Definition: ...
    - Restrictions
      1. Shellcode cannot contain null characters `'\0'`
         - Instead, use NOPs to eliminate `'\0'`
      2. ...
      3. Exact address of shellcode start not always easy to guess
         - If miss, SEGFAULT
         - Fix: NOP-sled
  - Buffer Overflow Defenses
    - Avoid unsafe functions
      - `strcpy`, `strcat`, `gets`, etc.
      - Even `printf` is **tricky**
        ```c
        printf("%s\n", buf);

        printf(buf);

        printf("%s\n");
        ```
        - If `buf` is under control of attacker, NOT safe because it can keep printing, printing infos such as passwords, return addresses, etc.
        - `printf` can be used to read and write memory
    - Stack Canary
      - Put a **guard** value before the return address
      - Gets overwritten during buffer overflow
      - Check canary before jumping to the return address
      - Automatically inserted by the compiler (***gcc***)