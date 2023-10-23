import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-details',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form!: FormGroup;
  listaObjetos : Producto[] = []

  constructor(private fb:FormBuilder){ this.form = this.fb.nonNullable.group({
    producto:['',Validators.required],
    descripcion:['',Validators.required],
    color:[''],
  })
}
crearObjeto(){const OBJETO:Producto = {
	producto: this.form.value.producto,
	color: this.form.value.color,
  descripcion: this.form.value.descripcion,
}
this.listaObjetos.push(OBJETO)
this.form.reset()
console.log(OBJETO)
console.log(this.form)
console.log(this.listaObjetos)
}

}
