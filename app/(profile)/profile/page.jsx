"use client";
import React, { useState, useEffect } from "react";
import ReqTable from "@/components/ReqTable";
import AdTable from "@/components/AdTable";
import ProfileIntro from "@/components/molecules/cards/ProfileIntro";
import ProfileMenu from "@/components/molecules/cards/ProfileMenu";
import { getDashboard, getAds } from "@/services/authService";

export default function ProfilePage() {
  const [showReqTable, setShowReqTable] = useState(true);
  const [user, setUser] = useState(null);
  const [userAd, setUserAd] = useState(null);

  async function getUserAds() {
    try {
      const response = await getAds();
      setUserAd(response.data.advertising.data);
    } catch (error) {
      console.log("Error fetching user ads:", error);
    }
  }

  async function getUser() {
    try {
      const response = await getDashboard();
      setUser(response.data.user[0]);
    } catch (error) {
      console.log("Error fetching user:", error);
    }
  }

  useEffect(() => {
    getUser();
    getUserAds();
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
        {user && userAd && (
          <ProfileIntro
            name={user.first_name}
            phone={user.phone}
            request_ammount={user.requests.length}
            ads_ammount={userAd.length}
          />
        )}
        <div className="col-span-2 w-full flex items-start flex-col my-8 md:my-0 lg:my-0">
          {showReqTable ? <ReqTable /> : <AdTable />}
        </div>
        <ProfileMenu reqClick={handleReqClick} adClick={handleAdClick} />
      </div>
    </main>
  );
}
