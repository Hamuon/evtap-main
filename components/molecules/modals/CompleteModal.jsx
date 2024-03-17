"use client"
import { z } from 'zod'
import React from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import Input from '@/components/atoms/inputs/Input'
import Label from '@/components/atoms/labels/Label'
import { zodResolver } from '@hookform/resolvers/zod'
import { completeProfile } from '@/services/authService'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'

const schema = z.object({
    first_name: z.string().min(1, { message: "لطفا نام خود را وارد کنید" }).max(20, { message: "نام بیش از 20 کاراکتر" }),
    last_name: z.string().min(1, { message: "لطفا نام خانوادگی خود را وارد کنید" }).max(20, { message: "نام خانوادگی بیش از 20 کاراکتر" }),
    national_code: z.string().min(1, { message: "لطفا  کد ملی خود را وارد کنید" }).max(11, { message: "شماره تلفن بیش از 11 کاراکتر" }).regex(/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/, { message: "شماره تلفن صحیح نیست" }),

})
export default function CompleteModal() {

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(schema)
        }
    )
    const submitHandler = async (data) => {
        await completeProfile(data)
            .then((res) => {
                if (res.data.success) {
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    localStorage.setItem("token", JSON.stringify(res.data.token))
                    toast.success("تکمیل اطلاعات موفقیت آمیز بود!", {
                        position: "top-center"
                    })
                } else {
                    toast.error("خطایی پیش آمده", {
                        position: "top-center"
                    })
                }
            }).catch((err) => {
                console.log(err);
                toast.error("مشکل در برقراری ارتباط", {
                    position: "top-center"
                })
            })
    }

    return (
        <div className='modal-container'>
            <form onSubmit={handleSubmit(submitHandler)} className='modal-form relative'>
                {Object.keys(errors).length > 0 ? <span className="modal-error">لطفا اطلاعات صحیح وارد کنید</span> : null}
                <div className='flex flex-col w-full items-start'>
                    <div className='flex w-full justify-between mb-3 items-center'>
                        <span className='text-3xl font-semibold '>تکمیل اطلاعات</span>
                        {/* <Link href="/login">
                            <span className='font-semibold text-[#AB7CF8]'>ورود</span>
                        </Link> */}
                    </div>
                    <Label htmlFor=""> لطفا مشخصات خود را وارد کنید</Label>
                    <div className='flex gap-2'>
                        <input {...register("first_name")} name="first_name" type="text" placeholder="نام" className="w-full p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" />
                        <input {...register("last_name")} name="last_name" type="text" placeholder="نام خانوادگی" className="w-full p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" />
                    </div>
                    <input {...register("national_code")} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" name="national_code" type="text" placeholder="کد ملی" />
                    <SubmitButton className="mt-2 sm-w-full md:w-auto" text="ثبت" />
                </div>
            </form>
        </div>
    )
}
