import { createContext, useState, Dispatch, SetStateAction, FC } from "react"

import AuthObserver from "./AuthObserver"

const AuthContext = createContext<[Record<string, unknown>, Dispatch<SetStateAction<Record<string, unknown>>>]>([
  {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
])

export const AuthContextProvider: FC = props => {
  const [user, setUser] = useState({})

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <AuthObserver>{props.children}</AuthObserver>
    </AuthContext.Provider>
  )
}

export default AuthContext
