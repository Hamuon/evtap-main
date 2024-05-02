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
const AddAdMap = dynamic(() => import("@/components/AddAdMap"), { ssr: false });

// const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];

const imageSchema = z
  .any()
  .refine((files) => files?.length >= 1, { message: "عکس آگهی الزامیست" })
  .refine(
    (file) =>
      file.length == 1
        ? ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type)
          ? true
          : false
        : true,
    "فرمت فایل نامعتبر است"
  );

const schema = z.object({
  title: z
    .string()
    .min(1, { message: "لطفا عنوان را وارد کنید" })
    .max(150, { message: "نام بیش از 100 کاراکتر" }),
  description: z
    .string()
    .min(1, { message: "لطفا توضیحات را وارد کنید" })
    .max(150, { message: "نام خانوادگی بیش از 100 کاراکتر" }),
  region: z
    .string()
    .min(1, { message: "لطفا  منطقه را وارد کنید" })
    .max(150, { message: " کد ملی بیش از 10 کاراکتر" }),
  floor: z.string().min(1, { message: "لطفا  طبقه را وارد کنید" }),
  street: z
    .string()
    .min(1, { message: "لطفا  خیابان را وارد کنید" })
    .max(150, { message: " کد ملی بیش از 10 کاراکتر" }),
  sale_price: z.string().min(1, { message: "لطفا قیمت کل را وارد کنید" }),
  year: z.string().min(1, { message: "لطفا سال ساخت را وارد کنید" }),
  size: z
    .string()
    .min(1, { message: "لطفا متراژ را وارد کنید" })
    .max(10, { message: " کد ملی بیش از 10 کاراکتر" }),
  room_count: z.string().min(1, { message: "لطفا تعداد اتاق را وارد کنید" }),
  plate: z.string(),
  elevator: z.string(),
  parking: z.string(),
  warehouse: z.string(),
  alley: z.string(),
  address: z.string(),
  type: z.string().min(1, { message: "لطفا نوع آگهی را وارد کنید" }),
  document: z.string().min(1, { message: "لطفا نوع سند را وارد کنید" }),
  city_id: z.string(),
  longitude: z.number(),
  latitude: z.number(),
  images: imageSchema,
});

export default function SaleForm() {
  const [loading, setLoading] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityId, setCityId] = useState("");

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
  ];

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  console.log(errors);

  const submitHandler = async (data) => {
    const dataToSubmit = {
      title: data.title,
      description: data.description,
      images: data.images,
      longitude: data.longitude,
      latitude: data.latitude,
      region: data.region,
      floor: data.floor,
      street: data.street,
      sale_price: data.sale_price,
      year: data.year,
      size: data.size,
      room_count: data.room_count,
      plate: data.plate,
      elevator: data.elevator,
      parking: data.parking,
      warehouse: data.warehouse,
      alley: data.alley,
      address: data.address,
      type: data.type,
      document: data.document,
      city_id: cityId,
    };
    console.log(dataToSubmit);
    setLoading(true);

    await submitAd(dataToSubmit)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          toast.success("آگهی شما ثبت شد", {
            position: "top-center",
          });
          setLoading(false);
          nextStep();
        } else {
          toast.error("درخواست شما ثبت نشد");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("مشکل در برقراری ارتباط", {
          position: "top-center",
        });
      });
  };

  const handleCityId = (e) => {
    provinces &&
      provinces.map((province) =>
          province.cities.map((city) =>
              city.name === e.target.value ? setCityId(city.id) : null
            )
          
      );
  };

  async function getAllCities() {
    await getCities()
      .then((res) => {
        setProvinces(res.data.province);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAllCities();
  }, []);

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
          <FieldLabel>عکس اصلی</FieldLabel>
          <label
            for="dropzone-file"
            className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ${
              errors.images ? "border-red" : " border-gray-300"
            }`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
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
              <p className="mb-2 text-sm text-gray-500 ">عکس اصلی</p>
              <p className="text-gray-600 text-sm"></p>
            </div>
            <input
              {...register("images")}
              multiple
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        </div>

        {/* <div className="w-full flex flex-col items-start mb-10">
                    <FieldLabel>تصاویر بیشتر </FieldLabel>
                    <label for="dropzone-file1" className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ${errors.images ? "border-red" : " border-gray-300"}`}>
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 ">تصاویر بیشتر</p>
                            <p className='text-gray-600 text-sm'></p>
                        </div>
                        <input {...register("images")} multiple id="dropzone-file1" type="file" className="hidden" />
                    </label>
                </div> */}
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
            className={`input input-bordered ${
              errors.title ? "input-error" : null
            }`}
            placeholder=" عنوان آگهی را بنویسید"
          />
        </div>
        <div className="w-full my-2 flex flex-col">
          <FieldLabel> منطقه</FieldLabel>
          <input
            {...register("region")}
            className={`input input-bordered ${
              errors.region ? "input-error" : null
            }`}
            placeholder=" منطقه"
          />
        </div>
      </div>

      <div className="w-full my-2 flex flex-col">
        <FieldLabel> شهر</FieldLabel>
        <select
          onChange={handleCityId}
          {...register("city_id")}
          className={`select select-bordered ${
            errors.city_id ? "select-error" : null
          }`}
        >
          
          {provinces &&
            provinces.map((province) =>
              province.cities.map((city, index) => (
                
                <option id={city.id} key={index} value={city.name}>
                  {city.name}
                </option>
              ))
            )}
        </select>
      </div>

      <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
        <div className="w-full my-2 flex flex-col">
          <FieldLabel> پلاک</FieldLabel>
          <input
            {...register("plate")}
            className={`input input-bordered ${
              errors.plate ? "input-error" : null
            }`}
            placeholder=" پلاک"
          />
        </div>
        <div className="w-full my-2 flex flex-col">
          <FieldLabel> کوچه</FieldLabel>
          <input
            {...register("alley")}
            className={`input input-bordered ${
              errors.alley ? "input-error" : null
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
            className={`input input-bordered ${
              errors.street ? "input-error" : null
            }`}
            placeholder="خیابان"
          />
        </div>
      </div>

      <div className="flex sm:flex-col md:flex-row md:gap-3 w-full items-center">
        <div className="w-full my-2 flex flex-col">
          <FieldLabel> قیمت کل</FieldLabel>
          <input
            {...register("sale_price")}
            className={`input input-bordered ${
              errors.sale_price ? "input-error" : null
            }`}
            placeholder=" قیمت به تومان"
          />
        </div>
        <div className="w-full my-2 flex flex-col">
          <FieldLabel>متراژ</FieldLabel>
          <input
            {...register("size")}
            className={`input input-bordered ${
              errors.size ? "input-error" : null
            }`}
            placeholder="متر مربع"
          />
        </div>
      </div>

      <div className="flex sm:flex-col md:flex-row md:gap-3 w-full">
        <div className="w-full my-2 flex flex-col">
          <FieldLabel>تعداد اتاق</FieldLabel>
          <select
            {...register("room_count")}
            className={`select select-bordered ${
              errors.room_count ? "select-error" : null
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
            className={`select select-bordered ${
              errors.floor ? "select-error" : null
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
            className={`select select-bordered ${
              errors.year ? "select-error" : null
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
            className={`select select-bordered ${
              errors.warehouse ? "select-error" : null
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
            className={`select select-bordered ${
              errors.elevator ? "select-error" : null
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
            className={`select select-bordered ${
              errors.parking ? "select-error" : null
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
          className={`select select-bordered ${
            errors.document ? "select-error" : null
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
          className={`select select-bordered ${
            errors.type ? "select-error" : null
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
          className={`textarea textarea-bordered w-full ${
            errors.address ? "textarea-error" : null
          }`}
          placeholder="آدرس را بنویسید"
        />
      </div>

      <div className="w-full my-2 flex flex-col">
        <FieldLabel> توضیحات</FieldLabel>
        <textarea
          {...register("description")}
          rows={2}
          className={`textarea textarea-bordered w-full ${
            errors.description ? "textarea-error" : null
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
