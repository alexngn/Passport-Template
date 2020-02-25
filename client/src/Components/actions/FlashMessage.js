export function ADD_FLASH_MESSAGE(message) {
  return {
    type: "ADD_FLASH_MESSAGE",
    message
  };
}

export function CLEAR_FLASH_MESSAGE() {
  return {
    type: "CLEAR_FLASH_MESSAGE"
  };
}
