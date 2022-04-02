import Head from 'next/head';
import React from 'react';

import { IMetadata } from '../../utils/cms/interface';

function MetaLayout({
  title,
  metaDescription,
  children,
}: React.PropsWithChildren<IMetadata>) {
  return (
    <>
      <Head>
        <title>Fluffy Tuffys {title && `| ${title}`}</title>
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
      </Head>
      {children}
    </>
  )
}

export default MetaLayout
