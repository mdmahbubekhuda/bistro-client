import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin = false, isLoading: adminLoading = true } = useQuery({
    queryKey: [user?.email, "admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin?email=${user.email}`);
      return res.data.admin;
    },
  });

  return [isAdmin, adminLoading];
};

export default useAdmin;
