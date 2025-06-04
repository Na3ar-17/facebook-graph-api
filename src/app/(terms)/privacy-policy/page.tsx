import Link from 'next/link'

export default function PrivacyPolicyPage() {
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
            <h1 className='text-4xl font-bold gradient-text mb-4'>Privacy Policy</h1>
            <p className='text-gray-600'>Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className='prose prose-lg max-w-none text-gray-700 space-y-6'>
            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an
                account, connect your social media profiles, or contact us for support. This may
                include:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-1'>
                <li>Your name and email address</li>
                <li>Profile information from connected social media accounts</li>
                <li>Posts and content from your social media accounts</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services,
                including:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-1'>
                <li>Displaying your social media posts and analytics</li>
                <li>Providing customer support</li>
                <li>Sending you technical notices and security alerts</li>
                <li>Improving our platform and developing new features</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third
                parties except as described in this policy. We may share your information in the
                following circumstances:
              </p>
              <ul className='list-disc pl-6 mt-2 space-y-1'>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. You may
                also disconnect your social media accounts at any time through your account
                settings.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a
                  href='mailto:privacy@igentity.com'
                  className='text-blue-600 hover:text-blue-700 underline'>
                  privacy@igentity.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
