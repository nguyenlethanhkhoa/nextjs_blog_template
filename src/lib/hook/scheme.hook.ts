import { getCookie, setCookie } from "cookies-next"
import { useEffect } from "react"

type Scheme = "light" | "dark"
type SetScheme = (scheme: Scheme) => void

const useScheme = (): [Scheme, SetScheme] => {
    
  const scheme = 'light'

  const setScheme = (scheme: "light" | "dark") => {
    setCookie("scheme", scheme)
  }

  useEffect(() => {
    if (!window) return

    const scheme = getCookie("scheme")
    setScheme(scheme === "light" ? "light" : "dark")
  }, [])

  return [scheme, setScheme]
}

export default useScheme
