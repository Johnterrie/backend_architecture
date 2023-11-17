import express from "express";
import path from "path";
import Routes from "./routes/root";
import { logger } from "./middlewares/logger";
import errorHandler from "./middlewares/errorHandler";
import cors from "cors";
import cookieParser from "cookie-parser";
import corsOptions from "./config/corsOption";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/", Routes);

app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
