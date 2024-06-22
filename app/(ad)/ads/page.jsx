"use client";
import React, { useContext, useEffect, useState } from "react";
import AdCard from "@/components/molecules/cards/AdCard";
import FilteredAdsContext from "@/context/FilteredAdsProvider";
import { getAds } from "@/services/authService";
import { adsPerPage } from "@/services/authService";
import PageSpinner from "@/components/atoms/spinner/PageSpinner";
import SearchSideBar from "@/components/organisms/forms/SearchSideBar";
export default function Ads() {
  const { filteredAds } = useContext(FilteredAdsContext);

  const [loading, setLoading] = useState(false);
  const [ads, setAds] = useState(filteredAds ? filteredAds : []);
  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState();


  const getAllAds = async () => {
    await getAds()
      .then((response) => {
        setPageLength(response.data.advertising.links.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAdsPerPage = async () => {
    setLoading(true);
    await adsPerPage(page)
      .then((response) => {
        setAds(response.data.advertising.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  useEffect(() => {
    getAllAds();
    getAdsPerPage();
  }, [page]);

  return (
    <div className="w-full flex justify-center md:container mx-auto">
      <div className="xl:w-1/5 lg:w-1/4 xs:hidden sm:hidden md:hidden lg:block xl:block">
        <SearchSideBar />
      </div>
      <main className="flex flex-col items-center justify-between h-screen xl:w-4/5 lg:w-3/4 sm:w-full">
        {ads && ads.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-full z-0 sm:px-4 md:px-0 pb-10">
            {ads?.map((ad, index) => (
              <AdCard
                key={index}
                id={ad.id}
                type={
                  ad.type === "mortgage"
                    ? "رهن"
                    : ad.type === "sale"
                      ? "فروش"
                      : ad.type === "rent"
                        ? "اجاره"
                        : null
                }
                title={ad.title}
                region={ad.region}
                price={
                  ad.type === "mortgage"
                    ? ad.sale_price
                    : ad.type === "sale"
                      ? ad.sale_price
                      : ad.type === "rent"
                        ? ad.rent
                        : null
                }
                time={formatDate(ad.updated_at)}
                ad_img={
                  ad.images
                    ? `https://new.evtap.ir/uploads/${ad.images[0]}`
                    : "/media/imgHolder.jpg"
                }
              />
            ))}
          </div>
        ) : (
          <PageSpinner />
        )}
        <div className="join pb-10 font-numerals">
          <button
            disabled={page >= pageLength || loading}
            onClick={() => setPage((prevState) => prevState + 1)}
            className="join-item btn"
          >
            «
          </button>
          <button className="join-item btn">
            <span className="ml-1">صفحه</span> {page}
          </button>
          <button
            disabled={page <= 1 || loading}
            onClick={() => setPage((prevState) => prevState - 1)}
            className="join-item btn"
          >
            »
          </button>
        </div>
      </main>
    </div>
  );
}
