import React, { Component } from 'react';

import { connect } from 'react-redux';

class TodoList extends Component {
  state = {
    newTodo: '',
    todos: [],
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');

    if (todos) {
      this.setState({ todos: JSON.parse(todos) });
    }
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.setState(
      {
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: '',
      },
      () => {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
      },
    );
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          name="todo"
          onChange={this.handleInputChange}
          value={this.state.newTodo}
        />
        <button onClick={this.handleAddTodo}>Adicionar</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(TodoList);
