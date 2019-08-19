import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  clavier_val: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  username;
  password;
  rows = [0, 1, 2, 3, 4, 5];
  b = [];
  input_clavier = '';
  constructor(private formBuilder: FormBuilder, private router: Router) {
    for (let i = 0; i < 6; i++) {
      for (let y = 0; y < 5; y++) {
        let e = Math.floor(Math.random() * 1000);
        console.log(e);
        // tslint:disable-next-line:triple-equals
        if ((e % 2) == 0) {
          if (this.clavier_val.length > 0) {
            this.b.push(this.clavier_val.shift());
          } else {
            this.b.push('\n');
          }
        } else {
          this.b.push('\n');
        }
      }
    }
    console.log(this.b);
  }


  ngOnInit() {
  }

  setInputClavier(val) {
    this.input_clavier = this.input_clavier + val;
  }
  delete(){
    console.log('error');
  }
  login(event) {
    console.log(this.username);
    console.log(this.password);
    if (this.username == "123456" && this.input_clavier== "123456") {
      this.router.navigate(['dashboard']);

    }
    else {
      window.alert('Authentification incorrecte');


    }
  }
}
