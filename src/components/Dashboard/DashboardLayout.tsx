import { FC, ReactNode } from 'react'
import Link from 'next/link'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

type Props = {
  children: ReactNode
}

export const DashBoardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-between items-start relative gap-12">
      <aside className="sticky top-3 left-0 w-[200px]">
        <ul>
          <li>
            <Link
              href="/dashboard"
              className="py-2.5 px-4 w-full flex gap-2 items-center border border-[#d0d7de] rounded-md bg-white hover:bg-[#fafafa]"
            >
              <DocumentTextIcon className="w-6" />
              <span className=" inline-block text-sm pb-[1px]">ノート</span>
            </Link>
          </li>
        </ul>
      </aside>
      <main className="w-[calc(100%_-_200px_-_48px)]">{children}</main>
    </div>
  )
}
