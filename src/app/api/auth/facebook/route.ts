import { NextResponse } from 'next/server'

import { BASE_URL } from '@/constants/api.constant'

export async function GET() {
  const facebookAuthUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${encodeURIComponent(
    `${BASE_URL}/api/auth/facebook/callback`
  )}&scope=public_profile,email,user_posts&response_type=code&state=random_state`

  return NextResponse.redirect(facebookAuthUrl)
}
