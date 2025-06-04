'use client'

import { useState } from 'react'

export const PostForm = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    if (!message.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      })
      if (!res.ok) throw new Error('Failed to post')
      setSuccess('Posted!')
      setMessage('')
    } catch {
      setError('Failed to publish')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-2'>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        className='w-full border rounded p-2'
        placeholder='Write a post...'
      />
      <button
        type='submit'
        disabled={loading}
        className='bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50'
      >
        {loading ? 'Posting...' : 'Post'}
      </button>
      {error && <p className='text-red-600 text-sm'>{error}</p>}
      {success && <p className='text-green-600 text-sm'>{success}</p>}
    </form>
  )
}

