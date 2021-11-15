import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrainCar } from '../admin/common/trainCar';
@Injectable({
  providedIn: 'root'
})
export class TrainCarService {

  constructor(private http: HttpClient) { }
  getList(): Observable<TrainCar[]> {
    let url = `${environment.apiUrl}/trainCar`;
    return this.http.get<TrainCar[]>(url)
  }

  read(id: any): Observable<any> {
    let data = `${environment.apiUrl}/trainCar/${id}`;
    console.log(data);
    return this.http.get<any>(data);
  }

  add(obj: TrainCar): Observable<TrainCar> {
    let url = `${environment.apiUrl}/trainCar/create`;
    return this.http.post<TrainCar>(url, obj)
  }

  delete(id: TrainCar): Observable<TrainCar> {
    return this.http.delete<TrainCar>(`${environment.apiUrl}/trainCar/` + id)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/trainCar/${id}`, data);
  }

  findTrainCarByTrain(id: TrainCar): Observable<TrainCar[]> {
    return this.http.get<TrainCar[]>(`${environment.apiUrl}/trainCar/search?Train=${id}`)

  }
  findById(id: TrainCar): Observable<TrainCar> {
    return this.http.get<TrainCar>(`${environment.apiUrl}/trainCar/` + id);
  }
}
