# **CSE 140L Design System Laboratory**
#### spring 2019
---
## How to design real systems
- ### Design logic 
  - product flow
    - typical chip design product flow
      - architecture -> design -> fabrication
    - typical automated design flow
      - specification -> 
      - high level design -> 
      - RTL design ->                   <---|
      - functional verification ->      <---|
      - logic synthesis / timing ->         Gate Simulation
      - place & route ->
      - **Tape-out (ASIC)** 
      - post silicon verfication

  - Binary digital logic
    - physical quantity represented by **1** or **0** (*usually voltage*)
    - switch based on transistors
      - more states: 0, 1, X (could be 0 or 1 because you have not told me), Z (idk)


  - Biasc CMOS
    - nMOS vs pMOS
    - most basic CMOS gate - inverter
      - verilog: *assign out = ~in*
    - 2 input (N)AND Gate
    - 2 input (N)OR Gate
    - XOR Gate: *A ^ B*
    - Mux: like **ternary operator**: *s1 ? i0 : i1;*
    - **XOR from MUX**
      - assign Y = A ? ~B : B
        ```
        always @(*) 
            if (A)
                Y = ~B;
            else
                Y = B;
        ```

  - Hardware description languages
    - VHDL - Ada influenced
    - Verilog - C influenced
      - concurrent **specification** language
      - limited data types
        - wire
          - 1 bit wire and n-bit wire(*bus*)
          - has no memory, hold no state
          - no implicit direction, one driver and one or more receivers
        - reg
          - denotes a storage - may hold state
          - 1 bit wide or n-bit wide
          - example
            - `reg [31: 0] fu_oldPC;`
            - `reg [1: 0] memArray[1024];`
        - literals
          - binary 
          - hex
          - decimal
      - some operators 
        - reduction 
        - others 
          - concatenation
        - and many more
          - comparison, shift, arithmetic, etc.
      - modular
        - ports can be matched positionally or by pin names(recommanded)
        - module instatnces have instance names as in OOP
          - **instances are statically allocated**
      - abstraction levels -TODO
        - behavioral
          - describe **concurrency**
          - all initial blocks happen at the same time
          - initial
          - always
          - blocking and non-blocking
        - RTL
        - structural
- ### Simulate logic
- ### Realize logic on hardware
## Familiarity with design tools
- ### Simulators
- ### Debug tools
- ### Logic synthesis tools
- ### Timing tools