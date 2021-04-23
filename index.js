const express = require("express")
const dotenv = require("dotenv")
dotenv.config()

const MsjAplicationStart = require("./utils/MsjAplicationStart")
const { port } = require("./utils/config")
const showGreet = require("./utils/greet")

const app = express()

app.listen(port)

console.log(MsjAplicationStart(port))
showGreet()
