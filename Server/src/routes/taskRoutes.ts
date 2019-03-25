import { Router } from 'express';
import {taskController} from '../controllers/taskController'

class TaskRoutes {
    public router: Router = Router()
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', taskController.list)
        this.router.get('/:id',taskController.getOne)
        this.router.post('/', taskController.create)
        this.router.delete('/:id',taskController.delete)
        this.router.put('/:id',taskController.update)
    }
}

const taskRoutes = new TaskRoutes();
export default taskRoutes.router;