import axios from "../utils/axios";

export const get_departments = async () => {
  const response = await axios.get("/departments");
  return response.data;
};

