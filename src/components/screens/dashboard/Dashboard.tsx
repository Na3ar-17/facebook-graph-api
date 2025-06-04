import Image from 'next/image'
import type { FC } from 'react'

import { PostList } from '@/components/posts/PostList'

import { LogoutButton } from '@/ui/LogoutButton'

import type { IUser } from '@/entities/user.entity'

interface IProps {
  user: IUser
}

export const Dashboard: FC<IProps> = ({ user }) => {
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4'>
      <div className='max-w-md mx-auto space-y-6'>
        <div className='bg-white rounded-lg shadow-md overflow-hidden px-6 py-4 text-center'>
          {user.photo && (
            <Image
              src={user.photo}
              alt='Profile'
              className='w-20 h-20 rounded-full mx-auto mb-4'
              width={80}
              height={80}
            />
          )}
          <h1 className='text-2xl font-bold text-gray-900 mb-2'>Welcome, {user.name}!</h1>
          {user.email && <p className='text-gray-600 mb-4'>{user.email}</p>}
          <LogoutButton />
        </div>

        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-lg font-semibold mb-4'>Recent Posts</h2>
          <PostList />
        </div>
      </div>
    </div>
  )
}
