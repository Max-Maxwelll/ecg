import { UserDataViewModel } from './../../models/UserDataViewModel';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  responce: UserDataViewModel;
  isLoggedIn:boolean;
  FirstName:string;
  LastName:string;
  statusSubmenu:boolean = false;

  constructor(public router: Router, private userService: UserService) { }

  remove = {
    'animation' : 'fade 0.3s linear 0s 1 normal'
  }

  ngOnInit(){
    this.userService.userData()
    .subscribe(
      data => {
        this.responce = data;
        this.FirstName = this.responce.FirstName;
        this.LastName = this.responce.LastName;
      }
    );

    this.userService.isLoggedIn()
      .subscribe(res => {
        if(res == "true"){
          this.isLoggedIn = true;
        }else{
          this.isLoggedIn = false;
        }
      });
      console.log("Init -> header");
  }
  submenu(){  
    if(this.statusSubmenu == true){
      this.remove.animation = "remove 0.3s linear 0s 1 forwards";
      setTimeout(()=>{ this.statusSubmenu = !this.statusSubmenu; }, 300);
    }
    else{
      this.remove.animation = "fade 0.3s linear 0s 1 normal";
      this.statusSubmenu = !this.statusSubmenu;
    }
  }
}
