import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaDeObjetos : any;

  constructor(private productoServices: ProductosService ){}
  ngOnInit(): void {
    // this.productoServices.getAll().subscribe(data => {
    //   this.listaDeObjetos = data;
    //   console.log(this.listaDeObjetos)
    // })
    this.productoServices.getAlls(10,10).subscribe(data =>{
      this.listaDeObjetos= data;
      console.log(data)
    })
  }

}
