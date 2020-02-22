export default message => dispatch => {
  dispatch({
    type: "ADD_FLASH_MESSAGE",
    message
  });
};
