import React, { useEffect, useState } from "react";
import {
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { PiNuclearPlantLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/usersSlice";
import { Link } from "react-router-dom";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const dispatch = useDispatch();

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      onclick: () => {
        console.log("My Profile Clicked");
      },
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
      onclick: () => {},
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
      onclick: () => {},
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
      onclick: () => {},
    },
    {
      label: "Sign Out",
      icon: PowerIcon,
      onclick: () => {
        console.log("click in logout");
        dispatch(logout());
        closeMenu();
      },
    },
  ];

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full py-0.5 pr-2 pl-0.5  dark:text-gray-200"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="Profile Picture"
            className="border border-gray-900 p-0.5 dark:border-gray-200"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 dark:bg-gray-800">
        {profileMenuItems.map(({ label, icon, onclick }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={onclick}
              className={`flex items-center gap-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${
                  isLastItem
                    ? "text-red-500"
                    : "text-gray-600 dark:text-gray-400"
                }`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal dark:text-gray-200"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem className="dark:hover:bg-gray-700">
        <Typography
          variant="h6"
          color="blue-gray"
          className="mb-1 dark:text-gray-200"
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal dark:text-gray-400"
        >
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-normal dark:text-gray-200"
          >
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 dark:text-gray-200 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500 dark:text-gray-400" />{" "}
              Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                } dark:text-gray-400`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid dark:bg-gray-800">
          <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon
              strokeWidth={1}
              className="h-28 w-28 dark:text-gray-200"
            />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 dark:text-gray-200 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500 dark:text-gray-400" />{" "}
        Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
  },
  {
    label: "Blocks",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500 dark:text-gray-400"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full dark:hover:bg-gray-700">
            {React.createElement(icon, {
              className: "h-[18px] w-[18px] dark:text-gray-400",
            })}{" "}
            <span className="text-gray-900 dark:text-gray-200"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export function UserNavbar() {
  const { logged } = useSelector((state) => state.users);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", mode);
    document.documentElement.classList.remove("light");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add(mode);
  }, [mode]);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <nav className="p-2 lg:pl-6 dark:bg-gray-800">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900 dark:text-gray-200">
        <section className="flex">
          <Typography
            as="a"
            href="#"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-gray-800 dark:text-gray-200"
          >
            Material Tailwind
          </Typography>

          <div className="hidden lg:block">
            <NavList />
          </div>
        </section>

        <section className="flex items-center gap-7">
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </IconButton>

          <button onClick={toggleMode}>
            {mode === "light" ? <FaMoon /> : <MdOutlineWbSunny />}
          </button>

          {!logged && (
            <>
              <Link to="/signup">
                <Button
                  size="sm"
                  variant="text"
                  className={`transition duration-300 ease-in-out rounded-md px-4 py-2 
      bg-blue-500 text-white hover:bg-blue-600 
      dark:bg-[#2563EB] dark:text-white dark:hover:bg-[#1D4ED8]`}
                >
                  <span>Sign Up</span>
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  size="sm"
                  variant="text"
                  className={`transition duration-300 ease-in-out rounded-md px-4 py-2 
      bg-gray-100 text-blue-500 hover:bg-gray-200 hover:text-blue-600
      dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  <span>Log In</span>
                </Button>
              </Link>
            </>
          )}

          {logged && <ProfileMenu />}
        </section>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </nav>
  );
}
