import http from "./httpService";

const token = localStorage.getItem("token");

const config = {
  method: "POST",
  headers: { Authorization: `Bearer ${token ? JSON.parse(token) : ""}` },
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

export function getCities() {
  return http.get("/get-cities");
}
