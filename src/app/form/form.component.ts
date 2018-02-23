import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  formData: FormGroup;

  constructor(private userService: UserService) { 
  }

  sendUser(formData:NgForm){
    this.userService.sendUser(formData.value);
  }

  ngOnInit() {
    this.formData = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(),
      date: new FormControl()
    });

    // this.formData.valueChanges.subscribe((value) => console.log(value));
  }
}
