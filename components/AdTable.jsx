"use client"
import React, { useEffect } from 'react'
import TableLoading from './molecules/loadings/TableLoading'
import { userAdsPerPage } from '@/services/authService'
export default function AdTable({ loading, setLoading, pageLength, setUserAds, userAds, page, setPage }) {

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
              </tr>
            </thead>
            <tbody>
              {
                userAds?.map((ad, index) => (
                  <tr key={index} className="">
                    <td>{ad?.title}</td>
                    <td>{ad?.type}</td>
                    <td>{ad?.city?.name}</td>
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

