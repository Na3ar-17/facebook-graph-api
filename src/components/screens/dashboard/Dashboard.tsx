import Image from 'next/image'
import type { FC } from 'react'

import { LogoutButton } from '@/ui/LogoutButton'

import type { IUser } from '@/entities/user.entity'

interface IProps {
	user: IUser
}

export const Dashboard: FC<IProps> = ({ user }) => {
	return (
		<div className='min-h-screen bg-gray-50 py-12 px-4'>
			<div className='max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
				<div className='px-6 py-4'>
					<div className='text-center'>
						{user.photo && (
							<Image
								src={user.photo}
								alt='Profile'
								className='w-20 h-20 rounded-full mx-auto mb-4'
								width={80}
								height={80}
							/>
						)}
						<h1 className='text-2xl font-bold text-gray-900 mb-2'>Welcome, {user.name}!</h1>
						{user.email && <p className='text-gray-600 mb-4'>{user.email}</p>}
						<p className='text-sm text-gray-500 mb-6'>
							You have successfully authenticated with Facebook.
						</p>
						<LogoutButton />
					</div>
				</div>
			</div>
		</div>
	)
}
