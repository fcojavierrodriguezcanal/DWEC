import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  public email = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);

  public newForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  ngOnInit(): void {
  }

  public onSubmit(formValue: any){
    console.log(formValue)
  }

}
