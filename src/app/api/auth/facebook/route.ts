import { NextResponse } from 'next/server'

export async function GET() {
  const facebookAuthUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${encodeURIComponent(
                `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/auth/facebook/callback`
        )}&scope=email,pages_read_engagement,pages_manage_posts,publish_to_groups&response_type=code&state=random_state`

	return NextResponse.redirect(facebookAuthUrl)
}
