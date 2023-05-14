import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import EditorJS, { OutputData } from '@editorjs/editorjs'
import { EDITOR_TOOLS, I18N } from '@/components/Editor/EditorTools'
import { useStore } from '@/store'

const EditorBlock: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const ref = useRef<EditorJS>()
  const noteContent = useStore((state) => state.noteContent)
  const setNoteContent = useStore((state) => state.setNoteContent)

  const initializeEditor = useCallback(
    (noteContent: { content: OutputData }) => {
      if (!ref.current) {
        const editor = new EditorJS({
          holder: 'editor',
          tools: EDITOR_TOOLS,
          placeholder: '入力する',
          data: noteContent.content,
          i18n: I18N,

          async onChange(api) {
            const editorData = await api.saver.save()

            setNoteContent({ content: editorData })
          },
        })

        ref.current = editor
      }
    },
    [setNoteContent]
  )

  useEffect(() => {
    if (noteContent.content.time) {
      setIsMounted(true)
    }
  }, [noteContent])

  // ノートのデータがある時
  useEffect(() => {
    if (isMounted) {
      initializeEditor(noteContent)

      return () => {
        ref.current?.destroy()
        ref.current = undefined
      }
    }
  }, [isMounted, initializeEditor])

  return <div id="editor" className="prose"></div>
}

export default memo(EditorBlock)
