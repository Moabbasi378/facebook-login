import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../logo.png";

export function Main() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setIsSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-100">
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <div className="mb-5 text-center">
          <img src={logo} alt="Facebook" className="w-60 mb-1 mx-auto" />
          <p className="text-lg font-normal text-gray-900">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
      </div>
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <div className="bg-white p-5 text-center rounded-lg shadow-md w-full md:w-2/3">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email address or phone number"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-lg font-semibold text-white bg-blue-600 rounded-lg py-3 focus:outline-none hover:bg-blue-700 duration-300"
                >
                  {isSubmitting ? "Logging in..." : "Log In"}
                </button>
                <a
                  href="#"
                  className="text-blue-600 text-sm block mb-10 hover:underline"
                >
                  Forgotten Password
                </a>
              </Form>
            )}
          </Formik>

          <hr className="border border-gray-300 my-5" />
          <div>
            <a
              href="#"
              className="text-white text-lg font-semibold bg-green-500 duration-300 rounded-lg px-8 py-3 block hover:bg-green-600"
            >
              Create New Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
