import { axios } from "../axios";

export const getBlogs = async (page = 1) => {
  const response = await axios.get(`/blogs`, {
    params: { page },
  });

  return response.data;
};
