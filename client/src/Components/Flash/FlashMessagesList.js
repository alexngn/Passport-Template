import React, { Component } from "react";
import FlashMessage from "./FlashMessage.js";
import { connect } from "react-redux";

class FlashMessagesList extends Component {
  render() {
    const messages = this.props.messages.map(message => {
      return <FlashMessage key={message.id} message={message} />;
    });
    console.log(this.props.messages);
    return <div>{messages}</div>;
  }
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(mapStateToProps)(FlashMessagesList);
