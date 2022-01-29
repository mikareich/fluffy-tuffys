import Head from 'next/head'
import React from 'react'

interface LayoutProps {
  title: string
  metaDescription?: string
}

function Layout({
  title,
  metaDescription,
  children,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Head>
      {children}
    </>
  )
}

export default Layout
