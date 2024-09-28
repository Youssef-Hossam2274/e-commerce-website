import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
  Input,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import femaleUserImg from "../../img/userProfile/female-user.png";
import maleUserImg from "../../img/userProfile/male-user.png";
import { EditUserDialog } from "./EditUserDialog";
import { RemoveUserDialog } from "./RemoveUserDialog";
import { ChangeRoleDialog } from "./ChangeRoleDialog";
import { ViewUserDialog } from "./ViewUserDialog";

const TABLE_HEAD = [
  "User Name",
  "Role",
  "View",
  "Edit",
  "Change Role",
  "Delete",
];

export function UsersTable() {
  const [search, setSearch] = useState("");
  const { users } = useSelector((state) => state.users);
  const filterdUsers = users?.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Card className="h-full w-full dark:bg-gray-800 dark:text-white">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex flex-col justify-between gap-8 md:flex-row md:items-center dark:bg-gray-800">
          <div>
            <Typography
              variant="h5"
              className="text-gray-900 dark:text-gray-100"
            >
              Recent All Users
            </Typography>
            <Typography className="mt-1 font-normal text-gray-600 dark:text-gray-400">
              These are details about the last Users
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72 flex gap">
              <Input
                label="Search"
                onChange={(e) => setSearch(e.target.value)}
                icon={
                  <MagnifyingGlassIcon className="h-5 w-5 dark:text-white" />
                }
                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardBody className="px-0 overflow-x-scroll md:overflow-hidden">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className="">
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-gray-200 dark:border-gray-600 p-4"
                >
                  <Typography
                    variant="small"
                    className="font-bold text-gray-800 dark:text-gray-100"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filterdUsers?.map(
              ({ id, name, gender, email, password, role }, index) => {
                const isLast = index === filterdUsers.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-gray-200 dark:border-gray-600";

                return (
                  <tr key={id}>
                    <td className={`${classes}`}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={gender === "male" ? maleUserImg : femaleUserImg}
                          alt={name}
                          size="md"
                          className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 object-cover p-1"
                        />
                        <Typography
                          variant="small"
                          className="font-bold text-gray-800 dark:text-gray-100"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>

                    <td className={`${classes} `}>
                      <Typography
                        variant="small"
                        className="font-normal text-gray-800 dark:text-gray-100"
                      >
                        {role}
                      </Typography>
                    </td>

                    <td className={`${classes} `}>
                      <ViewUserDialog
                        name={name}
                        email={email}
                        password={password}
                        gender={gender}
                        role={role}
                      />
                    </td>
                    <td className={`${classes} `}>
                      <EditUserDialog
                        id={id}
                        name={name}
                        email={email}
                        password={password}
                        gender={gender}
                        role={role}
                      />
                    </td>
                    <td className={`${classes} `}>
                      <ChangeRoleDialog
                        UserName={name}
                        role={role}
                        userId={id}
                      />
                    </td>
                    <td className={`${classes} `}>
                      <RemoveUserDialog UserName={name} UserId={id} />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
