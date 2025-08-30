import { Productos } from "./types";

export function obtenerProductosDisponiblesEnPrecioRango(productos: Productos[], top = 3): Productos[]{

    return productos
    .filter(producto => producto.disponible)
    .sort((primerProducto, segundoProducto) => primerProducto.precio - segundoProducto.precio)
    .slice(0, top); 
}