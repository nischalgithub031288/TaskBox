import React from "react";
import uuid from "uuid";
import { Label, Button, Input } from 'reactstrap'

class ClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.client ? props.client.name : "",
      email: props.client ? props.client.email : ""
    };
  }

  nameChange = e => {
    e.persist();
    this.setState(() => ({ [e.target.name]: e.target.value }));
    //console.log(this.state.name, this.state.email);
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = {
      id: this.props.client ? this.props.client.id : uuid(),
      name: this.state.name,
      email: this.state.email
    };
    console.log(form);
    this.props.handleSubmit(form);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Label>
            Name :

          <Input
              type="text"
              value={this.state.name}
              onChange={this.nameChange}
              name="name"
            />
          </Label>
          <br />


          <Label>

            Email :
            <Input
              type="text"
              value={this.state.email}
              onChange={this.nameChange}
              name="email"
            />
          </Label>
          <br />
          <Button color="primary">Submit</Button>
        </form>
      </div>
    );
  }
}
export default ClientForm;
