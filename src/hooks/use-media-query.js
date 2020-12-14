import {useEffect, useState} from "react"

export const useMediaQuery = (mediaQueryString) => {
  const [matches, setMatches] = useState(
    typeof window !== "undefined" && window.matchMedia(mediaQueryString).matches
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString)

    setMatches(mediaQueryList.matches)

    const handleChange = (e) => setMatches(e.matches)
    mediaQueryList.addListener(handleChange)
    return () => mediaQueryList.removeListener(handleChange)
  }, [mediaQueryString])

  return matches
}
