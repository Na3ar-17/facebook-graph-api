import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='glass-morphism rounded-3xl p-8 shadow-xl animate-fade-in'>
          <div className='mb-8'>
            <Link
              href='/login'
              className='inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors'>
              <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                  clipRule='evenodd'></path>
              </svg>
              Back to Login
            </Link>
            <h1 className='text-4xl font-bold gradient-text mb-4'>Terms of Service</h1>
            <p className='text-gray-600'>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className='prose prose-lg max-w-none text-gray-700 space-y-6'>
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>1. Agreement to Terms</h2>
              <p>
                By accessing and using IGentity, you accept and agree to be bound by the terms and
                provision of this agreement. These Terms of Service govern your use of our social
                media management platform.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>2. Use License</h2>
              <p>
                Permission is granted to temporarily use IGentity for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a transfer of title,
                and under this license you may not:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-1'>
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>3. Privacy and Data</h2>
              <p>
                Your privacy is important to us. We collect and process your data in accordance with
                our Privacy Policy. By using our service, you consent to such processing and you
                warrant that all data provided by you is accurate.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>4. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and
                password. You agree to accept responsibility for all activities that occur under
                your account or password.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>5. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a
                  href='mailto:support@igentity.com'
                  className='text-blue-600 hover:text-blue-700 underline'>
                  support@igentity.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
