import React from "react";
import uuid from "uuid";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

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

      <div className="container" >
        <br />
        {/* <p className="h3 text-center">{this.props.title}</p> */}
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label>
              Task :</Label>
            <Input type="text" value={this.state.title} onChange={this.nameChange} />
            <br />

          </FormGroup>
          <FormGroup check>
            <Label check>
              {/* Status :</Label>{' '} */}
              <Input type="checkbox" value={this.state.complete} onChange={this.completeChange} />{' '}
              Checked/UnChecked</Label>

          </FormGroup>
          <br />
          <FormGroup>
            <Label>
              Date :</Label>
            <Input type="date" value={this.state.date} onChange={this.dateChange} />

          </FormGroup>

          <FormGroup>
            <p className="text-right">
              <Button color="primary">Submit</Button>{' '}<Link className="btn btn-primary" to="/">Back</Link>
            </p>

          </FormGroup>
        </Form>
      </div>







      // <Container>
      //   <Row>
      //     <Col sm="12" md={{ size: 6, offset: 3 }}>
      //       <br />

      //       <br />
      //       <form onSubmit={this.handleSubmit}>
      //         <label>
      //           Title:
      //       <input
      //             type="text"
      //             value={this.state.title}
      //             onChange={this.nameChange}
      //           />
      //         </label>
      //         <label>
      //           <br />
      //           Date:
      //       <input
      //             type="date"
      //             value={this.state.date}
      //             onChange={this.dateChange}
      //           />
      //         </label>
      //         <br />
      //         <label>
      //           Completd:
      //       <input
      //             type="checkbox"
      //             value={this.state.complete}
      //             onChange={this.completeChange}
      //           />
      //         </label>
      //         <br />

      //         <input type='submit' />
      //       </form>
      //       </Col>
      //   </Row>
      // </Container>
    );
  }
}
export default AddTask;
