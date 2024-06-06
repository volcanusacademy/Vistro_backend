const express = require("express");
const app = express();
const cors = require('cors')
require("./config")


app.use(express.json())
app.use(cors({
    origin: true,
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials: true
})
);
const userRouter = require('./routes/userRoute');
app.use(userRouter)


app.listen(5000, ()=>{console.log("Server up and running on port 5000!")});
