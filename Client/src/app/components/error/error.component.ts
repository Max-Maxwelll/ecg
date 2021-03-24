import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserDataViewModel } from '../../models/UserDataViewModel';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  
  responce:UserDataViewModel;
  Id:string;
  UserName:string;
  
  //id:string = this.responce.json().responces

  constructor(private userService: UserService) { 
  }

  ngOnInit() {
    this.userService.userData()
    .subscribe(
      data => {
        this.responce = data;
        this.Id = this.responce.Id;
        this.UserName = this.responce.UserName;
      }
    );
  }

}
