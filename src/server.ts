
import express, { json,Request,Response } from "express";
import router from "./Routes";

const app = express();
app.use(json());
app.use("/products",router)


// app.get("/",(req:Request, res:Response)=>{
  
//   res.json("ghhgjhf")
// })
app.listen(3000, () => {
  console.log("App Running....");
});

