"use client"
import React from 'react'
import { useState } from 'react'
import Input from '@/components/atoms/inputs/Input'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import BackButton from '@/components/atoms/buttons/BackButton'
import Label from '@/components/atoms/labels/Label'
import Link from 'next/link'
export default function SignUpModal({ nextStep }) {

    const [data, setData] = useState({
        phoneNumber: '',
        firstName: '',
        lastName: '',
    })
    const handleClick = () => {
        nextStep()
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div className='w-full flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <form className='flex flex-col justify-center py-12 px-10 bg-white w-[450px] rounded-3xl shadow-xl'>
                <div className='flex w-full justify-between mb-3 items-center'>
                    <span className='text-3xl font-semibold '>خوش آمدید! </span>
                    <Link href="/login">
                        <span className='font-semibold text-[#AB7CF8]'>ورود</span>
                    </Link>
                </div>
                <Label htmlFor="phoneNumber"> لطفا مشخصات و شماره تماس خود را وارد کنید</Label>
                <div className='flex gap-2'>
                    <Input value={data.firstName} name="firstName" type="text" placeholder="نام" handleChange={handleChange} className="w-full p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" />
                    <Input value={data.lastName} name="lastName" type="text" placeholder="نام خانوادگی" handleChange={handleChange} className="w-full p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" />
                </div>
                <Input className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" value={data.phoneNumber} name="phoneNumber" type="text" placeholder="شماره تماس" handleChange={handleChange} />
                <div className='flex gap-2 mt-2'>
                    <SubmitButton text="ارسال کد" handleClick={handleClick} />
                    <BackButton />
                </div>
            </form>
        </div>
    )
}
