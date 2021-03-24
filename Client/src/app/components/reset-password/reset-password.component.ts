import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ResetPasswordViewModel } from '../../models/ResetPasswordViewModel';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  model: ResetPasswordViewModel;
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
      Email: '',
      Password: '',
      ConfirmPassword: '',
      Code: ''
    }
  }

  OnSubmit(form: NgForm) {
    console.log("OnSubmit()");
    console.log(form.value);
    this.userService.reset(form.value)
  }

}
