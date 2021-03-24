import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpRequest, HttpClient, HttpEventType } from '@angular/common/http';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //isModalDialogVisible: boolean = false;

  data:string[] = Array();
  polyline_points:string;
  start_point:number = 0;
  end_point:number = 0
  scroll_count:number = 1;
  all_point = this.data.length;
  counter_points:string;
  counter_time:string;
  //file:File;
  //patients:any;
    
  svgTransform = {
    'transform' : '1, -1',
    'transform-origin' : ''
  }

  constructor(public router: Router, public http: Http, private userService: UserService, private httpClient: HttpClient) { }

  //ngOnInit() {
    
    //this.userService.isLoggedIn()

    //.subscribe(res => {
    //  if(res == "false"){
    //    this.userService.loggedIn = false;
     //   this.router.navigate(['/login']); 
    //    console.log(res);
    //  }
    //  else
    //    this.userService.loggedIn = true;
    //});

    this.updateData();
    //this.GetPatients();
  //}

  //showDialog(event) {
  //  this.isModalDialogVisible = true;
  //  console.log(event);
	//}

	//closeModal(isConfirmed: boolean) {
   // if(!isConfirmed)
   //   this.isModalDialogVisible = false;
  //}
  
  //open_file(files: FileList){
  //  this.file = files.item(0);
  //}
  
  svg_click(event){
    var delta = event.deltaY || event.detail || event.wheelDelta;

    // вывести тип события, элемент и координаты клика
    var x = event.offsetX==undefined?event.layerX:event.offsetX;
    var y = event.offsetY;

    if (delta > 0) this.scroll_count+=0.5;
    else {
      if(this.scroll_count > 1)
        this.scroll_count-=0.5;
    }

    this.svgTransform.transform = 'scale('+this.scroll_count+',-'+this.scroll_count+')';
    this.svgTransform["transform-origin"] = x + 'px '+y+'px';
    console.log("svg_click");
  }
  svg_wheel(event){
    var delta = event.deltaY || event.detail || event.wheelDelta;

    if (delta > 0) {
      this.start_point+=10;
    }
    else {
      if(this.start_point > 9){
        this.start_point-=10;
      }
    }

    this.addPoints(this.start_point)

    this.updateData()
    console.log("svg_wheel");
  }
  svg_over(){  
    console.log("svg_over");
  }
  svg_leave(){   
    console.log("svg_over");
  }
  //GetPatients(){

  //  this.http.get(this.userService.rootUrl + "/api/Patients/Get")
  //          .map(res=> {
  //           return res.json();
  //          }).subscribe(data => {
  //            console.log(data);
  //            this.patients = data;
  //          });

  //}
  GetData(id){
    this.http.get(this.userService.rootUrl + "/api/reader/Get/"+id)
            .subscribe(data => {
              console.log(id);
              var res = data.json();
              if(res[0] == "Exception"){
                this.userService.isModalDialogVisible = true;
                this.userService.modal_message = res[1];
              }
              else{
                console.log(res);
                this.data = res;
                this.userService.isModalDialogVisible = true;
                this.userService.modal_message = "Дані отримані!";
                this.addPoints(this.start_point);
              }
              
            });
  }
  convert(files){
    this.userService.convert(files);
    
    var check = setInterval(()=>{
      this.data = this.userService.data;
      this.addPoints(this.start_point);
      if(this.userService.data.length > 0){
        clearInterval(check);
        this.userService.data = Array();
      }

      console.log("setTimeout()")
    }, 2000)
  }
  ChangeData(files){
    this.userService.ChangeData(files);
    
    var check = setInterval(()=>{
      this.data = this.userService.data;
      this.addPoints(this.start_point);
      if(this.userService.data.length > 0){
        clearInterval(check);
        this.userService.data = Array();
      }

      console.log("setTimeout()")
    }, 2000)
  }
  return_scale(){
    this.svgTransform.transform = 'scale(1, -1)';
    this.svgTransform["transform-origin"] = "center center";
    this.scroll_count = 1;
  }
  updateData(){
    this.end_point = this.start_point + 200;

    var seconds = Math.ceil(this.start_point/128);
    var minutes = Math.ceil(seconds / 60);
    var hours = Math.ceil(minutes / 60);

    if(hours >= 1){
      hours-= 1;
      minutes=Math.ceil(minutes-(hours*60));
      seconds=Math.ceil(seconds-((hours*60)*60));
    }
    if(minutes >= 1){
      minutes-= 1;
      seconds=Math.ceil(seconds-(minutes*60));
    }
    if(seconds >= 1) seconds-= 1;

    var new_hours = (hours < 10 ? '0' : '') + hours
    var new_minutes = (minutes < 10 ? '0' : '') + minutes
    var new_seconds = (seconds < 10 ? '0' : '') + seconds

    var new_date = new_hours + " : " + new_minutes  + " : " + new_seconds

    this.counter_points = "Діапазон точок: " + (this.start_point) + " - " + (this.end_point)
    this.counter_time = "Час: " + new_date
    console.log(this.start_point + " " + Math.ceil(seconds))
  }
  addPoints(start_point){
    this.polyline_points = "";

    for (var x = 0; x < 1000; x+=5) {
      this.addPoint(x, this.data[start_point]);
      start_point+=1;
    }
  }
  addPoint(x, y){ 
    this.polyline_points+= x+" "+y+" ";
  }
  jump(value){
    //this.time+=1600;
    this.start_point+=value;
    this.addPoints(this.start_point);
    this.updateData();
  }
}
