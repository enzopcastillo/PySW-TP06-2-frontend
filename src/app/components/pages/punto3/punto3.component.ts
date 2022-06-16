import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  constructor(public pasajeService: PasajeService) {}

  ngOnInit(): void {
    this.ngGetPersonas();
    this.ngGetPasajes();
  }

  ngGetPersonas(){
    this.pasajeService.getPersonas().subscribe(
      (result)=>{
        this.pasajeService.personas = result;
      }
    )
  }

  ngGetPasajes(){
    this.pasajeService.getPasajes().subscribe(
      (result)=>{
        this.pasajeService.pasajes = result;
      }
    )
  }

  ngGetPasajesCategorias(){
    this.pasajeService.getPasajesCategorias(this.pasajeService.categoriaPasajero).subscribe(
      (result)=>{
        this.pasajeService.pasajes = result;
      }
    )
  }

  ngCreatePasaje(form: NgForm){
    if (form.value._id){
      this.pasajeService.updatePasaje(form.value).subscribe(
        (result)=>{
          this.ngGetPasajes();
          this.resetForm(form);
        }
      )
    } else{
      this.pasajeService.createPasaje(form.value).subscribe(
        (result)=>{
          this.ngGetPasajes();
          this.resetForm(form);
        }
      )
    }
    
  }

  ngEditPasaje(pasaje: Pasaje){
    this.pasajeService.pasaje = pasaje;
  }

  ngDeletePasaje(_id: string, form: NgForm){
    this.pasajeService.deletePasaje(_id).subscribe(
      (result)=>{
        this.ngGetPasajes();
        this.resetForm(form);
      }
    )
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
