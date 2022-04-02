import React from 'react';

import { ILandingPage } from '../../utils/cms/interface';
import MetaLayout from './MetaLayout';

function LandingPageLayout({
  title,
  metaDescription,
  children,
}: React.PropsWithChildren<ILandingPage>) {
  return (
    <MetaLayout title={title} metaDescription={metaDescription}>
      {children}
    </MetaLayout>
  )
}

export default LandingPageLayout
