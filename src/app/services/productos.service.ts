import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = `${environment.API_URL}/api/v1`;
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(`${this.apiUrl}/products`)
  }
  
  getAlls(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<any[]>(`${this.apiUrl}/products`, { params })
      .pipe(
        retry(3),
        map(products => products.map((item:any) => {
          return {
            ...item,
            taxes: item.price > 0 ? .19 * item.price : 0
          }
        }))
      );
  }

}



