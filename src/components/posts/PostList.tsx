'use client'

import { useEffect, useState } from 'react'

interface Post {
  id: string
  message?: string
  created_time: string
}

export const PostList = () => {
  const [posts, setPosts] = useState<Post[] | null>(null)
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

  if (loading) return <p className='text-center'>Loading posts...</p>
  if (error) return <p className='text-center text-red-600'>{error}</p>
  if (!posts || posts.length === 0) return <p className='text-center'>No posts found.</p>

  return (
    <ul className='space-y-4'>
      {posts.map(post => (
        <li
          key={post.id}
          className='border rounded p-4'
        >
          <p className='mb-2'>{post.message || 'No message'}</p>
          <p className='text-sm text-gray-500'>{new Date(post.created_time).toLocaleString()}</p>
        </li>
      ))}
    </ul>
  )
}
