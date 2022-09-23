import express from "express";
const app = express();

const PORT = 3000;

app.get("/hello",(_req,res) => {
    res.send("Hello full stack!");
})

app.listen(PORT,() => {
    console.log(`App is listening on port ${PORT}`)
});
//9.4-9.5
