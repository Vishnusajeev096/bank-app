import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  data = "your perfect Banking Partner"

  placeHolderData = "enter acno"

  uname:any
  psw:any
  
  constructor() {}

  ngOnInit(): void {
    
  }

  login(a:any,b:any){
    this.uname=a.value
    this.psw=b.value
    console.log(this.uname,this.psw);
    
  }
}
