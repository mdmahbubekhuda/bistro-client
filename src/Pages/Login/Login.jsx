import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [loginDisabled, setLoginDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleCaptcha = () => {
    setLoginDisabled(true);
    const user_captcha_value = captchaRef.current.children[0].value;
    if (validateCaptcha(user_captcha_value)) setLoginDisabled(false);
  };

  return (
    <div className="flex justify-center mt-[10%]">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" type="email" name="email" />
            <Input label="Password" size="lg" type="password" name="password" />
            {/* captcha */}
            <LoadCanvasTemplate />
            <Input label="Captcha" size="lg" type="input" ref={captchaRef} />
            <Button
              variant="gradient"
              className="w-fit"
              onClick={handleCaptcha}
            >
              Validate
            </Button>
            {/* captcha */}
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              type="submit"
              disabled={loginDisabled}
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
