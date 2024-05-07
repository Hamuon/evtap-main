"use client"
import React, { useState, useEffect } from 'react'
import { getDashboard } from '@/services/authService'
import TableLoading from './molecules/loadings/TableLoading'
export default function ReqTable({user}) {


  return (
    <div dir="rtl" className="overflow-x-auto w-full shadow-lg rounded-lg h-96 overflow-y-scroll border border-gray-200 py-4">
      <span className="font-black text-gray-600 px-4">درخواست های من</span>

      {
        user ?
          <table className="table mt-4" >
            {/* head */}
            <thead>
              <tr>
                <th>آدرس</th>
                <th>وضعیت</th>
                <th>شهر</th>
              </tr>
            </thead>
            <tbody>
              {
                user?.requests.map((request, index) => (
                  <tr key={index} className="">
                    <td>{request.address}</td>
                    <td>{request.status_title}</td>
                    <td>{request.city.name}</td>
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

