import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
  { path: '', component: UsersComponent }
]


@NgModule({
  declarations: [UsersComponent,UserComponent],
  entryComponents:[UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    InfiniteScrollModule  
  ]
})
export class UsersModule { }
