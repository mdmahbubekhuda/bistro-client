import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://bistro-server-beta.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const statusCode = error.response.status;
        if (statusCode === 401 || statusCode === 403) {
          await logout();
          Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Please login again!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/login", { state: { from: location } }, { replace: true });
        return Promise.reject(error);
      }
    );
  }, [logout, location, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
