"use client"
import React, { useState, useContext } from 'react'
import { MenuContext } from '@/context/MenuContext'
import VideoModal from '@/components/molecules/modals/VideoModal'
import MainMenu from '@/components/atoms/buttons/mainMenu/MainMenu'
import InquiryList from '@/components/molecules/modals/InquiryList'

export default function Home() {
  const [video, setVideo] = useState(false)
  const { menu, setMenu } = useContext(MenuContext)

  return (
    <main className='w-full relative'>
      {/* <Image src="/media/real-estate.gif" fill className='object-cover' alt='banner image' /> */}
      {menu ? <InquiryList setMenu={setMenu} menu={menu} /> : null}
      {video && <VideoModal setVideo={setVideo} />}
      <div className='w-full'>
        <div className='w-full h-screen relative flex items-center justify-center '>
          {/* <div className='flex flex-col items-start gap-10 sm:hidden md:flex'>
            <p className='relative justify-center items-center z-30 md:flex sm:text-3xl lg:text-6xl font-bold lg:right-80 flex'>تا خانه‌ای پناه امن شما باشد.</p>
            <p className='relative justify-center items-center z-30 md:flex sm:text-xl lg:text-3xl font-semibold lg:right-80 flex text-gray-500'>کارشناسی تخصصی ملک اوتاپ.</p>
          </div> */}
          <MainMenu setVideo={setVideo} />
        </div>
      </div>
    </main>
  )
}

