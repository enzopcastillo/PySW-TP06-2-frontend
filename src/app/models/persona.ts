export class Persona {
    _id?: string;
    apellido: string;
    nombre: string;
    nro_documento: string;
    email: string;

    constructor(_id='', apellido='', nombre='', nro_documento='', email=''){
        this._id = _id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.nro_documento = nro_documento;
        this.email = email;
    }
}
