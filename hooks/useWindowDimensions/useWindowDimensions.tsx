import { useEffect, useState } from "react"

function getWindowDimensions() {
  if (typeof window != "undefined") {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  } else {
    return {
      width: 0,
      height: 0,
    }
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
