'use client'

import { useEffect, useState } from 'react'

import { PostsSkeleton } from '@/ui/skeletons/posts-skeleton/PostsSkeleton'

import type { IPost } from '@/entities/post.entity'

export const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts')
        if (!res.ok) throw new Error('Failed to load posts')
        const data = await res.json()
        setPosts(data.data)
      } catch {
        setError('Unable to fetch posts')
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) return <PostsSkeleton />

  if (error) {
    return (
      <div className='glass-morphism rounded-2xl p-8 text-center'>
        <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
          <svg className='w-8 h-8 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
              clipRule='evenodd'></path>
          </svg>
        </div>
        <h3 className='text-lg font-semibold text-gray-800 mb-2'>Unable to Load Posts</h3>
        <p className='text-red-600 mb-4'>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
          Try Again
        </button>
      </div>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <div className='glass-morphism rounded-2xl p-12 text-center'>
        <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
          <svg className='w-10 h-10 text-blue-500' fill='currentColor' viewBox='0 0 20 20'>
            <path
              fillRule='evenodd'
              d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
              clipRule='evenodd'></path>
          </svg>
        </div>
        <h3 className='text-xl font-bold text-gray-800 mb-2'>No Posts Yet</h3>
        <p className='text-gray-600 mb-6'>
          Your Facebook posts will appear here once you start sharing content.
        </p>
        <div className='glass-morphism px-4 py-2 rounded-full inline-block'>
          <span className='text-sm text-gray-700'>Connected and ready to sync</span>
        </div>
      </div>
    )
  }

  return (
    <div className='space-y-6'>
      {posts.map((post, index) => (
        <div
          key={post.id}
          className='glass-morphism rounded-2xl p-6 card-hover animate-fade-in shadow-lg'
          style={{ animationDelay: `${index * 0.1}s` }}>
          <div className='flex items-start space-x-4'>
            <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
              <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
              </svg>
            </div>
            <div className='flex-1 min-w-0'>
              <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center space-x-2'>
                  <h3 className='font-semibold text-gray-800'>Facebook Post</h3>
                  <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                </div>
                <time className='text-sm text-gray-500 flex items-center space-x-1'>
                  <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                      clipRule='evenodd'></path>
                  </svg>
                  <span>
                    {new Date(post.created_time).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </time>
              </div>

              <div className='mb-4'>
                {post.message ? (
                  <p className='text-gray-700 leading-relaxed'>{post.message}</p>
                ) : (
                  <p className='text-gray-500 italic'>Media post without text content</p>
                )}
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                  <div className='flex items-center space-x-1 text-gray-500'>
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                        clipRule='evenodd'></path>
                    </svg>
                    <span className='text-sm'>--</span>
                  </div>
                  <div className='flex items-center space-x-1 text-gray-500'>
                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                        clipRule='evenodd'></path>
                    </svg>
                    <span className='text-sm'>--</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
