import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { ResturantData } from './resturant.module';

@Component({
  selector: 'app-resturant-dash',
  templateUrl: './resturant-dash.component.html',
  styleUrls: ['./resturant-dash.component.css']
})
export class ResturantDashComponent implements OnInit {


formValue!:FormGroup
resturantModelObj:ResturantData=new ResturantData;
  allResturantData: any;
  showAdd!:boolean;
  showbtn!:boolean;

  constructor(private FormBuider:FormBuilder, private api:ApiService )  { }


  ngOnInit(): void {
    this.formValue=this.FormBuider.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:['']
    })
    this.getAllData()
  }
clickAddResto(){
  this.formValue.reset();
  this.showAdd=true;
  this.showbtn=false;
}

  addResto(){
    this.resturantModelObj.name=this.formValue.value.name;
    this.resturantModelObj.email=this.formValue.value.email;
    this.resturantModelObj.mobile=this.formValue.value.mobile;
    this.resturantModelObj.address=this.formValue.value.address;
    this.resturantModelObj.services=this.formValue.value.services;

    this.api.postResturant(this.resturantModelObj).subscribe(res=>{
      console.log(res);
      alert("Restaurant Records Added Successfull");
      let ref=document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();

    },
    err=>{
      alert("Kahitari chukiche ahe ");
    }
    )


  }
  getAllData(){
    this.api.getResturant(Data).subscribe(res=>{
      this.allResturantData=res;

    })
  }
  deleteResto(data:any){
    this.api.deleteResturant(data.id).subscribe(res=>{
      alert("Resturant data delete");


    })
  }
  onEditResto(data:any){
    this.showAdd=false;
    this.showbtn=true;
    this.resturantModelObj.id=data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.name);
    this.formValue.controls['mobile'].setValue(data.name);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);

  }
  updateResto(){
    this.resturantModelObj.name=this.formValue.value.name;
    this.resturantModelObj.email=this.formValue.value.email;
    this.resturantModelObj.mobile=this.formValue.value.mobile;
    this.resturantModelObj.address=this.formValue.value.address;
    this.resturantModelObj.services=this.formValue.value.services;

    this.api.updateResturant(this.resturantModelObj,this.resturantModelObj.id).subscribe(res=>{
      alert("Resturant updated");
      let ref=document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    })
  }

}



function Data(Data: any) {
  throw new Error('Function not implemented.');
}

