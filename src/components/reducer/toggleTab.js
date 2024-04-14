const switchReducer = (state = { switchData: null }, action) => {
    switch (action.type) {
      case "TOGGLE_TAB":
        return { switchData: action.payload };
      default:
        return state;
    }
  };
  
  export default switchReducer;