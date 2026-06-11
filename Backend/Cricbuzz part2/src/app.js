import express from "express"
import env from "./config/env.js"
import morgan from "morgan"

const createServer = ()=>{
    const app = express()
    // app.use()
    if(env.NODE_ENV === "development") app.use(morgan("dev"))
    return app
}

export default createServer