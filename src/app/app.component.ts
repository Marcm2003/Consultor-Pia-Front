import { Component } from '@angular/core';
import { AlumnosService } from './services/alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ConsultorPia';
  
  listaAlumnos: any;
  alumnoBuscado: any;
  idBusqueda: any;

  constructor (
    private alumnosService: AlumnosService
  ) {

  }

  ngOnInit() {
    this.alumnosService.getListadoAlumnos().subscribe(response => {
      this.listaAlumnos = response;
    })
  }

  buscar() {
    this.alumnosService.getAlumno(this.idBusqueda).subscribe(response => {
      this.alumnoBuscado = response;
      this.listaAlumnos.forEach((item: any) => {
        if (item?.id === this.alumnoBuscado?.id) {
          item.encontrado = true;
        } else {
          item.encontrado = false;
        }
      });
    })
  }
}
