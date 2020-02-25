import React, { Component } from "react";

class FlashMessage extends Component {
  render() {
    const { text, type } = this.props.message;
    return (
      <div
        className={`alert alert-${
          type === "Failure" ? "danger" : "success"
        } mt-2`}
      >
        {text}
      </div>
    );
  }
}

export default FlashMessage;
