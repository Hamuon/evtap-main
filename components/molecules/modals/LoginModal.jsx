"use client"
import React from 'react'
import { useState } from 'react'
import Input from '@/components/atoms/inputs/Input'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import BackButton from '@/components/atoms/buttons/BackButton'
import Link from 'next/link'
export default function LoginModal({ nextStep }) {
    const [data, setData] = useState({
        phoneNumber: '',
    })
    const handleClick = () => {
        nextStep()
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div className='w-full flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <form className='flex flex-col justify-center py-12 px-10 bg-white w-[450px] rounded-3xl shadow-xl' action="submit">
                <div className='flex w-full justify-between mb-3 items-center'>
                    <span className='text-3xl font-semibold '>خوش آمدید! </span>
                    <Link href="/signup">
                        <span className='font-semibold text-[#AB7CF8]'>ثبت نام</span>
                    </Link>
                </div>
                <label className='text-slate-400 font-semibold mb-2' htmlFor="phoneNumber">
                    لطفا مشخصات و شماره تماس خود را وارد کنید
                </label>
                <Input className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" value={data.phoneNumber} name="phoneNumber" type="text" placeholder="شماره تماس" handleChange={handleChange} />
                <div className='flex gap-2 mt-2'>
                    <SubmitButton handleClick={handleClick}>
                        ارسال کد
                    </SubmitButton>
                    <BackButton></BackButton>
                </div>
            </form>
        </div>
    )
}
