import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { regsiterValidate } from "../helper/Validate";
import convertToBase64 from "../helper/Convert";
/**image import - assets */
import avarat from "../assets/profile.png";
const Register = () => {
  /** states */
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      email: "shahid@gmail.com",
      username: "shahid532",
      password: "Shahid@123",
    },
    validate: regsiterValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      values = await Object.assign(values, { profile: file || "" });
    },
  });
  /** handle file upload */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
  /** */
  return (
    <div className="containe mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h3 className="text-5xl font-bold">Register</h3>
            <span className="py-4 text-sm w-2/3 text-center text-gray-500">
              Happy to join you!
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  className={styles.profile_img}
                  src={file || avarat}
                  alt="avatar"
                />
              </label>
              <input
                type="file"
                name="profile"
                id="profile"
                onChange={onUpload}
              />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="text"
                placeholder="Email*"
              />
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username*"
              />
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="password*"
              />
              <button className={styles.btn} type="submit">
                Sign In
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Registered?
                <Link className="text-blue-500" to="/">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
