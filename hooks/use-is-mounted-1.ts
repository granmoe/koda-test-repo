import { useCallback, useEffect, useRef } from 'react'

export function useIsMounted(): () => boolean {
  const isMounted = useRef(false)
  const get = useCallback(() => isMounted.current, [])

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return get
}
