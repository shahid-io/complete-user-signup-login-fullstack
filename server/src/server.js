import express from "express";
import cors from "cors";
import moran from "morgan";
import router from "./routes/route.js";
import { ServerConfig } from "./config/server-config.js";
import connect from "./database/connection.js";
/** express app */
const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(moran("tiny"));

/** routes */
app.get("/", (req, res) => {
  res.status(201).json({ message: "Up" });
});

/** api routes */
app.use("/api", router);

/** server start listening when the mongoose gets connected */
connect()
  .then(() => {
    try {
      app.listen(ServerConfig.PORT, () => {
        console.log(`DB Connected`);
        console.log(`http://localhost:${ServerConfig.PORT}`);
      });
    } catch (error) {
      console.log("Couldn't Connected to DB", error);
    }
  })
  .catch((err) => {
    console.log("Coudn't Connected to DB -- catch()", err);
  });
