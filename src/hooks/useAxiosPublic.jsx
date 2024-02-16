import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-server-beta.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
