export interface Productos {
    id: string;
    nombre: string;
    precio: number;
    disponible: boolean;
    imagen: string;
    categoria: string;
}

export interface LimiteDePagina {
    producto: Productos[];
    ElementosPorPagina?: number;
}