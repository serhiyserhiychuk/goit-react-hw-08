import { useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.div}>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loader />}
      <ContactList />
    </div>
  );
}
