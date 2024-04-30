import { useContext } from "react"
import { HousesContext } from "../context/HousesContext"


export const useHouseContext= ()=>{
  const context =useContext(HousesContext)
  if(!context) {
    throw Error("useHouseContext providerio viduje")
  }
  return context
}