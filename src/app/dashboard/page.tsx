import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { Dashboard } from '@/components/screens/dashboard/Dashboard'

export default async function DashboardPage() {
	const cookieStore = await cookies()
	const userCookie = cookieStore.get('user')

	if (!userCookie) {
		redirect('/login')
	}

	let user
	try {
		user = JSON.parse(userCookie.value)
	} catch {
		redirect('/login')
	}

	return <Dashboard user={user} />
}
