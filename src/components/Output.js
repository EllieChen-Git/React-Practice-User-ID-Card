import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";

class Output extends Component {
  render() {
    //Lift the state (5): destructuring props from this.props (was from 'this.state')
    const { username, email } = this.props;
    return (
      <Col>
        <Card style={{ width: "18rem", height: "30rem" }}>
          <Card.Title className="p-2">ID Card</Card.Title>
          <Card.Img
            variant="top"
            src={`https://robohash.org/${username}.png?set=set4&size=200x200`}
          />
          <Card.Body>
            <Card.Text>Username:{username}</Card.Text>
            <Card.Text>Email:{email}</Card.Text>
            <Button variant="primary">Button</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  static defaultProps = {
    username: "",
    email: ""
  };
}

export default Output;
