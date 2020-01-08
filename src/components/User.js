import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class User extends Component {
  //State
  //Controlled element: put props inside state
  state = { username: this.props.username, email: this.props.email };

  //Event handlers

  //Event handlers - Method 1: Use a callback funcation directly inside onChange (see code below)

  //Event handlers - Method 2: Use a separate fat arrow function
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  //Use a regular function expression will give us an 'TypeError: Cannot read property 'setState' of undefined'
  // onEmailChange(event) {
  //   this.setState({ email: event.target.value });
  // }

  //render
  render() {
    const { username, email } = this.state;
    return (
      <Container className="p-2">
        <Row className="justify-content-md-center">
          <Col>
            <div>
              <h3 className="pt-2">Enter User Details</h3>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={event => {
                    this.setState({ username: event.target.value });
                  }} //Event handlers - Method 1
                />
              </label>
            </div>
            <div>
              <label>Email:</label>
              {/* Event handlers - Method 2 */}
              <input type="email" value={email} onChange={this.onEmailChange} />
            </div>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "30rem" }}>
              <Card.Title className="p-2">ID Card</Card.Title>
              <Card.Img variant="top" src="logo512.png" />
              <Card.Body>
                <Card.Text>Username:{username}</Card.Text>
                <Card.Text>Email:{email}</Card.Text>
                <Button variant="primary">Button</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  // Will get the warning below if we don't set 'static defaultProps'
  // Warning: A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.
  static defaultProps = {
    username: "",
    email: ""
  };
}

export default User;
