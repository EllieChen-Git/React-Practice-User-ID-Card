import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class User extends Component {
  //state
  state = { username: this.props.username, email: this.props.email };

  //Event handler
  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  //render
  render() {
    const { username, email } = this.state;
    return (
      <Container className="p-2">
        <Row className="justify-content-md-center">
          <Col>
            <div>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={this.onUsernameChange}
                />
              </label>
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={this.onEmailChange} />
            </div>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "30rem" }}>
              <Card.Title>ID Card</Card.Title>
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
  static defaultProps = {
    username: "",
    email: ""
  };
}

export default User;
