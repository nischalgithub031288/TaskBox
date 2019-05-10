import uuid from "uuid";
import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom"

class ProjectFrom extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      name: props.project ? props.project.name : "",
      category: props.client ? props.client.name : ""
    };
    console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      id: this.props.project ? this.props.project.id : uuid(),
      name: this.state.name,
      category: this.state.category
    };
    this.props.handleSubmit(formData);
  };

  nameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  selectHandle = e => {
    const category = e.target.value;
    this.setState(() => ({ category }));
  };





  render() {




    return (


      <div className="container" >
        <br />
        <p className="h3 text-center">Edit Project</p>
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label>
              Name of Project :</Label>
            <Input type="text" value={this.state.name} onChange={this.nameChange} />

          </FormGroup>
          <FormGroup>
            <Label>
              Employee :</Label>
            <Input type="select" defaultValue={this.props.project ? this.props.client.name : ''} onChange={this.selectHandle}>

              <option value=""> Client Select</option>
              {this.props.clients.map(client => {
                return (
                  <option value={client.name} key={client.id}>
                    {client.name}
                  </option>
                );
              })}
            </Input> 


          </FormGroup>

          <FormGroup>
            <p className="text-right">
              <Button color="primary">Submit</Button>{' '}<Link className="btn btn-primary" to="/projects">Back</Link>
            </p>

          </FormGroup>
        </Form>
      </div>

      // <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <label>
      //       Name of project:
      //       <br />
      //       <input
      //         type="text"
      //         value={this.state.name}
      //         onChange={this.nameChange}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       Employee:
      //       <br />
      //       <select defaultValue={this.props.project ? this.props.client.name : ''} onChange={this.selectHandle}>
      //         <option value=""> client select</option>
      //         {this.props.clients.map(client => {
      //           return (
      //             <option value={client.name} key={client.id}>
      //               {client.name}
      //             </option>
      //           );
      //         })}
      //       </select>
      //       {/* <h2>{this.props.clients.length}</h2> */}
      //     </label>
      //     <br />
      //     <input type="submit" value="submit" />
      //   </form>
      // </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("1", state);
  return {
    projects: state.project,
    clients: state.client
  };
};

export default connect(mapStateToProps)(ProjectFrom);
