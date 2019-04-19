# **React Component LifeCycle**
- Go through using a counter component, video [here](https://www.youtube.com/watch?v=m_mtV4YaI8c)
- Set up code
    ```js
    import react from 'react'
    export default class Counter extends React.Component {
        constructor(props) {
            console.log('Constructor')
            super(props)
            this.state = {
                counter: 0
            }
            this.increment = () => this.setState({counter: this.state.counter+1})
            this.decrement = () => this.setState({counter: this.state.counter-1})
        }
        
        render() {
            console.log('render')

            return (
                <div>
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                    <div className="counter">
                        Counter: {this.state.counter}
                    </div>
                </div>
            )
        }
    }
    ```
  - `componentWillMount()` will execute right before rendering
    ```js
    componentWillMount() {
        console.log('Component Will Mount')
        console.log('-------------------')
    }
    ```
  - `componentDidMount()` called right after `render`
    ```js
    componentDidMount() {
        console.log('Component Did Mount')
        console.log('-------------------')
    }
    ```
  - `componentWillReceiveProps(nextProps)` called whenever component receives new props, props change because of state changes
    ```js
    componentWillReceiveProps(nextProps) {
        console.log('Component Will Receive Props')
        console.log(nextProps)
    }
    ```
  - `shouldComponentUpdate(nextProps, nextState)` called before rendering, after receiving new props, return `false` to prevent from rendering
    ```js
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component Update')
        console.log(nextProps, nextState)
        return ture
    }
    ```
  - `componentWillUpdate(nextProps, nextState)` before rendering, after receiving new props
    ```js
    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will Update')
        console.log(nextProps, nextState)
    }
    ```
  - `componentDidUpdate(prevPros, prevState, snapshot)` called after  been re-rendered. When called increment or decrement method, DidUpdate gets called
    ```js
    componentDidUpdate(prevPros, prevState, snapshot) {
        console.log('Component Did Update')
        console.log('-------------------')
    }
    ```
  - `componentWillUnmount()` will execute immediately before removing component from DOM
    ```js
    componentWillUnmount() {
        console.log('Component Will Unmount')
        console.log('-------------------')
    }
    ```
  - 