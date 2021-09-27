import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder,FormGroup} from '@angular/forms'
import {Router} from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  singupForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private _http:HttpClient, private router:Router) { }


  ngOnInit(): void {
    this.singupForm=this.formBuilder.group({
      name:[''],
      email:[''],
      password:['']
    })
  }

  singUp(){
    this._http.post<any>("http://localhost:3000/singup", this.singupForm.value).subscribe(res=> {
    alert("Regitraction successfull");
    this.singupForm.reset();
    this.router.navigate(['login']);
  },
  err=>{
    alert("kuth to glar he")
  }
    )
  }
}

