import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  const menuCategories = menu
    .map((item) => item.category)
    .filter((cat, idx, arr) => arr.indexOf(cat) === idx)
    .sort();

  return { menu, refetch, menuCategories };
};
export default useMenu;
