import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './client.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ChooseTrainComponent } from './pages/choose-train/choose-train.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PlaceManagerComponent } from './pages/place-manager/place-manager.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { PayComponent } from './pages/pay/pay.component';
import { ChooseCarComponent } from './pages/choose-car/choose-car.component';
import { ChooseSeatComponent } from './pages/choose-seat/choose-seat.component';
import { InformationComponent } from './pages/information/information.component';
import { SuccessComponent } from './pages/success/success.component';
const routes: Routes = [{ path: '', component: ClientComponent,
children:[
  {path:"",component:HomeComponent},
  {path:"train",component:ChooseTrainComponent},
  {path:"contact",component:ContactComponent},
  {path:"placemanager",component:PlaceManagerComponent},
  {path:"blogs",component:BlogsComponent},
  {path:"pay",component:PayComponent},
  {path:"car/:id",component:ChooseCarComponent},
  {path:"seat/:id",component:ChooseSeatComponent},
  {path:"information",component:InformationComponent},
  {path:"success",component:SuccessComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
