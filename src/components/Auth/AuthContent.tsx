import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, FormEvent, useRef } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

type Props = {
  isLogin: boolean
}

export const AuthContent: FC<Props> = ({ isLogin }) => {
  const router = useRouter()
  const supabase = useSupabaseClient()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  // login
  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    })
    if (error) {
      alert(error.message)
      return
    }
    router.push('/dashboard')
  }

  // sign up
  const handleSubmitSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    })
    if (error) {
      alert(error.message)
      return
    }
    router.push('/dashboard')
  }

  return (
    <>
      <form
        className="mt-10"
        onSubmit={isLogin ? handleSubmitLogin : handleSubmitSignup}
      >
        <div className="space-y-5">
          <dl>
            <dd className="text-sm">メールアドレス</dd>
            <dd className="mt-2">
              <input
                type="text"
                placeholder="mail@example.com"
                required
                ref={emailRef}
                className="w-full py-2.5 px-3 border border-[#d0d7de] rounded bg-white"
              />
            </dd>
          </dl>
          <dl>
            <dd className="text-sm">パスワード</dd>
            <dd className="mt-2">
              <input
                type="password"
                required
                ref={passwordRef}
                className="w-full py-2.5 px-3 border border-[#d0d7de] rounded bg-white"
              />
            </dd>
          </dl>
        </div>
        <div className="text-center mt-8">
          <button className="w-full inline-block py-3 text-sm rounded text-white bg-[#222] hover:bg-[#555]">
            {isLogin ? 'ログイン' : 'サインアップ'}
          </button>
        </div>
      </form>
      <div className="text-center mt-10">
        {isLogin ? (
          <Link
            href="/auth/signup"
            className="w-full inline-block py-3 text-sm rounded border border-[#222] bg-white hover:bg-[#f5f5f5]"
          >
            ユーザー登録はこちらから
          </Link>
        ) : (
          <Link
            href="/auth/login"
            className="text-sm underline uppercase hover:opacity-75"
          >
            ログインはこちらから
          </Link>
        )}
      </div>
    </>
  )
}
