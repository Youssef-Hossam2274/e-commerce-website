import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../redux/reducers/usersSlice";
import RegistrationErrorMsg from "../components/RegistrationErrorMsg";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function SignupPage() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.users);

  const validation = () => {
    setErrorMsg({ password: "", email: "" });

    const isFound = users.some((user) => user.email === inputData.email);
    if (isFound) {
      setErrorMsg((prevError) => {
        return {
          ...prevError,
          email: "this account is already exist. try to login.",
        };
      });
    } else if (!EMAIL_REGEX.test(inputData.email)) {
      setErrorMsg((prevError) => {
        return {
          ...prevError,
          email: "Please enter a valid email address (e.g., name@example.com).",
        };
      });
    }

    if (!PWD_REGEX.test(inputData.password)) {
      setErrorMsg((prevError) => {
        return {
          ...prevError,
          password:
            "Use at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.",
        };
      });
    }
  };

  useEffect(() => {
    validation();
  }, [inputData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(inputData));
    // add here any message for ensure that user register
    navigate("/login");
  };

  const disableBtn = () => {
    if (!inputData.name || !inputData.email || !inputData.password) return true;

    if (errorMsg.email || errorMsg.password) return true;

    return false;
  };

  return (
    <Card color="transparent" shadow={false} className="flex items-center py-32">
      <Typography variant="h4" color="blue-gray" className="dark:text-gray-100">
        Sign Up
      </Typography>

      <Typography color="gray" className="mt-1 font-normal dark:text-gray-300">
        Nice to meet you! Enter your details to register.
      </Typography>

      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-1 flex flex-col gap-6">
          <section className="flex flex-col w-full">
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 dark:text-gray-200"
            >
              Your Name
            </Typography>
            <Input
              error={Boolean(inputData.name && errorMsg.name)}
              size="lg"
              placeholder="name@mail.com"
              className="outline-none dark:bg-gray-700 dark:text-gray-100"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </section>

          <section>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 dark:text-gray-200"
            >
              Your Email
            </Typography>
            <Input
              error={Boolean(inputData.email && errorMsg.email)}
              size="lg"
              placeholder="name@mail.com"
              className="outline-none dark:bg-gray-700 dark:text-gray-100"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
            {inputData.email && errorMsg.email && (
              <RegistrationErrorMsg msg={errorMsg.email} />
            )}
          </section>

          <section>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-2 dark:text-gray-200"
            >
              Password
            </Typography>
            <Input
              error={Boolean(inputData.password && errorMsg.password)}
              type="password"
              size="lg"
              placeholder="********"
              className=" dark:bg-gray-700 dark:text-gray-100"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
            {inputData.password && errorMsg.password && (
              <RegistrationErrorMsg msg={errorMsg.password} />
            )}
          </section>
        </div>

        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal dark:text-gray-300"
            >
              I agree the
              <Link className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-100">
                &nbsp;Terms and Conditions
              </Link>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button
          disabled={disableBtn()}
          className="mt-6 dark:bg-blue-600 dark:hover:bg-blue-700"
          fullWidth
          type="submit"
        >
          Sign Up
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal dark:text-gray-300"
        >
          Already have an account?{" "}
          <Link
            to="../login"
            className="font-medium text-gray-900 dark:text-gray-100"
          >
            Log In
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
