import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

import { CardHeader, Typography, Button } from "@material-tailwind/react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Table from "../DashboardComponents/Table/Table";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalAmount = cart.reduce((acc, item) => item.price + acc, 0);
  const TABLE_HEAD = ["#", "image", "name", "price", "remove"];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/carts/${id}`);
        if (res.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Removed!",
            text: "Item removed from cart.",
            icon: "success",
          });
        }
      }
    });
  };

  const Table_Card_Header = (
    <CardHeader floated={false} shadow={false} className="rounded-none">
      <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <Typography variant="h5" color="blue-gray">
          Number of Items : {cart.length}
        </Typography>
        <Typography variant="h5" color="blue-gray">
          Total Amount : {totalAmount}
        </Typography>
        <Button className="flex items-center gap-3" size="sm">
          <CurrencyDollarIcon strokeWidth={2} className="h-4 w-4" />
          Make Payment
        </Button>
      </div>
    </CardHeader>
  );

  return (
    <>
      <SectionTitle heading="my cart" subHeading="customize cart" />
      <Table
        TABLE_HEAD={TABLE_HEAD}
        Table_Card_Header={Table_Card_Header}
        Table_Body_Data={cart}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Cart;
