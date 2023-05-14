import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWR from 'swr'
import { DocumentTextIcon, PlusIcon } from '@heroicons/react/24/outline'
import { NoteItem } from '@/components/Dashboard/DashboardNoteItem'

type Note = {
  id: string
  title: string
  content: string
  user_id: string
  created_at: string
}

export const DashboardNote: FC = () => {
  const supabase = useSupabaseClient()
  const user = useUser()
  const router = useRouter()
  const { data, error, isLoading } = useSWR('/api/notes')

  // ノートの作成
  const handleCreateNote = async () => {
    const { data, error } = await supabase
      .from('notes')
      .insert({
        title: '新規ノート',
        content: { blocks: [] },
        user_id: user!.id,
      })
      .select()
      .single()

    if (error) {
      alert(error.message)
      return
    }

    router.push(`/note/${data.id}`)
  }

  return (
    <>
      <div className="flex items-center justify-between py-[14px] px-5 border border-[#d0d7de] rounded-md bg-white min-h-[72px]">
        <h1 className="flex items-center gap-2.5">
          <DocumentTextIcon className="w-7" />
          <span className="inline-block whitespace-nowrap font-medium">
            ノート管理
          </span>
        </h1>
        <div className="flex items-center gap-3">
          <button
            className="flex items-center py-2.5 px-5 gap-2 rounded bg-[#222] text-white hover:bg-[#555]"
            onClick={handleCreateNote}
          >
            <PlusIcon className="w-[18px] translate-y-[1px] " />
            <span className="text-sm inline-block">新規作成</span>
          </button>
        </div>
      </div>

      <div className="mt-8">
        {isLoading ? (
          <p className="text-center text-sm">ローディング</p>
        ) : error ? (
          <p className="text-center text-sm">
            エラーが発生しデータの取得に失敗しました。
          </p>
        ) : (
          <ul className="space-y-4">
            {data?.map((note: Note) => (
              <NoteItem
                key={note.id}
                id={note.id}
                title={note.title}
                created_at={note.created_at}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}
