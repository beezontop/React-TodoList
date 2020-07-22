import React, { Component } from "react";
import Header from "./components/header";
import List from "./components/list";
import './css/app.css';

class App extends Component {
  state = {
    tempId: 0,
    tempVal: "",
    tempEdit: "",
    action: "Edit",
    items: [
      { id: 0, val: "sleep", d: "d-none", action: "Edit" },
      { id: 1, val: "eat", d: "d-none", action: "Edit" },
    ],
  };

  handleChange = (key, value) => {
    //取得使用者輸入的值
    this.setState({ [key]: value });
  };

  handleCreate = () => {
    if (this.state.tempVal !== "") {
      let item = {
        id: 1 + Math.random(),
        val: this.state.tempVal,
      };

      const items = [...this.state.items];

      items.push(item);
      this.setState({ items, tempVal: "" });
    }
  };

  handleUpdate = (key, value) => {
    const items = [...this.state.items];
    const item = items.find((item) => item.id === key);
    item.val = value;
    this.setState({ items });
  };

  handleDelete = (i) => {
    let items = [...this.state.items];
    items = items.filter((item) => item !== i);
    this.setState({ items });
  };

  handleReset = () => {
    this.setState({ items: [] });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <List onChange={this.handleChange} onCreate={this.handleCreate} onUpdate={this.handleUpdate} onReset={this.handleReset} onDelete={this.handleDelete} state={this.state}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
