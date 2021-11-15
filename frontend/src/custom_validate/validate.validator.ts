import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { GoService } from "../app/pages/service/go.service";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ArrivalService } from "../app/pages/service/arrival.service";
import { TrainsService } from "../app/pages/service/trains.service";

export function uniqueArrivalName(arrivalService: ArrivalService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return arrivalService.searchByName(c.value).pipe(
      map(arrival => {
        return arrival && arrival.length > 0 ? { uniqueArrival: true } : null;
      })
    )
  }
}

export function uniqueGoName(goService: GoService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return goService.searchByName(c.value).pipe(
      map(go => {
        return go && go.length > 0 ? { uniqueGo: true } : null;
      })
    )
  }
}

export function uniqueTrainName(trainService: TrainsService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return trainService.searchByName(c.value).pipe(
      map(train => {
        return train && train.length > 0 ? { uniqueTrain: true } : null;
      })
    )
  }
}