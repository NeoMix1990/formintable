import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { users } from './inform/data';
import { User } from './inform/user';

@Injectable()
export class UserService {
  users: User[] = users;
  private user = new Subject<any>();
  constructor() { }


  sendUser(user) {
    this.user.next(user);
  }
  getUser(): Observable<any> {
    return this.user.asObservable();
  }
  getUsers(): User[] {
    // console.log(users);
    return this.users;
  }
}
