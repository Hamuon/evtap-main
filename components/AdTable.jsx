"use client"
import React, { useState, useEffect } from 'react'
import TableLoading from './molecules/loadings/TableLoading'
import { adPerPage, getUserAdvertising } from '@/services/authService'
export default function AdTable({ user }) {
  const [loading, setLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [pageLength, setPageLength] = useState()
  const [userAds, setUserAds] = useState(null)

  async function getUserAds() {
    await getUserAdvertising().then(response => {
      setPageLength(response.data.advertising.links.length)
    }).catch(error => {
      console.log(error)
    })
  }

  const getAdsPerPage = async () => {
    setLoading(true)
    await adPerPage(page)
      .then(response => {
        console.log(response);
        setUserAds(response.data.advertising.data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }


  useEffect(() => {
    getUserAds()
    getAdsPerPage()
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
                user?.advertisings.map((ad, index) => (
                  <tr key={index} className="">
                    <td>{ad.title}</td>
                    <td>{ad.type}</td>
                    <td>{ad.city.name}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          :
          <TableLoading />

      }
      <div className="join pb-10 font-numerals">
        <button disabled={page >= pageLength || loading} onClick={() => setPage(prevState => prevState + 1)} className="join-item btn">«</button>
        <button className="join-item btn"><span className='ml-1'>صفحه</span> {page}</button>
        <button disabled={page <= 1 || loading} onClick={() => setPage(prevState => prevState - 1)} className="join-item btn">»</button>
      </div>
    </div>
  )
}

