import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
    "mongodb+srv://sanghapalmangale4128:123mangale@recipes.3ewel.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

)
app.listen(3001, () => console.log("Server started"));