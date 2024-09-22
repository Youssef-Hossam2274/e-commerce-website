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

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function Signup() {
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
    setErrorMsg({ name: "", password: "", email: "" });

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
    navigate("/");

    console.log(errorMsg);
  };

  const disableBtn = () => {
    if (!inputData.name || !inputData.email || !inputData.password) {
      return true;
    }

    return false;
  };

  return (
    <Card color="transparent" shadow={false} className="flex items-center">
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
            {inputData.name && errorMsg.name && (
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex  gap-1 font-normal items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {errorMsg.name}
              </Typography>
            )}
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
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex  gap-1 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {errorMsg.email}
              </Typography>
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
              <Typography
                variant="small"
                color="gray"
                className="mt-2 flex  gap-1 font-normal "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {errorMsg.password}
              </Typography>
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
