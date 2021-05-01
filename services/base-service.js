import { axiosInstance } from "../utils/axios";

export const BaseService = {
  Get: async (url) => {
    const res = await axiosInstance.get(`${url}`);
    if (res.status === 200) return res.data;
    return null;
  },
};
