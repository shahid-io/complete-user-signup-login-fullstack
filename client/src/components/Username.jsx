import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/Validate";
/**image import - assets */
import avarat from "../assets/profile.png";
const Username = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="containe mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h3 className="text-5xl font-bold">Hello, User</h3>
            <span className="py-4 text-sm w-2/3 text-center text-gray-500">
              Exlore More by connecting with us
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={avarat} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="username"
              />
              <button className={styles.btn} type="submit">
                Let's Go
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Not a Member{" "}
                <Link className="text-blue-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
