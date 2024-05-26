"use client";
import http from "./httpService";

let token;

if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}

const config = {
  headers: { Authorization: `Bearer ${token ? JSON.parse(token) : null}` },
};

export function getOtp(data) {
  return http.post("/send-code", data);
}

export function checkOtp(data) {
  return http.post("/verify", data);
}

export function completeProfile(data, token) {
  return http.post("/user/complete", data, {
    headers: { Authorization: `Bearer ${JSON.parse(token)}` },
  });
}

export function expertRequest(data) {
  return http.post("/user/request", data, config);
}

export function submitAd(data) {
  return http.post("/user/advertising", data, config);
}

export function getSingleAd(id) {
  return http.get("/advertising/" + id);
}

export function filterAds(data) {
  return http.get("/advertising", data, config);
}

export function getCities() {
  return http.get("/get-cities");
}

export function getDashboard() {
  return http.get("/user/dashboard", config);
}

export function getAds() {
  return http.get("/advertising");
}

export function getExperts() {
  return http.get("/home");
}

export function getAllExperts() {
  return http.get("/experts");
}

export function deleteUserAd(id) {
  return http.get("/user/advertising/" + id, config);
}

export function userAdsPerPage(page) {
  return http.get(`/user/advertising?page=${page}`, config);
}

export function adsPerPage(page) {
  return http.get(`/advertising?page=${page}`);
}

export function getUserAdvertising() {
  return http.get("/user/advertising", config);
}

export function updateAd(id, data) {
  return http.post("/user/advertising/" + id, data, config);
}

export function userShowAd(id) {
  return http.get("/user/advertising-show/" + id, config);
}
