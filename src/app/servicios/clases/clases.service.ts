import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor(private http: HttpClient) { }

  getClasePorId(id)
  {
    return this.http.get('http://localhost:3000/clases/'+id)
  }
}
