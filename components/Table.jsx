"use client"
import React, { useState, useEffect } from 'react'
import { getDashboard } from '@/services/authService'
export default function Table() {

  const [user, setUser] = useState(null)

  async function getUser() {
    await getDashboard().then(response => {
      setUser(response.data.user[0].requests)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div dir="rtl" className="overflow-x-auto w-full shadow-lg rounded-lg h-96 overflow-y-scroll border border-gray-200">
      <table className="table " >
        {/* head */}
        <thead>
          <tr>
            <th>آدرس</th>
            <th>وضعیت</th>
            <th>شهر</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {
            user?.map((request, index) => (
              <tr key={index} className="">
                <td>{request.address}</td>
                <td>{request.status_title}</td>
                <td>{request.city.name}</td>
                <td className="text-gray-400">مشاهده</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

