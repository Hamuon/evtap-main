import SubmitButton from '@/components/atoms/buttons/SubmitButton'
import PriceRangeInput from '@/components/atoms/inputs/PriceRangeInput'
import React from 'react'

export default function AdSearchModal({ setSearch }) {
    const buildYear = ["قبل از 1387", "1387", "1388", "1389", "1390", "1391", "1392", "1393", "1394", "1395", "1396", "1397", "1398", "1399", "1400", "1401", "1402"]
    return (
        <div className='modal-container fixed backdrop-blur-xl h-screen flex items-center z-50 overflow-hidden'>
            <form className='modal-form font-numerals relative sm:w-[350px] md:w-[450px]'>
                {/* {errors.phone && <span className="modal-error">{errors.phone.message}</span>} */}
                <div className='flex flex-col items-start w-full relative'>
                    <div className='flex w-full justify-between mb-3 items-center'>
                        <span className='md:text-3xl font-semibold '>جستجو</span>
                        <span onClick={() => setSearch(false)} className='cursor-pointer'>
                            <svg width="14" height="14" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L4 3.29289L6.64645 0.646447C6.84171 0.451184 7.15829 0.451184 7.35355 0.646447C7.54882 0.841709 7.54882 1.15829 7.35355 1.35355L4.70711 4L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355C7.15829 7.54882 6.84171 7.54882 6.64645 7.35355L4 4.70711L1.35355 7.35355C1.15829 7.54882 0.841709 7.54882 0.646447 7.35355C0.451184 7.15829 0.451184 6.84171 0.646447 6.64645L3.29289 4L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="black" />
                            </svg>
                        </span>
                    </div>
                    <div className='flex gap-2 w-full'>
                        <select name='adType' className="select select-bordered w-full my-2" >
                            <option selected disabled value="">نوع آگهی</option>
                            <option value="اجاره">اجاره</option>
                            <option value="رهن کامل">رهن کامل</option>
                            <option value="فروش">فروش</option>
                        </select>
                        <select name='build' className="select select-bordered w-full my-2" >
                            <option selected disabled value="">سال ساخت</option>
                            {
                                buildYear.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })
                            }
                        </select>
                        <select name='rooms' className="select select-bordered w-full my-2" >
                            <option selected disabled value="">تعداد اتاق</option>
                            {
                                [...Array(4).keys()].map((room, index) => {
                                    return <option value={room} key={index}>{room}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='flex gap-3 w-full items-center'>
                        <input className="input input-bordered w-full my-2" placeholder="منطقه" />
                    </div>
                    <div className='flex gap-3 w-full items-center'>
                        <PriceRangeInput
                            initialMin="200000000"
                            initialMax="1000000000"
                            min="200000000"
                            max="1000000000"
                            step="100000000"
                            priceCap="10000000"
                            label="بازه قیمت"
                        />
                    </div>
                    <div className='flex gap-3 w-full items-center'>
                        <PriceRangeInput
                            initialMin="60"
                            initialMax="500"
                            min="60"
                            max="500"
                            step="10"
                            priceCap="100"
                            label="بازه متراژ"
                        />
                    </div>
                    <div className='flex gap-2 mt-2 w-full'>
                        <SubmitButton type="submit" className="w-full" text="جستجو" />
                    </div>
                </div>
            </form >
        </div >
    )
}
