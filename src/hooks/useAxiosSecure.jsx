import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logout().then(() => {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "Please login again!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(
              "/login",
              { state: { from: location } },
              { replace: true }
            );
          });
        }
      }
    );
  }, [location, logout, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
