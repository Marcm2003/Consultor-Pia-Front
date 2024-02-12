import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private LOCAL_BACK_URL = 'http://localhost:8080/api/';

  constructor(
    private http : HttpClient
  ) { }

  getListadoAlumnos(): Observable<any> {
    return this.http.get(this.LOCAL_BACK_URL + 'alumnos/listado')
  }
  
  getAlumno(idAlumno: any): Observable<any> {
    return this.http.get(this.LOCAL_BACK_URL + `alumnos/${idAlumno}`);
  }
}
