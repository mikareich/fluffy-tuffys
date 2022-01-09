import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

interface LayoutProps {
  title: string
  metaDescription?: string
}

function Layout({
  title,
  metaDescription,
  children,
}: PropsWithChildren<LayoutProps>) {
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
