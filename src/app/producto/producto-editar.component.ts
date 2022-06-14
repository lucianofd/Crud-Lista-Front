import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  producto: Producto = null;


  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detail(id).subscribe({
      next: data =>{
        this.producto = data;
      },
      error: err => {
        this.toastr.error(err.error.mensaje, 'Fail!', {
          timeOut: 2000, positionClass : 'toast-top-center',
        }) ,
        this.router.navigate(['/']);
  

      }
    })
  }
     
  onUpdate(): void{
   const id = this.activatedRoute.snapshot.params['id'];
   this.productoService.update(id, this.producto).subscribe(
    {
      
      next: data => {
        this.toastr.success('Porducto actualizado', 'Ok', {
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

 }
     
   )
  }


}
