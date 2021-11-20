import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  if ( width > height ) {
    return false
  } else {
    return true
  }
}

export default function useWindowDimensions() {
  // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [isPortrait, setIsPortrait] = useState(getWindowDimensions())
  
  useEffect(() => {
    function handleResize() {
      setIsPortrait(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isPortrait
}
