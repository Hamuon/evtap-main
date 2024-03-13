import React from 'react'
import Image from 'next/image'
export default function Home() {
  return (
    <main className='flex justify-center items-center mx-auto sm:pt-10 sm:pb-20 md:mb-44'>
      <div className='flex sm:flex-col lg:flex-row sm:px-10 md:px-0 w-full lg:gap-4 justify-center items-center 2xl:px-56 md:container sm:h-full lg:h-96'>

        <div className='sm:w-full lg:w-80 lg:gap-4 h-full'>
          <div className='bg-slate-200 shadow-lg sm:h-72 lg:h-2/3 w-full rounded-3xl overflow-hidden relative'>
            <div className='absolute bottom-8 w-full flex justify-between px-10 z-10'>
              <span className='text-4xl font-semibold text-white'>آگهی ها</span>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2171 3.3335H27.7671C33.4337 3.3335 36.6671 6.5335 36.6671 12.2168V27.7835C36.6671 33.4335 33.4504 36.6668 27.7837 36.6668H12.2171C6.53374 36.6668 3.33374 33.4335 3.33374 27.7835V12.2168C3.33374 6.5335 6.53374 3.3335 12.2171 3.3335ZM21.3671 21.3835H26.1004C26.8671 21.3668 27.4837 20.7502 27.4837 19.9835C27.4837 19.2168 26.8671 18.6002 26.1004 18.6002H21.3671V13.9002C21.3671 13.1335 20.7504 12.5168 19.9837 12.5168C19.2171 12.5168 18.6004 13.1335 18.6004 13.9002V18.6002H13.8837C13.5171 18.6002 13.1671 18.7502 12.9004 19.0002C12.6504 19.2668 12.5004 19.6152 12.5004 19.9835C12.5004 20.7502 13.1171 21.3668 13.8837 21.3835H18.6004V26.1002C18.6004 26.8668 19.2171 27.4835 19.9837 27.4835C20.7504 27.4835 21.3671 26.8668 21.3671 26.1002V21.3835Z" fill="white" />
              </svg>

            </div>
            <Image className='scale-125' src="/media/building.svg" alt="building" style={{ objectFit: "cover" }} layout='fill' />
          </div>
          <div className='h-28 my-4 w-full flex items-center justify-evenly rounded-3xl border-black border-4'>
            <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L14 14.0519L26 2" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className='text-4xl font-semibold'>استعلام</span>
          </div>
        </div>

        <div className='sm:mb-4 lg:mb-0 shadow-lg bg-slate-200 sm:h-[400px] lg:h-full sm:w-full lg:w-80 relative overflow-hidden rounded-3xl pb-4'>
          <span className='absolute z-10 bottom-8 w-full flex justify-center text-white text-4xl font-semibold'>درخواست کارشناسی</span>
          <Image className='scale-125' src="/media/expert-cartoon.jpg" alt="expert" layout='fill' style={{ objectFit: "cover" }} />
        </div>

        <div className='sm:h-[400px] lg:h-full sm:w-full lg:w-[352px] overflow-hidden'>
          <div className='w-full h-1/3 flex sm:justify-between'>
            <div className='bg-[#F66120] shadow-lg w-full rounded-3xl flex justify-center items-center'>
              <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99998 5.90271L1.99998 33.0975C1.99998 36.0887 5.23318 37.9663 7.83109 36.4801L31.5885 22.8931C34.2034 21.3975 34.2053 17.6273 31.5904 16.1298L7.83298 2.52013C5.23507 1.03399 1.99998 2.90963 1.99998 5.90271Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className='bg-black shadow-lg rounded-full w-48 mr-2 flex justify-center items-center'>
              <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0292 11.1897C28.0292 17.3085 23.1232 22.2148 17 22.2148C10.879 22.2148 5.97091 17.3085 5.97091 11.1897C5.97091 5.07087 10.879 0.166656 17 0.166656C23.1232 0.166656 28.0292 5.07087 28.0292 11.1897ZM17 41.8333C7.96332 41.8333 0.333374 40.3646 0.333374 34.6978C0.333374 29.029 8.01125 27.6123 17 27.6123C26.0388 27.6123 33.6667 29.0811 33.6667 34.7478C33.6667 40.4166 25.9888 41.8333 17 41.8333Z" fill="white" />
              </svg>

            </div>
          </div>
          <div className='w-full h-28 my-4'>
            <div className=' h-full bg-white w-full flex items-center justify-evenly rounded-3xl shadow-lg'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83337 17.1963C5.83337 9.52981 12.2398 3.33333 19.9891 3.33333C27.7602 3.33333 34.1667 9.52981 34.1667 17.1963C34.1667 21.0595 32.7617 24.646 30.4492 27.686C27.898 31.0392 24.7536 33.9608 21.2143 36.254C20.4042 36.784 19.6732 36.824 18.7841 36.254C15.2246 33.9608 12.0802 31.0392 9.55087 27.686C7.23668 24.646 5.83337 21.0595 5.83337 17.1963ZM15.3238 17.6279C15.3238 20.1962 17.4195 22.2161 19.9891 22.2161C22.5604 22.2161 24.6763 20.1962 24.6763 17.6279C24.6763 15.0797 22.5604 12.9614 19.9891 12.9614C17.4195 12.9614 15.3238 15.0797 15.3238 17.6279Z" fill="black" />
              </svg>

              <span className='text-4xl font-semibold '>ایران، تبریز</span>
            </div>
          </div>
          <div className='w-full h-1/3 relative overflow-x-scroll no-scrollbar'>
            <div className='h-28 w-28 bg-slate-50 rounded-full absolute right-72'></div>
            <div className='h-28 w-28 bg-slate-50 rounded-full absolute right-60'></div>
            <div className='h-28 w-28 bg-slate-100 rounded-full absolute right-48'></div>
            <div className='h-28 w-28 bg-slate-200 rounded-full absolute right-36'></div>
            <div className='h-28 w-28 bg-slate-300 rounded-full absolute right-24'></div>
            <div className='h-28 w-28 bg-slate-400 rounded-full absolute right-12'></div>
            <div className='h-28 w-28 bg-slate-500 rounded-full absolute right-0'></div>
          </div>
        </div>
      </div>
    </main>
  )
}

