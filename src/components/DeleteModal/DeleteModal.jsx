import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./DeleteModal.module.css";

export default function DeleteModal({ onClose, id }) {
  const dispatch = useDispatch();
  return (
    <div className={css.backdrop}>
      <div className={css.div}>
        <p className={css.text}>
          Are you sure you want to delete this contact?
        </p>
        <ul className={css.list}>
          <li>
            <button className={css.button} onClick={onClose}>
              No
            </button>
          </li>
          <li>
            <button
              className={css.button}
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Yes
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
