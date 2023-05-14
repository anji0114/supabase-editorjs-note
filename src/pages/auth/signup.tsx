import { NextPage } from 'next'
import { AuthLayout } from '@/components/Auth/AuthLayout'
import { AuthContent } from '@/components/Auth/AuthContent'

const Signup: NextPage = () => {
  return (
    <AuthLayout title="サインアップ">
      <AuthContent isLogin={false} />
    </AuthLayout>
  )
}

export default Signup
