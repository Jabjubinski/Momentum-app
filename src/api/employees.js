import axios from "../utils/axios";

export const post_employees = async ({ formData }) => {
  const response = await axios.post("/employees", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const get_employees = async () => {
  const response = await axios.get("/employees");
  return response.data;
};
