import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-creapelicula',
  templateUrl: './creapelicula.component.html',
  styleUrls: ['./creapelicula.component.css']
})
export class CreapeliculaComponent implements OnInit {
  peliculaForm: FormGroup;
  titulo = 'Agregar Pelicula';
  id: string | null;

  constructor(private pf: FormBuilder, private router:Router, private toastr: ToastrService, private _peliculaService: PeliculaService,
              private aRouter: ActivatedRoute) { 
    this.peliculaForm = this.pf.group({
      nombre: ['', Validators.required],
      director: ['', Validators.required],
      genero: ['', Validators.required],
      anio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregaPelicula(){
    console.log(this.peliculaForm)

    console.log(this.peliculaForm.get('nombre')?.value)

    const PELICULA: Pelicula = {
      nombre: this.peliculaForm.get('nombre')?.value,
      director: this.peliculaForm.get('director')?.value,
      genero: this.peliculaForm.get('genero')?.value,
      anio: this.peliculaForm.get('anio')?.value,
    }

    if (this.id !== null) {
      // EDITAR
      this._peliculaService.peliculaEditada(this.id,PELICULA).subscribe(data=> {
        this.toastr.info('¡Tu película se actualizó con éxito!', '¡Película Actualizada!'); 
        this.router.navigate(['/']);
      }, error =>{
        console.log(error);
        this.peliculaForm.reset();
      })
    }else{
      // AGREGAR
      console.log(PELICULA);
      this._peliculaService.agregarPelicula(PELICULA).subscribe(data =>{
        this.toastr.success('¡Tu película se registró con éxito!', '¡Película Registrada!'); 
        this.router.navigate(['/']);
      }, error =>{
        console.log(error);
        this.peliculaForm.reset();
      }
      )
    }
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Pelicula';
      this._peliculaService.editarPelicula(this.id).subscribe(data=>{
        this.peliculaForm.setValue({
          nombre:data.nombre,
          director: data.director,
          genero: data.genero,
          anio: data.anio,
        })
      })
    }
  }

}
