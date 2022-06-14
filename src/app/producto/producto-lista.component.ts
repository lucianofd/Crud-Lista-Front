import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

   productos: Producto[] = [];


  constructor(private productoService: ProductoService,
     private toastr: ToastrService) { }

  ngOnInit(): void {

    this.cargarProducto();
  }

  cargarProducto(): void {
    this.productoService.lista().subscribe(
      {
       next: data=> {
        this.productos = data;
      },
       error: err =>{
         console.log(err);
       }
      
  }
  )
  }
  

  borrar(id:number){
    this.productoService.delete(id).subscribe(
      {
        next: data =>{
          this.toastr.success('Porducto eliminado', 'Ok', {
            timeOut: 2000, positionClass : 'toast-top-center',
          });
          this.cargarProducto();
          
        },
         
        error: err =>{
          this.toastr.error(err.error.mensaje, 'Fail!', {
            timeOut: 2000, positionClass : 'toast-top-center',
          }) 

        }
      }
    )
  }

}
