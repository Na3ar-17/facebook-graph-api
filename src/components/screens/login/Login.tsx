'use client'

import { useState } from 'react'

export const Login = () => {
	const [isLoading, setIsLoading] = useState(false)

	const handleFacebookLogin = () => {
		setIsLoading(true)
		window.location.href = '/api/auth/facebook'
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4'>
			<div className='max-w-md w-full space-y-8'>
				<div className='text-center'>
					<h2 className='mt-6 text-3xl font-extrabold text-gray-900'>Welcome Back</h2>
					<p className='mt-2 text-sm text-gray-600'>Sign in to your account to continue</p>
				</div>

				<div className='mt-8'>
					<button
						onClick={handleFacebookLogin}
						disabled={isLoading}
						className='w-full flex items-center justify-center gap-3 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-blue-500 focus:outline-none'
					>
						<svg
							className='h-5 w-5 text-blue-100'
							fill='currentColor'
							viewBox='0 0 24 24'
						>
							<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
						</svg>
						{isLoading ? 'Connecting...' : 'Continue with Facebook'}
					</button>
				</div>
			</div>
		</div>
	)
}
