import { Router } from "express";
const router = Router();

/** POST*/
router.route("/register").post((req, res) => {});
router.route("/registerMail").post((req, res) => {});
router.route("/authenticate").post((req, res) => {});
router.route("/login").post((req, res) => {});

/** GET*/
router.route("/user/:username").get((req, res) => {});
router.route("/generateOTP").get((req, res) => {});
router.route("/verifyOTP").get((req, res) => {});
router.route("/createResetSession").get((req, res) => {});

/** PUT*/
router.route("/updateuser").put((req, res) => {});
router.route("/resetPassword").put((req, res) => {});
export default router;
