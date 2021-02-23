import { useRouter } from "next/router"
import { FC, useEffect } from "react"

type props = {
  to: string
}

const Redirect: FC<props> = ({ to }) => {
  const router = useRouter()

  useEffect(() => {
    router.push(to)
  }, [])

  return <h1 style={{ fontSize: "50px" }}>Loading...</h1>
}

export default Redirect
