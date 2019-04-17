# **Display Types in CSS**
- Inline display in CSS
  - Example: 
    - In unordered list, by **default**, the display setting for list items are **NOT inline**
        ```
        display: inline;
        ```
    - By changing the display, the list items will display **inline**. If cannot fit in one line, will jump to the next newline.

- Inline - \<br\> tag
  - just text. Inline elements fit into one line.
  - `..... \n`
  - exmaple:
    - following code makes two paragraphs in the same line
        ```
        <div style="display: inline;">
            <p>This is a paragraph.</p>
            <p> This is another paragraph.</p>
        </div>
        ```
    - Display result should be 
        ```
        This is a paragraph. This is another paragraph.
        ```
- Block - \<p\> tag
  - More like a box, container inside which is text
  - We can change the width, height, and other attributes of the box
  - **default display** is **block**. It means each p tag, by default, takes the entire section of a page.
  - example
    - default p tag
        ```
        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>
        ```
    - result should be 
        ```
        This is a paragraph.
        This is another paragraph.
        ```
- Inline block
  - If we apply a style of `inline-block` display to a p tag, then the block will take as much space as it needs for its section.