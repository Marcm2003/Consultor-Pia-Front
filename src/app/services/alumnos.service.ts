import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(
    private http : HttpClient
  ) { }

  getListadoAlumnos(): Observable<any> {
    return this.http.get('http://localhost:4200/api/alumnos/listado')
  }
  
  getAlumno(idAlumno: any): Observable<any> {
    return this.http.get(`http://localhost:4200/api/alumnado/${idAlumno}`);
  }
}
