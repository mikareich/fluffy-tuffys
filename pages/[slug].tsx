import { GetStaticPropsContext } from 'next';
import React from 'react';

import Layout from '../components/Layout';
import { IPage } from '../utils/cms/interface';

function Page({ title, metaDescription, content }: IPage) {
  return (
    <Layout title={title} metaDescription={metaDescription}>
      {content}
    </Layout>
  )
}

export async function getStaticPaths() {
  const { default: pages } = await import('../utils/cms/pages')
  const paths = pages.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { default: pages } = await import('../utils/cms/pages')
  const page = pages.find(({ slug }) => slug === params!.slug) as IPage

  return {
    props: page,
  }
}

export default Page
