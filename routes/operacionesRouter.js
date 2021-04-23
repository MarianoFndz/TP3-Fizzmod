import express from "express"
import operacionesController from "../controllers/operacionesController.js"
const router = express.Router()


router.get("/", operacionesController)

export default router