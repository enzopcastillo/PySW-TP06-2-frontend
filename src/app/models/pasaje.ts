import { Persona } from "./persona";

export class Pasaje {
    _id!: string;
    pasajero!: Persona;
    categoriaPasajero!: string;
    fechaCompra!: string;
    precioPasaje!: number;

    /*
    constructor(_id='', pasajero=<Pasaje>{}, categoriaPasajero='', fechaCompra='', precioPasaje=0){
        this._id = _id;
        this.pasajero = pasajero;
        this.categoriaPasajero = categoriaPasajero;
        this.fechaCompra = fechaCompra;
        this.precioPasaje = precioPasaje;
    }
    */
}
