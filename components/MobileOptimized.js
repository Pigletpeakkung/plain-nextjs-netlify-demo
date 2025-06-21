// components/MobileOptimized.js
import { useState, useEffect } from 'react'

const MobileOptimized = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return (
    <div className={`
      ${isMobile ? 'mobile-optimized' : ''}
      ${isTablet ? 'tablet-optimized' : ''}
    `}>
      {children}
    </div>
  )
}

export default MobileOptimized