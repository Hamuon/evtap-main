"use client"
import React, { useState, useEffect } from 'react'
import TableLoading from './molecules/loadings/TableLoading'
import { getUserAdvertising } from '@/services/authService'
export default function AdTable() {

  const [user, setUser] = useState(null)
  console.log(user)

  async function getUserAds() {
    await getUserAdvertising().then(response => {
      console.log(response)
      setUser(response.data.advertising.data)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getUserAds()
  }, [])

  return (
    <div dir="rtl" className="overflow-x-auto w-full shadow-lg rounded-lg h-96 overflow-y-scroll border border-gray-200 py-4">
      <span className="font-black text-gray-600 px-4">آگهی های من</span>
      {
        user ?
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
                user?.map((ad, index) => (
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
    </div>
  )
}

