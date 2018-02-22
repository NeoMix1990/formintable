import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  formData: FormGroup;

  constructor(private userService: UserService) {  }
  sendUser(formData:NgForm){
    console.log(formData.value);
  }

  ngOnInit() {
    this.formData = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      date: new FormControl()
    })


    // this.formData.valueChanges.subscribe((value) => console.log(value));
  }
}
