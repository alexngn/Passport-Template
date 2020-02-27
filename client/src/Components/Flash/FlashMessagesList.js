import React, { Component } from "react";
import { connect } from "react-redux";
import FlashMessage from "./flashMessage.js";
import { CLEAR_FLASH_MESSAGE } from "../actions/flashMessage";

class FlashMessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: null };
  }

  setMessages() {
    let messages = this.props.messages.map((message, index) => {
      return <FlashMessage key={index} message={message} />;
    });
    this.setState({ messages });
  }

  componentDidMount() {
    this.setMessages();
  }

  componentDidUpdate(prevProps) {
    if (this.props.messages.length > 0) {
      if (prevProps.messages !== this.props.messages) {
        this.setMessages();
      }
    } else if (
      this.props.messages.length === 0 &&
      prevProps.messages.length !== 0
    )
      this.setState({ messages: null });
  }

  render() {
    return <div>{this.state.messages}</div>;
  }
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(mapStateToProps, { CLEAR_FLASH_MESSAGE })(
  FlashMessagesList
);
