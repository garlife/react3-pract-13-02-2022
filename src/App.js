import React, { useState } from 'react';
import './style.css';

const FuncArrow = () => {
  if (true)
    return (
      <>
        {1 + 1}
        {1 + 1 === 2 ? <h1>Hello FuncArrow</h1> : <h1>Bye FuncArrow</h1>}
        {1 + 1 === 2 && <h1>Hello FuncArrow</h1>}
      </>
    );
  return <h1>False</h1>;
};

class ClassComp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: undefined,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.count === null || state.count === undefined)
      return { count: props.count };
    return state;
  }

  render() {
    return (
      <>
        <h1>Hello ClassComp</h1>
        <p>
          <h3>Классовый баттон</h3>
          <button
            onClick={this.handleIncrement.bind(this)}
          >
            +
          </button>
          {this.state.count}
          <button
            onClick={() => {
              this.setState(() => ({ count: this.state.count - 1 }));
            }}
          >
            -
          </button>
        </p>
      </>
    );
  }

  handleIncrement(){
    this.setState(() => ({ count: this.state.count + 1 }));
  }
  
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FuncArrow />
      <ClassComp count={1} />
      <p>
        <h3>Функциональный баттон</h3>
        <button onClick={() => setCount(() => count + 1)}>+</button>
        {count}
        <button onClick={() => setCount(() => count - 1)}>-</button>
      </p>
    </div>
  );
}
