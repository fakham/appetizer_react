import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

const ContactForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Your Name"
          value={props.values.name}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.touched.name && props.errors.name && (
          <div className="text-danger">{props.errors.name}</div>
        )}
      </div>
      <div className="form-group">
        <input
          name="email"
          type="text"
          className="form-control"
          placeholder="Your Email"
          value={props.values.email}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.touched.email && props.errors.email && (
          <div className="text-danger">{props.errors.email}</div>
        )}
      </div>
      <div className="form-group">
        <input
          name="subject"
          type="text"
          className="form-control"
          placeholder="Subject"
          value={props.values.subject}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.touched.subject && props.errors.subject && (
          <div className="text-danger">{props.errors.subject}</div>
        )}
      </div>
      <div className="form-group">
        <textarea
          name="message"
          id=""
          cols="30"
          rows="7"
          className="form-control"
          placeholder="Message"
          value={props.values.message}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        ></textarea>
        {props.touched.message && props.errors.message && (
          <div className="text-danger">{props.errors.message}</div>
        )}
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Send Message"
          className="btn btn-primary py-3 px-5"
        />
      </div>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    subject: "",
    message: ""
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("You must give us your name."),
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Email is required!"),
    subject: Yup.string()
      .min(10, "Subject must have more than 10 characters")
      .required("Type a subject"),
    message: Yup.string()
      .min(30, "Message is too short, write more than 30 characters")
      .required("Message is required")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    alert("Thanks for contacting us!");
    console.log(values);
    setSubmitting(false);
  }
})(ContactForm);
