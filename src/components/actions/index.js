export const toggleData = (toggleData) => {
    return {
      type: "TOGGLE_DATA",
      payload: toggleData ,
    };
  };
export const toggleDataR = (toggleData) => {
    return {
      type: "TOGGLE_DATAR",
      payload: toggleData ,
    };
}
export const toggleTab = (switchData) =>{
    return{
        type: "TOGGLE_TAB",
        payload: switchData,
    }
}