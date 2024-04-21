import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/users/user-service.service';
import { loginToken } from '../../../../types/user.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  alertYpe: number = 0;
  alertMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ){

  }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',Validators.required]
    });
  }

  get email(): AbstractControl<any,any> | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl<any,any> | null {
    return this.loginForm.get('password');
  }

  onSubmit(){
    this.userService.login(this.email?.value,this.password?.value).subscribe({
      next: (result: loginToken)=>{
        this.userService.activateToken(result);
        this.alertYpe = 0;
        this.alertMessage = "Login Successful"
      },
      error: (error: any)=>{
        this.alertYpe = 2;
        this.alertMessage = error.error.message;

      }
    });
  }
}
