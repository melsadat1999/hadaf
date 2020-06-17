import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
@Input() user:User=new User();
  constructor() { }

  ngOnInit(): void {
  }

}
