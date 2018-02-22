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
  users: User[] = users;
  // user: any;

  subscription: Subscription;

  constructor(private userService: UserService){
    // this.subscription = this.userService.getUser().subscribe(user => { this.user = user; });
    // this.users = [];
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
