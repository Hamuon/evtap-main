import React from 'react'
import Image from 'next/image'
export default function VideoModal({ setVideo }) {
    return (
        <div className='bg-white fixed top-0 h-screen w-full z-50 flex justify-center flex-col items-center'>
            <span onClick={() => setVideo(false)} className='text-xl animate-bounce fixed top-10 bg-white p-3 z-50 cursor-pointer border rounded-full'>
                <Image alt='close' src="/icons/close.svg" width={20} height={20} />
            </span>
            <video controls autoPlay style={{ width: "100%", height: "100%" }} src='https://ipfs.filebase.io/ipfs/QmZHMEomxd3edapNk2h19R5uv8aevaBRuc55LPmqnnENYv'></video>
        </div>
    )
}
