import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url)
	const code = searchParams.get('code')
	const error = searchParams.get('error')

	if (error || !code) {
		return NextResponse.redirect(new URL('/login?error=auth_failed', request.url))
	}

	try {
		const tokenResponse = await fetch('https://graph.facebook.com/v18.0/oauth/access_token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				client_id: process.env.FACEBOOK_APP_ID!,
				client_secret: process.env.FACEBOOK_APP_SECRET!,
				redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/auth/facebook/callback`,
				code
			})
		})

		const tokenData = await tokenResponse.json()

		if (tokenData.error) {
			return NextResponse.redirect(new URL('/login?error=token_failed', request.url))
		}

		const userResponse = await fetch(
			`https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${tokenData.access_token}`
		)
		const userData = await userResponse.json()

		if (userData.error) {
			return NextResponse.redirect(new URL('/login?error=user_failed', request.url))
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
		return NextResponse.redirect(new URL('/login?error=server_error', request.url))
	}
}
