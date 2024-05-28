"use client";
import React, { useState, useEffect } from "react";
import ReqTable from "@/components/ReqTable";
import AdTable from "@/components/AdTable";
import ProfileIntro from "@/components/molecules/cards/ProfileIntro";
import ProfileMenu from "@/components/molecules/cards/ProfileMenu";
import { getDashboard } from "@/services/authService";
import { getUserAdvertising } from '@/services/authService'
export default function ProfilePage() {
  const [showReqTable, setShowReqTable] = useState(true);
  const [user, setUser] = useState(null);
  const [pageLength, setPageLength] = useState()
  const [userAds, setUserAds] = useState(null)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [adsCount, setAdsCount] = useState(0)

  async function getUser() {
    try {
      const response = await getDashboard();
      setUser(response.data.user[0]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserAds() {
    await getUserAdvertising().then((res) => {
      setAdsCount(res.data.advertising.data.length)
      setPageLength(res.data.advertising.links.length)
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getUser();
    getUserAds()
  }, []);


  const handleReqClick = () => {
    setShowReqTable(true);
  };

  const handleAdClick = () => {
    setShowReqTable(false);
  };

  return (
    <main className="flex justify-center mx-auto w-full h-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:px-10 sm:px-10 md:container lg:gap-6 w-full h-full">
        {user && (
          <ProfileIntro
            user={user}
            name={user.full_name}
            phone={user.phone}
            adsCount={adsCount}
          />
        )}
        <div className="col-span-2 w-full flex items-start flex-col my-8 md:my-0 lg:my-0">
          {showReqTable ? <ReqTable user={user} /> : <AdTable setLoading={setLoading} loading={loading} pageLength={pageLength} setUserAds={setUserAds} userAds={userAds} user={user} page={page} setPage={setPage} />}
        </div>
        <ProfileMenu reqClick={handleReqClick} adClick={handleAdClick} />
      </div>
    </main>
  );
}
