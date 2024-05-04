import ExpertsCard from "@/components/organisms/ExpertsCard";
import React from "react";

export default function ExpertsPage() {
  return (
    <main className='w-full mx-auto flex justify-center h-screen'>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full md:container z-0 sm:px-4 md:px-0">
        <ExpertsCard
          expert_amount="6"
          expert_img=""
          city="تبریز"
          co_op="8"
          expert_name="محمدرضا احمدی"
        />
        <ExpertsCard
          expert_amount="6"
          expert_img=""
          city="تبریز"
          co_op="8"
          expert_name="محمدرضا احمدی"
        />
        <ExpertsCard
          expert_amount="6"
          expert_img=""
          city="تبریز"
          co_op="8"
          expert_name="محمدرضا احمدی"
        />
        <ExpertsCard
          expert_amount="6"
          expert_img=""
          city="تبریز"
          co_op="8"
          expert_name="محمدرضا احمدی"
        />
      </div>
    </main>
  );
}