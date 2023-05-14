import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { SWRConfig } from 'swr/_internal'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('エラーが発生したため、データ取得失敗')
    }

    const json = await response.json()
    return json
  }

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Head>
        <title>Note App</title>
        <meta
          name="description"
          content="Next.js / Typescript / supabase / Editor.js を使用したノートアプリです"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </SessionContextProvider>
  )
}
