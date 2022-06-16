export class Transaccion {
    monedaOrigen: string;
    cantidadOrigen: number;
    monedaDestino: string;
    cantidadDestino: number;
    emailCliente: string;
    tasaConversion: number;

    constructor(monedaOrigen='', cantidadOrigen=0, monedaDestino='', cantidadDestino=0, emailCliente='', tasaConversion=0){
        this.monedaOrigen = monedaOrigen;
        this.cantidadOrigen = cantidadOrigen;
        this.monedaDestino = monedaDestino;
        this.cantidadDestino = cantidadDestino;
        this.emailCliente = emailCliente;
        this.tasaConversion = tasaConversion;
    }
}
