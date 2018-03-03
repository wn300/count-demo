export interface Planilla {
    conductor: string,
    vehiculo: string,
    temperatura: string,
    cliente: string,
    pesos: Pesos[]
}
export interface Pesos {
    rango: string,
    canasta: number,
    peso: number,
    cantidad: number,
}