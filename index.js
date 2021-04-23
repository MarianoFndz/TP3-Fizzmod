import express from "express"
import dotenv from "dotenv"
dotenv.config()

import MsjAplicationStart from "./utils/MsjAplicationStart.js"
import showGreet from "./utils/greet.js"
import randomRouter from "./routes/randomRouter.js"
import infoRouter from "./routes/infoRouter.js"
import operacionesRouter from "./routes/operacionesRouter.js"

const app = express()

app.use("/random", randomRouter)
app.use("/info", infoRouter)
app.use("/operaciones", operacionesRouter)

const port = process.env.PORT ? process.env.PORT : 3000

app.listen(port)

console.log(MsjAplicationStart(port))
showGreet()
