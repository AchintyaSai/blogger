import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./blog-portal/home/home.module').then(m => m.HomeModule) }, { path: 'about', loadChildren: () => import('./blog-portal/about/about.module').then(m => m.AboutModule) }, { path: 'contact-us', loadChildren: () => import('./blog-portal/contact-us/contact-us.module').then(m => m.ContactUsModule) }, { path: 'single-post', loadChildren: () => import('./blog-portal/single-post/single-post.module').then(m => m.SinglePostModule) }, { path: '', loadChildren: () => import('./blog-portal/login/login.module').then(m => m.LoginModule) }, { path: 'otp-verification', loadChildren: () => import('./blog-portal/otp-verification/otp-verification.module').then(m => m.OtpVerificationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
