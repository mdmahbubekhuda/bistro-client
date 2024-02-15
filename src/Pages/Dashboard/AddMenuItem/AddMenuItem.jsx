import Swal from "sweetalert2";
import Form from "../../../components/Form/Form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import { useForm } from "react-hook-form";

const imageAPIKey = import.meta.env.VITE_IMAGE_HOSTING;
const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageAPIKey}`;

const AddMenuItem = () => {
  const { user } = useAuth();
  const [menu, refetch] = useMenu();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const categories = menu
    .map((category) => category.category)
    .filter((item, idx, arr) => arr.indexOf(item) === idx);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // destructured photo and price
    const { photo, price, ...rest } = data;

    // uploading image to imagebb server
    const imgRes = await axiosPublic.post(
      imageHostingURL,
      { image: photo[0] },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    // post data to mongodb server
    if (imgRes.data.success) {
      const image = imgRes.data.data.display_url;
      const menuItem = {
        ...rest,
        price: parseFloat(price),
        image,
        postedBy: { name: user.displayName, email: user.email },
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        Swal.fire({
          title: "Item added successfully",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,

          showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutUp
              animate__faster
            `,
          },
        });
        reset();
        refetch();
        console.log(photo, image, menuItem);
      }
    }
  };

  return (
    <div>
      <SectionTitle heading={"menu"} subHeading={"add an item"} />
      <Form
        categories={categories}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};

export default AddMenuItem;
