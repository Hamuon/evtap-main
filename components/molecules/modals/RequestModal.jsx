"use client"
import { z } from 'zod'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'
import Mapir from "mapir-react-component";
import Input from '@/components/atoms/inputs/Input'
import Label from '@/components/atoms/labels/Label'
import { zodResolver } from '@hookform/resolvers/zod'
import BackButton from '@/components/atoms/buttons/BackButton'
import SubmitButton from '@/components/atoms/buttons/SubmitButton'

const schema = z.object({
    state: z.string().min(1, { message: "لطفا استان را انتخاب کنید" }),
    city: z.string().min(1, { message: "لطفا شهر را انتخاب کنید" }),
    area: z.string().min(1, { message: "لطفا منطقه را وارد کنید" }),
    neighbourhood: z.string().min(1, { message: "لطفا محله را وارد کنید" }).max(20, { message: "محله بیش از 20 کاراکتر" }),
    main_street: z.string().min(1, { message: "لطفا خیابان اصلی را وارد کنید" }).max(20, { message: "خیابان اصلی بیش از 20 کاراکتر" }),
    street: z.string().min(1, { message: "لطفا خیابان فرعی را وارد کنید" }).max(20, { message: "خیابان فرعی بیش از 20 کاراکتر" }),
    alley: z.string().min(1, { message: "لطفا کوچه را وارد کنید" }).max(10, { message: " کوچه بیش از 10 کاراکتر" }),
    block: z.string().min(1, { message: "لطفا بلوک یا پلاک را وارد کنید" }).max(10, { message: " بلوک/پلاک بیش از 10 کاراکتر" }),
    floor: z.string().min(1, { message: "لطفا طبقه یا واحد را وارد کنید" }).max(10, { message: " طبقه/واحد بیش از 10 کاراکتر" }),
    address: z.string().min(1, { message: "لطفا آدرس دقیق را وارد کنید" }).max(150, { message: " آدرس بیش از 150 کاراکتر" }),

})
export default function RequestModal() {
    // const [provinces, setProvinces] = useState([])
    // const [selectedProvinces, setSelectedProvinces] = useState(null)

    // const [cities, setCities] = useState([])
    // const [selectedCity, setSelectedCity] = useState(null)

    // const [areas, setAreas] = useState([])
    // const [selectedAreas, setSelectedAreas] = useState(null)
    const { trigger, setValue, register, handleSubmit, formState: { errors }, formState } = useForm(
        {
            defaultValues: {
                state: "",
                city: "",
                area: "",
                neighbourhood: "",
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
    console.log(errors, formState);
    const [mapOpen, setMapOpen] = useState(false)


    const changeHandler = (e) => {
        console.log(e.target);
        setValue("", e.target.value);
        trigger(e.target.name)
    }

    const submitHandler = (data) => {
        console.log(data);
    }


    return (
        <div className='modal-container'>
            <form onSubmit={handleSubmit(submitHandler)} className='modal-form relative sm:w-[350px] md:w-[550px] sm:-top-6 sm:h-96 xl:h-auto sm:px-4 xl:px-10 sm:bg-inherit xl:bg-white sm:shadow-none xl:shadow-xl'>
                {/* {errors.phone && <span className="modal-error">{errors.phone.message}</span>} */}
                <div className='flex flex-col items-start w-full relative'>
                    <div onClick={() => setMapOpen(!mapOpen)} className='flex w-full justify-between mb-3 items-center'>
                        <span className='md:text-3xl font-semibold '>درخواست کارشناسی ملک</span>
                        <span>نقشه</span>
                    </div>
                    <Label htmlFor="phone">
                        برای ثبت درخواست لطفا آدرس دقیق را وارد کنید
                    </Label>
                    <div className='flex gap-2 w-full'>
                        <select onChange={changeHandler} {...register("state")} value="استان" name='state' className="w-full my-2 p-2 text-gray-400 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" >
                            <option value="استان">استان</option>
                            <option value="آذربایجان شرقی">آذربایجان شرقی</option>
                        </select>
                        <select onChange={changeHandler} {...register("city")} defaultValue="شهر" name='city' className="w-full my-2 p-2 text-gray-400 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" >
                            <option selected value="شهر">شهر</option>
                            <option value="تبریز">تبریز</option>

                        </select>
                        <select onChange={changeHandler} {...register("area")} defaultValue="منطقه" name='area' className="w-full my-2 p-2 text-gray-400 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" >
                            <option selected value="منطقه">منطقه</option>
                            <option value="ولیعصر">ولیعصر</option>

                        </select>
                    </div>
                    <div className='flex gap-2 w-full'>
                        <input {...register("neighbourhood")} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="محله" />
                        <input {...register("main_street")} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="خیابان اصلی" />
                    </div>
                    <div className='flex gap-2 w-full'>
                        <input {...register("street")} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="خیابان فرعی" />
                        <input {...register("alley")} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="کوچه/مجتمع" />
                    </div>
                    <div className='flex gap-2 w-full'>
                        <input {...register("block")} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder=" پلاک/بلوک" />
                        <input {...register("floor")} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="طبقه/واحد" />
                    </div>
                    <textarea {...register("address")} rows={2} className="w-full my-2 p-2 border border-slate-400 rounded-lg focus:border-[#AB7CF8]" placeholder="استان، شهر، منطقه، محل، خیابان اصلی، خیابان فرعی، کوچه، پلاک، طبقه" />
                    <div className="w-full my-2 p-2 border border-slate-400 rounded-lg flex justify-between items-center bg-white">
                        <span className='text-gray-400'>محاسبه قیمت</span>
                        <span className='font-numerals text-gray-400'>7900000 ریال</span>
                    </div>
                    <div className='flex gap-2 mt-2 w-full'>
                        <SubmitButton text="پرداخت" />
                        <BackButton />
                    </div>
                    {mapOpen ?
                        <div className='w-full h-full flex justify-center items-center absolute overflow-hidden rounded-xl'>
                            <MapComponent />
                        </div>
                        : null}
                </div>
            </form >
        </div >
    )
}


const Map = Mapir.setToken({
    transformRequest: url => {
        return {
            url: url,
            headers: {
                "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcwYTgyN2VkOGY3YjY1YzFjYmFlYzFhYWE2NzEwNDk2ZjJlNDczOWZlZDE3OGE3MTUwZDE1OTUxNTdiNzBjZDA5Zjc0MjNjY2RiNzNmMWY5In0.eyJhdWQiOiIyNjcwNyIsImp0aSI6IjcwYTgyN2VkOGY3YjY1YzFjYmFlYzFhYWE2NzEwNDk2ZjJlNDczOWZlZDE3OGE3MTUwZDE1OTUxNTdiNzBjZDA5Zjc0MjNjY2RiNzNmMWY5IiwiaWF0IjoxNzEwNjk5OTYzLCJuYmYiOjE3MTA2OTk5NjMsImV4cCI6MTcxMzExOTE2Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.CS8uYFnBTVKuccJuIxvo-F3VfYkWdAOMu2DmennPFrwPKQYDk6qcbxX97u1MTcAQw9uyeAnuQt51i4DanOeWmJoE4YIOwRLbqlPODhoIkiSGOmqSBeXEeAXNOiKQrvPzgp-w4e7yH2upcsKkZDypBvkc4L1PJ2sP6AvCYOyj_lsgB5c_0myILTfkBvwotP_mhdduXusZALzgkHL5pYh29ToNkKq2mZJV5GYrkzxVVaA6zjTuYB5Ept7RJCLRVtWCRQyL6V_OC8XLzePywd1nEwYYXVkuhmqvB8wvrhlpPHiqKX1_242lAcB2t-53ZJG9LmqYxxrMU4Oj3kkKwukOQA', //Mapir api key
                "Mapir-SDK": "reactjs"
            }
        };
    }
});

export const MapComponent = () => {
    const [markerArray, setMarkerArray] = useState([]);
    const [coord, setCoord] = useState([51.42, 35.72]);
    const [marker, setMarker] = useState({
        lng: null,
        lat: null
    })
    console.log(marker);
    async function reverseFunction(map, e) {
        var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`;
        await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcwYTgyN2VkOGY3YjY1YzFjYmFlYzFhYWE2NzEwNDk2ZjJlNDczOWZlZDE3OGE3MTUwZDE1OTUxNTdiNzBjZDA5Zjc0MjNjY2RiNzNmMWY5In0.eyJhdWQiOiIyNjcwNyIsImp0aSI6IjcwYTgyN2VkOGY3YjY1YzFjYmFlYzFhYWE2NzEwNDk2ZjJlNDczOWZlZDE3OGE3MTUwZDE1OTUxNTdiNzBjZDA5Zjc0MjNjY2RiNzNmMWY5IiwiaWF0IjoxNzEwNjk5OTYzLCJuYmYiOjE3MTA2OTk5NjMsImV4cCI6MTcxMzExOTE2Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.CS8uYFnBTVKuccJuIxvo-F3VfYkWdAOMu2DmennPFrwPKQYDk6qcbxX97u1MTcAQw9uyeAnuQt51i4DanOeWmJoE4YIOwRLbqlPODhoIkiSGOmqSBeXEeAXNOiKQrvPzgp-w4e7yH2upcsKkZDypBvkc4L1PJ2sP6AvCYOyj_lsgB5c_0myILTfkBvwotP_mhdduXusZALzgkHL5pYh29ToNkKq2mZJV5GYrkzxVVaA6zjTuYB5Ept7RJCLRVtWCRQyL6V_OC8XLzePywd1nEwYYXVkuhmqvB8wvrhlpPHiqKX1_242lAcB2t-53ZJG9LmqYxxrMU4Oj3kkKwukOQA"
            }
        })
            .then(response => response.json())
            .then(data => console.log(data));
        const array = [];
        setMarker({
            lng: e.lngLat.lng,
            lat: e.lngLat.lat
        })
        setMarkerArray(array);
    }
    return (
        <Mapir center={coord} Map={Map} onClick={reverseFunction}>
            <Mapir.Marker coordinates={[marker.lng, marker.lat]} anchor="bottom" />
        </Mapir>
    );
};

