import { FC, useContext } from "react"
import authContext from "../../context/authContext"
import Redirect from "./Redirect"

type props = {
  to: string
  needsAuth: boolean
}

const Protected: FC<props> = ({ needsAuth, to, children }) => {
  const [user] = useContext(authContext)

  return <>{(needsAuth && user) || (!needsAuth && !user) ? children : <Redirect to={to} />}</>
}

export default Protected
