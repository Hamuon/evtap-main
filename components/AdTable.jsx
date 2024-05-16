"use client"
import React, { useEffect } from 'react'
import TableLoading from './molecules/loadings/TableLoading'
import { userAdsPerPage, deleteUserAd } from '@/services/authService'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
export default function AdTable({ loading, setLoading, pageLength, setUserAds, userAds, page, setPage }) {
  const router = useRouter()
  console.log(userAds);
  const getUserAdsPerPage = async () => {
    setLoading(true)

    await userAdsPerPage(page).then((res) => {
      setUserAds(res.data.advertising.data);
      setLoading(false)

    }).catch((err) => {
      console.log(err);
      setLoading(false)

    })
  }

  useEffect(() => {
    getUserAdsPerPage()
  }, [page])

  const handleDelete = async (e) => {
    await deleteUserAd(e.target.id).then((res) => {
      if (res.status === 200) {
        toast.success('آگهی حذف شد', {
          position: "top-center"
        })
        router.refresh()
      } else {
        toast.error('درخواست انجام نشد', {
          position: "top-center"
        })
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div dir="rtl" className="overflow-x-auto w-full shadow-lg rounded-lg h-96 overflow-y-scroll border border-gray-200 py-4">
      <span className="font-black text-gray-600 px-4">آگهی های من</span>
      {
        userAds ?
          <table className="table mt-4" >
            {/* head */}
            <thead>
              <tr>
                <th>عنوان</th>
                <th>نوع آگهی</th>
                <th>شهر</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {
                userAds?.map((ad, index) => (
                  <tr key={index} className="">
                    <td>{ad?.title}</td>
                    <td>{ad?.type}</td>
                    <td>{ad?.city?.name}</td>
                    <td>
                      <div className='cursor-pointer' onClick={handleDelete}>
                        <Image src="/icons/trash.svg" id={ad.id} width={20} height={20} alt="trash" />
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          :
          <TableLoading />

      }
      <div className="join pb-3 font-numerals w-full flex justify-center h-full items-end">
        <button disabled={page >= pageLength || loading} onClick={() => setPage(prevState => prevState + 1)} className="join-item btn">«</button>
        <button className="join-item btn"><span className='ml-1'>صفحه</span> {page}</button>
        <button disabled={page <= 1 || loading} onClick={() => setPage(prevState => prevState - 1)} className="join-item btn">»</button>
      </div>
    </div>
  )
}

