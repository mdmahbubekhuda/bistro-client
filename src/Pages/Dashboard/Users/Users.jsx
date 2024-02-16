import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

import { CardHeader, Typography, Button } from "@material-tailwind/react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import Table from "../DashboardComponents/Table/Table";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users", { withCredentials: true });
    return res.data;
  });

  const TABLE_HEAD = ["#", "name", "email", "role", "remove"];

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
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/users/${id}`);
        if (res.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Removed!",
            text: "User successfully removed.",
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
          Total Users : {users.length}
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
      <SectionTitle heading="users" subHeading="manage users" />
      <Table
        TABLE_HEAD={TABLE_HEAD}
        Table_Card_Header={Table_Card_Header}
        Table_Body_Data={users}
        handleAdmin={handleAdmin}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Users;
