'use client'

import { useState } from 'react'

import { Button } from '@/ui/Button'

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleFacebookLogin = () => {
    setIsLoading(true)
    window.location.href = '/api/auth/facebook'
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4'>
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
      <div className='relative max-w-md w-full'>
        <div className='glass-morphism rounded-3xl p-8 shadow-2xl animate-fade-in'>
          <div className='text-center mb-8'>
            <div className='mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg'>
              <svg className='w-10 h-10 text-white' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M13 3L4 14h4v7l9-11h-4V3z' />
              </svg>
            </div>
            <h1 className='text-3xl font-bold gradient-text mb-2'>Welcome to IGentity</h1>
            <p className='text-gray-600 text-lg'>Connect with your social world</p>
          </div>

          <div className='space-y-6'>
            <Button
              onClick={handleFacebookLogin}
              disabled={isLoading}
              loading={isLoading}
              size='lg'
              fullWidth
              className='bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]'
              leftIcon={
                !isLoading && (
                  <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                  </svg>
                )
              }>
              {isLoading ? 'Connecting to Facebook...' : 'Continue with Facebook'}
            </Button>

            <div className='text-center'>
              <p className='text-sm text-gray-500'>Secure authentication powered by Facebook</p>
            </div>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <p className='text-xs text-gray-400'>
            By continuing, you agree to our{' '}
            <a href='/terms' className='text-blue-600 hover:text-blue-700 underline'>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href='/privacy-policy' className='text-blue-600 hover:text-blue-700 underline'>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
