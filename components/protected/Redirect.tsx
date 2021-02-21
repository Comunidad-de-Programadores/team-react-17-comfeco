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

  return null
}

export default Redirect
