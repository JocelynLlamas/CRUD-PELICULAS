import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-verpeliculas',
  templateUrl: './verpeliculas.component.html',
  styleUrls: ['./verpeliculas.component.css']
})
export class VerpeliculasComponent implements OnInit {

  vPeliculas: Pelicula[] = [];

  constructor(private _peliculaService: PeliculaService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.verPeliculas();
  }

  verPeliculas(){
    this._peliculaService.getPeliculas().subscribe(data=> {
      console.log(data);
      this.vPeliculas = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarPelicula(id:any){
    this._peliculaService.eliminarPelicula(id).subscribe(data=> {
      this.toastr.error('La pelicula se eliminó');
      this.verPeliculas();
    }, error => {
      console.log(error);
    })
  }
}
