import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  constructor(public transaccionService: TransaccionService) {}

  ngOnInit(): void {
    this.ngGetTransacciones();
  }

  ngGetConversion(){
    this.transaccionService.getConversion(this.transaccionService.transaccion.cantidadOrigen, this.transaccionService.monedaOrigen, this.transaccionService.monedaDestino).subscribe(
      (res)=>{
        this.transaccionService.cantidadDestino = res['result'];
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )  
  }

  ngGetTransacciones(){
    this.transaccionService.getTransacciones().subscribe(
      (result)=>{
        this.transaccionService.transaciones = result;
      }
    )
  }

  ngGetTransaccionesDivisas(){
    this.transaccionService.getTransaccionesDivisas(this.transaccionService.monedaOrigenB, this.transaccionService.monedaDestinoB).subscribe(
      (result)=>{
        this.transaccionService.transaciones = result;
      }
    )
  }

  ngCreateTransaccion(form: NgForm){
    this.transaccionService.createTransaccion(form.value).subscribe(
      (result)=>{
        this.ngGetTransacciones();
        this.resetForm(form);
      }
    )
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
