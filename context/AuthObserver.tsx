import firebase from "firebaseConfig"
import { FC, useContext, useEffect } from "react"
import { useRouter } from "next/router"
import authContext from "../context/authContext"

const AuthObserver: FC = ({ children }) => {
  const [user, setUser] = useContext(authContext)
  const router = useRouter()

  useEffect(() => {
    const unsuscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        router.push("/")
      }

      if (!user) {
        router.push("login")
      }

      setUser(user)
    })

    return () => unsuscribe()
  }, [])

  return <>{children}</>
}

export default AuthObserver
