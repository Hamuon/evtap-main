"use client";
import { z } from "zod";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Map from "@/components/Map";
import Label from "@/components/atoms/labels/Label";
import { zodResolver } from "@hookform/resolvers/zod";
import SubmitButton from "@/components/atoms/buttons/SubmitButton";
import { expertRequest, getCities } from "@/services/authService";
import { useSearchParams } from "next/navigation";
const schema = z.object({
  state: z.string().min(1, { message: "لطفا استان را انتخاب کنید" }),
  city_id: z.string().min(1, { message: "لطفا شهر را انتخاب کنید" }),
  region: z
    .string()
    .max(100, { message: "منطقه بیش از 100 کاراکتر" }),
  street: z
    .string()
    .max(20, { message: "خیابان اصلی بیش از 20 کاراکتر" }),
  street_sec: z
    .string()
    .max(20, { message: "خیابان فرعی بیش از 20 کاراکتر" }),
  alley: z
    .string()
    .max(100, { message: " کوچه بیش از 100 کاراکتر" }),
  plate: z
    .string()
    .max(10, { message: " بلوک/پلاک بیش از 10 کاراکتر" }),
  floor: z
    .string()
    .max(10, { message: " طبقه/واحد بیش از 10 کاراکتر" }),
  address: z
    .string()
    .max(150, { message: " آدرس بیش از 150 کاراکتر" }),
});
export default function RequestModal({ nextStep, setReqData }) {
  const [provinces, setProvinces] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [cityId, setCityId] = useState("");

  const searchParams = useSearchParams()
  const address = searchParams.get("address");

  const [loading, setLoading] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: "",
      city_id: "",
      region: "",
      street: "",
      street_sec: "",
      alley: "",
      plate: "",
      floor: "",
      address: "",
    },
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

  useEffect(() => {
    getAllCities();
    address ? setValue("address", address) : null
  }, []);

  const changeHandler = (e) => {
    setSelectedProvince(e.target.value);
  };

  const handleCityId = (e) => {
    provinces &&
      provinces.map((province) =>
        selectedProvince
          ? selectedProvince === province.name
            ? province.cities.map((city) =>
              city.name === e.target.value ? setCityId(city.id) : null
            )
            : null
          : null
      );
  };

  const handleClick = async (data) => {
    const dataToSubmit = {
      city_id: cityId,
      region: data.region,
      street: data.street,
      street_sec: data.street_sec,
      alley: data.alley,
      plate: data.plate,
      floor: data.floor,
      address: data.address,
    };

    setLoading(true);

    await expertRequest(dataToSubmit)
      .then((res) => {
        if (res.status === 200) {
          setReqData(res);
          toast.success("درخواست شما ثبت شد", {
            position: "top-center",
          });
          setLoading(false);
          nextStep();
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
    <div className="modal-container z-50">
      <form
        onSubmit={handleSubmit(handleClick)}
        className="modal-form font-numerals relative sm:w-[350px] md:w-[450px] sm:-top-6 md:top-0 sm:h-96 md:h-auto sm:px-4 md:px-10 sm:bg-transparent md:bg-white sm:shadow-none md:shadow-xl"
      >
        {/* {errors.phone && <span className="modal-error">{errors.phone.message}</span>} */}
        <div className="flex flex-col items-start w-full relative">
          <div className="flex w-full justify-between mb-3 items-center">
            <span className="md:text-3xl font-semibold ">درخواست کارشناسی</span>
            <div
              className="tooltip tooltip-open md:tooltip-top sm:tooltip-right cursor-pointer z-50"
              data-tip={mapOpen ? "بازگشت به فرم" : "انتخاب از روی نقشه"}
              onClick={() => setMapOpen(!mapOpen)}
            >
              {!mapOpen ? (
                <div className="bg-white rounded-full p-2 m-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.2116 11.2119L10.1646 14.5589L13.5106 13.5109L14.5586 10.1639L11.2116 11.2119ZM9.02057 16.4519C8.82457 16.4519 8.63257 16.3749 8.48957 16.2329C8.29257 16.0349 8.22057 15.7439 8.30457 15.4789L9.89757 10.3899C9.97057 10.1539 10.1546 9.97089 10.3886 9.89789L15.4776 8.30489C15.7446 8.21989 16.0346 8.29289 16.2326 8.48989C16.4296 8.68789 16.5016 8.97889 16.4176 9.24389L14.8256 14.3329C14.7526 14.5679 14.5676 14.7519 14.3336 14.8249L9.24457 16.4179C9.17057 16.4409 9.09457 16.4519 9.02057 16.4519Z"
                      fill="black"
                    />
                    <mask
                      id="mask0_360_961"
                      maskUnits="userSpaceOnUse"
                      x="2"
                      y="2"
                      width="21"
                      height="21"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 2H22.7218V22.7217H2V2Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_360_961)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.361 3.5C7.475 3.5 3.5 7.476 3.5 12.361C3.5 17.247 7.475 21.222 12.361 21.222C17.247 21.222 21.222 17.247 21.222 12.361C21.222 7.476 17.247 3.5 12.361 3.5ZM12.361 22.722C6.648 22.722 2 18.074 2 12.361C2 6.648 6.648 2 12.361 2C18.074 2 22.722 6.648 22.722 12.361C22.722 18.074 18.074 22.722 12.361 22.722Z"
                        fill="black"
                      />
                    </g>
                  </svg>
                </div>
              ) : (
                <div className="bg-white rounded-full p-2 m-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Iconly/Regular/Outline/Document">
                      <g id="Document">
                        <path
                          id="Fill 1"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.7158 16.9739H8.49585C8.08185 16.9739 7.74585 16.6379 7.74585 16.2239C7.74585 15.8099 8.08185 15.4739 8.49585 15.4739H15.7158C16.1298 15.4739 16.4658 15.8099 16.4658 16.2239C16.4658 16.6379 16.1298 16.9739 15.7158 16.9739Z"
                          fill="black"
                        />
                        <path
                          id="Fill 3"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.7158 12.7874H8.49585C8.08185 12.7874 7.74585 12.4514 7.74585 12.0374C7.74585 11.6234 8.08185 11.2874 8.49585 11.2874H15.7158C16.1298 11.2874 16.4658 11.6234 16.4658 12.0374C16.4658 12.4514 16.1298 12.7874 15.7158 12.7874Z"
                          fill="black"
                        />
                        <path
                          id="Fill 5"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.2506 8.6106H8.49561C8.08161 8.6106 7.74561 8.2746 7.74561 7.8606C7.74561 7.4466 8.08161 7.1106 8.49561 7.1106H11.2506C11.6646 7.1106 12.0006 7.4466 12.0006 7.8606C12.0006 8.2746 11.6646 8.6106 11.2506 8.6106Z"
                          fill="black"
                        />
                        <g id="Group 9">
                          <mask
                            id="mask0_33437_4997"
                            maskUnits="userSpaceOnUse"
                            x="3"
                            y="2"
                            width="19"
                            height="20"
                          >
                            <path
                              id="Clip 8"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3 2.00037H21.1647V21.9102H3V2.00037Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0_33437_4997)">
                            <path
                              id="Fill 7"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.9088 3.50012L8.21976 3.50412C5.89176 3.51812 4.49976 4.95812 4.49976 7.35712V16.5531C4.49976 18.9681 5.90476 20.4101 8.25576 20.4101L15.9448 20.4071C18.2728 20.3931 19.6648 18.9511 19.6648 16.5531V7.35712C19.6648 4.94212 18.2608 3.50012 15.9088 3.50012ZM8.25676 21.9101C5.11276 21.9101 2.99976 19.7571 2.99976 16.5531V7.35712C2.99976 4.12412 5.04676 2.02312 8.21476 2.00412L15.9078 2.00012H15.9088C19.0528 2.00012 21.1648 4.15312 21.1648 7.35712V16.5531C21.1648 19.7851 19.1178 21.8871 15.9498 21.9071L8.25676 21.9101Z"
                              fill="black"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <Label htmlFor="request">
            برای ثبت درخواست لطفا آدرس دقیق را وارد کنید
          </Label>
          <div className="flex gap-2 w-full">
            <select
              {...register("state")}
              onChange={changeHandler}
              name="state"
              className={`select select-sm select-bordered w-full my-2 ${errors.state ? "select-error" : null
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
            <select
              {...register("city_id")}
              onChange={handleCityId}
              name="city_id"
              className={`select select-sm select-bordered w-full my-2 ${errors.city_id ? "select-error" : null
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
          <div className="flex gap-3 w-full">
            <div className="w-full  items-center">
              <input
                {...register("region")}
                className={`input input-sm input-bordered w-full my-2 ${errors.region ? "input-error" : null
                  }`}
                placeholder="محدوده؛ ولیعصر"
              />
            </div>
            <div className="w-full items-center">
              <input
                {...register("street")}
                className={`input input-sm input-bordered w-full my-2 ${errors.street ? "input-error" : null
                  }`}
                placeholder="خیابان اصلی"
              />
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <input
              {...register("street_sec")}
              className={`input input-sm input-bordered w-full my-2 ${errors.street_sec ? "input-error" : null
                }`}
              placeholder="خیابان فرعی (اختیاری)"
            />
            <input
              {...register("alley")}
              className={`input input-sm input-bordered w-full my-2 ${errors.alley ? "input-error" : null
                }`}
              placeholder="کوچه/مجتمع"
            />
          </div>
          <div className="flex gap-3 w-full">
            <input
              {...register("plate")}
              className={`input input-sm input-bordered w-full my-2 ${errors.plate ? "input-error" : null
                }`}
              placeholder=" پلاک/بلوک"
            />
            <input
              {...register("floor")}
              className={`input input-sm input-bordered w-full my-2 ${errors.floor ? "input-error" : null
                }`}
              placeholder="طبقه/واحد"
            />
          </div>
          <textarea
            {...register("address")}
            rows={2}
            className={`textarea textarea-bordered w-full my-2 ${errors.address ? "textarea-error" : null
              }`}
            placeholder="استان، شهر، منطقه، محل، خیابان اصلی، خیابان فرعی، کوچه، پلاک، طبقه"
          />

          <div className="flex gap-2 mt-2 w-full">
            <SubmitButton loading={loading} type="submit" text="ثبت درخواست" />
          </div>
          {mapOpen ? (
            <div className="w-full h-full flex absolute z-20 rounded-xl">
              <Map setValue={setValue} setMapOpen={setMapOpen} />
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
