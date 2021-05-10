const express = require("express");
const app = express();
const tasksRoutes = require("./routes/tasks");
const db = require("./models");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", tasksRoutes);

db.sequelize.sync().then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000.");
  });
});