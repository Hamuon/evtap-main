"use client"
import React from 'react'
import { useState } from 'react'
import Input from '@/components/atoms/inputs/Input'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import BackButton from '@/components/atoms/buttons/BackButton'
import Label from '@/components/atoms/labels/Label'
export default function OtpModal({ prevStep }) {

    const [data, setData] = useState({
        otp: '',
    })
    const handleClick = () => {
        console.log('clicked')
    }
    const handleBack = () => {
        prevStep()
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div className='w-full flex justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <form className='flex flex-col justify-center py-12 px-10 bg-white w-[450px] rounded-3xl shadow-xl'>
                <span className='text-3xl font-semibold mb-3'>محمد حسین عزیز!</span>
                <Label htmlFor="otp">کد ارسالی را وارد کنید</Label>
                <div className='flex items-center gap-2'>
                    <Input className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" value={data.otp} name="otp" type="text" placeholder="کد ارسالی" handleChange={handleChange} />
                    <div className='font-numerals px-4 py-2 bg-[#54515d] text-white rounded-lg'>
                        00:57
                    </div>
                </div>
                <div className='flex gap-2 mt-2'>
                    <SubmitButton text="ورود" handleClick={handleClick} />
                    <BackButton handleBack={handleBack} />
                </div>
            </form>
        </div>
    )
}
