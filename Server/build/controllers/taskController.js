"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TaskController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tasks = yield database_1.default.query('SELECT * FROM tasks');
            res.json(tasks);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let task = yield database_1.default.query('SELECT * FROM tasks WHERE id = ?', [id]);
            if (task.length > 0)
                res.json(task[0]);
            else
                res.json({ "messaje": "no match" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tasks set ?', [req.body]);
            res.status(404).json({ text: 'Game ' + req.body.name + ' created' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tasks where id = ?', [id]);
            res.json({ text: 'Task deleted ' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const newData = req.body;
            yield database_1.default.query('UPDATE tasks set ? WHERE id = ?', [newData, id]);
            res.json({ text: 'Task updated' });
        });
    }
}
exports.taskController = new TaskController();
