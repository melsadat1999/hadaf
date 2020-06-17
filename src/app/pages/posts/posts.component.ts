import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Config } from 'src/app/shared/confing/config';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private http:HttpService) { }

  ngOnInit(): void {
    this.getPosts()
  }
  getPosts(){
    this.http.get(Config.posts).subscribe(res=>{
      console.log(res)
    })
  }
}
