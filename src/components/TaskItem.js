import React, { Component } from 'react';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false,
    };
  }
  setEditingState = (isEditing) => {
    this.setState({ isEditing: isEditing });
  };
  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };
  handleChange = (event) => {
    const taskItem = event.target.value;
    this.setState({ task: taskItem });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };
  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>
            <td>
              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.task}
                  onChange={this.handleChange}
                  autoFocus
                />
              </form>
            </td>
            <td>
              <button
                className="save"
                type="submit"
                onClick={this.handleSubmit}
              >
                Save
              </button>
            </td>
            <td>
              <button
                className="back"
                onClick={() => this.setEditingState(false)}
                type="button"
              >
                Back
              </button>
            </td>
          </>
        ) : (
          <>
            <td className="task" onClick={this.toggleTask}>
              <input
                type="checkbox"
                readOnly
                checked={this.props.taskItem.IsCompleted}
              />
              <span
                className={
                  this.props.taskItem.IsCompleted
                    ? 'completed'
                    : 'not-completed'
                }
              >
                {this.props.taskItem.task}
              </span>
            </td>
            <td>
              <button
                className="edit"
                onClick={() => this.setEditingState(true)}
              >
                Edit
              </button>
            </td>
            <td>
              <button className="delete" onClick={this.deleteTask}>
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
