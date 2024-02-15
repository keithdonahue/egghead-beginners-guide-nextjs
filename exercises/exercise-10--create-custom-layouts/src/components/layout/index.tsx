import type { ReactNode } from 'react'

import Navbar from './navbar'
import Footer from './footer'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  // ✍️ create the custom layout
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
