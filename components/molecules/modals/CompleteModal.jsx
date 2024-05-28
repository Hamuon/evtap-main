"use client"
import { z } from 'zod'
import React from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import Label from '@/components/atoms/labels/Label'
import { zodResolver } from '@hookform/resolvers/zod'
import { completeProfile } from '@/services/authService'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import { useRouter } from 'next/navigation'

const schema = z.object({
    first_name: z.string().min(1, { message: "لطفا نام خود را وارد کنید" }).max(20, { message: "نام بیش از 100 کاراکتر" }),
    last_name: z.string().min(1, { message: "لطفا نام خانوادگی خود را وارد کنید" }).max(20, { message: "نام خانوادگی بیش از 100 کاراکتر" }),
    national_code: z.string().min(1, { message: "لطفا  کد ملی خود را وارد کنید" }).max(10, { message: " کد ملی بیش از 10 کاراکتر" }),
    code: z.string()
})
export default function CompleteModal() {

    let token
    if (typeof window !== "undefined") {
        token = localStorage.getItem("token");
    }

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(schema)
        }
    )
    const router = useRouter()
    const submitHandler = async (data) => {
        await completeProfile(data, token)
            .then((res) => {
                if (res.data.success) {
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    toast.success("اطلاعات شما تکمیل شد", {
                        position: "top-center"
                    })
                    router.push('/')
                } else {
                    toast.error(res.data.message, {
                        position: "top-center"
                    })
                }
            }).catch((error) => {
                console.log(error);
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
                    </div>
                    <Label htmlFor=""> لطفا مشخصات خود را وارد کنید</Label>
                    <div className='flex gap-2'>
                        <input {...register("first_name")} name="first_name" type="text" placeholder="نام" className="input input-bordered w-full my-2" />
                        <input {...register("last_name")} name="last_name" type="text" placeholder="نام خانوادگی" className="input input-bordered w-full my-2" />
                    </div>
                    <input {...register("national_code")} className="input input-bordered w-full my-1" name="national_code" type="text" placeholder="کد ملی" />
                    <input {...register("code")} className="input input-bordered w-full my-1" name="code" type="text" placeholder="کد دعوت" />
                    <SubmitButton type="submit" className="mt-2 sm-w-full md:w-auto" text="ثبت" />
                </div>
            </form>
        </div>
    )
}
