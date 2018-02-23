import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
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
  user: any;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.user = this.userService.getUser().subscribe((user) => ({ user : this.users.push(user)}));
  }

  winner() {
    let random = Math.floor(Math.random() * this.users.length);
    this.users.forEach(function(user) {
      return user.winner = false;
    });
    console.log(this.users[random].winner = true);
    this.users[random].winner = true;
    console.log(this.users[random]);
    console.log(this.users);
  }

  ngOnDestroy(){
    this.user.unsubscribe();
  }
  

}
