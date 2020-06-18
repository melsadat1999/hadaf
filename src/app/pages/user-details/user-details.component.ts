import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User.model';
import { HttpService } from 'src/app/shared/services/http.service';
import { Config } from 'src/app/shared/confing/config';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User = new User();
  userId: string;
  loader: boolean;
  editMode: boolean;
  userForm: FormGroup;
  constructor(private http: HttpService, activatedRoute: ActivatedRoute, formBuilder: FormBuilder,private router:Router) {
    activatedRoute.params.subscribe(param => {
      this.userId = param.id
    })
   this.userForm = formBuilder.group({
      first_name:['',Validators.required],
      last_name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      address:['',Validators.required],
      phone:['',Validators.required],
      gender:['',Validators.required],
      status:['',Validators.required]
    })
  }


  ngOnInit(): void {
    this.getUserDetails();
  }
  getUserDetails() {
    this.loader = true;
    this.http.get(Config.users + '/' + this.userId).subscribe(res => {
      this.user = res.result;
      this.loader = false;

    })
  }
  updateUser() {
    if (!this.editMode) { this.editMode = true; return }
    this.http.update(Config.users + '/' + this.userId, this.user).subscribe(res => {
      this.editMode = false;
    })
  }
  deleteUser() {
 
    this.http.delete(Config.users + '/' + this.userId).subscribe(res => {
      this.router.navigate(['/users'])
    })
  }
}
