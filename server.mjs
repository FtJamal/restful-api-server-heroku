import express from 'express'
import cors from "cors"


const app = express();
app.use(express.json());
app.use (cors());


const port = process.env.PORT ||  3000;

let users= [];

app.post("/users", (req, res) => {

    console.log(req.body);

    users.push(req.body);

    res.send("user is created");
})

app.get("/users", (req, res) => {
    res.send(users);
})

app.put("/users", (req, res) => {
    res.send("your user is modified");
})

app.delete("/users", (req, res) => {
    res.send("your user is modified");
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
