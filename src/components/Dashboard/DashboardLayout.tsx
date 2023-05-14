import { FC, ReactNode } from 'react'
import { DashboardNav } from './DashboardNav'

type Props = {
  children: ReactNode
}

export const DashBoardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-between items-start relative gap-12">
      <aside className="sticky top-3 left-0 w-[200px]">
        <DashboardNav />
      </aside>
      <main className="w-[calc(100%_-_200px_-_48px)]">{children}</main>
    </div>
  )
}
