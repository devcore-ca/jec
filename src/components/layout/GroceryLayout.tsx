import GroceryHeader from 'components/header/GroceryHeader'
import MobileNavigationBar from 'components/mobile-navigation/MobileNavigationBar'
import Navbar from 'components/navbar/Navbar'
import Sticky from 'components/sticky/Sticky'
import Topbar from 'components/topbar/Topbar'
import { Box } from '@mui/material'
import Head from 'next/head'
import React, { Fragment, useCallback, useState } from 'react'

type Props = {
  title?: string
  navbar?: React.ReactChild
}

const GroceryLayout: React.FC<Props> = ({
  children,
  title = 'React Next.js Ecommerce Template',
}) => {
  const [isFixed, setIsFixed] = useState(false)

  const toggleIsFixed = useCallback((fixed) => {
    setIsFixed(fixed)
  }, [])

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Topbar />

      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <GroceryHeader isFixed={isFixed} />
      </Sticky>

      <Box className="section-after-sticky" position="relative" zIndex={1}>
        <Navbar hideCategories />
      </Box>

      {children}

      <MobileNavigationBar />
    </Fragment>
  )
}

export default GroceryLayout
