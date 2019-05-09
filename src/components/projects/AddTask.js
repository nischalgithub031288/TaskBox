import React from "react";
import uuid from "uuid";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.task ? props.task.title : "",
      date: props.task ? props.task.dueDate : "",
      complete: props.task ? props.task.isCompleted : ""
    };
  }

  nameChange = (e) => {
    const title = e.target.value

    //console.log(title);
    this.setState(() => ({ title }));
  };

  dateChange = e => {
    const date = e.target.value;
    this.setState(() => ({ date }));
  };

  completeChange = e => {
    const complete = e.target.checked
    this.setState(() => ({ complete }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      id: this.props.task ? this.props.task.id : uuid(),
      title: this.state.title,
      dueDate: this.state.date,
      isCompleted: this.state.complete,
    };
    console.log(formData)
    this.props.handleSubmit(formData)

    this.setState(() => ({
      title: '',
      date: '',
      complete: ''
    }))


    console.log(formData);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.nameChange}
            />
          </label>
          <label>
            <br />
            Date:
            <input
              type="date"
              value={this.state.date}
              onChange={this.dateChange}
            />
          </label>
          <br />
          <label>
            Completd:
            <input
              type="checkbox"
              value={this.state.complete}
              onChange={this.completeChange}
            />
          </label>
          <br />

          <input type='submit' />
        </form>

        <br />
      </div>
    );
  }
}
export default AddTask;
