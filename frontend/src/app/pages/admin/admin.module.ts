import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { TrainsComponent } from './trains/trains.component';
import { TrainCarComponent } from './train-car/train-car.component';
import { AddTrainComponent } from './trains/add-train/add-train.component';
import { EditTrainComponent } from './trains/edit-train/edit-train.component';
import { ArrivalsComponent } from './arrivals/arrivals.component';
import { GoComponent } from './go/go.component';
import { DeskComponent } from './desk/desk.component';
import { TypeTripComponent } from './type-trip/type-trip.component';
import { TypeTicketComponent } from './type-ticket/type-ticket.component';
import { InfoTicketComponent } from './info-ticket/info-ticket.component';
import { AddComponent } from './arrivals/add/add.component';
import { EditComponent } from './arrivals/edit/edit.component';
import { AddGoComponent } from './go/add-go/add-go.component';
import { TrainCarAddComponent } from './train-car/train-car-add/train-car-add.component';
import { TrainCarEditComponent } from './train-car/train-car-edit/train-car-edit.component';
import { DeskAddComponent } from './desk/desk-add/desk-add.component';
import { DeskEditComponent } from './desk/desk-edit/desk-edit.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddressComponent } from './address/address.component';
import { EditGoComponent } from './go/edit/edit.component';
import { IndexComponent } from './index/index.component';
import { TypeTripAddComponent } from './type-trip/type-trip-add/type-trip-add.component';
import { TicketAddComponent } from './type-ticket/ticket-add/ticket-add.component';
import { TypeTripEditComponent } from './type-trip/type-trip-edit/type-trip-edit.component';
import { TicketEditComponent } from './type-ticket/ticket-edit/ticket-edit.component';

@NgModule({
  declarations: [
    TrainsComponent,
    TrainCarComponent,
    AddTrainComponent,
    EditTrainComponent,
    ArrivalsComponent,
    GoComponent,
    DeskComponent,
    TypeTripComponent,
    TypeTicketComponent,
    InfoTicketComponent,
    AddComponent,
    EditComponent,
    AddGoComponent,
    TrainCarAddComponent,
    TrainCarEditComponent,
    DeskAddComponent,
    DeskEditComponent,
    AsideComponent,
    FooterComponent,
    AddressComponent,
    EditGoComponent,
    IndexComponent,
    TypeTripAddComponent,
    TicketAddComponent,
    TypeTripEditComponent,
    TicketEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
