"use client"
import { z } from 'zod'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { get, useForm } from 'react-hook-form'
import { MapComponent } from '@/components/Map';
import Label from '@/components/atoms/labels/Label'
import { zodResolver } from '@hookform/resolvers/zod'
import BackButton from '@/components/atoms/buttons/BackButton'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import { expertRequest, getCities } from '@/services/authService';

const schema = z.object({
    state: z.string().min(1, { message: "لطفا استان را انتخاب کنید" }),
    city: z.string().min(1, { message: "لطفا شهر را انتخاب کنید" }),
    region: z.string().min(1, { message: "لطفا منطقه را وارد کنید" }).max(100, { message: "منطقه بیش از 100 کاراکتر" }),
    main_street: z.string().min(1, { message: "لطفا خیابان اصلی را وارد کنید" }).max(20, { message: "خیابان اصلی بیش از 20 کاراکتر" }),
    street: z.string().min(1, { message: "لطفا خیابان فرعی را وارد کنید" }).max(20, { message: "خیابان فرعی بیش از 20 کاراکتر" }),
    alley: z.string().min(1, { message: "لطفا کوچه را وارد کنید" }).max(100, { message: " کوچه بیش از 100 کاراکتر" }),
    block: z.string().min(1, { message: "لطفا بلوک یا پلاک را وارد کنید" }).max(10, { message: " بلوک/پلاک بیش از 10 کاراکتر" }),
    floor: z.string().min(1, { message: "لطفا طبقه یا واحد را وارد کنید" }).max(10, { message: " طبقه/واحد بیش از 10 کاراکتر" }),
    address: z.string().min(1, { message: "لطفا آدرس دقیق را وارد کنید" }).max(150, { message: " آدرس بیش از 150 کاراکتر" }),

})
export default function RequestModal({ nextStep }) {
    const [provinces, setProvinces] = useState(null)
    const [selectedProvince, setSelectedProvince] = useState(null)

    const [mapOpen, setMapOpen] = useState(false)
    const { setValue, register, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: {
                state: "",
                city: "",
                region: "",
                main_street: "",
                street: "",
                alley: "",
                block: "",
                floor: "",
                address: ""
            },
            resolver: zodResolver(schema)
        }
    )
    console.log(errors);
    async function getAllCities() {
        await getCities()
            .then((res) => {
                setProvinces(res.data.province)
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getAllCities()
    }, [])

    const changeHandler = (e) => {
        setSelectedProvince(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        nextStep()
    }

    return (
        <div className='modal-container'>
            <form className='modal-form font-numerals relative sm:w-[350px] md:w-[450px] sm:-top-6 md:top-0 sm:h-96 md:h-auto sm:px-4 md:px-10 sm:bg-transparent md:bg-white sm:shadow-none md:shadow-xl'>
                {/* {errors.phone && <span className="modal-error">{errors.phone.message}</span>} */}
                <div className='flex flex-col items-start w-full relative'>
                    <div className='flex w-full justify-between mb-3 items-center'>
                        <span className='md:text-3xl font-semibold '>درخواست کارشناسی ملک</span>
                        <div className="tooltip tooltip-open md:tooltip-left sm:tooltip-right cursor-pointer" data-tip="انتخاب از روی نقشه" onClick={() => setMapOpen(!mapOpen)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.2116 11.2119L10.1646 14.5589L13.5106 13.5109L14.5586 10.1639L11.2116 11.2119ZM9.02057 16.4519C8.82457 16.4519 8.63257 16.3749 8.48957 16.2329C8.29257 16.0349 8.22057 15.7439 8.30457 15.4789L9.89757 10.3899C9.97057 10.1539 10.1546 9.97089 10.3886 9.89789L15.4776 8.30489C15.7446 8.21989 16.0346 8.29289 16.2326 8.48989C16.4296 8.68789 16.5016 8.97889 16.4176 9.24389L14.8256 14.3329C14.7526 14.5679 14.5676 14.7519 14.3336 14.8249L9.24457 16.4179C9.17057 16.4409 9.09457 16.4519 9.02057 16.4519Z" fill="black" />
                                <mask id="mask0_360_961" maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="21">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 2H22.7218V22.7217H2V2Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_360_961)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.361 3.5C7.475 3.5 3.5 7.476 3.5 12.361C3.5 17.247 7.475 21.222 12.361 21.222C17.247 21.222 21.222 17.247 21.222 12.361C21.222 7.476 17.247 3.5 12.361 3.5ZM12.361 22.722C6.648 22.722 2 18.074 2 12.361C2 6.648 6.648 2 12.361 2C18.074 2 22.722 6.648 22.722 12.361C22.722 18.074 18.074 22.722 12.361 22.722Z" fill="black" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <Label htmlFor="request">
                        برای ثبت درخواست لطفا آدرس دقیق را وارد کنید
                    </Label>
                    <div className='flex gap-2 w-full'>
                        <select {...register("state")} onChange={changeHandler} name='state' className="select select-sm select-bordered w-full my-2" >
                            <option selected disabled value="">استان</option>
                            {
                                provinces && provinces.map((province, index) => (
                                    <option id={province.id} key={index} value={province.name}>{province.name}</option>
                                ))
                            }
                        </select>
                        <select {...register("city")} name='city' className="select select-sm select-bordered w-full my-2" >
                            <option selected disabled value="">شهر</option>
                            {
                                provinces && provinces.map((province) => (
                                    selectedProvince ?
                                        selectedProvince === province.name ?
                                            province.cities.map((city, index) => (
                                                <option id={city.id} key={index} value={city.name}>{city.name}</option>
                                            ))
                                            : null
                                        : null
                                ))
                            }
                        </select>
                        <input {...register("region")} className="input input-sm input-bordered w-full my-2" placeholder="منطقه" />
                    </div>
                    <div className='flex gap-3 w-full items-center'>
                        <input {...register("main_street")} className="input input-sm input-bordered w-full my-2" placeholder="خیابان اصلی" />
                    </div>
                    <div className='flex gap-3 w-full'>
                        <input {...register("street")} className="input input-sm input-bordered w-full my-2" placeholder="خیابان فرعی" />
                        <input {...register("alley")} className="input input-sm input-bordered w-full my-2" placeholder="کوچه/مجتمع" />
                    </div>
                    <div className='flex gap-3 w-full'>
                        <input {...register("block")} className="input input-sm input-bordered w-full my-2" placeholder=" پلاک/بلوک" />
                        <input {...register("floor")} className="input input-sm input-bordered w-full my-2" placeholder="طبقه/واحد" />
                    </div>
                    <textarea {...register("address")} rows={2} className="textarea textarea-bordered w-full my-2" placeholder="استان، شهر، منطقه، محل، خیابان اصلی، خیابان فرعی، کوچه، پلاک، طبقه" />

                    <div className='flex gap-2 mt-2 w-full'>
                        <SubmitButton handleClick={handleClick} type="submit" text="پرداخت" />
                        <BackButton />
                    </div>
                    {mapOpen ?
                        <div className='w-full h-full flex justify-center items-center absolute overflow-hidden rounded-xl'>
                            <MapComponent setMapOpen={setMapOpen} setValue={setValue} />
                        </div>
                        : null}
                </div>
            </form >
        </div >
    )
}






