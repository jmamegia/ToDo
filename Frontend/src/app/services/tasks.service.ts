import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Task } from '../models/task'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) {
  }
  getTasks(){
    return this.http.get(`${this.API_URI}/tasks`)
  }
  getTask(id: string){
    return this.http.get(`${this.API_URI}/tasks/${id}`)
  }
  delTask(id: number){
    return this.http.delete(`${this.API_URI}/tasks/${id}`)
  }
  addTask(task: Task){
    return this.http.post(`${this.API_URI}/tasks`,task)
  }
  updateTask(id: number, updatedTask: Task){
    return this.http.put(`${this.API_URI}/tasks/${id}`,updatedTask)
  }

}
