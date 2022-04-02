import { GetStaticPropsContext } from 'next';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { TextXL } from '../components/Typography';
import { Page as PageProps } from '../utils/cms/interface';
import { currentPageState } from '../utils/recoil';

function Page({ page }: { page: PageProps }) {
  const [, setCurrentPage] = useRecoilState(currentPageState)

  useEffect(() => {
    setCurrentPage(page)
  })

  return <TextXL>{page.content}</TextXL>
}

export async function getStaticPaths() {
  const { default: pages } = await import('../utils/cms/pages.json')
  const paths = pages.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { default: pages } = await import('../utils/cms/pages.json')
  const page = pages.find(({ slug }) => slug === params!.slug)

  return {
    props: {
      page,
    },
  }
}

export default Page
