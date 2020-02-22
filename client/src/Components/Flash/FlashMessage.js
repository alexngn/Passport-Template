import React, { Component } from "react";

class FlashMessage extends Component {
  render() {
    const { type, text, id } = this.props.message;
    return <div className="alert alert-success">{text}</div>;
  }
}

export default FlashMessage;
