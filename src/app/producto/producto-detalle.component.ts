import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
   
    producto: Producto = null;

  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id= this.activatedRoute.snapshot.params['id'];
    this.productoService.detail(id).subscribe({
      next: data =>{
        this.producto = data;
      },

      error: err => {
        this.toastr.error(err.error.mensaje, 'Fail!', {
          timeOut: 2000, positionClass : 'toast-top-center',
        }) ,
        this.volver();
      }
    })
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}
