"use client"
import { z } from 'zod'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import Input from '@/components/atoms/inputs/Input'
import Label from '@/components/atoms/labels/Label'
import { zodResolver } from '@hookform/resolvers/zod'
import BackButton from '@/components/atoms/buttons/BackButton'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'

export default function RequestModal() {
    const [provinces, setProvinces] = useState([])
    const [selectedProvinces, setSelectedProvinces] = useState(null)

    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)

    const [areas, setAreas] = useState([])
    const [selectedAreas, setSelectedAreas] = useState(null)


    return (
        <div className='modal-container'>
            <form className='modal-form relative sm:w-[350px] md:w-[550px] sm:-top-6 sm:h-96 xl:h-auto sm:px-4 xl:px-10 sm:bg-inherit xl:bg-white sm:shadow-none xl:shadow-xl'>
                {/* {errors.phone && <span className="modal-error">{errors.phone.message}</span>} */}
                <div className='flex flex-col items-start w-full'>
                    <div className='flex w-full justify-start mb-3 items-center'>
                        <span className='md:text-3xl font-semibold '>درخواست کارشناسی ملک</span>
                    </div>
                    <Label htmlFor="phone">
                        برای ثبت درخواست لطفا آدرس دقیق را وارد کنید
                    </Label>
                    <div className='flex gap-2 w-full'>
                        <select className="w-full my-2 p-2 text-gray-400 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" >
                            <option selected value="">استان</option>
                            <option value="">آذربایجان شرقی</option>
                        </select>
                        <select className="w-full my-2 p-2 text-gray-400 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" >
                            <option selected value="">شهر</option>
                            <option value="">تبریز</option>
                        </select>
                        <select className="w-full my-2 p-2 text-gray-400 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" >
                            <option selected value="">منطقه</option>
                            <option value="">ولیعصر</option>
                        </select>
                    </div>
                    <div className='flex gap-2 w-full'>
                        <select className="w-full my-2 p-2 text-gray-400 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" >
                            <option selected value="">محل</option>
                            <option value="">پروین اعتصامی</option>
                        </select>
                        <input className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="خیابان اصلی" />
                    </div>
                    <div className='flex gap-2 w-full'>
                        <input className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="خیابان فرعی" />
                        <input className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="کوچه/مجتمع" />
                    </div>
                    <div className='flex gap-2 w-full'>
                        <input className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder=" پلاک/بلوک" />
                        <input className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="طبقه/واحد" />
                    </div>
                    <textarea rows={2} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="استان، شهر، منطقه، محل، خیابان اصلی، خیابان فرعی، کوچه، پلاک، طبقه" />
                    <div className="w-full my-2 p-2 border border-slate-400 rounded-lg flex justify-between items-center bg-white">
                        <span className='text-gray-400'>محاسبه قیمت</span>
                        <span className='font-numerals text-gray-400'>7900000 ریال</span>
                    </div>
                    <div className='flex gap-2 mt-2 w-full'>
                        <SubmitButton text="پرداخت" />
                        <BackButton />
                    </div>
                </div>
            </form >
        </div >
    )
}
