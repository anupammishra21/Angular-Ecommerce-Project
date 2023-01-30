import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-buynowform',
  templateUrl: './buynowform.component.html',
  styleUrls: ['./buynowform.component.scss']
})
export class BuynowformComponent implements OnInit {
  formVal!:FormGroup
  store!:any
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formVal=this.fb.group({
      fname:[''],
      email:[''],
      address:[''],
      city:[''],
      state:[''],
      zipCode:[''],
      cardHolder:[''],
      cardNumber:[''],
      expMonth:[''],
      expYear:[''],
      cvv:[''],
    })
  }

  submitVal(){
    this.store=this.formVal.value
    console.log("submitted values...",this.store);
  }

}
