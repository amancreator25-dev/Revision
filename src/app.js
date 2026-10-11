
import express from "express";

const app = express();

app.post("/Testing", (req, res) => {
    return res.send("Hello World!");
});

export default app;
