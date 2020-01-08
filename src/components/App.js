import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

//Lift the state (1): Separate child components into separate files & render them in parent (App.js)
import Input from "./Input";
import Output from "./Output";

class App extends Component {
  //Lift the state (2): move 'state' from child to parent
  state = { username: "", email: "" };

  //Lift the state (3): move event listeners from child to parent
  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    //Lift the state (4): destructuring props from state
    const { username, email } = this.state;
    return (
      <div>
        <Container className="p-2">
          <Row className="justify-content-md-center">
            {/* Lift the state (4): pass the props & event listeners on child element here */}
            <Input
              onUsernameChange={this.onUsernameChange}
              onEmailChange={this.onEmailChange}
              username={username}
              email={email}
            />
            {/* Lift the state (4): pass the props & event listeners on child element here */}
            <Output username={username} email={email} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
