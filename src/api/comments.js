import axios from "../utils/axios";

export const get_comments = async ({ taskId }) => {
  const response = await axios.get(`/tasks/${taskId}/comments`);
  return response.data;
};

export const post_comment = async ({
  taskId,
  parent_id,
  text,
}) => {
  const response = await axios.post(`/tasks/${taskId}/comments`, {
    parent_id: parent_id,
    text: text,
  });
  return response.data;
};
