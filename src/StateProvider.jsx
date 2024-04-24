import React, { createContext, useContext, useReducer} from "react";


//prepare datalayer 
export const StateContext = createContext();


// wrap our app and provide data layer 
export const StateProvider = ({children , reducer , initialState}) => {
  return (
    <StateContext.Provider value={useReducer(reducer , initialState)}>
      {children}
    </StateContext.Provider>
  )
}

//pull inforamtion from the data layer 
export const useStateValue = ()=> useContext(StateContext);



