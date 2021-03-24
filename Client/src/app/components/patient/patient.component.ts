import { UserService } from './../../services/user.service';
import { PatientViewModel } from './../../models/PatientViewModel';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { UserDataViewModel } from '../../models/UserDataViewModel';
import { HttpRequest, HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
// import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'patient-form',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  agePattern = "^[0-9]{1,3}$";
  model: PatientViewModel;
  rootUrl:string;
  patients:any;
  
  constructor(public router: Router, public http: Http, private userService: UserService, private httpClient: HttpClient) { 
    this.rootUrl = this.userService.rootUrl;
  }

  ngOnInit() {
    this.userService.isLoggedIn()

    .subscribe(res => {
      if(res == "false"){
        this.userService.loggedIn = false;
        this.router.navigate(['/login']); 
      }
      else{
        this.userService.loggedIn = true;
      }
    });

    this.resetForm();
    this.GetPatients();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      
    this.model = {
      Id: null,
      FirstName: '',
      LastName: '',
      MiddleName: '',
      Age: '',
      Weight: '',
      Height: '',
      Sex: '',
      PhoneNumber: '',
      HomeNumber: '',
      Email: '',
      Condition: '',
      Doctor: ''
    }
  }

  GetPatients(){

    this.http.get(this.rootUrl + "/api/Patients/Get")
            .map(res=> {
             return res.json();
            }).subscribe(data => {
              console.log(data);
              this.patients = data;
            });

  }
  GetPatient(patient){
    console.log(patient);
    this.model.Id = patient.id;
    this.model.FirstName = patient.firstName;
    this.model.LastName = patient.lastName;
    this.model.MiddleName = patient.middleName;
    this.model.Age = patient.age;
    this.model.Weight = patient.weight;
    this.model.Height = patient.height;
    this.model.Sex = patient.sex;
    this.model.PhoneNumber = patient.phoneNumber;
    this.model.HomeNumber = patient.homeNumber;
    this.model.Email = patient.email;
    this.model.Condition = patient.condition;
  }
  DeletePatient(patient){
    this.http.get(this.rootUrl + "/api/Patients/Delete/"+patient.id)
            .subscribe(data => {
              var res = data.toString().replace('"', "").split(",");
              if(res[0] == "Exception"){
                this.userService.isModalDialogVisible = true;
                this.userService.modal_message = res[1];
              }
              else{
                this.userService.isModalDialogVisible = true;
                this.userService.modal_message = "Пацієнта видалено!";
                this.GetPatients();
              }
              
            });
  }
  Open(files){
    if(files.Length == 0)
      return;
      
    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', `api/Patients/UploadFile`, formData, {
      reportProgress: true,
    });

    this.httpClient.request(uploadReq).subscribe(event => {
      this.userService.isModalDialogVisible = true;
      if (event.type === HttpEventType.UploadProgress)
      this.userService.modal_message = (Math.round(100 * event.loaded / event.total)).toString()+"%";
      else if (event.type === HttpEventType.Response){
        var res = event.body.toString().replace('"', "").split(",");
        if(res[0] == "Exception"){
          this.userService.isModalDialogVisible = true;
          this.userService.modal_message = res[1];
        }
        else{
          this.userService.isModalDialogVisible = true;
          this.userService.data = res;
          this.userService.modal_message = "Файл завантажений!";
        }
        console.log(event.body.toString());
      }
       
    });
  }
  Change(){
    let body = JSON.stringify(this.model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(this.model.Id);
    this.http.post(this.rootUrl + "/api/Patients/Change", body, options)
              .subscribe(
                res => {
                  console.log(res.json()[0]);
                  if(res.json()[0] == "Exception"){
                    this.userService.isModalDialogVisible = true;
                    this.userService.modal_message = res.json()[1];
                  }
                  else{
                    this.userService.isModalDialogVisible = true;
                    this.userService.modal_message = "Пацієнта змінено!";
                    this.GetPatients();
                  }
                },
                errors => {
                  this.userService.isModalDialogVisible = true;
                  errors = JSON.parse(errors._body);
                  var results;
                  var i = errors.errors.lenth
                  for (let key in errors.errors) {
                    results += errors.errors[key].code + "  ";
                  }
                  this.userService.modal_message = results;     
                });
  }
  
  OnSubmit(form: NgForm){
    //form.controls['Doctor'].setValue(this.model.Doctor);
    let body = JSON.stringify(form.value);
    console.log(JSON.stringify(this.model))
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.rootUrl + "/api/Patients/Add", body, options)
              .subscribe(
                res => {
                  console.log(res.json()[0]);
                  //var res = res.body.toString().replace('"', "").split(",");
                  if(res.json()[0] == "Exception"){
                    this.userService.isModalDialogVisible = true;
                    this.userService.modal_message = res.json()[1];
                  }
                  else{
                    this.userService.isModalDialogVisible = true;
                    this.userService.modal_message = "Пацієнта створено!";
                    this.GetPatients();
                  }
                },
                errors => {
                  this.userService.isModalDialogVisible = true;
                  errors = JSON.parse(errors._body);
                  var results;
                  var i = errors.errors.lenth
                  for (let key in errors.errors) {
                    results += errors.errors[key].code + "  ";
                  }
                  this.userService.modal_message = results;     
                });
  }

}
