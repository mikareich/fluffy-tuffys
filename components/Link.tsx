import React, { PropsWithChildren } from 'react'
import NextLink from 'next/link'

interface LinkProps {
  href: string
}

function Link({ href, children }: PropsWithChildren<LinkProps>) {
  return (
    <NextLink href={href} passHref>
      <a href="dummy">{children}</a>
    </NextLink>
  )
}

export default Link
