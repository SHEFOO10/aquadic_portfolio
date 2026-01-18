import { axios } from "../axios";

export const getPositions = async () => {
  const response = await axios.get("/position");
  return response.data;
};

export const getPositionById = async (id) => {
  const res = await axios.get(`/position/${id}`);
  return res.data;
};