import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HelloComponent } from './hello.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, 
  }, 
  {
    path: 'user',
    component: UserComponent, 
  },
  {
    path: 'hello',
    component: HelloComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
