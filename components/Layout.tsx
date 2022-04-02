import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  title?: string
  description?: string
}

function Layout({
  title,
  description,
  children,
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head>
        <title>Fluffy Tuffys {title && `| ${title}`}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      {children}
    </>
  )
}

export default Layout
