
import express from "express";

const app = express();

app.get("/Testing", (req, res) => {
    return res.send("<h1>Hello World!</h1>");
});

export default app;
