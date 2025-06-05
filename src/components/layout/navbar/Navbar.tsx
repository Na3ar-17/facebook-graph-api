'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'

import { Button } from '@/ui/Button'

import type { IProfile } from '@/entities/profile.entity'

interface IProps {
  user: IProfile
}

export const Navbar: FC<IProps> = ({ user }) => {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  return (
    <nav className='glass-morphism border-b border-white/20 shadow-lg px-6 py-4 flex items-center justify-between fixed top-0 left-0 right-0 w-full z-50'>
      <div className='flex items-center space-x-4'>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-3'>
            {user.photo ? (
              <div className='relative group'>
                <Image
                  src={user.photo}
                  alt='Profile'
                  className='w-12 h-12 rounded-2xl object-cover ring-2 ring-white/30 shadow-md group-hover:ring-blue-300 transition-all duration-300'
                  width={48}
                  height={48}
                />
                <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm'></div>
              </div>
            ) : (
              <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md'>
                <span className='text-white text-lg font-bold'>
                  {user.email?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
            )}
            <div className='flex flex-col'>
              {user.email && (
                <p className='text-gray-800 font-semibold text-sm leading-tight'>
                  {user.email.split('@')[0]}
                </p>
              )}
              <div className='flex items-center space-x-1'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                <p className='text-gray-600 text-xs'>Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center space-x-4'>
        <div className='hidden sm:flex items-center space-x-3'>
          <div className='glass-morphism px-3 py-1.5 rounded-full'>
            <div className='flex items-center space-x-2 text-sm text-gray-700'>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
              <span className='font-medium'>Connected</span>
            </div>
          </div>
        </div>
        <Button
          onClick={handleLogout}
          variant='destructive'
          className='text-sm px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
          Logout
        </Button>
      </div>
    </nav>
  )
}
