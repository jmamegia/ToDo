import { Component, OnInit, HostBinding } from '@angular/core';
import {TasksService} from '../../services/tasks.service'
import {Task} from '../../models/task'


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @HostBinding('class') classes = 'row'

  tasks: any =[]
  deleteTask(id:number){
    this.tasksService.delTask(id).subscribe(
      res=>{
        console.log(res)
        this.getTasks()
      },
      err=>console.error(err)
    )
  }

  editTask(id: number){
    console.log(id)
  }

  getTasks(){
    this.tasksService.getTasks().subscribe(
      res=>{
        this.tasks=res;
      },
      err=>console.error(err)
    )
  }
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks()
  }

}
