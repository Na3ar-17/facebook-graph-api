import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { Navbar } from '@/components/layout/navbar/Navbar'

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

  let user
  try {
    user = JSON.parse(userCookie.value)
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
