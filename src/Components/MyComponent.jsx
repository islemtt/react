import { Component } from "react";

export default class MyComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    document.title='Count 1';
    console.log('Component Did Mount');
  }
  componentDidUpdate() {
    document.title='Count 2';
    console.log('Component Did Update');
  }
  componentWillUnmout() {
    document.title='';
    console.log('Component Will Unmout');
  }
  increment() {
    this.setState({count: this.state.count + 1});
  }
    decrement() {
        this.setState({count: this.state.count - 1});
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        );
    }
}
