import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './arrivals/add/add.component';
import { DeskAddComponent } from './desk/desk-add/desk-add.component';
import { DeskComponent } from './desk/desk.component';
import { AddGoComponent } from './go/add-go/add-go.component';
import { EditGoComponent } from './go/edit/edit.component';
import { GoComponent } from './go/go.component';
import { TrainCarAddComponent } from './train-car/train-car-add/train-car-add.component';
import { TrainCarComponent } from './train-car/train-car.component';
import { AddTrainComponent } from './trains/add-train/add-train.component';
import { EditTrainComponent } from './trains/edit-train/edit-train.component';
import { TrainsComponent } from './trains/trains.component';
import { InfoTicketComponent } from './info-ticket/info-ticket.component';
import { IndexComponent } from './index/index.component';
import { AddressComponent } from './address/address.component';
import { TypeTripComponent } from './type-trip/type-trip.component';
import { TypeTicketComponent } from './type-ticket/type-ticket.component';
import { TicketAddComponent } from './type-ticket/ticket-add/ticket-add.component';
import { TypeTripAddComponent } from './type-trip/type-trip-add/type-trip-add.component';
import { EditComponent } from './arrivals/edit/edit.component';
import { TicketEditComponent } from './type-ticket/ticket-edit/ticket-edit.component';
import { TrainCarEditComponent } from './train-car/train-car-edit/train-car-edit.component';
import { TypeTripEditComponent } from './type-trip/type-trip-edit/type-trip-edit.component';
import { DeskEditComponent } from './desk/desk-edit/desk-edit.component';
import { VndPipe } from '../../../pipe/vnd-pipe';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'train',
    component: TrainsComponent,
  },
  {
    path: 'add-train',
    component: AddTrainComponent,
  },
  {
    path: 'trains-edit/:id',
    component: EditTrainComponent,
  },
  {
    path: 'trainCar',
    component: TrainCarComponent,
  },
  {
    path: 'trainCarAdd',
    component: TrainCarAddComponent,
  },
  {
    path: 'trainCar-edit/:id',
    component: TrainCarEditComponent,
  },
  {
    path: 'desk',
    component: DeskComponent,
  },
  {
    path: 'desk-add',
    component: DeskAddComponent,
  },
  {
    path: 'desk-edit/:id',
    component: DeskEditComponent,
  },
  {
    path: 'address',
    component: AddressComponent,
  },
  {
    path: 'arrival-edit/:id',
    component: EditComponent,
  },
  {
    path: 'arrival-add',
    component: AddComponent,
  },
  {
    path: 'go',
    component: GoComponent,
  },
  {
    path: 'go-add',
    component: AddGoComponent,
  },
  {
    path: 'edit/:id',
    component: EditGoComponent,
  },
  {
    path: 'infotichet',
    component: InfoTicketComponent,
  },
  {
    path: 'type-trip',
    component: TypeTripComponent,
  },
  {
    path: 'typeTrip-add',
    component: TypeTripAddComponent,
  },
  {
    path: 'typeTrip-edit/:id',
    component: TypeTripEditComponent,
  },
  {
    path: 'type-ticket',
    component: TypeTicketComponent,
  },
  {
    path: 'ticket-add',
    component: TicketAddComponent,
  },
  {
    path: 'ticket-edit/:id',
    component: TicketEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
