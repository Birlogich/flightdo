import { NavLink } from "react-router-dom";
import { ActionButton } from "../Buttons/ActionButton";

export const Menu = () => {
  return (
    <div className="flex w-full max-w-[310px] justify-between items-center">
      <NavLink to="trips">
        <span className="text-purple">My Trips</span>
      </NavLink>
      <button className="text-lightgrey">Sign in</button>
      <ActionButton title={"Sign up"} />
    </div>
  );
};
