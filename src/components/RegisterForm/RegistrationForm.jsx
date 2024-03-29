import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    password: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
  });

  const registeredUser = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (registeredUser, actions) => {
    dispatch(register(registeredUser))
      .unwrap()
      .then(() => {
        toast.success("Registered successfully!");
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Something went wrong, try again!");
      });
    actions.resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  return (
    <>
      <h2 className={css.title}>Register</h2>
      <Formik
        initialValues={registeredUser}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            Username
          </label>
          <Field type="text" name="name" id={nameFieldId}></Field>
          <ErrorMessage name="name" as="span" />
          <label className={css.label} htmlFor={emailFieldId}>
            Email
          </label>
          <Field type="text" name="email" id={emailFieldId}></Field>
          <ErrorMessage name="email" as="span" />
          <label className={css.label} htmlFor={passwordFieldId}>
            Password
          </label>
          <Field type="text" name="password" id={passwordFieldId}></Field>
          <ErrorMessage name="password" as="span" />
          <button className={css.button} type="submit">
            Register
          </button>
          <Toaster />
        </Form>
      </Formik>
      <p className={css.text}>
        Already registerred? <Link to="/login">Log In</Link>
      </p>
    </>
  );
}
