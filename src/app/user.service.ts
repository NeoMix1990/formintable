import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { users } from './inform/data';
import { User } from './inform/user';

@Injectable()
export class UserService {
  users: User[] = users;
  private subject = new Subject<any>();
  constructor() { }


  sendUser(user) {
    this.subject.next(user);
  }
  getUser(): Observable<any> {
    return this.subject.asObservable();
  }
  getUsers(): User[] {
    console.log(users);
    return this.users;
  }
}
