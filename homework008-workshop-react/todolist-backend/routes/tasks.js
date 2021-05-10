const express = require("express");
//const db = require("../models");
const router = express.Router();
const todoControllers = require("../controllers/todolist");

// Create
router.post("/", todoControllers.createTodoItem);

// Read
router.get("/", todoControllers.getTodoList);
router.get("/:id", todoControllers.getTodoItem);

// Update
router.put("/:id", todoControllers.updateTodoItem);

// DELETE
router.delete("/:id", todoControllers.deleteTodoItem);

module.exports = router;