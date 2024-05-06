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

export function completeProfile(data) {
  return http.post("/user/complete", data, config);
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
