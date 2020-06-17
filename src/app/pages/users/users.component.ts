import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Config } from 'src/app/shared/confing/config';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  //get Users
  getUsers() {
    this.http.get<User>(Config.users).subscribe(res => {
      this.users = res.result;
    })
  }
}
