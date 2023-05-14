import { FC, ReactNode } from 'react'
import { LayoutHeader } from '@/components/Layout/LayoutHeader'
import { LayoutFooter } from '@/components/Layout/LayoutFooter'
import { Layout } from '../Layout'

type Props = {
  children: ReactNode
  title: 'ログイン' | 'サインアップ'
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <Layout classes="flex items-center ">
      <div className="max-w-[350px] w-full mx-auto ">
        <h2 className="text-center text-xl font-medium">{title}</h2>
        {children}
      </div>
    </Layout>
  )
}
