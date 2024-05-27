"use client";
import { z } from "zod";
import React, { useState, useEffect, useContext } from "react";
import SubmitButton from "@/components/atoms/buttons/SubmitButton";
// import DatePicker, { DateObject } from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
// import gregorian from "react-date-object/calendars/gregorian";
// import gregorian_fa from "react-date-object/locales/gregorian_fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { filterAds, getCities } from "@/services/authService";
import FilteredAdsContext from "@/context/FilteredAdsProvider";
const schema = z.object({
    title: z.string(),
    city_id: z.string(),
    have_image: z.string(),
    type: z.string(),
    from_mortgage: z.string(),
    to_mortgage: z.string(),
    document: z.string(),
    from_size: z.string(),
    to_size: z.string(),
    elevator: z.string(),
    parking: z.string(),
});

export default function SearchMortgage({ setSearch }) {
    const { setFilteredAds } = useContext(FilteredAdsContext);

    const [provinces, setProvinces] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [cityId, setCityId] = useState("");

    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });


    // const convertFrom = (date, format = "YYYY/MM/DD") => {
    //     let object = { date, format }
    //     setFromDate({
    //         gregorian: new DateObject(object).convert(gregorian, gregorian_fa).format(),
    //         persian: new DateObject(object).format(),
    //         ...object
    //     })
    // }

    // const convertTo = (date, format = "YYYY/MM/DD") => {
    //     let object = { date, format }
    //     setToDate({
    //         gregorian: new DateObject(object).convert(gregorian, gregorian_fa).format(),
    //         persian: new DateObject(object).format(),
    //         ...object
    //     })
    // }

    // async function getAllCities() {
    //     await getCities()
    //         .then((res) => {
    //             setProvinces(res.data.province);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    // useEffect(() => {
    //     getAllCities();
    // }, []);

    // const changeHandler = (e) => {
    //     setSelectedProvince(e.target.value);
    // };

    // const handleCityId = (e) => {
    //     provinces &&
    //         provinces.map((province) =>
    //             selectedProvince
    //                 ? selectedProvince === province.name
    //                     ? province.cities.map((city) =>
    //                         city.name === e.target.value ? setCityId(city.id) : null
    //                     )
    //                     : null
    //                 : null
    //         );
    // };

    const submitHandler = async (data) => {
        await filterAds(data).then((res) => {
            setFilteredAds(res.data.ads);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="pt-3">
            <hr className="py-2 text-gray-300" />
            <form
                onSubmit={handleSubmit(submitHandler)}
            >
                <div className="flex flex-col items-start w-full relative">
                    <div className="flex gap-2 w-full items-center">
                        <input
                            {...register("title")}
                            className="input input-sm input-bordered w-full my-2"
                            placeholder="کلیدواژه در عنوان آگهی رهن"
                        />

                    </div>

                    {/* <div className="flex gap-2 w-full">
                    <select onChange={(e) => setValue("status", e.target.value)} {...register("status")} name='status' className="select select-sm select-bordered w-full my-2" >
                            <option selected disabled value="">وضعیت</option>
                            <option value="active">فعال</option>
                            <option value="inactive">غیر فعال</option>
                            <option value="pending">پرداخت شده</option>
                            <option value="pending">در انتظار</option>
                            <option value="complete">تکمیل شده</option>
                            <option value="saved">ذخیره شده</option>
                        </select>
                    <select
                        onChange={changeHandler}
                        name="state"
                        className={`select select-sm select-bordered w-full my-2`}
                    >
                        <option value="" disabled selected>
                            استان
                        </option>
                        {provinces &&
                            provinces.map((province, index) => (
                                <option id={province.id} key={index} value={province.name}>
                                    {province.name}
                                </option>
                            ))}
                    </select>
                    <select
                        {...register("city_id")}
                        onChange={handleCityId}
                        name="city_id"
                        className={`select select-sm select-bordered w-full my-2`}
                    >
                        <option value="" disabled selected>
                            شهر
                        </option>
                        {provinces &&
                            provinces.map((province) =>
                                selectedProvince
                                    ? selectedProvince === province.name
                                        ? province.cities.map((city, index) => (
                                            <option id={city.id} key={index} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))
                                        : null
                                    : null
                            )}
                    </select>
                </div> */}

                    {/* <div className="flex gap-2 w-full">
                    <select
                        onChange={(e) => setValue("have_image", e.target.value)}
                        {...register("have_image")}
                        name="have_image"
                        className="select select-sm select-bordered w-full my-2"
                    >
                        <option selected disabled value="">
                            عکس
                        </option>
                        <option value="1">دارد</option>
                        <option value="0">ندارد</option>
                    </select>
                    <select
                        onChange={(e) => setValue("type", e.target.value)}
                        {...register("type")}
                        name="type"
                        className="select select-sm select-bordered w-full my-2"
                    >
                        <option selected disabled value="">
                            نوع
                        </option>
                        <option value="sale">فروش</option>
                        <option value="rent">اجاره</option>
                        <option value="mortgage">رهن</option>
                    </select>
                </div> */}

                    <div className="flex gap-2 w-full items-center">
                        <input
                            {...register("from_mortgage")}
                            className="input input-sm input-bordered w-full my-2"
                            placeholder="رهن از"
                        />
                        <input
                            {...register("to_mortgage")}
                            className="input input-sm input-bordered w-full my-2"
                            placeholder="رهن تا"
                        />
                    </div>

                    <div className="flex gap-2 w-full items-center">
                        <input
                            {...register("from_size")}
                            className="input input-sm input-bordered w-full my-2"
                            placeholder="از متراژ"
                        />
                        <input
                            {...register("to_size")}
                            className="input input-sm input-bordered w-full my-2"
                            placeholder="تا متراژ"
                        />
                    </div>
                    {/* <div className="flex gap-2 w-full my-2 items-center">
                    <DatePicker
                        value={fromDate?.persian}
                        onChange={convertFrom}
                        name="from"
                        placeholder="از تاریخ"
                        style={{
                            flexShrink: 1,
                            fontSize: "14px",
                            paddingTop: "15px",
                            paddingRight: "15px",
                            paddingBottom: "15px",
                            borderRadius: "8px",
                            width: "100%",
                        }}
                        calendar={persian}
                        format="YYYY/MM/DD"
                        locale={persian_fa}
                    />
                    <DatePicker
                        value={toDate?.persian}
                        onChange={convertTo}
                        name="to"
                        placeholder="تا تاریخ"
                        style={{
                            flexShrink: 1,
                            fontSize: "14px",
                            paddingTop: "15px",
                            paddingRight: "15px",
                            paddingBottom: "15px",
                            borderRadius: "8px",
                            width: "100%",
                        }}
                        calendar={persian}
                        format="YYYY/MM/DD"
                        locale={persian_fa}
                    />
                </div> */}
                    <div className="flex gap-2 w-full">
                        {/* <select
                        {...register("document")}
                        name="document"
                        className="select select-sm select-bordered w-full my-2"
                    >
                        <option selected disabled value="">
                            سند
                        </option>
                        <option value="promise">قول نامه</option>
                        <option value="endowment">وقف</option>
                        <option value="single">تک برگ</option>
                    </select> */}
                        <select
                            {...register("parking")}
                            name="parking"
                            className="select select-sm select-bordered w-full my-2"
                        >
                            <option selected disabled value="">
                                پارکینگ
                            </option>
                            <option value="1">دارد</option>
                            <option value="0">ندارد</option>
                        </select>
                        <select
                            {...register("elevator")}
                            name="elevator"
                            className="select select-sm select-bordered w-full my-2"
                        >
                            <option selected disabled value="">
                                آسانسور
                            </option>
                            <option value="1">دارد</option>
                            <option value="0">ندارد</option>
                        </select>
                    </div>

                    <SubmitButton type="submit" className="w-full mt-4" text="جستجو" />
                </div>
            </form>
        </div>
    );
}
