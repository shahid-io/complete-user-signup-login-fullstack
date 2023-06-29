import toast from "react-hot-toast";

/** validate login page username */
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}

/** validate password */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

/** validate reset password */
export async function resetPasswordValidate(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirm_password) {
    errors.exst = toast.error("Password doesn't match..!");
  }
  return errors;
}

/** register validate */
export async function regsiterValidate(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);
  return errors;
}

/* ************************* */

/** validate email */
function emailVerify(error = {}, values) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email) {
    error.email = toast.error("Email requires..!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wring email..!");
  } else if (!emailRegex.test(values.email)) {
    error.email = toast.error("Invalid email address..!");
  }
  return error;
}

/**validate password */
function passwordVerify(error = {}, values) {
  //   const specialCharsPattern = /[\\/`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
  //   const strongPasswordPattern =
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~])[A-Za-z\d!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]{8,}$/;

  const specialCharPattern = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
  const numberPattern = /\d/;
  const uppercasePattern = /[A-Z]/;
  const lowercasePattern = /[a-z]/;

  if (!values.password) {
    error.password = toast.error("Password Required..!");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Invalid Password..!");
  } else if (values.password.length < 6 || values.password.length > 28) {
    error.password = toast.error(
      "Password must be between 6 and 28 characters long"
    );
  } else if (!specialCharPattern.test(values.password)) {
    error.password = toast.error("Passowrd must contain special characters");
  } else if (!numberPattern.test(values.password)) {
    error.password = toast.error("Password must contain numbers as well");
  } else if (!uppercasePattern.test(values.password)) {
    error.password = toast.error(
      "Password must contain uppercase [A-Z] characters as well"
    );
  } else if (!lowercasePattern.test(values.password)) {
    error.password = toast.error(
      "Password must contain lowercase [a-z] characters as well"
    );
  }
  return error;
}

/**validate usename */
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required..!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username..!");
  }
  return error;
}
