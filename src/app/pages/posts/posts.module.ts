import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: PostsComponent }
]

@NgModule({
  declarations: [PostComponent, PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
