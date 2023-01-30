import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import{Observable} from 'rxjs'
import { User,LoginClass } from "../class/user";
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private auth:StorageService) { }
  register_api='https://wtsacademy.dedicateddevelopers.us/api/user/signup';
  login_api='https://wtsacademy.dedicateddevelopers.us/api/user/signin';
  profile_api ='https://wtsacademy.dedicateddevelopers.us/api/user/profile-details';


    // user registration
    userRegistration(formData:any):Observable<User[]>{
      return this.http.post<User[]>(this.register_api,formData)
    }


     // user login
  userLogin(data:any):Observable<LoginClass[]>{
    return this.http.post<LoginClass[]>(this.login_api,data)
  }

   //fetch user
   user_profile(): Observable<User[]> {
    return this.http.get<User[]>(this.profile_api,{headers:new HttpHeaders({'x-access-token':`${this.auth.getToken()}`})})
  }
}
