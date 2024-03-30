import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.div}>
      <ul className={css.list}>
        <li>
          <NavLink to="/login" className={linkClass}>
            LogIn
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={linkClass}>
            Registration
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
