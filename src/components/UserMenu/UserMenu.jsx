import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const logingOut = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.success("Logged Out successfully!");
      })
      .catch(() => {
        toast.error("Something went wrong, try again!");
      });
    navigate("/login");
  };

  return (
    <>
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
        </ul>
      </nav>
      <p className={css.text}>Welcome, {user.name}</p>
      <button className={css.button} onClick={logingOut}>
        LogOut
      </button>
      <Toaster />
    </>
  );
}
