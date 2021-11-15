import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
// import { HomeComponent } from './pages/home/home.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AddTrainComponent } from './pages/admin/trains/add-train/add-train.component';

const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () => import("./pages/admin/admin.module").then(mod => mod.AdminModule)
  },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
