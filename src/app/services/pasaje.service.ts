import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  url_personas = 'http://localhost:4000/api/personas';
  url_pasajes = 'http://localhost:4000/api/pasajes';
  persona: Persona;
  personas: Array<Persona>;
  pasaje: Pasaje;
  pasajes: Array<Pasaje>;

  public categoriaPasajero!: string;
  public categoria: any[] = [
    {value: 'menor', nombre: 'Menor'},
    {value: 'adulto', nombre: 'Adulto'},
    {value: 'jubilado', nombre: 'Jubilado'},
  ]

  constructor(private http: HttpClient) {
    this.persona = new Persona;
    this.personas = new Array<Persona>();
    this.pasaje = new Pasaje;
    this.pasajes = new Array<Pasaje>();
  }

  getPersonas(): Observable<any>{
    return this.http.get<Persona[]>(this.url_personas);
  }

  getPasajes(): Observable<any>{
    return this.http.get<Pasaje[]>(this.url_pasajes);
  }

  getPasajesCategorias(categoriaSeleccionada: string): Observable<any>{
    return this.http.get<Pasaje[]>(this.url_pasajes + '/categorias?categoriaPasajero=' + categoriaSeleccionada );
  }

  createPasaje(pasaje: Pasaje): Observable<any>{
    return this.http.post(this.url_pasajes, pasaje);
  }

  updatePasaje(pasaje: Pasaje): Observable<any>{
    return this.http.put(this.url_pasajes + '/' + pasaje._id, pasaje);
  }

  deletePasaje(_id: string): Observable<any>{
    return this.http.delete(this.url_pasajes + '/' +_id);
  }
}
