# **Two-way Data Binding**
- def
  - Exchange of data from **View-side and Javascript-side** 
  - $V → C, C → V$
- example
  - consider the following code, we want read the input and display it next to out input box
    ```html
    <input type="text" [value]="text" (input)="updateValue($event)">
    ```
  - In corresponding js code,
    ```javascript
    import {Component} from '@angular/core';
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrl: ['./app.component.css']
    })

    export class AppComponent {
        text = 'app'
        updateValue(e) {
            console.log(e);
        }
    }
    ```
  - In the console, if we type in "123", we can see the following `InputEvent` is caught
    ```java
    InputEvent{isTrusted: true, data: "1", ...}
    InputEvent{isTrusted: true, data: "2", ...}
    InputEvent{isTrusted: true, data: "3", ...}
    ```
  - If we change the print statement to,
    ```javascript
    console.log(e.target.value)
    ```
  - The console output would be,
  - If we store the value to `text`, and output in html file using `{{}}`
    ```java
    this.text = e.target.value
    ```
    ```html
    <input type="text" [value]="text" (input)="updateValue($event)">
    {{text}}
    ```
  - This is how two-way data binding works
    - Writing the input in the **view** to **javascript**
    - **javascript** updates the variable on the **view** which displays the text, and then view gets updated 