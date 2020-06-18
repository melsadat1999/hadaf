import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Config } from 'src/app/shared/confing/config';
import { User } from 'src/app/shared/models/User.model';
import { Page } from 'src/app/shared/models/page.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  loader: boolean;
  page: Page = new Page();
  _meta: any = {};
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  //get Users
  getUsers() {
    if (this.users.length == 0) {
      this.loader = true;
    }
    const query = {
      page: this.page.page
    }
    this.http.get<User>(Config.users, query).subscribe(res => {
      this.users.push(...res.result);
      this._meta = res._meta
      this.loader = false;
    })
  }

  onScroll() {
    if (this._meta.totalCount == this.users.length) { return }
    this.page.page++;
    this.getUsers();
  }
}
