import { PostList } from '@/components/posts/PostList'

export const Dashboard = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-14 pb-12 px-4'>
      <div className='text-center'>
        <div className='mb-4 animate-fade-in'>
          <h1 className='text-4xl font-bold gradient-text mb-2'>Dashboard</h1>
          <p className='text-gray-600 text-lg'>
            Welcome back! Here are your latest social media insights.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='glass-morphism rounded-3xl p-8 shadow-xl card-hover animate-slide-up'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-2xl font-bold text-gray-800'>Recent Posts</h2>
              <div className='flex items-center space-x-2'>
                <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                <span className='text-sm text-gray-600 font-medium'>Live</span>
              </div>
            </div>
            <PostList />
          </div>
        </div>
      </div>
    </div>
  )
}
