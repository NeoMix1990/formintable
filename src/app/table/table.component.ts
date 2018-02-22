import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../inform/user';
import { users } from '../inform/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  subject: Subscription;
  users: User[] = users;
  user: any;

  subscription: Subscription;

  constructor(private userService: UserService){
    this.users = [];
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.user = this.userService.getUser().subscribe((user) => ({ user : this.users.push(user)}));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  

}
