export class Libro {
    name: string;
    descripcion: string;
    cover: string;
    created_editions: number;
    destacado: boolean;

    constructor(name='', descripcion='', cover='', created_editions=0, destacado=true){
        this.name = name;
        this.descripcion = descripcion;
        this.cover = cover;
        this.created_editions = created_editions;
        this.destacado = destacado;
    }
}
