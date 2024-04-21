import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from '../../../../shared/validators/match-passwords.validator';
import { UserService } from '../../../services/users/user-service.service';
import { User } from '../../../types/user.type';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup;
  alertMessage: string = '';
  alertType: number = 0;

  constructor( private fb: FormBuilder, private userService: UserService){

  }

  ngOnInit(){
    this.signupFormGroup =  this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: [''],
      city: [''],
      state: [''],
      pin: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
  {
    validator: matchPassword
  });
  }

  get firstName(): AbstractControl<any,any> | null {
    return this.signupFormGroup.get("firstName");
  }
  get password(): AbstractControl<any,any> | null {
    return this.signupFormGroup.get("password");
  }
  get email(): AbstractControl<any,any> | null {
    return this.signupFormGroup.get("email");
  }
  get confirmPassword(): AbstractControl<any,any> | null {
    return this.signupFormGroup.get("confirmPassword");
  }

  onSubmit(): void{
    const user : User = {
      firstName: this.firstName?.value,
      lastName: this.signupFormGroup.get('lastName')?.value,
      city: this.signupFormGroup.get('city')?.value,
      address: this.signupFormGroup.get('address')?.value,
      state: this.signupFormGroup.get('state')?.value,
      pin: this.signupFormGroup.get('pin')?.value,
      email: this.email?.value,
      password: this.password?.value,
    }

    this.userService.createUser(user).subscribe({
      next: (result)=>{
        if(result.message === 'success'){
          this.alertMessage = 'User created successfully';
          this.alertType = 0;
        } else if(result.message === 'Email already exists') {
          this.alertMessage = 'Email already exists';
          this.alertType = 1;
        }
      },
      error: (error)=> {
        this.alertMessage = error.message;
        this.alertType = 2;
      }
    });
  }
}
