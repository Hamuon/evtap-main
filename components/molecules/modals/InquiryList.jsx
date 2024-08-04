import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function InquiryList({ menu, setMenu }) {
    return (
        <ul
            className={`bg-white shadow-lg z-50 w-full h-full top-0 left-0 p-6 fixed flex flex-col items-center justify-center ${menu ? 'transform translate-y-0 opacity-100 visible transition duration-300 ease-in-out' : 'transform bg-slate-100 -translate-y-2 opacity-0 invisible transition duration-300 ease-in-out'}`}
        >
            <span onClick={() => setMenu(false)} className='-top-10 mb-6 cursor-pointer'><Image src="/icons/close.svg" width={20} height={20} alt='close' /></span>
            <Link className='w-full' href="https://my.ssaa.ir/portal/estate">
                <li className='text-xl pb-4 w-full border-b flex justify-center font-semibold hover:text-gray-500 button-animation'>استعلام اصالت سند</li>
            </Link>
            <Link className='w-full' href="https://www.iranamlaak.ir/forms/contracts/filtercontractsbycontractside.aspx">
                <li className='text-xl pt-4 pb-4 w-full border-b flex justify-center  font-semibold hover:text-gray-500 button-animation'>استعلام کد رهگیری</li>
            </Link>
            <Link className='w-full' href="https://my.ssaa.ir/portal/ssar/documnet-cost-calculate">
                <li className='text-xl pt-4 pb-4 w-full border-b flex justify-center  font-semibold hover:text-gray-500 button-animation'>محاسبه هزینه سند</li>
            </Link>
            <Link className='w-full' href="https://pishkhan24.com/avarezmelk/">
                <li className='text-xl pt-4 pb-4 w-full border-b flex justify-center  font-semibold hover:text-gray-500 button-animation'>استعلام و پرداخت عوارض شهرداری</li>
            </Link>
            <Link className='w-full' href="https://khodnevis.mrud.ir/inquiry">
                <li className='text-xl pt-4 pb-4 w-full border-b flex justify-center  font-semibold hover:text-gray-500 button-animation'>استعلام کد رهگیری از سامانه خود نویس</li>
            </Link>
            <Link className='w-full' href="https://my.ssaa.ir/portal/ssar/request-status">
                <li className='text-xl pt-4 pb-4 w-full border-b flex justify-center  font-semibold hover:text-gray-500 button-animation'>پیگیری وضعیت استعلام الکترونیک ملک</li>
            </Link>
            <Link className='w-full' href="https://www.geoplaner.com">
                <li className='text-xl pt-4 pb-4 w-full border-b flex justify-center  font-semibold hover:text-gray-500 button-animation'>استعلام آدرس سند</li>
            </Link>
        </ul>
    )
}
