import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      list: [],
    };
  }
  render() {
    return (
      <div>
        <h1>TO-DO App</h1>
        <br />
        <input placeholder="Add a todo" />
        <button>Add a todo</button>
        <br />
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                <input>ff</input>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
