import {Request, Response} from 'express'
import db from '../database'

class TaskController {
    public async list (req :Request, res: Response) {
        let tasks = await db.query('SELECT * FROM tasks')
        res.json(tasks)
    }
    public async getOne (req :Request, res: Response) {
        const {id} = req.params
        let task = await db.query('SELECT * FROM tasks WHERE id = ?',[id])
        if(task.length > 0 ) res.json(task[0])
            else res.json({"messaje":"no match"})
    }
    public async create (req :Request, res: Response) {
        await db.query('INSERT INTO tasks set ?', [req.body])
        res.json({text:'Task '+ req.body.name +' created'})
    }

    public async delete (req :Request, res: Response) {
        const {id} = req.params
        await db.query('DELETE FROM tasks where id = ?',[id])
        res.json({text:'Task deleted '})
    }
    public async update (req :Request, res: Response) {
        const {id} = req.params
        const newData = req.body
        await db.query('UPDATE tasks set ? WHERE id = ?',[newData,id])
        res.json({text:'Task updated'})
    }
}
export const taskController = new TaskController()
