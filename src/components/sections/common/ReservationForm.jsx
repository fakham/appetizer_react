import React from "react";
import { withFormik } from "formik";

const ReservationForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={props.values.name}
              onBlur={props.handleBlur}
              onChange={props.handleChange}
            />
            {props.touched.name && props.errors.name && (
              <div className="text-danger">{props.errors.name}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="Your Email"
              value={props.values.email}
              onBlur={props.handleBlur}
              onChange={props.handleChange}
            />

            {props.touched.email && props.errors.email && (
              <div className="text-danger">{props.errors.email}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              type="text"
              className="form-control"
              placeholder="Phone"
              value={props.values.phone}
              onBlur={props.handleBlur}
              onChange={props.handleChange}
            />
            {props.touched.phone && props.errors.phone && (
              <div className="text-danger">{props.errors.phone}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Date</label>
            <input
              name="date"
              type="text"
              className="form-control"
              id="book_date"
              placeholder="Date"
              value={props.values.date}
              onBlur={props.handleBlur}
              onChange={props.handleChange}
            />
            {props.touched.date && props.errors.date && (
              <div className="text-danger">{props.errors.date}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Time</label>
            <input
              name="time"
              type="text"
              className="form-control"
              id="book_time"
              placeholder="Time"
              value={props.values.time}
              onBlur={props.handleBlur}
              onChange={props.handleChange}
            />
            {props.touched.time && props.errors.time && (
              <div className="text-danger">{props.errors.time}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Person</label>
            <div className="select-wrap one-third">
              <div className="icon">
                <span className="ion-ios-arrow-down"></span>
              </div>
              <select
                name="person"
                id="person"
                className="form-control"
                value={props.values.person}
                onBlur={props.handleBlur}
                onChange={props.handleChange}
              >
                <option value="Person">Person</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
              {props.touched.person && props.errors.person && (
                <div className="text-danger">{props.errors.person}</div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-3">
          <div className="form-group">
            <input
              type="submit"
              value="Make a Reservation"
              className="btn btn-primary py-3 px-5"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    phone: "",
    email: "",
    time: "",
    person: "",
    date: ""
  }),
  validate: values => {
    const errors = {};

    if (!values.name) errors.name = "Name is required";
    if (!values.date) errors.date = "Date is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.phone) errors.phone = "Phone is required";
    if (!values.time) errors.time = "Time is required";
    if (!["1", "2", "3", "4+"].includes(values.person))
      errors.person = "Persons number must be valid!";

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    alert("Thanks for your reservation!");
    console.log(values);
    setSubmitting(false);
  }
})(ReservationForm);
