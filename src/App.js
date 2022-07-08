import './App.css';
import todosData from './data/todosData';

import { Component } from "react";

import Navbar from './components/Navbar';
import TodosList from './components/TodosList';

class App extends Component {
  state = {
    todosData: todosData,
    todosTaskName: "",
    todosDescription: "",
    todosText: "",
    todosCreatedAt: "",
    isCompleted: false
    // todosCompleted: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      taskName: this.state.todosTaskName,
      description: this.state.todosDescription,
      text: this.state.todosText,
      createdAt: this.state.todosCreatedAt

    };
    console.log(newTodo);
    this.setState({
      todosData: [newTodo, ...this.state.todosData],
      todosTaskName: "",
      todosDescription: "",
      todosText: "",
      todosCreatedAt: "",
      // todosCompleted: ""
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />

        <form onSubmit={this.handleSubmit}>
          <label htmlFor='todosTaskName'>Task Name</label>
          <input
            type="text"
            value={this.state.todosTaskName}
            onChange={this.handleChange}
            id="todosTaskName"
          />

          <label htmlFor='todosDescription'>Description</label>
          <input
            type="text"
            value={this.state.todosDescription}
            onChange={this.handleChange}
            id="todosDescription"
          />

          <br></br>

          <label htmlFor='text'>Text</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            id="text"
          />

          <label htmlFor='createdAt'>Created At</label>
          <input
            type="Date"
            value={this.state.createdAt}
            onChange={this.handleChange}
            id="createdAt"
          />

          <br></br>

          {/* <label htmlFor='todosCompleted'>Completed?</label>
          <input
            type="text"
            value={this.state.todosCompleted}
            onChange={this.handleChange}
            id="todosCompleted"
          /> */}

          <input type="submit" />
        </form>

        <TodosList tasks={this.state.todosData} />
      </div>
    );
  };

};



export default App;
