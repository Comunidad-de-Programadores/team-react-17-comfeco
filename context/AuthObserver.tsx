import firebase from "lib/firebaseConfig"
import { FC, useContext, useEffect } from "react"
import authContext from "./authContext"

const AuthObserver: FC = ({ children }) => {
  const setUser = useContext(authContext)[1]

  useEffect(() => {
    const unsuscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })

    return () => unsuscribe()
  }, [])

  return <>{children}</>
}

export default AuthObserver
