import axios from "../utils/axios";

export const get_priorities = async () => {
  const response = await axios.get("/priorities");
  return response.data;
};
