import { useEffect, useRef } from 'react'

const useIsMounted = () => {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return function () {
      isMounted.current = false
    }
  }, [])

  return isMounted.current
}

export default useIsMounted
