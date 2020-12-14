import {useMediaQuery} from "./use-media-query"

export const useBreakpoint = () => {
  const s = useMediaQuery(`(max-width: 669px)`)
  const m = useMediaQuery(`(min-width: 670px) and (max-width: 1023px)`)
  const l = useMediaQuery(`(min-width: 1024px) and (max-width: 1359px)`)

  if (s) return "s"
  if (m) return "m"
  if (l) return "l"

  return "xl"
}
