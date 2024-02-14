import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { CurrencyDollarIcon, TrashIcon } from "@heroicons/react/24/solid";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalAmount = cart.reduce((acc, item) => item.price + acc, 0);
  const TABLE_HEAD = ["#", "Image", "Name", "Price", "Action"];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Removed!",
              text: "Item removed from cart.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <SectionTitle heading="my cart" subHeading="customize cart" />
      <div>
        <Card className="h-full w-full">
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
          <CardBody className="px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cart.map(({ _id, name, image, price }, index) => {
                  const isLast = index === cart.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>{index + 1}</td>
                      <td className={classes}>
                        <Avatar
                          src={image}
                          variant="rounded"
                          withBorder={true}
                          color="blue-gray"
                          size="lg"
                          className="p-0.5"
                        />
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Remove Item">
                          <IconButton
                            onClick={() => handleDelete(_id)}
                            variant="text"
                            color="red"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Cart;
