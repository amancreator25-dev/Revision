import express from "express";

const app = express();


app.get("/Testing",(req, res)=>{return "Hello World!"})

export default app;