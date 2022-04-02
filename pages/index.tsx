import React from 'react';

import Layout from '../components/Layout';
import { Heading1 } from '../components/Typography';
import { ILandingPage } from '../utils/cms/interface';

function Index({ title, metaDescription }: ILandingPage) {
  return (
    <Layout title={title} metaDescription={metaDescription}>
      <Heading1>{title}</Heading1>
    </Layout>
  )
}

export async function getStaticProps() {
  const { default: pages } = await import('../utils/cms/pages')
  const page = pages.find(({ slug }) => slug === 'index') as ILandingPage

  return {
    props: page,
  }
}

export default Index
