const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_FLASH_MESSAGE":
      return [
        ...state,
        {
          type: action.message.type,
          text: action.message.text
        }
      ];
    default:
      return state;
  }
};
