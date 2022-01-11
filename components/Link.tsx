import React from 'react'
import NextLink from 'next/link'

const Link = ({
  children,
  href,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) => (
  <NextLink href={href || '#'} passHref>
    <a href="dummy" {...props}>
      {children}
    </a>
  </NextLink>
)

export default Link
