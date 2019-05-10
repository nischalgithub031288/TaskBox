import React from "react";
import { connect } from "react-redux";
import { addClient } from "../../actions/clients";
import ClientForm from "./Form";

class ClientNew extends React.Component {
  handleSubmit = formdata => {
    this.props.dispatch(addClient(formdata));
    this.props.history.push("/clients");
  };
  render() {
    return (
      <div>
        <h2> Add Employee</h2>
        <ClientForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default connect()(ClientNew);
