const express = require("express");
const app = express();
const connectDB = require("./config/db");

const PORT = 3000;
//CONNECT TO MONGOdb
connectDB();


app.use(express.json({ extendes: false }))
app.use("/api/products",  require ("./routes/productsApi"));
app.use("/api/users",  require ("./routes/userApi"));
app.use("/api/auth", require ("./routes/authApi"))

app.get("/" , function (req, res) {
  res.status(200).send("Hello world")
})

app.get('/test', (req, res) => {
  res.json({ msg: "we are getting better" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});