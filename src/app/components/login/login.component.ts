import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from "../../service/user.service";
import { StorageService } from "../../service/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formVal!:FormGroup
storeLog!:any
userResponce:any

  constructor(private fb:FormBuilder,private login:UserService,private route:Router,private storage:StorageService) { }

  ngOnInit(): void {
    this.formVal=this.fb.group({
      email:[''],
      password:['']
    })
  }

  display(){
    this.storeLog=this.formVal.value
    // console.log("logged valuue",this.storeLog);
    // const formData: FormData = new FormData();
    // formData.append('email', this.storeLog.email);
    // formData.append('password', this.storeLog.password);
    this.login.userLogin(this.storeLog).subscribe((res:any)=>{
      this.userResponce=res
      console.log("login responce",this.userResponce);
      if(res.status==200){
        this.storage.setData(
          this.userResponce.data.first_name,
          this.userResponce.data.last_name,
          this.userResponce.data.email,
          this.userResponce.token
        )
      
        this.route.navigate(['/home'])
       
      }else{
        alert(this.userResponce.message)
        this.formVal.reset()
      }
      
    })
    
  }

}
