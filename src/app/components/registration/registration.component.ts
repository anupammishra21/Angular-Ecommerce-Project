import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from "../../service/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  formVal!: FormGroup;
  picStore!:any;
  storeValue!:any;

  constructor(private fb: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.formVal = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      password: [''],
    });
  }
  pic(event:any){
    this.picStore=event.target.files[0]
    console.log("picture is",this.picStore);
    
    
  }

  dis(){
    // console.log("submitted values",this.formVal.value);
    this.storeValue=this.formVal.value
    let formData=new FormData()
    formData.append('first_name',this.storeValue.first_name)
    formData.append('last_name',this.storeValue.last_name)
    formData.append('email',this.storeValue.email)
    formData.append('password',this.storeValue.password)
    formData.append('profile_pic',this.picStore,this.picStore.name)
    // console.log("formdata values",formData);
    this.user.userRegistration(formData).subscribe((res:any)=>{
      console.log("registration responce",res);
      
    })
    
    
  }

}
