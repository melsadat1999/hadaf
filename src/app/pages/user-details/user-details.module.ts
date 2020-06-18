import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: UserDetailsComponent }
]


@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserDetailsModule { }
