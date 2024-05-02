"use client";
import { z } from "zod";
import React, { useState, useEffect } from "react";
import SubmitButton from "@/components/atoms/buttons/SubmitButton";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getCities } from "@/services/authService";

const schema = z.object({
  title: z.string(),
  from: z.string(),
  to: z.string(),
  status: z.string(),
  city_id: z.string(),
  have_image: z.string(),
  type: z.string(),
  from_sale_price: z.string(),
  to_sale_price: z.string(),
  document: z.string(),
  from_size: z.string(),
  to_size: z.string(),
  elevator: z.string(),
  parking: z.string(),
});

export default function AdSearchModal({ setSearch }) {
  const [provinces, setProvinces] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [cityId, setCityId] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  console.log(fromDate, toDate);

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleCityId = (e) => {
    setSelectedCity(e.target.value);
    provinces &&
      provinces.map((province) =>
        selectedCity
          ? province.cities.map((city) =>
              city.name === e.target.value ? setCityId(city.id) : null
            )
          : null
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

  const submitHandler = (data) => {
    const dataToSubmit = {
      city_id: cityId,
      from: fromToDate.from,
      to: fromToDate.to,
      // status: data.status,
      type: data.type,
      from_sale_price: data.from_sale_price,
      to_sale_price: data.to_sale_price,
      document: data.document,
      from_size: data.from_size,
      to_size: data.to_size,
      elevator: data.elevator,
      parking: data.parking,
    };
  };

  const changeHandler = (e) => {
    setFromToDate({
      ...fromToDate,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modal-container fixed backdrop-blur-xl h-screen flex items-center z-50 overflow-hidden">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="modal-form font-numerals relative sm:w-[350px] md:w-[450px]"
      >
        <div className="flex flex-col items-start w-full relative">
          <div className="flex w-full justify-between mb-3 items-center">
            <span className="md:text-xl font-semibold ">جستجو</span>
            <span onClick={() => setSearch(false)} className="cursor-pointer">
              <svg
                width="14"
                height="14"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4 3.29289L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L4.70711 4L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L4 4.70711L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="flex gap-2 w-full">
            <select
              onChange={(e) => setValue("type", e.target.value)}
              {...register("type")}
              className="select select-sm select-bordered w-full my-2"
            >
              <option selected disabled value="">
                نوع آگهی
              </option>
              <option value="rent">اجاره</option>
              <option value="mortgage">رهن کامل</option>
              <option value="sale">فروش</option>
            </select>
          </div>

          <div className="flex gap-3 w-full items-center">
            <input
              {...register("title")}
              className="input input-sm input-bordered w-full my-2"
              placeholder="عنوان"
            />
          </div>

          <div className="flex gap-2 w-full">
            {/* <select onChange={(e) => setValue("status", e.target.value)} {...register("status")} name='status' className="select select-sm select-bordered w-full my-2" >
                            <option selected disabled value="">وضعیت</option>
                            <option value="active">فعال</option>
                            <option value="inactive">غیر فعال</option>
                            <option value="pending">پرداخت شده</option>
                            <option value="pending">در انتظار</option>
                            <option value="complete">تکمیل شده</option>
                            <option value="saved">ذخیره شده</option>
                        </select> */}
            <select
              onChange={handleCityId}
              {...register("city_id")}
              name="city_id"
              className="select select-sm select-bordered w-full my-2"
            >
              <option selected disabled value="">
                شهر
              </option>
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

          <div className="flex gap-2 w-full">
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
          </div>

          <div className="flex gap-2 w-full">
            <select
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

          <div className="flex gap-2 w-full">
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
          </div>

          <div className="flex gap-3 w-full my-2">
            <DatePicker
              value={fromDate}
              onChange={setFromDate}
              name="from"
              placeholder="از تاریخ"
              style={{
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
              value={toDate}
              onChange={setToDate}
              name="to"
              placeholder="تا تاریخ"
              style={{
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
          </div>

          <div className="flex gap-3 w-full items-center">
            <input
              {...register("from_sale_price")}
              className="input input-sm input-bordered w-full my-2"
              placeholder="قیمت از"
            />
            <input
              {...register("to_sale_price")}
              className="input input-sm input-bordered w-full my-2"
              placeholder="قیمت تا"
            />
          </div>

          <div className="flex gap-3 w-full items-center">
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

          <div className="flex gap-2 mt-2 w-full">
            <SubmitButton type="submit" className="w-full" text="جستجو" />
          </div>
        </div>
      </form>
    </div>
  );
}
