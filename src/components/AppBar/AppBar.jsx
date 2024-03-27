import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppBar() {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        <FaPhone size={20} />
        <span className={css.text}>PhoneBook</span>
      </p>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={linkClass}>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={linkClass}>
              LogIn
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className={linkClass}>
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
