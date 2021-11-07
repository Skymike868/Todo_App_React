import React from 'react';

export default class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.CreateTask(this.state.task);
    this.setState({ task: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter task"
            value={this.state.task}
            onChange={this.handleChange}
            autoFocus
          />
          <button className=" add" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
