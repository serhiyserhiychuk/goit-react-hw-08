import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.listItem}>
          <p className={css.text}>
            <FaUser size={20} /> {contact.name}
          </p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>
            <FaPhone size={20} />
            {contact.number}
          </p>
        </li>
      </ul>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
