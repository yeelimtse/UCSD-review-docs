# **CSE 140L Design System Laboratory**
#### summer-1 2019
---
### **Week One**
2's Complement Theory
- Numbers are represented in binary
- Sign bit + magnitude bits
- Note: *The maximum representable negative integer does not have a corresponding positive representation*
- Example:
  - (1101)<sub>2</sub>
  - 2<sup>0</sup> + 2<sup>2</sup> + (-)2<sup>3</sup> = 1 + 4 - 8 = -3
  - Check: Flip the bits and add 1
    - (0010)<sub>2</sub> + (0001)<sub>2</sub> = (0011)<sub>2</sub> = 3
    - Since the sign bit is 1, representing that this number is **negative**
    - Results match

Overflow
- Overflow occurs when the addition result is too large to fit in the given bit width
- In signed addition, there are scenarios where overflow is not possible
  - add: opposite sign
  - sub: same sign
- Note: *Overflow does not mean useless*
  - In applications requiring modulo 2<sup>N</sup> arithmetic, the overflow is simply discarded/ignored
  - Depending on the context, the result with overflow may still be restored to the correct result
- Example:
  - Overflow:
    - (0110) + (0101) = (1011) = -5. But 6 + 5 = 11
    - (0101) - (1101) = (1000) = -8. But 5 - (-)3 = 8
  - Overflow not possible:
    - (0111) + (1011) = (0010) = 2. 7 + (-)5 = 2
    - (0110) - (0101) = (0001) = 1. 6 - 5 = 1
    - Note: *the carry bit is ignored because the width is 4*
  - Overflow corrected:
    - (1101) + (1010) = 1(0111). -3 + (-)6 = -9
    - (0101) - (1101) = 0(1000). 5 - (-)3 = 8
    - Note: *the carry bit is added*$$


# [Here](https://github.com/yeelimtse/Design-Systems-Laboratory) is a private repository of all labs of CSE 140L (Only my teammates can see it).
---