import express from "express"
import AuthRoutes from "../Auth/AuthRoutes/AuthRoutes.js"

export const routes=express.Router()

routes.use("/auth",AuthRoutes)