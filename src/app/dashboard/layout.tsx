import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { Navbar } from '@/components/layout/navbar/Navbar'
import { FacebookService } from '@/services/facebook.service'

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('user')

  if (!userCookie) {
    redirect('/login')
  }

  let accessToken = ''
  try {
    accessToken = JSON.parse(userCookie.value).accessToken
  } catch {
    redirect('/login')
  }

  const facebookService = new FacebookService()
  const validation = await facebookService.validateAccessToken(accessToken)

  if (!validation.isValid) {
    redirect('/login')
  }

  let user
  try {
    user = await facebookService.getUserProfile(accessToken)
  } catch {
    redirect('/login')
  }

  return (
    <div className='min-h-screen'>
      <Navbar user={user} />
      <main className='pt-20'>{children}</main>
    </div>
  )
}
