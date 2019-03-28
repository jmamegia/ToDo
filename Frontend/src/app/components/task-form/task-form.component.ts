import { Component, OnInit, HostBinding } from '@angular/core';
import { Task } from 'src/app/models/task';
import {TasksService} from '../../services/tasks.service'
import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  edit: boolean=false
  task: Task = {
    id:0,
    name:'',
    description:'',
    image: '',
    responsible:'',
    priority: 3,
    created_at: new Date()

  }
  constructor(private taskservice: TasksService ,
    private route: Router,
    private activeRoute: ActivatedRoute
    ) { }
  addTask(){
    delete this.task.created_at;
    delete this.task.id;
    this.taskservice.addTask(this.task)
      .subscribe(
        res=>{
          console.log(res)
          this.route.navigate(['/tasks'])
        },
        err=>console.error(err)
      )
  }
  updateTask(id:number){
    delete this.task.created_at;
    delete this.task.id;
    this.taskservice.updateTask(id,this.task).subscribe(
      res=>{
        this.route.navigate(['/tasks'])
      },
      err=>console.error(err)
    )
  }
  ngOnInit() {
   const params = this.activeRoute.snapshot.params;
   if (params.id){
     this.taskservice.getTask(params.id).subscribe(
       res=>{
         this.task=res
         this.edit=true
       },
       err=>console.error(err)
     )
   }
  }

}
