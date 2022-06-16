import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  book_name!: string;

  constructor(public libroService: LibroService) {}

  ngOnInit(): void {
    this.ngGetLibrosDestacados();
  }

  ngGetBooks(){
    this.libroService.getBooks(this.book_name).subscribe(
      (result)=>{
        this.libroService.librosAPI = new Array<Libro>();
        result.forEach(element =>{
          this.libroService.libroAPI = new Libro();
          Object.assign(this.libroService.libroAPI, element);
          this.libroService.librosAPI.push(this.libroService.libroAPI);
        });
      }
    ) 
  }

  ngSelectLibro(libro: Libro){
    this.libroService.name = libro.name;
    this.libroService.cover = libro.cover
    this.libroService.created_editions = libro.created_editions;
  }

  ngGetLibrosDestacados(){
    this.libroService.getLibrosDestacados().subscribe(
      (result)=>{
        this.libroService.libros = result;
      }
    )
  }

  ngCreateLibro(form: NgForm){
    this.libroService.createLibro(form.value).subscribe(
      (result)=>{
        this.resetForm(form);
        this.ngGetLibrosDestacados();
      }
    )
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
