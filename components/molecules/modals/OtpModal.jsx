"use client"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import React, { useEffect } from 'react'
import Input from '@/components/atoms/inputs/Input'
import Label from '@/components/atoms/labels/Label'
import BackButton from '@/components/atoms/buttons/BackButton'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import { useForm } from 'react-hook-form'
import { checkOtp } from '@/services/authService'
import { toast } from 'react-toastify'

const schema = z.object({
    verify_code: z.string().min(5, { message: "لطفا کد را وارد کنید" }).max(5, { message: "کد پنج رقمیست" })
})
export default function OtpModal({ prevStep, phone, setPhone }) {

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(schema)
        }
    )

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(30);

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

    const resendOTP = () => {
        setMinutes(2);
        setSeconds(0o0);
    };

    const submitHandler = async (data) => {
        const verifyData = { ...data, ...phone }
        await checkOtp(verifyData)
            .then((res) => {
                console.log(res);
                if (res.data.success === true) {
                    toast.success('کد تایید شد', {
                        position: "top-right",
                    });
                } else if (res.data.success === false) {
                    toast.error(res.data.message, {
                        position: "top-right"
                    })
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='modal-container'>
            <form onSubmit={handleSubmit(submitHandler)} className='modal-form relative'>
                {errors.verify_code && <span className="modal-error">{errors.verify_code.message}</span>}
                <div className='flex flex-col w-full items-start'>
                    <span className='text-3xl font-semibold mb-3'>محمد حسین عزیز!</span>
                    <Label htmlFor="otp">کد ارسالی را وارد کنید</Label>
                    <div className='flex items-center gap-2 w-full'>
                        <input {...register("verify_code")} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" name="verify_code" type="text" placeholder="کد ارسالی" />
                        <button disabled={seconds > 0 || minutes > 0} onClick={resendOTP} className={`font-numerals px-4 py-2 text-white rounded-lg min-w-20 flex justify-center ${seconds > 0 || minutes > 0 ? 'bg-[#54515d]' : 'bg-[#5227CC]'}`}>
                            {seconds > 0 || minutes > 0 ? (
                                <p>
                                    {minutes < 10 ? `0${minutes}` : minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                </p>
                            ) : "تمدید "}
                        </button>
                    </div>
                    <div className='flex gap-2 mt-2'>
                        <SubmitButton text="ورود" />
                        <BackButton handleBack={handleBack} />
                    </div>
                </div>
            </form>
        </div>
    )
}
