import {Request, Response} from 'express'

class IndexController {
   public index (req :Request, res: Response) {
        res.json({text:'ddd'})
   }
}
export const indexController = new IndexController()
