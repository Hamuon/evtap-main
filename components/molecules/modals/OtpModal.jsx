"use client"
import { z } from 'zod'
import { useState } from 'react'
import { toast } from 'react-toastify'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Input from '@/components/atoms/inputs/Input'
import Label from '@/components/atoms/labels/Label'
import { zodResolver } from '@hookform/resolvers/zod'
import { checkOtp, getOtp } from '@/services/authService'
import BackButton from '@/components/atoms/buttons/BackButton'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'

const schema = z.object({
    verify_code: z.string().min(5, { message: "لطفا کد را وارد کنید" }).max(5, { message: "کد پنج رقمیست" })
})
export default function OtpModal({ nextStep, prevStep, phone, setPhone }) {
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(schema)
        }
    )

    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0o0);

    const handleBack = () => {
        prevStep()
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [seconds, minutes]);

    const resendOTP = async () => {
        await getOtp(phone)
            .then((res) => {
                if (res.status === 200) {
                    toast.success('کد ارسال شد', {
                        position: "top-right",
                    });
                    setMinutes(2);
                    setSeconds(0o0);
                } else {
                    toast.error(res.errors.phone[0])
                }
            }).catch((err) => {
                console.log(err);
            })
    };

    const submitHandler = async (data) => {
        const verifyData = { ...data, ...phone }
        await checkOtp(verifyData)
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    localStorage.setItem("user", JSON.stringify(res.data.user))
                    localStorage.setItem("token", JSON.stringify(res.data.token))
                    toast.success('کد تایید شد', {
                        position: "top-center",
                    });
                    if (res.data.user.first_name === null || res.data.user.last_name === null) {
                        nextStep()
                    } else {
                        router.push("/")
                    }
                } else {
                    toast.error(res.data.message, {
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
                {errors.verify_code && <span className="modal-error">{errors.verify_code.message}</span>}
                <div className='flex flex-col w-full items-start'>
                    <span className='text-3xl font-semibold mb-3'>احراز هویت</span>
                    <Label htmlFor="otp">کد ارسالی را وارد کنید</Label>
                    <div className='flex items-center gap-2 w-full'>
                        <input {...register("verify_code")} className="input input-bordered w-full font-numerals my-2" name="verify_code" type="text" placeholder="کد ارسالی" />
                        <button disabled={seconds > 0 || minutes > 0} onClick={resendOTP} className={`font-numerals px-4 py-3 text-white rounded-lg min-w-20 flex items-center justify-center ${seconds > 0 || minutes > 0 ? 'bg-[#54515d]' : 'bg-[#5227CC]'}`}>
                            {seconds > 0 || minutes > 0 ? (
                                <p>
                                    {minutes < 10 ? `0${minutes}` : minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                </p>
                            ) : "تمدید "}
                        </button>
                    </div>
                    <div className='flex gap-2 mt-2 sm:w-full'>
                        <SubmitButton text="ورود" />
                        <BackButton handleBack={handleBack} />
                    </div>
                </div>
            </form>
        </div>
    )
}
