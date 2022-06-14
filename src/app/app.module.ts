import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListaComponent } from './producto/producto-lista.component';
import { ProductoNuevoComponent } from './producto/producto-nuevo.component';
import { ProductoEditarComponent } from './producto/producto-editar.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


//external

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductoDetalleComponent } from './producto/producto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListaComponent,
    ProductoNuevoComponent,
    ProductoEditarComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), /* ToastrModule added*/
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
