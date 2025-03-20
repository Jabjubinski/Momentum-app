import axios from "axios";

const token = "9e7958b3-cc75-42f2-b018-ab830bad896a";

const instance = axios.create({
  baseURL: "https://momentum.redberryinternship.ge/api",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export default instance;
