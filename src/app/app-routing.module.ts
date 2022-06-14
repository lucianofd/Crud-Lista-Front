import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoDetalleComponent } from './producto/producto-detalle.component';
import { ProductoEditarComponent } from './producto/producto-editar.component';
import { ProductoListaComponent } from './producto/producto-lista.component';
import { ProductoNuevoComponent } from './producto/producto-nuevo.component';

const routes: Routes = [
  {path: '', component: ProductoListaComponent },
  {path:'detalle/:id', component: ProductoDetalleComponent },
  {path:'nuevo', component: ProductoNuevoComponent},
  {path: 'editar/:id', component: ProductoEditarComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
