import React from "react";
import { Typography } from "@material-tailwind/react";
import { UsersTable } from "../components/Admin/UsersTable";
import { AddUserDialog } from "../components/Admin/AddUserDialog";

export default function AdminUsersPage() {
  return (
    <div className="py-14 px-10 flex flex-col gap-7">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-2">
        <Typography variant="h2" className="text-gray-900 dark:text-white">
          Users
        </Typography>
        <AddUserDialog />
      </div>
      <UsersTable />
    </div>
  );
}
