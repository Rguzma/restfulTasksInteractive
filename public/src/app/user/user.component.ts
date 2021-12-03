import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
title: any=[]
task: any={}
singleTask: any = []
  constructor( private _httpService: HttpService) { }
  ngOnInit(): void {

  }

  getTasks(): void{
    this.title = this._httpService.tasks;
    console.log(this.title);
  }

searchATask(event:any): void {
  console.log("empieza la busqueda: "+event.target.id.value)
  event.preventDefault();
  this.task = event.target.id.value;
  console.log("empieza la busqueda thos task: "+this.task)

  this._httpService.getATask(this.task)
  
  .subscribe((data:any) =>{
    this.singleTask = data;
  });
  console.log(this.task);
}


  getATask(_id:object):void{
    console.log("empieza func: "+_id);
    this.task=_id
  
    // event.preventDefault();
    console.log("sigue func");
    // this.task=event.target._id.value;
    this._httpService.getATask(this.task)
    .subscribe((data: any) =>{
      this.singleTask=data
      console.log("data que regresa desde el service: "+data.title)
      console.log("data que regresa desde el singleTask: "+this.singleTask._id)

    });
  }


}