import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Avatar,
  Badge,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import "animate.css";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import {
  AdjustmentsHorizontalIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const Navigation = () => {
  const { user, logout } = useAuth();
  const [openNav, setOpenNav] = useState(false);
  const [cart] = useCart();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
      onClick={() => setOpenNav(false)}
    >
      <Link
        to={"/"}
        className={
          location.pathname === "/"
            ? "py-1 px-2 rounded-md bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 transition"
            : "text-gray-900"
        }
      >
        Home
      </Link>
      <Link
        to={"menu"}
        className={
          location.pathname === "/menu"
            ? "py-1 px-2 rounded-md bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 transition"
            : "text-gray-900"
        }
      >
        Menu
      </Link>

      <Link to={"dashboard"}>
        <IconButton size="sm">
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
        </IconButton>
      </Link>

      <Link to={"dashboard/cart"} state={{ from: location }} replace>
        <Badge content={cart.length} placement="bottom-end">
          <IconButton size="sm">
            <ShoppingCartIcon className="h-5 w-5" />
          </IconButton>
        </Badge>
      </Link>
    </ul>
  );

  const handleLogout = () => {
    logout().then(() => {
      Swal.fire({
        title: "Sign Out Successful",
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
    });
  };

  return (
    <Navbar className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="span"
          className="mr-4 cursor-pointer py-1.5 font-bold text-2xl"
        >
          Bistro
        </Typography>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center gap-4">
          {!user ? (
            <Link to={"/login"}>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </Link>
          ) : (
            <div className="hidden lg:flex flex-row-reverse items-center text-right gap-4">
              <Avatar src={user.photoURL} alt="avatar" />
              <div>
                <Typography variant="h6">{user.displayName}</Typography>
                <Link onClick={handleLogout} className=" ">
                  <Typography variant="paragraph" color="red">
                    Sign Out
                  </Typography>
                </Link>
              </div>
            </div>
          )}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          {!user ? (
            <Link to={"/login"}>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </Link>
          ) : (
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className=""
              onClick={handleLogout}
            >
              <span>Sign out</span>
            </Button>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
