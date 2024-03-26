"use client"
import { z } from 'zod'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import { getOtp } from '@/services/authService'
import Label from '@/components/atoms/labels/Label'
import { zodResolver } from '@hookform/resolvers/zod'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'

const schema = z.object({
    phone: z.string().min(1, { message: "لطفا شماره تلفن خود را وارد کنید" }).max(11, { message: "شماره تلفن بیش از 11 کاراکتر" }).regex(/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/, { message: "شماره تلفن صحیح نیست" }),
})

export default function LoginModal({ nextStep, setPhone }) {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(schema)
        }
    )

    const submitHandler = async (phone) => {
        setPhone(phone)
        setLoading(true)
        await getOtp(phone)
            .then((res) => {
                if (res.status === 200) {
                    toast.success('کد ارسال شد', {
                        position: "top-center",
                    });
                    setLoading(false)
                    nextStep()
                } else {
                    toast.error(res.errors.phone[0], {
                        position: "top-center"
                    })
                    setLoading(false)
                }
            }).catch((err) => {
                console.log(err);
                setLoading(false)
                toast.error("مشکل در برقراری ارتباط", {
                    position: "top-center"
                })
            })
    }

    return (
        <div className='modal-container'>
            <form onSubmit={handleSubmit(submitHandler)} className='modal-form relative'>
                {errors.phone && <span className="modal-error">{errors.phone.message}</span>}
                <div className='flex flex-col items-start w-full'>
                    <div className='flex w-full justify-start mb-3 items-center'>
                        <span className='md:text-3xl sm:text-xl font-semibold '>خوش آمدید!</span>
                    </div>
                    <Label htmlFor="phone">
                        لطفا شماره تماس خود را وارد کنید
                    </Label>
                    <input {...register("phone")} className="input input-bordered w-full my-2 font-numerals" name="phone" type="text" placeholder="شماره تماس" />
                    <div className='flex gap-2 mt-2 sm:w-full'>
                        <SubmitButton type="submit" className="w-full" loading={loading} text="ارسال کد" />
                    </div>
                </div>
            </form >
        </div >
    )
}
