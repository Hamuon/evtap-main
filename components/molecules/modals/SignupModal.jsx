"use client"
import { z } from 'zod'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '@/components/atoms/inputs/Input'
import Label from '@/components/atoms/labels/Label'
import { zodResolver } from '@hookform/resolvers/zod'
import BackButton from '@/components/atoms/buttons/BackButton'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'

const schema = z.object({
    firstName: z.string().min(1, { message: "لطفا نام خود را وارد کنید" }).max(20, { message: "نام بیش از 20 کاراکتر" }),
    lastName: z.string().min(1, { message: "لطفا نام خانوادگی خود را وارد کنید" }).max(20, { message: "نام خانوادگی بیش از 20 کاراکتر" }),
    phoneNumber: z.string().min(1, { message: "لطفا شماره تلفن خود را وارد کنید" }).max(11, { message: "شماره تلفن بیش از 11 کاراکتر" }).regex(/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/, { message: "شماره تلفن صحیح نیست" }),

})
export default function SignUpModal({ nextStep }) {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",

    })

    const { register, handleSubmit, formState: { errors }, getFieldState } = useForm(
        {
            defaultValues: { firstName: "", lastName: "", phoneNumber: "" },
            resolver: zodResolver(schema)
        }
    )
    const submitHandler = (data) => {
        nextStep()
    }

    return (
        <div className='modal-container'>
            <form onSubmit={handleSubmit(submitHandler)} className='modal-form relative'>
                {Object.keys(errors).length > 0 ? <span className="modal-error">لطفا اطلاعات صحیح وارد کنید</span> : null}
                <div className='flex flex-col w-full items-start'>
                    <div className='flex w-full justify-between mb-3 items-center'>
                        <span className='text-3xl font-semibold '>خوش آمدید! </span>
                        <Link href="/login">
                            <span className='font-semibold text-[#AB7CF8]'>ورود</span>
                        </Link>
                    </div>
                    <Label htmlFor=""> لطفا مشخصات و شماره تماس خود را وارد کنید</Label>
                    <div className='flex gap-2'>
                        <input {...register("firstName", { value: data.firstName })} name="firstName" type="text" placeholder="نام" className="w-full p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" />
                        <input {...register("lastName", { value: data.lastName })} name="lastName" type="text" placeholder="نام خانوادگی" className="w-full p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" />
                    </div>
                    <input {...register("phoneNumber", { value: data.phoneNumber })} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" name="phoneNumber" type="text" placeholder="شماره تماس" />
                    <div className='flex gap-2 mt-2'>
                        <SubmitButton text="ارسال کد" />
                        <BackButton />
                    </div>
                </div>
            </form>
        </div>
    )
}
