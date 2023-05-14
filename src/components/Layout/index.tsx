import React, { FC, ReactNode } from 'react'
import { LayoutFooter } from '@/components/Layout/LayoutFooter'
import { LayoutHeader } from '@/components/Layout/LayoutHeader'

type Props = {
  children: ReactNode
  classes?: string
}

export const Layout: FC<Props> = ({ children, classes }) => {
  return (
    <>
      <LayoutHeader />
      <div
        className={`min-h-[calc(100vh_-_150px)] py-20 ${
          classes ? classes : ''
        }`}
      >
        <div className="max-w-[1140px] w-full mx-auto px-5 sm:px-7">
          {children}
        </div>
      </div>
      <LayoutFooter />
    </>
  )
}
