import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ShareComponent } from './components/pages/share/share.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { MomentsComponent } from './components/pages/moments/moments.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'share', component: ShareComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'moments', component: MomentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
