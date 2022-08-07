import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { install } from '@layer0/prefetch/window'
import installDevtools from '@layer0/devtools/install'

export const PageComponent = ({ children }) => {
  useEffect(() => {
    install()
    installDevtools()
  }, [])
  return (
    <>
      <Navbar />
      {children}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" />
    </>
  )
}
