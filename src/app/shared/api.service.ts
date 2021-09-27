import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  constructor(private _http:HttpClient) { }

  postResturant(data:any){
    return this._http.post<any>("http://localhost:3000/comments",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  getResturant(data:any){
    return this._http.get<any>("http://localhost:3000/comments",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateResturant(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/comments"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
    deleteResturant(id:number){
      return this._http.delete<any>("http://localhost:3000/comments"+id).pipe(map((res:any)=>{
        return res;
      }))

  }

}
