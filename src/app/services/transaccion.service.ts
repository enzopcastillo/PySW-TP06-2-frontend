import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  url_transacciones = 'http://localhost:4000/api/transacciones';
  transaccion: Transaccion;
  transaciones: Array<Transaccion>;
  cantidadOrigen!: number;
  cantidadDestino!: number;

  //BUSQUEDA
  monedaOrigenB!: string;
  monedaOrigenSB: any[] = [
    {value: 'ARS', nombre: 'Pesos Argentinos (ARS)'},
    {value: 'USD', nombre: 'Dolares Estadounidenses (USD)'},
    {value: 'EUR', nombre: 'Euros (EUR)'},
  ]

  monedaDestinoB!: string;
  monedaDestinoSB: any[] = [
    {value: 'ARS', nombre: 'Pesos Argentinos (ARS)'},
    {value: 'USD', nombre: 'Dolares Estadounidenses (USD)'},
    {value: 'EUR', nombre: 'Euros (EUR)'},
  ]

  //CONVERSION
  monedaOrigen!: string;
  monedaOrigenSC: any[] = [
    {value: 'ARS', nombre: 'Pesos Argentinos (ARS)'},
    {value: 'USD', nombre: 'Dolares Estadounidenses (USD)'},
    {value: 'EUR', nombre: 'Euros (EUR)'},
  ]

  monedaDestino!: string;
  monedaDestinoSC: any[] = [
    {value: 'ARS', nombre: 'Pesos Argentinos (ARS)'},
    {value: 'USD', nombre: 'Dolares Estadounidenses (USD)'},
    {value: 'EUR', nombre: 'Euros (EUR)'},
  ]

  constructor(private http: HttpClient) {
    this.transaccion = new Transaccion();
    this.transaciones = new Array<Transaccion>();
  }

  getConversion(cantidadOrigen: number, monedaOrigen: string, monedaDestino: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Host": "community-neutrino-currency-conversion.p.rapidapi.com",
        "X-RapidAPI-Key": ""
      })
    }
    const body = new HttpParams()
      .set('from-value', cantidadOrigen)
      .set('from-type', monedaOrigen)
      .set('to-type', monedaDestino);
    return this.http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body, httpOptions);
  }

  getTransacciones(): Observable<any>{
    return this.http.get<Transaccion[]>(this.url_transacciones);
  }

  getTransaccionesDivisas(monedaOrigen: string, monedaDestino: string): Observable<any>{
    return this.http.get<Transaccion[]>(this.url_transacciones + '/divisas?monedaOrigen=' + monedaOrigen + '&monedaDestino=' + monedaDestino );
  }

  createTransaccion(transaccion: Transaccion): Observable<any>{
    return this.http.post(this.url_transacciones, transaccion);
  }
}
