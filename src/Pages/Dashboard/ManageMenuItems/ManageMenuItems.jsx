import { CardHeader, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Table from "../DashboardComponents/Table/Table";
import { useLocation, useNavigate } from "react-router-dom";

const ManageMenuItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();

  const TABLE_HEAD = ["#", "image", "name", "price", "modify", "remove"];

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
        const res = await axiosSecure.delete(`/menu/${id}`);
        if (res.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Removed!",
            text: "Item removed from menu",
            icon: "success",
          });
        }
      }
    });
  };
  const handleUpdate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to modify menu item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then(async (result) => {
      if (result.isConfirmed) {
        navigate(`updateMenu/${id}`, {
          state: { from: location },
          replace: true,
        });
      }
    });
  };

  const Table_Card_Header = (
    <CardHeader floated={false} shadow={false} className="rounded-none">
      <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <Typography variant="h5" color="blue-gray">
          Number of Items : {menu.length}
        </Typography>
      </div>
    </CardHeader>
  );

  return (
    <>
      <SectionTitle heading={"menu"} subHeading={"manage menu items"} />

      <Table
        TABLE_HEAD={TABLE_HEAD}
        Table_Card_Header={Table_Card_Header}
        Table_Body_Data={menu}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default ManageMenuItems;
