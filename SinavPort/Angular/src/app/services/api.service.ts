import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private accessPointUrl = 'https://localhost:44399/api/sorular';
  private SinavUrl = 'https://localhost:44399/api/sinavlar';
  private selectedSoru = new Subject<any>();
  soruSelected = this.selectedSoru.asObservable();

  private selectedSinav = new Subject<any>();
  SinavSelected = this.selectedSinav.asObservable();

  constructor(private http: HttpClient) { }

  postSoru(Soru) {
    this.http.post(this.accessPointUrl, Soru).subscribe(res => {
      console.log(res);
    });
  }

  putSoru(Soru) {
    this.http.put(`${this.accessPointUrl}/${Soru.id}`, Soru).subscribe(res => {
      console.log(res);
    });
  }

  getSorus(SinavId) {
    return this.http.get(`${this.accessPointUrl}/${SinavId}`);
  }

  selectSoru(Soru) {
    console.log(Soru);
    this.selectedSoru.next(Soru);
  }

  postSinav(Sinav) {
    this.http.post(this.SinavUrl, Sinav).subscribe(res => {
      console.log(res);
    });
  }

  selectSinav(Sinav) {
    console.log(Sinav);
    this.selectedSinav.next(Sinav);
  }

  putSinav(Sinav) {
    this.http.put(`${this.SinavUrl}/${Sinav.id}`, Sinav).subscribe(res => {
      console.log(res);
    });
  }

  getSinavzes() {
    return this.http.get(this.SinavUrl);
  }

  getAllSinavzes() {
    return this.http.get(`${this.SinavUrl}/all`);
  }

}
