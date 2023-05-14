import { NextPage } from 'next'
import { AuthLayout } from '@/components/Auth/AuthLayout'
import { AuthContent } from '@/components/Auth/AuthContent'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  return (
    <AuthLayout title="ログイン">
      <AuthContent isLogin={true} />
    </AuthLayout>
  )
}

export default Login
