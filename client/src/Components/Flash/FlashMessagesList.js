import React, { Component } from "react";
import FlashMessage from "./FlashMessage.js";
import { connect } from "react-redux";
import { CLEAR_FLASH_MESSAGE } from "../actions/FlashMessage";
class FlashMessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: null };
  }

  setMessages() {
    let messages = this.props.messages.map(message => {
      return <FlashMessage key={message.id} message={message} />;
    });
    this.setState({ messages });
    console.log(messages.length > 0 ? messages[0].props.message : null);
  }

  componentDidMount() {
    this.setMessages();
    this.props.CLEAR_FLASH_MESSAGE();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.props);
    if (this.props.messages.length > 0) {
      if (prevProps.messages != this.props.messages) {
        console.log("update called");
        this.setMessages();
      }
    }
  }

  componentWillUnmount() {
    console.log("unmounted!");
    // CLEAR_FLASH_MESSAGE();
    this.setState({});
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
