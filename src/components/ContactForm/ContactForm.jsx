import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
  });

  const contactsToAdd = {
    id: "",
    name: "",
    number: "",
  };

  const handleSubmit = (addedContacts, actions) => {
    dispatch(addContact(addedContacts));
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <Formik
      initialValues={contactsToAdd}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId}></Field>
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={css.container}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId}></Field>
          <ErrorMessage name="number" as="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
