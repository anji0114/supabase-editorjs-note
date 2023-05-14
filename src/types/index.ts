import { OutputData } from '@editorjs/editorjs'

export type Note = {
  id: string
  user_id: string
  title: string
  content?: OutputData
  created_at?: string
}
