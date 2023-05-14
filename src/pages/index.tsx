import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@supabase/auth-helpers-react'
import { Layout } from '@/components/Layout'

const Home = () => {
  const user = useUser()
  return (
    <>
      <Layout classes="flex items-center">
        <div>
          <div className="text-center">
            <Image
              src="/logo.svg"
              alt="Prompt Note"
              width={300}
              height={70}
              className="inline-block"
            />
          </div>
          <p className="mt-6 text-center font-medium text-lg leading-6 ">
            <span className="inline-block">Next.js</span>&nbsp;/&nbsp;
            <span className="inline-block">Typescript</span>&nbsp; /&nbsp;
            <span className="inline-block">supabase</span>&nbsp; /&nbsp;
            <span className="inline-block">Editor.js</span>
          </p>
          <div className="flex mt-12 justify-center gap-5">
            {user ? (
              <Link
                className="w-40 inline-block text-center p-3 text-sm bg-[#222] text-white rounded hover:bg-[#555]"
                href="/dashboard"
              >
                ダッシュボード
              </Link>
            ) : (
              <Link
                className="w-40 inline-block text-center p-3 text-sm bg-[#222] text-white rounded hover:bg-[#555]"
                href="/auth/signup"
              >
                サインアップ
              </Link>
            )}
            <Link
              className="w-40 inline-block text-center p-3 text-sm rounded border border-[#222] bg-white hover:bg-[#eee]"
              href="https://github.com/anji0114/supabase-editorjs-note"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
