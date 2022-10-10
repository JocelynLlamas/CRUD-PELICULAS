import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerpeliculasComponent } from './components/verpeliculas/verpeliculas.component';
import { CreapeliculaComponent} from './components/creapelicula/creapelicula.component';

const routes: Routes = [
    { path: '', component: VerpeliculasComponent },
    { path: 'creapelicula', component: CreapeliculaComponent },
    { path: 'editapelicula/:id', component: CreapeliculaComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
