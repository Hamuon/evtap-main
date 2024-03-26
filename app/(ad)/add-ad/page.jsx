"use client"
import { MapComponent } from '@/components/Map'
import BackButton from '@/components/atoms/buttons/BackButton'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import FieldLabel from '@/components/atoms/labels/FieldLabel'
import React, { useState } from 'react'

export default function AddAd() {
    const buildYear = ["قبل از 1387", "1387", "1388", "1389", "1390", "1391", "1392", "1393", "1394", "1395", "1396", "1397", "1398", "1399", "1400", "1401", "1402"]
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)

    const [fileName, setFileName] = useState([])
    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        setFileName(files.map(file => file.name))
    }

    return (
        <main className='w-full mx-auto flex justify-center'>
            <div className='w-full md:container mt-10 px-10 flex flex-col items-center'>
                <div className="h-96 overflow-hidden w-full flex flex-col items-start mb-10 max-w-[60rem] rounded-lg">
                    <FieldLabel>موقعیت مکانی</FieldLabel>
                    <MapComponent setLatitude={setLatitude} setLongitude={setLongitude} />
                </div>
                <div className='max-w-[60rem] w-full mb-20 flex justify-center'>
                    <form className='font-numerals w-full'>
                        <div className="w-full my-2 flex flex-col items-start mb-10">
                            <FieldLabel>عکس آگهی</FieldLabel>
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 ">عکس اصلی</p>
                                    <p className='text-gray-600 text-sm'>{fileName}</p>
                                </div>
                                <input onChange={handleFileSelected} id="dropzone-file" type="file" multiple className="hidden" />
                            </label>
                        </div>
                        <div className='flex sm:flex-col md:flex-row md:gap-3 w-full'>
                            <div className="w-full my-2 flex flex-col">
                                <FieldLabel>عنوان آگهی</FieldLabel>
                                <input className="input input-bordered " placeholder=" عنوان آگهی را بنویسید" />
                            </div>
                            <div className='w-full my-2 flex flex-col'>
                                <FieldLabel>نوع آگهی</FieldLabel>
                                <select name='state' className="select select-bordered " >
                                    <option selected disabled value="">انتخاب کنید</option>
                                    <option value="اجاره">اجاره</option>
                                    <option value="رهن">رهن</option>
                                    <option value="فروش">فروش</option>

                                </select>
                            </div>
                        </div>
                        <div className='flex sm:flex-col md:flex-row md:gap-3 w-full items-center'>
                            <div className="w-full my-2 flex flex-col">
                                <FieldLabel> قیمت کل</FieldLabel>
                                <input className="input input-bordered " placeholder=" قیمت به تومان" />
                            </div>
                            <div className="w-full my-2 flex flex-col">
                                <FieldLabel>متراژ</FieldLabel>
                                <input className="input input-bordered " placeholder="متر مربع" />
                            </div>
                        </div>
                        <div className='flex sm:flex-col md:flex-row md:gap-3 w-full'>
                            <div className='w-full my-2 flex flex-col'>
                                <FieldLabel>تعداد اتاق</FieldLabel>
                                <select name='state' className="select select-bordered " >
                                    <option selected disabled value="">انتخاب کنید</option>
                                    {
                                        [...Array(4).keys()].map((room, index) => {
                                            return <option value={room} key={index}>{room}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="w-full my-2 flex flex-col">
                                <FieldLabel>طبقه</FieldLabel>
                                <input className="input input-bordered " placeholder="طبقه واحد" />
                            </div>
                        </div>
                        <div className='flex sm:flex-col md:flex-row md:gap-3 w-full'>
                            <div className='w-full my-2 flex flex-col'>
                                <FieldLabel>سال ساخت </FieldLabel>
                                <select name='state' className="select select-bordered " >
                                    <option selected disabled value="">سال ساخت</option>
                                    {
                                        buildYear.map((item, index) => {
                                            return <option value={item} key={index}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='w-full my-2 flex flex-col'>
                                <FieldLabel>انباری </FieldLabel>
                                <select name='state' className="select select-bordered " >
                                    <option selected disabled value="">انتخاب کنید</option>
                                    <option value="ندارد">ندارد</option>
                                    <option value="دارد">دارد</option>                                </select>
                            </div>
                        </div>
                        <div className='flex sm:flex-col md:flex-row md:gap-3 w-full'>
                            <div className='w-full my-2 flex flex-col'>
                                <FieldLabel> آسانسور</FieldLabel>
                                <select name='state' className="select select-bordered " >
                                    <option selected disabled value="">انتخاب کنید</option>
                                    <option value="ندارد">ندارد</option>
                                    <option value="دارد">دارد</option>                                </select>
                            </div>
                            <div className='w-full my-2 flex flex-col'>
                                <FieldLabel>پارکینگ </FieldLabel>
                                <select name='state' className="select select-bordered " >
                                    <option selected disabled value="">انتخاب کنید</option>
                                    <option value="ندارد">ندارد</option>
                                    <option value="دارد">دارد</option>                                </select>
                            </div>
                        </div>
                        <div className='w-full my-2 flex flex-col'>
                            <FieldLabel> توضیحات</FieldLabel>
                            <textarea rows={2} className="textarea textarea-bordered w-full" placeholder="توضیحات را بنویسید" />
                        </div>
                        <div className='flex gap-2 mt-4 w-full'>
                            <SubmitButton type="submit" text="ثبت آگهی" />
                            <SubmitButton type="submit" text="ذخیره" />
                            {/* <BackButton /> */}
                        </div>
                    </form >
                </div>
            </div >
        </main >
    )
}
