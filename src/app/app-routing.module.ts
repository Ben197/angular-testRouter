import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminSub1Component } from './admin/adminsub1/adminsub1.component';
import { AdminSub2Component } from './admin/adminsub2/adminsub2.component';
import { UserComponent } from './user/user.component';
import { HelloComponent } from './hello.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, children: [
      {
        path: 'adminsub1',
        component: AdminSub1Component
      },
      {
        path: 'adminsub2',
        component: AdminSub2Component
      }
    ]
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
