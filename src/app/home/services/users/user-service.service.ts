import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, loginToken } from '../../types/user.type';
import { Observable } from 'rxjs';
import { Environments, EnvironmentType } from '../../../shared/environments';

@Injectable()
export class UserService {

  constructor(private httpCLient: HttpClient) { 

  }

  createUser(user: User):Observable<any> {
    const url = Environments[EnvironmentType]+'users/signup';
    return this.httpCLient.post(url,user);
  }

  login(email: string, password: string): Observable<any>{
    const url = Environments[EnvironmentType]+'users/login';
    return this.httpCLient.post(url, {email: email, password: password});
  }

  activateToken(token: loginToken){
    localStorage.setItem('token',token.token);
    localStorage.setItem('expiry',new Date(Date.now()+token.expiresInSeconds*1000).toISOString());
  }
}
