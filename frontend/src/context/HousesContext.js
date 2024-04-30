import { createContext, useReducer } from "react";

export const HousesContext= createContext()

export const houseReducer = (state, action)=> {
  switch(action.type) {
    case "SET_HOUSE":
      return {house: action.payload}
    case "CREATE_HOUSE":
      return {house:[action.payload, ...state.house]}
    default:
      return state
  }
}

export const HouseContextProvider = ({children})=> {
  const [state, dispatch]=useReducer(houseReducer, {
    house: null
  })
  return (
    <HousesContext.Provider value={{...state, dispatch}}>{children}</HousesContext.Provider>
  )
}