import { FC } from 'react'
import { LoadingCircle } from '@/components/Loading/LoadingCircle'

export const Loading: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#fdfeff]">
      <div className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <LoadingCircle />
      </div>
    </div>
  )
}
