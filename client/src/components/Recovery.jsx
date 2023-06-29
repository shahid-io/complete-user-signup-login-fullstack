import React from "react";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";
/**image import - assets */
const Recovery = () => {
  return (
    <div className="containe mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h3 className="text-5xl font-bold">Recovery</h3>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recover password
            </span>
          </div>
          <form className="pt-20">
            <div className="textbox flex flex-col items-center gap-6">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 ditit sent to your email address
                </span>
                <input
                  className={styles.textbox}
                  type="text"
                  placeholder="OTP"
                />
              </div>
              <button className={styles.btn} type="submit">
                Recover
              </button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OTP?{" "}
                <button className="text-blue-500" to="/recovery">
                  Resend
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
