import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  url_libros = 'http://localhost:4000/api/libros';
  libro: Libro;
  libros: Array<Libro>;
  libroAPI: Libro;
  librosAPI: Array<Libro>;
  name!: string;
  cover!: string;
  created_editions!: number;
  
  destacado: any[] = [
    {value: true, nombre: 'Si'},
    {value: false, nombre: 'No'}
  ]

  constructor(private http: HttpClient) {
    this.libro = new Libro();
    this.libros = new Array<Libro>();
    this.libroAPI = new Libro();
    this.librosAPI = new Array<Libro>();
  }

  getBooks(book_name: string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
      'X-RapidAPI-Key': ''
      }),
    }
    return this.http.get("https://hapi-books.p.rapidapi.com/search/" +book_name+ "", httpOptions);
  }

  getLibrosDestacados(): Observable<any>{
    return this.http.get<Libro[]>(this.url_libros + '/destacados');
  }
  
  createLibro(libro: Libro): Observable<any>{
    return this.http.post(this.url_libros, libro);
  }
}
