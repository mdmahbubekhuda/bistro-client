import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {
  CurrencyDollarIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "react-query";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users", { withCredentials: true });
    return res.data;
  });

  const TABLE_HEAD = ["#", "Name", "Email", "Role", "Action"];

  const handleAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to promote to Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Admin",
              text: "User successfully promoted to Admin.",
              icon: "success",
            });
          }
        });
      }
    });
  };

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Removed!",
              text: "User successfully removed.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <SectionTitle heading="users" subHeading="manage users" />
      <div>
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <Typography variant="h5" color="blue-gray">
                Total Users : {users.length}
              </Typography>
              <Typography variant="h5" color="blue-gray">
                Total Amount :
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
                {users.map(({ _id, name, email, role }, index) => {
                  const isLast = index === users.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>{index + 1}</td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
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
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        {role === "admin" ? (
                          "ADMIN"
                        ) : (
                          <Tooltip content="Make Admin">
                            <IconButton
                              onClick={() => handleAdmin(_id)}
                              variant="text"
                            >
                              <UserPlusIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        )}
                      </td>
                      <td className={classes}>
                        <Tooltip content="Remove User">
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

export default Users;
