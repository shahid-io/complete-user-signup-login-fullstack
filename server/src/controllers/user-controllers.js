/**
 * POST : api/register
 * request-params : {username,password,email,firstname,lastname,mobile,address,profile}
 */
export async function register(req, res) {
  res.json("register user");
}

/**
 * POST : api/login
 * request-params: {username, password}
 * */
export async function login(req, res) {
  res.json("login user");
}
