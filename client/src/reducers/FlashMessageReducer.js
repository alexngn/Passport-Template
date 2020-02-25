const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_FLASH_MESSAGE": {
      return [
        ...state,
        {
          type: action.message.type,
          text: action.message.text
        }
      ];
    }
    case "CLEAR_FLASH_MESSAGE": {
      console.log("After clear flash message", state);
      return [];
    }
    default: {
      return state;
    }
  }
};
