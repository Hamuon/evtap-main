import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import FieldLabel from '@/components/atoms/labels/FieldLabel'
import dynamic from 'next/dynamic'
const AddAdMap = dynamic(() => import('@/components/AddAdMap'), { ssr: false })

const schema = z.object({
    title: z.string().min(1, { message: "لطفا عنوان را وارد کنید" }).max(150, { message: "نام بیش از 100 کاراکتر" }),
    description: z.string().min(1, { message: "لطفا توضیحات را وارد کنید" }).max(150, { message: "نام خانوادگی بیش از 100 کاراکتر" }),
    region: z.string().min(1, { message: "لطفا  منطقه را وارد کنید" }).max(150, { message: " کد ملی بیش از 10 کاراکتر" }),
    floor: z.string().min(1, { message: "لطفا  طبقه را وارد کنید" }),
    street: z.string().min(1, { message: "لطفا  خیابان را وارد کنید" }).max(150, { message: " کد ملی بیش از 10 کاراکتر" }),
    pre_rent: z.string().min(1, { message: "لطفا  پیش پرداخت را وارد کنید" }),
    rent: z.string().min(1, { message: "لطفا اجاره را وارد کنید" }),
    year: z.string().min(1, { message: "لطفا سال ساخت را وارد کنید" }),
    size: z.string().min(1, { message: "لطفا متراژ را وارد کنید" }).max(10, { message: " کد ملی بیش از 10 کاراکتر" }),
    room_count: z.string().min(1, { message: "لطفا تعداد اتاق را وارد کنید" }),
    plate: z.string().min(1, { message: "لطفا پلاک را وارد کنید" }),
    elevator: z.string().min(1, { message: "لطفا آسانسور را وارد کنید" }),
    parking: z.string().min(1, { message: "لطفا پارکینگ را وارد کنید" }),
    warehouse: z.string().min(1, { message: "لطفا انباری را وارد کنید" }),
    alley: z.string().min(1, { message: "لطفا کوچه را وارد کنید" }).max(150, { message: " کد ملی بیش از 10 کاراکتر" }),
    address: z.string().min(1, { message: "لطفا آدرس را وارد کنید" }).max(150, { message: " کد ملی بیش از 10 کاراکتر" }),
    type: z.string().min(1, { message: "لطفا نوع آگهی را وارد کنید" }),
    document: z.string().min(1, { message: "لطفا نوع سند را وارد کنید" }),
    city_id: z.string().min(1, { message: "لطفا شهر را وارد کنید" }),
    longitude: z.string().min(1, { message: "لطفا موقعیت را وارد کنید" }),
    latitude: z.string().min(1, { message: "لطفا موقعیت را وارد کنید" }),
})

export default function RentalForm() {
    const buildYear = ["قبل از 1387", "1387", "1388", "1389", "1390", "1391", "1392", "1393", "1394", "1395", "1396", "1397", "1398", "1399", "1400", "1401", "1402"]
    const { setValue, register, handleSubmit, formState: { errors } } = useForm(
        {
            resolver: zodResolver(schema)
        }
    )
    const submitHandler = async (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className='font-numerals w-full'>
            <div className="h-96 overflow-hidden w-full flex flex-col items-start mb-10 max-w-[60rem] rounded-lg">
                <FieldLabel>موقعیت مکانی</FieldLabel>
                <AddAdMap setValue={setValue} />
            </div>
            <div className="w-full my-2 flex flex-col items-start mb-10">
                <FieldLabel>عکس آگهی</FieldLabel>
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 ">عکس اصلی</p>
                        <p className='text-gray-600 text-sm'></p>
                    </div>
                    <input id="dropzone-file" type="file" multiple className="hidden" />
                </label>
            </div>
            <div className='flex sm:flex-col md:flex-row md:gap-3 w-full'>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>عنوان آگهی</FieldLabel>
                    <input {...register("title")} className="input input-bordered " placeholder=" عنوان آگهی را بنویسید" />
                </div>

            </div>
            <div className='flex sm:flex-col md:flex-row md:gap-3 w-full items-center'>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>متراژ</FieldLabel>
                    <input {...register("size")} className="input input-bordered " placeholder="متر مربع" />
                </div>
            </div>
            <div className='flex sm:flex-col md:flex-row md:gap-3 w-full items-center'>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel> پیش پرداخت</FieldLabel>
                    <input {...register("pre_rent")} className="input input-bordered " placeholder=" قیمت به تومان" />
                </div>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>اجاره</FieldLabel>
                    <input {...register("rent")} className="input input-bordered " placeholder="متر مربع" />
                </div>
            </div>
            <div className='flex sm:flex-col md:flex-row md:gap-3 w-full'>
                <div className='w-full my-2 flex flex-col'>
                    <FieldLabel>تعداد اتاق</FieldLabel>
                    <select {...register("room_count")} name='state' className="select select-bordered " >
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
                    <input {...register("floor")} className="input input-bordered " placeholder="طبقه واحد" />
                </div>
            </div>
            <div className='flex sm:flex-col md:flex-row md:gap-3 w-full'>
                <div className='w-full my-2 flex flex-col'>
                    <FieldLabel>سال ساخت </FieldLabel>
                    <select {...register("year")} name='state' className="select select-bordered " >
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
                    <select {...register("warehouse")} name='state' className="select select-bordered " >
                        <option selected disabled value="">انتخاب کنید</option>
                        <option value="ندارد">ندارد</option>
                        <option value="دارد">دارد</option>                                </select>
                </div>
            </div>
            <div className='flex sm:flex-col md:flex-row md:gap-3 w-full'>
                <div className='w-full my-2 flex flex-col'>
                    <FieldLabel> آسانسور</FieldLabel>
                    <select {...register("elevator")} name='state' className="select select-bordered " >
                        <option selected disabled value="">انتخاب کنید</option>
                        <option value="ندارد">ندارد</option>
                        <option value="دارد">دارد</option>                                </select>
                </div>
                <div className='w-full my-2 flex flex-col'>
                    <FieldLabel>پارکینگ </FieldLabel>
                    <select {...register("parking")} name='state' className="select select-bordered " >
                        <option selected disabled value="">انتخاب کنید</option>
                        <option value="ندارد">ندارد</option>
                        <option value="دارد">دارد</option>                                </select>
                </div>
            </div>
            <div className='w-full my-2 flex flex-col'>
                <FieldLabel> توضیحات</FieldLabel>
                <textarea {...register("description")} rows={2} className="textarea textarea-bordered w-full" placeholder="توضیحات را بنویسید" />
            </div>
            <div className='flex gap-2 mt-4 w-full'>
                <SubmitButton type="submit" text="ثبت آگهی" />
            </div>
        </form >
    )
}
