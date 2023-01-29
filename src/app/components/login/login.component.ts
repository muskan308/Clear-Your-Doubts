import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output('hide') hide: EventEmitter<any> = new EventEmitter();
  // constructor() { }
  loginForm:any ;
  loginForm2:any ;
  pass1:string= "";
  pass2:string="";
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z0-9@_#]{8,}$")])
    })

    this.loginForm2 = new FormGroup({
      email2: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password2: new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z0-9@_#]{8,}$")]),
      password3: new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z0-9@_#]{8,}$")])
    })
  }

  emailVal(val:number){
    if(val == 1)
    return this.loginForm.get('email');
    else
    return this.loginForm2.get('email2');
    
  } 
  login:boolean = true;
 
  agree:boolean = false;
  change(val:boolean){ //val:any (for all data types)  or val:string | boolean (for acceptinng 2 or more data types but not all)
    this.login = val;
  }

  isagree(val:boolean) {
    if(val == false){
      this.agree = true;
    }else{
      this.agree = false;
    }
  }

  log(val:number) {
    if(val ==1 ){
      if(!(this.emailVal(1).touched && this.loginForm.get('password').touched)){
        alert("Fill the username and password");
      }else if(this.loginForm.get('password').invalid){
        alert("Enter valid password");
      }
    }else{
      if((!this.emailVal(2).touched || !this.loginForm2.get('password2').touched || !this.loginForm2.get('password3').touched)){
        alert("Fill the username and password")
      
      }else if(this.pass1 != this.pass2) {
        alert("Enter same password");
      }
    }
  }

  

}
