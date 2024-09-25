import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/reducers/usersSlice";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.users);

  useEffect(() => {
    const currentId = localStorage.id;
    currentId == null && navigate("/");
  }, []);

  return (
    <div className="px-20">
      <div>
        <img />
      </div>

      <div className="p-6 text-left px-16">
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-green-500 mb-2">
          <span>{currentUser?.name}</span>
        </h4>
        <p className="block antialiased font-sans text-base leading-relaxed bg-clip-text undefined text-mainWhite dark:text-white font-medium">
          Username : {currentUser?.name}
        </p>
        <p className="block antialiased font-sans text-base leading-relaxed bg-clip-text undefined text-mainWhite dark:text-white font-medium">
          My name is {currentUser?.name}, I'm a male and I'm a member here.
        </p>
      </div>
      <hr />
      <div className="p-[4rem]"></div>
    </div>
  );
};

export default UserProfile;
