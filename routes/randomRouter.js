import express from "express"
import randomController from "../controllers/randomController.js"
const router = express.Router()


router.get("/", randomController)

export default router