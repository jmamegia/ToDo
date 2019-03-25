"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
class TaskRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', taskController_1.taskController.list);
        this.router.get('/:id', taskController_1.taskController.getOne);
        this.router.post('/', taskController_1.taskController.create);
        this.router.delete('/:id', taskController_1.taskController.delete);
        this.router.put('/:id', taskController_1.taskController.update);
    }
}
const taskRoutes = new TaskRoutes();
exports.default = taskRoutes.router;
