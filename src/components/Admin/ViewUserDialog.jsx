import React from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import maleImage from "../../img/userProfile/male-user.png";
import femaleImage from "../../img/userProfile/female-user.png";

export function ViewUserDialog({ name, email, password, gender, role }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex  items-center justify-center gap-2 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 dark:bg-blue-gray-700 dark:text-gray-200 dark:hover:bg-blue-gray-600"
      >
        View
      </Button>

      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="p-4 dark:bg-gray-800 dark:text-gray-100 max-h-[90vh] overflow-y-scroll"
      >
        <DialogHeader className="relative m-0 block dark:bg-gray-800">
          <Typography
            variant="h4"
            color="blue-gray"
            className="dark:text-white"
          >
            View User
          </Typography>

          <Typography className="mt-1 font-normal text-gray-600 dark:text-gray-400">
            Keep your records up-to-date and organized.
          </Typography>

          <div className="flex items-center justify-center mt-10">
            <img src={gender === "male" ? maleImage : femaleImage} />
          </div>

          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5 dark:text-gray-400"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>

        <DialogBody className="space-y-4 pb-6 dark:bg-gray-800 dark:text-gray-100">
          <main className="flex flex-col gap-3">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Name
              </Typography>
              <Input
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                disabled
                color="gray"
                size="lg"
                placeholder="Enter your name"
                value={name}
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Email
              </Typography>
              <Input
                disabled
                color="gray"
                size="lg"
                placeholder="eg. example@gmail.com"
                value={email}
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Gender
              </Typography>
              <Input
                disabled
                color="gray"
                size="lg"
                placeholder="eg. example@gmail.com"
                value={gender}
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Role
              </Typography>
              <Input
                disabled
                color="gray"
                size="lg"
                placeholder="eg. example@gmail.com"
                value={role}
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Password
              </Typography>
              <Input
                disabled
                color="gray"
                size="lg"
                placeholder=""
                name="password"
                value={password}
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </main>
        </DialogBody>
      </Dialog>
    </>
  );
}
