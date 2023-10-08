import { SkeletonBase } from './ui/skeleton-base'

export function HolidaySkeleton() {
  return (
    <>
      <div className='pointer-events-none'>
        <SkeletonBase classes='flex mx-auto w-1/2 h-6 mb-4' />
        <div className='flex flex-col gap-2 border border-soft_gray animate-pulse min-w-[30rem] p-4 rounded justify-center'>
          <div className='flex items-center gap-2 justify-center'>
            <p className='flex items-center gap-2'>
              <SkeletonBase classes='block w-4 h-3' /> /
              <SkeletonBase classes='block w-4 h-3' />
            </p>
            - <SkeletonBase classes='block w-20 h-3' />
          </div>
          <SkeletonBase classes='block w-1/2 mx-auto h-3 mb-4' />
          <SkeletonBase classes='block w-1/4 mx-auto h-3 mb-4' />
        </div>

        <details className='block mt-6 border border-soft_gray p-2 text-left rounded animate-pulse'>
          <summary className='block h-4 w-32 bg-soft_gray rounded'></summary>
        </details>
      </div>
    </>
  )
}
