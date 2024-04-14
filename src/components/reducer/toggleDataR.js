const toggleReducerR = (state = { toggleDataR: null }, action) => {
    switch (action.type) {
      case "TOGGLE_DATAR":
        return { toggleDataR: action.payload };
      default:
        return state;
    }
  };
  
  export default toggleReducerR;