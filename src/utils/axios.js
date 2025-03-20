import axios from "axios";

const instance = axios.create({
  baseURL: "https://momentum.redberryinternship.ge/api",
  headers: {
    Authorization: `Bearer 9e72cf26-fba7-440e-821f-45a6f95db303`,
    "Content-Type": "application/json",
  },
});

export default instance;
