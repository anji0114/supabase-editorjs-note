import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useStore } from '@/store'
import { NoteDetail } from '@/components/Note/NoteDetail'
import { Loading } from '@/components/Loading'
import { Note } from '@/types'
import Link from 'next/link'

const NoteId: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  const supabase = useSupabaseClient()
  const setNote = useStore((state) => state.setNote)
  const setNoteContent = useStore((state) => state.setNoteContent)
  const resetNote = useStore((state) => state.resetNote)
  const resetNoteContent = useStore((state) => state.resetNoteContent)
  const { data, error, isLoading } = useSWR<Note>(
    id ? `/api/notes/${id}` : null
  )

  const handleDeleteNote = async (id: string) => {
    const { error } = await supabase.from('notes').delete().eq('id', id)
    if (error) {
      alert(error.message)
      return
    }

    router.reload()
  }

  useEffect(() => {
    if (data?.id && data?.content?.time) {
      setNote(data)
      setNoteContent({ content: data.content })
    }

    return () => {
      resetNote()
      resetNoteContent()
    }
  }, [data])

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center flex-col gap-5 items-center">
        <p>{error.message}</p>
        <Link href={'/dashboard'} className="underline font-medium">
          ホームに戻る
        </Link>
      </div>
    )
  }

  return <NoteDetail />
}

export default NoteId
