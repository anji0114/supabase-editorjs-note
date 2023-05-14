import { FC, useState } from 'react'
import Link from 'next/link'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

type Props = {
  id: string
  title: string
  created_at: string
}

export const NoteItem: FC<Props> = ({ id, title, created_at }) => {
  const supabase = useSupabaseClient()
  const router = useRouter()

  const handleDeleteNote = async (id: string) => {
    const { error } = await supabase.from('notes').delete().eq('id', id)
    if (error) {
      alert(error.message)
      return
    }

    router.reload()
  }

  return (
    <li className="flex justify-between w-full pb-4 pl-1 pr-3 border-b border-[#d0d7de]">
      <Link
        href={`/note/${id}`}
        className="relative inline-block pl-7 text-[#4e6bb4] text-sm font-medium underline-offset-3 hover:underline"
      >
        <DocumentTextIcon className="absolute left-0 top-1/2 translate-y-[-50%] w-6" />
        <span>{title}</span>
      </Link>
      <p className="text-sm">{format(new Date(created_at), 'yyyy/MM/dd')}</p>
    </li>
  )
}
