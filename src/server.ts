import express, { json } from "express";
import router from "./Routes";
const app = express();
app.use(json());
app.listen(3000, () => {
  console.log("App Running....");
});
