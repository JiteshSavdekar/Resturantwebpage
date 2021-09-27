import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrom!:FormGroup
  constructor(private fromBuilder:FormBuilder ,private _http:HttpClient,private router:Router) { }


  ngOnInit(): void {
    this.loginFrom=this.fromBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this._http.get<any>("http://localhost:3000/singup").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email === this.loginFrom.value.email && a.password === this.loginFrom.value.password
      })
      if(user){
        alert("login is successfull");
        this.loginFrom.reset();
        this.router.navigate(['returant'])
      }else{
        alert("user Not found")
      }
    },err=>{
      alert("kuch to phir glat he server")
    }
    ) }

}

