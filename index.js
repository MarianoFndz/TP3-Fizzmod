import express from "express"
import dotenv from "dotenv"
dotenv.config()

import MsjAplicationStart from "./utils/MsjAplicationStart.js"
import { port } from "./utils/config.js"
import showGreet from "./utils/greet.js"

const app = express()

app.listen(port)

console.log(MsjAplicationStart(port))
showGreet()
