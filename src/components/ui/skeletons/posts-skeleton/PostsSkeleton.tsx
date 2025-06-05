export const PostsSkeleton = () => {
  return (
    <div className='space-y-4'>
      {[...Array(3)].map((_, i) => (
        <div key={i} className='animate-pulse'>
          <div className='glass-morphism rounded-2xl p-6'>
            <div className='flex items-center space-x-3 mb-4'>
              <div className='w-10 h-10 bg-gray-300 rounded-full loading-shimmer'></div>
              <div className='flex-1'>
                <div className='h-4 bg-gray-300 rounded loading-shimmer mb-2'></div>
                <div className='h-3 bg-gray-300 rounded loading-shimmer w-1/2'></div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='h-4 bg-gray-300 rounded loading-shimmer'></div>
              <div className='h-4 bg-gray-300 rounded loading-shimmer w-3/4'></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
