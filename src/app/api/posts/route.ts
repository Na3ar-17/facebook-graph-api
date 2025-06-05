import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import { FacebookService } from '@/services/facebook.service'

export async function GET() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('user')

  if (!userCookie) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let token = ''
  try {
    token = JSON.parse(userCookie.value).accessToken
  } catch {
    return NextResponse.json({ error: 'Invalid cookie' }, { status: 400 })
  }

  const facebookService = new FacebookService()
  const validation = await facebookService.validateAccessToken(token)

  if (!validation.isValid) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  const res = await fetch(
    `https://graph.facebook.com/v23.0/me/posts?fields=message,created_time,id,story,type&limit=10&access_token=${token}`
  )

  const data = await res.json()

  return NextResponse.json(data)
}
