"use client";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldLabel from "@/components/atoms/labels/FieldLabel";
import SubmitButton from "@/components/atoms/buttons/SubmitButton";
import dynamic from "next/dynamic";
import { submitAd, getCities } from "@/services/authService";
import { useRouter } from "next/navigation";
const AddAdMap = dynamic(() => import("@/components/AddAdMap"), { ssr: false });

const schema = z.object({
    title: z
        .string()
        .min(1, { message: "لطفا عنوان را وارد کنید" })
        .max(150, { message: "نام بیش از 100 کاراکتر" }),
    description: z
        .string()
        .min(1, { message: "لطفا توضیحات را وارد کنید" }),
    region: z
        .string()
        .max(150, { message: " کد ملی بیش از 10 کاراکتر" }),
    floor: z.string(),
    street: z
        .string()
        .max(150, { message: " کد ملی بیش از 10 کاراکتر" }),
    sale_price: z.string().min(1, { message: "لطفا رهن را وارد کنید" }),
    year: z.string().min(1, { message: "لطفا سال ساخت را وارد کنید" }),
    size: z
        .string()
        .min(1, { message: "لطفا متراژ را وارد کنید" })
        .max(10, { message: " کد ملی بیش از 10 کاراکتر" }),
    room_count: z.string().min(1, { message: "لطفا تعداد اتاق را وارد کنید" }),
    plate: z.string(),
    elevator: z.string().min(1, { message: "لطفا آسانسور را وارد کنید" }),
    parking: z.string().min(1, { message: "لطفا پارکینگ را وارد کنید" }),
    warehouse: z.string().min(1, { message: "لطفا انباری را وارد کنید" }),
    alley: z.string(),
    address: z.string(),
    type: z.string().min(1, { message: "لطفا نوع آگهی را وارد کنید" }),
    document: z.string().min(1, { message: "لطفا نوع سند را وارد کنید" }),
    city_id: z.number().min(1, { message: "لطفا شهر را وارد کنید" }),
    longitude: z.number().min(1, { message: "لطفا موقعیت را وارد کنید" }),
    latitude: z.number().min(1, { message: "لطفا موقعیت را وارد کنید" }),
    images: z.any(),
});

export default function SaleForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const [provinces, setProvinces] = useState(null);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [cityId, setCityId] = useState(null);
    const [price, setPrice] = useState("0")

    const [uploadedImages, setUploadedImages] = useState([]);


    const buildYear = [
        "قبل از 1387",
        "1387",
        "1388",
        "1389",
        "1390",
        "1391",
        "1392",
        "1393",
        "1394",
        "1395",
        "1396",
        "1397",
        "1398",
        "1399",
        "1400",
        "1401",
        "1402",
        "1403",
    ];

    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });


    async function getAllCities() {
        await getCities()
            .then((res) => {
                setProvinces(res.data.province);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const imageHandler = (e) => {
        const images = []
        setValue("images", Object.entries(e.target.files).map(([key, value]) => value));
        Object.entries(e.target.files).forEach(([key, value]) => {
            images.push(value.name);
            setUploadedImages(images);
        });
        toast.success("تصویر با موفقیت آپلود شد", {
            position: "top-center",
        });
    }

    const changeHandler = (e) => {
        setSelectedProvince(e.target.value);
    };

    useEffect(() => {
        if (!Object.keys(errors).length === 0) {
            toast.error("لطفا تمام فیلد ها را پر کنید", {
                position: "top-center",
            })
        } else return
    }, [errors])

    useEffect(() => {
        getAllCities();
    }, []);

    const handleCityId = (e) => {
        provinces &&
            provinces.map((province) =>
                selectedProvince
                    ? selectedProvince === province.name
                        ? province.cities.map((city) =>
                            city.name === e.target.value ? setValue("city_id", city.id) : null
                        )
                        : null
                    : null
            );
    };

    const submitHandler = async (data) => {
        const formDataToSend = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    formDataToSend.append(`${key}[${index}]`, item);
                });
            } else {
                formDataToSend.append(key, value);
            }
        });
        setLoading(true);

        await submitAd(formDataToSend)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("آگهی شما ثبت شد", {
                        position: "top-center",
                    });
                    setLoading(false);
                    router.push("/ads")
                } else {
                    toast.error("درخواست شما ثبت نشد");
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast.error("مشکل در برقراری ارتباط", {
                    position: "top-center",
                });
            });
    };

    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className="font-numerals w-full"
        >
            {Object.keys(errors).length ? (
                <p className="text-red mb-3">لطفا فیلد های مشخص شده را پر کنید.</p>
            ) : null}

            <div className="h-96 overflow-hidden w-full flex flex-col items-start mb-10 max-w-[60rem] rounded-lg z-20">
                <FieldLabel>موقعیت مکانی</FieldLabel>
                <AddAdMap setValue={setValue} />
                {errors.longitude || errors.latitude ? (
                    <p className="text-red mb-3 mt-4">لطفا موقعیت ملک را انتخاب کنید</p>
                ) : null}
            </div>

            <div className="flex md:gap-4 sm:flex-col md:flex-row">
                <div className="w-full flex flex-col items-start mb-10">
                    <FieldLabel>تصاویر (JPG, JPEG, PNG)</FieldLabel>
                    <label
                        for="dropzone-file"
                        className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ${errors.images ? "border-red" : " border-gray-300"
                            }`}
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {
                                uploadedImages.length > 0 ?

                                    <svg className="mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="40px" height="40px">
                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                                            <g transform="scale(5.33333,5.33333)">
                                                <path d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z" fill="#d0d0d0"></path>
                                                <path d="M34.586,14.586l-13.57,13.586l-5.602,-5.586l-2.828,2.828l8.434,8.414l16.395,-16.414z" fill="#959595"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    :
                                    <svg
                                        className="w-8 h-8 mb-4 text-gray-500 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                            }
                            <p className="mb-2 text-sm text-gray-500 ">تصاویر </p>
                            <p className="text-gray-600 text-sm"></p>
                        </div>
                        <input
                            onChange={imageHandler}
                            multiple
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                        />
                    </label>
                    <div className="flex flex-wrap gap-1 my-2">
                        {
                            uploadedImages?.map((image, index) => (
                                <p className="text-gray-500" key={index}>{image}/</p>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
                <div>
                    <input
                        type="hidden"
                        {...register("latitude")}
                        className="input input-bordered "
                        placeholder=" عرض را بنویسید"
                    />
                </div>
                <div>
                    <input
                        type="hidden"
                        {...register("longitude")}
                        className="input input-bordered "
                        placeholder=" طول را بنویسید"
                    />
                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>عنوان آگهی</FieldLabel>
                    <input
                        {...register("title")}
                        className={`input input-bordered ${errors.title ? "input-error" : null
                            }`}
                        placeholder=" عنوان آگهی را بنویسید"
                    />
                </div>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel> منطقه</FieldLabel>
                    <input
                        {...register("region")}
                        className={`input input-bordered ${errors.region ? "input-error" : null
                            }`}
                        placeholder=" منطقه"
                    />
                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel> استان</FieldLabel>
                    <select
                        {...register("state")}
                        onChange={changeHandler}
                        name="state"
                        className={`select select-bordered w-full ${errors.state ? "select-error" : null
                            }`}
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
                </div>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel> شهر</FieldLabel>
                    <select
                        onChange={handleCityId}
                        name="city_id"
                        className={`select select-bordered w-full ${errors.city_id ? "select-error" : null
                            }`}
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
                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel> پلاک</FieldLabel>
                    <input
                        {...register("plate")}
                        className={`input input-bordered ${errors.plate ? "input-error" : null
                            }`}
                        placeholder=" پلاک"
                    />
                </div>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel> کوچه</FieldLabel>
                    <input
                        {...register("alley")}
                        className={`input input-bordered ${errors.alley ? "input-error" : null
                            }`}
                        placeholder="کوچه"
                    />
                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel> خیابان</FieldLabel>
                    <input
                        {...register("street")}
                        className={`input input-bordered ${errors.street ? "input-error" : null
                            }`}
                        placeholder="خیابان"
                    />
                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row md:gap-3 w-full items-center">
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>  رهن</FieldLabel>
                    <input
                        {...register("sale_price")}
                        className={`input input-bordered ${errors.sale_price ? "input-error" : null
                            }`}
                        placeholder=" رهن به تومان"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <p className="mt-1 pt-1 text-gray-500">{price ? parseInt(price).toLocaleString() : 0} تومان</p>

                </div>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>متراژ</FieldLabel>
                    <input
                        {...register("size")}
                        className={`input input-bordered ${errors.size ? "input-error" : null
                            }`}
                        placeholder="متراژ"
                    />
                    <p className="mt-1 pt-1 text-gray-500">{"متر مربع"}</p>

                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>تعداد اتاق</FieldLabel>
                    <select
                        {...register("room_count")}
                        className={`select select-bordered ${errors.room_count ? "select-error" : null
                            }`}
                    >
                        <option selected disabled value="">
                            انتخاب کنید
                        </option>
                        {[...Array(4).keys()].map((room, index) => {
                            return (
                                <option value={room} key={index}>
                                    {room}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>طبقه</FieldLabel>
                    <input
                        {...register("floor")}
                        className={`select select-bordered ${errors.floor ? "select-error" : null
                            }`}
                        placeholder="طبقه واحد"
                    />
                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>سال ساخت </FieldLabel>
                    <select
                        {...register("year")}
                        className={`select select-bordered ${errors.year ? "select-error" : null
                            }`}
                    >
                        <option selected disabled value="">
                            سال ساخت
                        </option>
                        {buildYear.map((item, index) => {
                            return (
                                <option value={item} key={index}>
                                    {item}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>انباری </FieldLabel>
                    <select
                        {...register("warehouse")}
                        className={`select select-bordered ${errors.warehouse ? "select-error" : null
                            }`}
                    >
                        <option selected disabled value="">
                            انتخاب کنید
                        </option>
                        <option value="0">ندارد</option>
                        <option value="1">دارد</option>{" "}
                    </select>
                </div>
            </div>

            <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel> آسانسور</FieldLabel>
                    <select
                        {...register("elevator")}
                        className={`select select-bordered ${errors.elevator ? "select-error" : null
                            }`}
                    >
                        <option selected disabled value="">
                            انتخاب کنید
                        </option>
                        <option value="0">ندارد</option>
                        <option value="1">دارد</option>{" "}
                    </select>
                </div>
                <div className="w-full my-2 flex flex-col">
                    <FieldLabel>پارکینگ </FieldLabel>
                    <select
                        {...register("parking")}
                        className={`select select-bordered ${errors.parking ? "select-error" : null
                            }`}
                    >
                        <option selected disabled value="">
                            انتخاب کنید
                        </option>
                        <option value="0">ندارد</option>
                        <option value="1">دارد</option>{" "}
                    </select>
                </div>
            </div>

            <div className="w-full my-4 flex flex-col">
                <FieldLabel> نوع سند</FieldLabel>
                <select
                    {...register("document")}
                    className={`select select-bordered ${errors.document ? "select-error" : null
                        }`}
                >
                    <option selected disabled value="">
                        انتخاب کنید
                    </option>
                    <option value="promise">قول نامه</option>
                    <option value="single">تک برگ</option>
                    <option value="endowment">وقف</option>{" "}
                </select>
            </div>

            <div className="w-full my-4 flex flex-col">
                <FieldLabel>نوع آگهی </FieldLabel>
                <select
                    {...register("type")}
                    className={`select select-bordered ${errors.type ? "select-error" : null
                        }`}
                >
                    <option selected disabled value="">
                        انتخاب کنید
                    </option>
                    <option value="sale">فروش</option>
                    <option value="rent">اجاره</option>
                    <option value="mortgage">رهن</option>{" "}
                </select>
            </div>

            <div className="w-full my-4 flex flex-col">
                <FieldLabel> آدرس</FieldLabel>
                <textarea
                    {...register("address")}
                    rows={2}
                    className={`textarea textarea-bordered w-full ${errors.address ? "textarea-error" : null
                        }`}
                    placeholder="آدرس را بنویسید"
                />
                <p className="text-xs my-2">آدرس شما در آگهی نمایش داده نمیشود.</p>
            </div>

            <div className="w-full my-2 flex flex-col">
                <FieldLabel> توضیحات</FieldLabel>
                <textarea
                    {...register("description")}
                    rows={6}
                    className={`textarea textarea-bordered w-full whitespace-pre ${errors.description ? "textarea-error" : null
                        }`}
                    placeholder="توضیحات را بنویسید"
                />
            </div>

            <div className="flex gap-2 mt-4 w-full">
                <SubmitButton type="submit" loading={loading} text="ثبت آگهی" />
            </div>
        </form>
    );
}
