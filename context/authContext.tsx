import firebase from "../firebaseConfig"
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react"

import AuthObserver from "./AuthObserver"

const AuthContext = createContext<[object, Dispatch<SetStateAction<object>>]>([{}, () => {}])

export const AuthContextProvider = props => {
  const [user, setUser] = useState({})

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <AuthObserver>{props.children}</AuthObserver>
    </AuthContext.Provider>
  )
}

export default AuthContext
