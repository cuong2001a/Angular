import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { PlaceManagerComponent } from './pages/place-manager/place-manager.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from '../component/banner/banner.component';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { ChooseCarComponent } from './pages/choose-car/choose-car.component';
import { ChooseTrainComponent } from './pages/choose-train/choose-train.component';
import { ChooseSeatComponent } from './pages/choose-seat/choose-seat.component';
import { InformationComponent } from './pages/information/information.component';
import { PayComponent } from './pages/pay/pay.component';
import { SuccessComponent } from './pages/success/success.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormSearchComponent } from './pages/home/form-search/form-search.component';
import { SearchComponent } from './pages/place-manager/search/search.component';


@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    ContactComponent,
    BlogsComponent,
    PlaceManagerComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    ChooseCarComponent,
    ChooseTrainComponent,
    ChooseSeatComponent,
    InformationComponent,
    PayComponent,
    SuccessComponent,
    FormSearchComponent,
    SearchComponent,
    

  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CarouselModule,
    FormsModule, ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ClientModule { }
