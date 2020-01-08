import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Input extends Component {
  render() {
    //Lift the state (5): destructuring props from this.props (was from 'this.state')
    const { username, email, onUsernameChange, onEmailChange } = this.props;
    return (
      <Col>
        <div>
          <h3 className="pt-2">Enter User Details</h3>
          <label>
            Username:
            {/*Lift the state (5): remove 'this' keyword from 'this.onUsernameChange' */}
            <input type="text" value={username} onChange={onUsernameChange} />
          </label>
        </div>
        <div>
          <label>Email:</label>
          {/*Lift the state (5): remove 'this' keyword from 'this.onUsernameChange' */}
          <input type="email" value={email} onChange={onEmailChange} />
        </div>
      </Col>
    );
  }

  // Will get the warning below if we don't set 'static defaultProps'
  // Warning: A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.
  static defaultProps = {
    username: "",
    email: ""
  };
}

export default Input;
