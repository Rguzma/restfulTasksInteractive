import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  tasks: any[] = [];
  ATask: any;
  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getATask(Object);
    // this.postCreateTask(Object);
    // this.putUpdateTask(Object);
    // this.deleteTask(Object);

  } 

  // getTasks():void{
  //   this._http.get('http://localhost:8080/tasks')
  //   .subscribe((data:any)=>{
  //     this.tasks=data;
  //     console.log("this tasks: "+this.tasks);
  //   })
  // }

    getTasks(){
      console.log("hola")
      // our http response is an Observable, store it in a variable
      this._http.get('http://localhost:8080/tasks')
      
      // subscribe to the Observable and provide the code we would like to do with our data from the response
    .subscribe((data:any) => {this.tasks=data;
    console.log("Got our tasks!", data);
    })
   };
   getATask(_id:any){
     console.log("soy getATask: "+_id)
    // our http response is an Observable, store it in a variable
    return this._http.get(`http://localhost:8080/tasks/${_id}`)
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // .subscribe((data:any) => {this.ATask=data;console.log("Got single tasks!", data);
   }
//  };
//  postCreateTask(_id: object){
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.post('http://localhost:8080/tasks', _id);
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log("Got our tasks!", data));
// };
// putUpdateTask(_id: object){
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.put('http://localhost:8080/tasks:_id', _id);
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log("Got our tasks!", data));
// };
// deleteTask(_id: object){
//   // our http response is an Observable, store it in a variable
//   let tempObservable = this._http.delete('http://localhost:8080/tasks:_id', _id);
//   // subscribe to the Observable and provide the code we would like to do with our data from the response
//   tempObservable.subscribe(data => console.log("Got our tasks!", data));
// };
  
}
