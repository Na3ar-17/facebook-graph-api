import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

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

	const res = await fetch(
		`https://graph.facebook.com/v23.0/me/posts?fields=message,created_time,id,story,type&limit=10&access_token=${token}`
	)

	const data = await res.json()
	console.log('API Response Data:', JSON.stringify(data, null, 2))
	return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
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
	const { message } = await request.json()
	const res = await fetch(`https://graph.facebook.com/v23.0/me/feed?access_token=${token}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ message })
	})
	const data = await res.json()
	if (!res.ok) {
		return NextResponse.json(data, { status: res.status })
	}
	return NextResponse.json(data)
}
