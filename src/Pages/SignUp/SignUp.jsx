import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import "animate.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { name, photo, email, password } = data;

    // create user
    createUser(email, password).then((res) => {
      const user = res.user;

      // update user profile
      if (user) {
        const updateUserInfo = {
          displayName: name,
          photoURL: photo,
        };
        updateUserProfile(updateUserInfo).then(() => {
          // create user entry in db
          const userInfo = { name, email };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              // success message
              Swal.fire({
                title: "Registered Successful",
                icon: "success",
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
              // navigate to home
              navigate(location.state?.from?.pathname || "/", {
                replace: true,
              });
            }
          });
        });
      }
    });
    // reset form
    reset();
  };

  return (
    <div className="flex justify-center my-[10%]">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
          <Typography color="white" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="flex flex-col gap-4">
            {errors.name && (
              <Typography variant="small" color="red" className="-mb-3">
                * Name is required
              </Typography>
            )}
            <Input
              {...register("name", { required: true })}
              size="lg"
              label="Your Name"
            />

            <Input {...register("photo")} size="lg" label="Photo URL" />

            {errors.email && (
              <Typography variant="small" color="red" className="-mb-3">
                * Email is required
              </Typography>
            )}
            <Input
              {...register("email", { required: true })}
              size="lg"
              label="Your Email"
            />

            {errors.password?.type === "required" && (
              <Typography variant="small" color="red" className="-mb-3">
                * Password is required
              </Typography>
            )}
            {errors.password?.type === "pattern" && (
              <Typography variant="small" color="red" className="-mb-3">
                * Password must have at least a symbol, upper and lower case
                letters and a number
              </Typography>
            )}
            {errors.password?.type === "minLength" && (
              <Typography variant="small" color="red" className="-mb-3">
                * Password must be at least 8 characters
              </Typography>
            )}
            <Input
              {...register("password", {
                required: true,
                pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                minLength: 8,
              })}
              type="password"
              size="lg"
              label="Password"
            />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" fullWidth>
              sign up
            </Button>
          </CardBody>
        </form>
        <hr />
        <CardFooter className="pt-6">
          <SocialLogin />
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Typography
              as="span"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              <Link to={"/login"}>Sign In</Link>
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
