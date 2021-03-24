import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ForgotPasswordViewModel } from '../../models/ForgotPasswordViewModel';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  model: ForgotPasswordViewModel;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
    console.log("ngOnInit()");
  }

  resetForm(form?: NgForm) {
    if (form != null){
      form.reset();
      console.log("resetForm()");
    }

    this.model = {
      Email: ''
    }
  }

  OnSubmit(form: NgForm) {
    console.log("OnSubmit()");
    console.log(form.value);
    this.userService.forgot(form.value)
  }
}
