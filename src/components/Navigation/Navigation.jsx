import { FaPhone } from "react-icons/fa6";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
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
          {isLoggedIn && (
            <li>
              <NavLink to="/contacts" className={linkClass}>
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
