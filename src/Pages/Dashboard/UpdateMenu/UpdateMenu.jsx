import { useForm } from "react-hook-form";
import Form from "../DashboardComponents/Form/Form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";

const UpdateMenu = () => {
  const [menu, refetch] = useMenu();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const categories = menu
    .map((item) => item.category)
    .filter((category, idx, arr) => arr.indexOf(category) === idx);

  const originalValue = menu.find((item) => item._id === id);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axiosSecure.patch(`/menu/${id}`, data);

    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        title: "Update!",
        text: "Item modified",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate(location.state?.from?.pathname || "/", { replace: true });
    }
  };

  return (
    <>
      <SectionTitle subHeading={"update menu item"} heading={"menu"} />
      <Form
        categories={categories}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        defaultValue={originalValue}
      />
    </>
  );
};

export default UpdateMenu;
