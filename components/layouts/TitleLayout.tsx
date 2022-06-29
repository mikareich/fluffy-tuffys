import React from 'react'

interface TitleLayoutProps {
  title: string
  subtitle?: string
  footer?: React.ReactNode
}

function TitleLayout({ title, subtitle, footer }: TitleLayoutProps) {
  const x = 12
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

export default TitleLayout
