import PropTypes from "prop-types";
import { TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";

import {
  Card,
  Typography,
  CardBody,
  IconButton,
  Tooltip,
  Avatar,
} from "@material-tailwind/react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const Table = ({
  TABLE_HEAD,
  Table_Card_Header,
  Table_Body_Data,
  handleAdmin,
  handleDelete,
  handleUpdate,
}) => {
  return (
    <Card className="h-full w-full">
      {Table_Card_Header && Table_Card_Header}
      <CardBody className="px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 capitalize"
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
            {Table_Body_Data.map((tableData, index) => {
              const isLast = index === Table_Body_Data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={tableData._id}>
                  <td className={classes}>{index + 1}</td>

                  {TABLE_HEAD.includes("image") && (
                    <td className={classes}>
                      <Avatar
                        src={tableData.image}
                        variant="rounded"
                        withBorder={true}
                        color="blue-gray"
                        size="lg"
                        className="p-0.5"
                      />
                    </td>
                  )}

                  {TABLE_HEAD.includes("name") && (
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tableData.name}
                      </Typography>
                    </td>
                  )}
                  {TABLE_HEAD.includes("price") && (
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tableData.price}
                      </Typography>
                    </td>
                  )}
                  {TABLE_HEAD.includes("email") && (
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tableData.email}
                      </Typography>
                    </td>
                  )}

                  {handleAdmin && (
                    <td className={classes}>
                      {tableData?.role === "admin" ? (
                        "ADMIN"
                      ) : (
                        <Tooltip content="Make Admin">
                          <IconButton
                            onClick={() => handleAdmin(tableData._id)}
                            variant="text"
                          >
                            <UserPlusIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      )}
                    </td>
                  )}
                  {handleUpdate && (
                    <td className={classes}>
                      <Tooltip content="Modify">
                        <IconButton
                          onClick={() => handleUpdate(tableData._id)}
                          variant="text"
                          color="blue"
                        >
                          <ArrowPathIcon className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  )}
                  {handleDelete && (
                    <td className={classes}>
                      <Tooltip content="Remove">
                        <IconButton
                          onClick={() => handleDelete(tableData._id)}
                          variant="text"
                          color="red"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

Table.propTypes = {
  TABLE_HEAD: PropTypes.array.isRequired,
  Table_Card_Header: PropTypes.node,
  Table_Body_Data: PropTypes.array.isRequired,
  handleAdmin: PropTypes.func,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default Table;
