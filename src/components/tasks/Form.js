import uuid from "uuid";
import React from "react";
import { connect } from "react-redux";

class TaskFrom extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: props.project ? props.project.name : "",
  //       category: props.client ? props.client.name : ""
  //     };
  //   }

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     const formData = {
  //       id: this.props.project ? this.props.project.id : uuid(),
  //       name: this.state.name,
  //       category: this.state.category
  //     };
  //     this.props.handleSubmit(formData);
  //   };

  //   nameChange = e => {
  //     const name = e.target.value;
  //     this.setState(() => ({ name }));
  //   };

  //   selectHandle = e => {
  //     const category = e.target.value;
  //     this.setState(() => ({ category }));
  //   };

  render() {
    return (
      <div>
        <h2>Taks form</h2>
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.nameChange}
            />
          </label>
          <br />
          <label>
            Client:
            <br />
            <select onChange={this.selectHandle}>
              <option value=""> client select</option>
              {this.props.clients.map(client => {
                return (
                  <option value={client.name} key={client.id}>
                    {client.name}
                  </option>
                );
              })}
            </select>
            {/* <h2>{this.props.clients.length}</h2> */}
        {/* </label>
          <br />
          <input type="submit" value="submit" />
        </form> */}{" "}
        */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("1", state);
  return {
    projects: state.project,
    clients: state.client,
    tasks: state.task
  };
};

export default connect(mapStateToProps)(TaskFrom);
