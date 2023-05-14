import { GetServerSideProps, NextPage } from 'next'
import { NoteDetail } from '@/components/Note/NoteDetail'
import { useStore } from '@/store'
import { useEffect } from 'react'
import useSWR from 'swr'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const NoteId: NextPage<{ params: string }> = ({ params }) => {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const setNote = useStore((state) => state.setNote)
  const { data, error, isLoading } = useSWR(`/api/notes/${params}`)

  const handleDeleteNote = async (id: string) => {
    const { error } = await supabase.from('notes').delete().eq('id', id)
    if (error) {
      alert(error.message)
      return
    }

    router.reload()
  }

  useEffect(() => {
    if (data !== undefined) {
      setNote(data)
    }
  }, [data])

  if (isLoading) {
    return (
      <div className=" h-screen flex justify-center items-center">
        ローディング中
      </div>
    )
  }

  if (error) {
    return (
      <div className=" h-screen flex justify-center items-center">
        エラーが発生しました
      </div>
    )
  }

  return <NoteDetail />
}

export default NoteId

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      params: context.query.id,
    },
  }
}
