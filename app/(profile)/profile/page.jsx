"use client";
import React, { useState, useEffect } from "react";
import ReqTable from "@/components/ReqTable";
import ProfileIntro from "@/components/molecules/cards/ProfileIntro";
import ProfileMenu from "@/components/molecules/cards/ProfileMenu";
import { getDashboard } from "@/services/authService";
export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [adsCount, setAdsCount] = useState(0)

  async function getUser() {
    try {
      const response = await getDashboard();
      setUser(response.data.user[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);



  return (
    <main className="flex justify-center mx-auto w-full h-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:px-10 sm:px-10 md:container lg:gap-6 w-full h-full">
        {user && (
          <ProfileIntro
            user={user}
            name={user.full_name}
            phone={user.phone}
          />
        )}
        <div className="col-span-2 w-full flex items-start flex-col my-8 md:my-0 lg:my-0">
          <ReqTable user={user} />
        </div>
        <ProfileMenu reqClick={handleReqClick} adClick={handleAdClick} />
      </div>
    </main>
  );
}
