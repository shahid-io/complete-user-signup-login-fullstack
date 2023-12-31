import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidate } from "../helper/Validate";
import convertToBase64 from "../helper/Convert";
/**image import - assets */
import avarat from "../assets/profile.png";
const Profile = () => {
  /** states */
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      address: "",
    },
    validate: profileValidate,
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
        <div className={`${styles.glass} ${extend.glass}`}>
          <div className="title flex flex-col items-center">
            <h3 className="text-5xl font-bold">Profile</h3>
            <span className="py-4 text-sm w-2/3 text-center text-gray-500">
              You can update the details
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  className={`${styles.profile_img} ${extend.profile_img}`}
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
              {/* name */}
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("firstname")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  {...formik.getFieldProps("lastname")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              {/* mobile, email */}
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("mobile")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="text"
                  placeholder="Mobile Number"
                />
                <input
                  {...formik.getFieldProps("email")}
                  className={`${styles.textbox} ${extend.textbox}`}
                  type="email"
                  placeholder="Email"
                />
              </div>
              {/*  address */}
              <input
                {...formik.getFieldProps("address")}
                className={styles.textbox}
                type="text"
                placeholder="Address"
              />
              <button className={styles.btn} type="submit">
                Save
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                come back later ?
                <Link className="text-blue-500" to="/logout">
                  &nbsp; logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
