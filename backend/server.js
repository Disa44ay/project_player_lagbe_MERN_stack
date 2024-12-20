//server.js
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import itemRouter from "./routes/itemRoute.js";
import userRouter from "./routes/UserRoute.js";
import 'dotenv/config'

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

//db connection
connectDB();

//API endpoint 

// for items
app.use("/api/item", itemRouter);
app.use('/images', express.static('uploads'))

//for user authentications
app.use('/api/user',userRouter)

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

//mongodb+srv://Disarray:223001112@cluster0.uadsh.mongodb.net/?
