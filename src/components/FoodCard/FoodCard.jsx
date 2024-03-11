import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ foodItem }) => {
  const { name, image, recipe, price } = foodItem;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    if (!user) {
      return Swal.fire({
        title: "Not logged in !",
        text: "Please login to continue",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Proceed to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location }, replace: true });
        }
      });
    }

    const cartItem = {
      menuId: item._id,
      email: user.email,
      name,
      image,
      price,
    };

    axiosSecure.post("/carts", cartItem).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item added to cart",
          showConfirmButton: false,
          timer: 1500,
        });

        // refetch cart data to update count
        refetch();
      }
    });
  };

  return (
    <Card className="mt-6 w-72 lg:w-80">
      <CardHeader color="blue-gray" className="relative">
        <img src={image} alt="food-image" className="h-full" />
      </CardHeader>
      <CardBody className="flex-1">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{recipe}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between items-center">
        <Button onClick={() => handleAddToCart(foodItem)} ripple={true}>
          Add to Cart
        </Button>
        <Typography variant="h4">${price}</Typography>
      </CardFooter>
    </Card>
  );
};

FoodCard.propTypes = {
  foodItem: PropTypes.object.isRequired,
};

export default FoodCard;
