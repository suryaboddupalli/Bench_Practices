import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: number[];
  password: string;
  cnfPassword: string;
}

export const DataForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: [],
    password: "",
    cnfPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string().required("Email is Required"),
    phone: Yup.array().required("Mobile Number is Required"),
    gender: Yup.string().required("Gender is Required"),
    password: Yup.string().required("Password is Required"),
    cnfPassword: Yup.string()
      .required("conform password is required")
      .oneOf([Yup.ref("password")], "passwords should be match"),
  });

  return (
    <div>
      <h1>FormData</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log({ values });
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <label>FirstName</label>
            <Field id="firstName" name="firstName" placeholder="First Name" />
            <ErrorMessage name="firstName" />
          </div>
          <div>
            <label>LastName</label>
            <Field id="lastName" name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" />
          </div>
          <div>
            <label>Email</label>
            <Field id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label>Gender</label>
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
            <label>
              <Field type="radio" name="gender" value="others" />
              Others
            </label>
            <ErrorMessage name="gender" />
          </div>
          <div>
            <label>Phone Number</label>
            <Field id="phone" name="phone[0]" placeholder="Mobile Number" />
          </div>
          <div>
            <label>Alt-Phone Number</label>
            <Field id="phone" name="phone[1]" placeholder="Atl-Mobile Number" />
          </div>
          <div>
            <label>Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" />
          </div>
          <div>
            <label>Conform-Password</label>
            <Field
              type="password"
              id="cnfpassword"
              name="cnfPassword"
              placeholder="Conform Password"
            />
            <ErrorMessage name="cnfPassword" />
          </div>
          <div></div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
