import express from "express"
import infoController from "../controllers/infoController.js"
const router = express.Router()


router.get("/", infoController)

export default router