"use client"
import ExpertsCard from "@/components/organisms/ExpertsCard";
import React, { useState, useEffect } from "react";
import { getAllExperts } from "@/services/authService";
import PageSpinner from "@/components/atoms/spinner/PageSpinner";

export default function ExpertsPage() {
  const [experts, setExperts] = useState([]);

  async function fetchExperts() {
    try {
      const response = await getAllExperts();
      setExperts(response.data.experts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchExperts();
  }, []);

  return (
    <main className="w-full mx-auto flex justify-center ">
      {
        experts && experts.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full md:container z-0 sm:px-4 md:px-0 pb-10">
            {experts.map((expert, index) => (
              <ExpertsCard
                key={index}
                expert_amount={expert.education}
                expert_img={`https://www.evtap.ir/uploads/${expert.avatar}`}
                city={expert.status === 'inactive' ? 'غیرفعال' : 'فعال'}
                co_op={expert.experience}
                expert_name={expert.first_name}
              />
            ))}
          </div>
          :
          <PageSpinner />
      }
    </main>
  );
}
