import { Note } from '@/types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type State = {
  note: Note
  setNote: (payload: Note) => void
  resetNote: () => void

  noteContent: any
  setNoteContent: (payload: any) => void
  resetNoteContent: () => void
}

export const useStore = create<State>()(
  devtools((set) => ({
    // note, note template
    note: { id: '', user_id: '', title: '' },
    setNote: (payload) => {
      set({
        note: {
          id: payload.id,
          user_id: payload.user_id,
          title: payload.title,
        },
      })
    },
    resetNote: () => {
      set({
        note: {
          id: '',
          user_id: '',
          title: '',
        },
      })
    },

    noteContent: { content: { blocks: [] } },
    setNoteContent: (payload) => {
      set({
        noteContent: {
          content: payload.content,
        },
      })
    },
    resetNoteContent: () => {
      set({
        noteContent: {
          content: { blocks: [] },
        },
      })
    },
  }))
)
