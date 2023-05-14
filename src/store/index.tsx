import { Note } from '@/types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  note: Note
  setNote: (payload: Note) => void
  resetNote: () => void
}

export const useStore = create<State>()(
  devtools((set) => ({
    // note, note template
    note: { id: '', user_id: '', title: '', content: { blocks: [] } },
    setNote: (payload) => {
      set({
        note: {
          id: payload.id,
          user_id: payload.user_id,
          title: payload.title,
          content: payload.content,
        },
      })
    },
    resetNote: () => {
      set({
        note: {
          id: '',
          user_id: '',
          title: '',
          content: { blocks: [] },
        },
      })
    },
  }))
)
