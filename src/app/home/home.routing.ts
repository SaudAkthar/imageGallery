// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { AuthGuard } from '../guard/auth.guard';
import { HomeComponent } from './home.component';
import { HomeDetailComponent } from './detail/home-detail.component';

const homeRoutes: Routes = [
  { path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home/:id',
    component: HomeDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
