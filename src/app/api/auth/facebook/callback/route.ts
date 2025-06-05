import { NextRequest, NextResponse } from 'next/server'

import { BASE_URL, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } from '@/constants/env.constant'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error || !code) {
    return NextResponse.redirect(
      new URL(`/login?error=${encodeURIComponent(error || '')}`, request.url)
    )
  }

  try {
    const tokenResponse = await fetch('https://graph.facebook.com/v18.0/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        client_id: FACEBOOK_APP_ID,
        client_secret: FACEBOOK_APP_SECRET,
        redirect_uri: `${BASE_URL}/api/auth/facebook/callback`,
        code
      })
    })

    const tokenData = await tokenResponse.json()

    if (tokenData.error) {
      return NextResponse.redirect(
        new URL(`/login?error=${encodeURIComponent(tokenData.error.message)}`, request.url)
      )
    }

    const userResponse = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${tokenData.access_token}`
    )

    const userData = await userResponse.json()

    if (userData.error) {
      return NextResponse.redirect(
        new URL(`/login?error=${encodeURIComponent(userData.error)}`, request.url)
      )
    }

    const response = NextResponse.redirect(new URL('/dashboard', request.url))
    response.cookies.set(
      'user',
      JSON.stringify({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        picture: userData.picture?.data?.url,
        accessToken: tokenData.access_token
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'lax'
      }
    )

    return response
  } catch (error) {
    console.error('Facebook auth error:', error)
    return NextResponse.redirect(new URL(`/login`, request.url))
  }
}
