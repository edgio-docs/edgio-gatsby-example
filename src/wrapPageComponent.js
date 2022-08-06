import Navbar from './components/Navbar'
import { install } from '@layer0/prefetch/window'
import React, { useEffect, useState } from 'react'
import installDevtools from '@layer0/devtools/install'

export const PageComponent = ({ children }) => {
  const [mounted, setMounted] = useState('print')
  useEffect(() => {
    setMounted('all')
    install()
    installDevtools()
  }, [])
  return (
    <>
      <Navbar />
      {children}
      <link media={mounted} rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" />
      <noscript>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" />
      </noscript>
    </>
  )
}
