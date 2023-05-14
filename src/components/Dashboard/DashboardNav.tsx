import Link from 'next/link'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

export const DashboardNav = () => {
  return (
    <nav>
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
    </nav>
  )
}
