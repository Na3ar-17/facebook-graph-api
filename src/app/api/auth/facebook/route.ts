import { NextResponse } from 'next/server'

export async function GET() {
	const facebookAuthUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${encodeURIComponent(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/facebook/callback`
	)}&scope=email,pages_read_engagement,pages_manage_posts,pages_show_list&response_type=code&state=random_state`

	return NextResponse.redirect(facebookAuthUrl)
}
