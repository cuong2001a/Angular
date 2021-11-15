import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Train } from '../admin/common/train';
@Injectable({
  providedIn: 'root'
})
export class TrainsService {

  constructor(private http: HttpClient) { }
  getList(): Observable<Train[]> {
    let url = `${environment.apiUrl}/train`;
    return this.http.get<Train[]>(url)
  }

  read(id: any): Observable<any> {
    let data = `${environment.apiUrl}/train/detail/${id}`;
    console.log(data);
    return this.http.get<any>(data);
  }

  addList(obj: Train): Observable<Train> {
    return this.http.post<Train>(`${environment.apiUrl}/train/create`, obj)
  }

  deleteList(id: Train): Observable<Train> {
    return this.http.delete<Train>(`${environment.apiUrl}/train/` + id)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/train/${id}`, data);
  }

  searchByName(keyword: any): Observable<Train[]> {
    console.log(1)
    return this.http.get<Train[]>(`${environment.apiUrl}/train/searchByName?name_like=${keyword}`);
  }

  findOneTrain(id: Train): Observable<Train> {
    return this.http.get<Train>(`${environment.apiUrl}/train/` + id)
  }

  findTrain(train: Train): Observable<Train[]> {
    return this.http.get<Train[]>(`${environment.apiUrl}/train/search?addressArrival=${train.addressArrival}&addressGo=${train.addressGo}&thoiGianDi=${train.thoiGianDi}&thoiGianVe=${train.thoiGianVe}`)
  }
}
