import React, { Component } from 'react';
import './app.css';
import List from './todo-list/todo-list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
        input: '',
      items: [...this.state.items, this.state.input]
    });
  }

  /* onDelete = (id) => {
    this.setState((state) => {
      const idx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ];
      return { items };
    });
  }; */

  

  render() {
    return (
      <div>
        <form className="form-control new-todo-label" onSubmit={this.onSubmit}>
          <input value={this.state.input} onChange={this.onChange} />
          <button className="btn btn-outline-secondary">Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}