import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLoading, selectError } from "./redux/contactsSlice";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && !error && <Loader />}
        <ContactList />
      </div>
    </>
  );
};

export default App;
