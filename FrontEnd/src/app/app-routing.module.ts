import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthguardGuard } from './authguard.guard';
import { MembersuserComponent } from './membersuser/membersuser.component';
import { CategoryComponent } from './category/category.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { RegisterComponent } from './register/register.component';
import { RegistervendorComponent } from './registervendor/registervendor.component';
import { BrandComponent } from './brand/brand.component';
import { BrandlistComponent } from './brandlist/brandlist.component';
const routes: Routes = [
    { path: 'login', component: LoginComponent },    
    { path: 'registeruser', component: RegisterComponent },
    { path: 'registervendor', component: RegistervendorComponent,canActivate:[AuthguardGuard] },
    { path: 'members', component: MembersComponent,canActivate:[AuthguardGuard]},
    { path: 'membersusers', component: MembersuserComponent,canActivate:[AuthguardGuard]},
    { path: 'category', component: CategoryComponent,canActivate:[AuthguardGuard]},
    { path: 'categorylist', component: CategorylistComponent,canActivate:[AuthguardGuard]},
    { path: 'brand', component: BrandComponent,canActivate:[AuthguardGuard]},
    { path: 'brandlist', component: BrandlistComponent,canActivate:[AuthguardGuard]},
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
