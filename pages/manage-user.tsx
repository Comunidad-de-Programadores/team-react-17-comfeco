import SubMenu from "@/components/manageUser/SubMenu"
import Protected from "@/components/protected"
import { FC } from "react"

const UserParameters: FC = () => {
  return (
    <Protected to="login" needsAuth>
      <SubMenu />
    </Protected>
  )
}

export default UserParameters
