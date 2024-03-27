import { useId } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const searchId = useId();
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        onChange={handleChange}
        value={filter}
        name="search"
        type="text"
        id={searchId}
      />
    </div>
  );
}
