import { UserDataViewModel } from './../models/UserDataViewModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
//import '../../rxjs-operators';

import { AuthService } from './../services/auth.service';
import { RegisterViewModel } from '../models/RegisterViewModel';
import { LoginViewModel } from '../models/LoginViewModel';
import { ForgotPasswordViewModel } from '../models/ForgotPasswordViewModel';
import { ResetPasswordViewModel } from '../models/ResetPasswordViewModel';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
 
@Injectable()
export class UserService {
  rootUrl: string;
  loggedIn = false;
  public progress: number;
  public data:string[] = Array();
  isModalDialogVisible:boolean;
  modal_message:string;

  constructor(public http: Http, private authService: AuthService, public router: Router, private httpClient: HttpClient) { 
    this.rootUrl = 'http://localhost:10847';
    this.loggedIn;
  }
  
  closeModal(isConfirmed: boolean) {
    if(!isConfirmed)
      this.isModalDialogVisible = false;
  }
  register(model: RegisterViewModel){

    console.log(model);

    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.rootUrl + "/api/Register", body, options)
            .subscribe(
              res => {
                this.isModalDialogVisible = true;
                this.modal_message = "Реэстрація пройшла успішно!!";
                setTimeout(()=>{
                  this.router.navigate(['/login']);
                  this.isModalDialogVisible = false;
                }, 2000)
              },
              errors => {
                this.isModalDialogVisible = true;
                errors = JSON.parse(errors._body);
                var results;
                var i = errors.errors.lenth
                for (let key in errors.errors) {
                  results += errors.errors[key].code + "  ";
                }
                this.modal_message = results;     
              });

    // let body = JSON.stringify({ Email, Password, ConfirmPassword });
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    
    // return this.http.post(this.rootUrl + 'Account/Register', body, options);

  }
  login(model: LoginViewModel){
    console.log(model);

    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization', 'my-auth-token');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.rootUrl + "/api/Login", body, options)
            .subscribe(
              res => {
                this.isModalDialogVisible = true;
                //this.router.navigate(['/']); 
                this.modal_message = "Ви авторизовані!";
                setTimeout(()=>{
                  this.router.navigate(['/home']);
                  this.isModalDialogVisible = false;
                  this.modal_message = '';
                }, 2000)
              },
              errors => {
                this.isModalDialogVisible = true;
                this.modal_message = "Неправильний пароль або Email.";
              });
    // const model: LoginViewModel = {
    //   Email: user.Email,
    //   Password: user.Password,
    // }
    //return this.http.post(this.rootUrl + 'Account/Login', model);

  }

  logout() {
    let body;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.rootUrl + "/api/Logout", body, options)
            .subscribe(
              res => {
                this.isModalDialogVisible = true;
                this.modal_message = "Ви вийшли!";

                setTimeout(()=>{
                  this.router.navigate(['/login']);
                  this.isModalDialogVisible = false;
                }, 2000)
              });
  }

  isLoggedIn(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization', 'my-auth-token');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.rootUrl + "/api/User/isLoggedIn",options)
    .map(
      res => {
        return res.text();
      }
    );
  }
  
  userData() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization', 'my-auth-token');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.rootUrl + "/api/user/data",options)
            .map(res=> {
             return res.json();
            }).map(data => {
                return new UserDataViewModel(
                  data.id,
                  data.userName,
                  data.firstName,
                  data.lastName,
                  data.phoneNumber
                );
              }
            );
  }

  convert(files){
    if (files.length === 0)
    return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', `api/reader/convert`, formData, {
      reportProgress: true,
    });

    this.httpClient.request(uploadReq).subscribe(event => {
      this.isModalDialogVisible = true;

      if (event.type === HttpEventType.UploadProgress)
        this.modal_message = (Math.round(100 * event.loaded / event.total)).toString()+"%";

      else if (event.type === HttpEventType.Response){
        
        var res = event.body.toString().replace('"', "").split(",");
        if(res[0] == "Exception"){
          this.isModalDialogVisible = true;
          this.modal_message = res[1];
        }
        else{
          this.isModalDialogVisible = true;
          this.data = res;
          this.modal_message = "Файл завантажений!";
        }
        console.log(event.body.toString());
      }
       
    });
  }

  ChangeData(files){
    if (files.length === 0)
    return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', `api/reader/changedata`, formData, {
      reportProgress: true,
    });

    this.httpClient.request(uploadReq).subscribe(event => {
      this.isModalDialogVisible = true;

      if (event.type === HttpEventType.UploadProgress)
        this.modal_message = (Math.round(100 * event.loaded / event.total)).toString()+"%";

      else if (event.type === HttpEventType.Response){
        
        var res = event.body.toString().replace('"', "").split(",");
        if(res[0] == "Exception"){
          this.isModalDialogVisible = true;
          this.modal_message = res[1];
        }
        else{
          this.isModalDialogVisible = true;
          this.data = res;
          this.modal_message = "Файл завантажений!";
        }
        console.log(event.body.toString());
      }
       
    });
  }

  forgot(model: RegisterViewModel){
    console.log(model);
    // let body = JSON.stringify({ Email, Password, ConfirmPassword });
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    
    // return this.http.post(this.rootUrl + 'Account/Register', body, options);
  }
  reset(model: ResetPasswordViewModel){
    console.log(model);
  }
}