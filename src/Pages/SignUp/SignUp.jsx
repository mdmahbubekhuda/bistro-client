import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { name, email, password } = data;
    createUser(email, password).then((res) => {
      console.log(res.user);
    });
    reset();
  };

  return (
    <div className="flex justify-center my-[10%]">
      <Card color="transparent" shadow={true} className="p-4">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            {errors.name && (
              <Typography variant="small" color="red" className="-mb-3">
                * Name is required
              </Typography>
            )}
            <Input
              {...register("name", { required: true })}
              size="lg"
              placeholder="John Doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            {errors.email && (
              <Typography variant="small" color="red" className="-mb-3">
                * Email is required
              </Typography>
            )}
            <Input
              {...register("email", { required: true })}
              size="lg"
              placeholder="example@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
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
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
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
          <Button type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to={"/login"} className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
