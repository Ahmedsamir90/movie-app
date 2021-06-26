import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
declare let $: any;



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
    $('.error-message-container').hide();
  }

  errorMessage: string = '';
  isLoading:boolean = false;


  registerForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(45)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9\d@$%#&]{8,}$')]),
  })

  submitRegisterForm(registerFormData: FormGroup) {
    this.isLoading = true;

    this._AuthService.makeUserRegistration(registerFormData.value).subscribe((response) => {
      if (response.message == 'success') {
        this.isLoading = false;
        this._Router.navigate(['/login'])
      }
      else {
        this.isLoading = false;
        this.errorMessage = response.errors.email.message
        this.showErrorALert()
      }
    })

  }



  showErrorALert() {
    $('.error-message-container').fadeIn(400);
    setTimeout(function () {
      $('.error-message-container').fadeOut('slow');
    }, 3000);
  }
}
