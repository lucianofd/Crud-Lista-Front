import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-nuevo',
  templateUrl: './producto-nuevo.component.html',
  styleUrls: ['./producto-nuevo.component.css']
})
export class ProductoNuevoComponent implements OnInit {

  


  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router,
    ) { }

  nombre: string = '';
  precio: number= null;

  ngOnInit(): void {

   
  }

 onCreate(): void {
    const producto = new Producto(this.nombre, this.precio);
    this.productoService.save(producto).subscribe({
      //formato de subscribe tener presente!! segun version.
      next: data => {
        this.toastr.success('Porducto creado', 'Ok', {
          timeOut: 2000, positionClass : 'toast-top-center',
        }) ,
        this.router.navigate(['/']);
      },
     error: err => {
      this.toastr.error(err.error.mensaje, 'Fail!', {
        timeOut: 2000, positionClass : 'toast-top-center',
      }) ,
      this.router.navigate(['/']);

      }

 })
 }

 

}
