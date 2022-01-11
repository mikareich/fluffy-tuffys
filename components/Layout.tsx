import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

interface LayoutProps {
  title: string
  metaDescription?: string
}

const Layout: React.FC<LayoutProps> = ({
  title,
  metaDescription,
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
    </Head>
    {children}
  </>
)

export default Layout
