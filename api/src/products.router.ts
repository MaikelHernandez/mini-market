import { Router, Request, Response } from "express";
import { Productos } from "./types";
import productsData from "./data/products.json";

const router = Router();
const productos: Productos[] = productsData;

// get
router.get('/api/products', (req: Request, res: Response) => {
    let resultados = productos

    // busqueda por nombre
    if (req.query.nombre){
        const terminoDeBusqueda = (req.query.nombre as string).toLowerCase();
        resultados = resultados.filter(prodocto => prodocto.nombre.toLowerCase().includes(terminoDeBusqueda));
    }
    // busqueda por disponibilidad
    if (req.query.disponible){
        const disponible = req.query.disponible === 'true';
        resultados = resultados.filter(producto => producto.disponible === disponible);
    }
    // ordenamiento 
    if (req.query.ordernarPor){
        const campo = String(req.query.ordernarPor)
        const orden = req.query.orden === 'desc' ? -1 : 1;

        resultados = resultados.sort((primerProducto, segundoProducto) => {
            if (primerProducto[campo as keyof Productos] < segundoProducto[campo as keyof Productos]) return -1 * orden;
            if (primerProducto[campo as keyof Productos] > segundoProducto[campo as keyof Productos]) return 1 * orden;
            return 0;
        });
    }
    // paginacion
    const pagina = req.query.pagina ? parseInt(String(req.query.pagina)) : 1;
    const limite = req.query.limite ? parseInt(String(req.query.limite)) : 10;
    const inicio = (pagina - 1) * limite;
    const fin = inicio + limite;
    const paginados = resultados.slice(inicio, fin);

    res.json({
        pagina,
        limite,
        total: resultados.length,
        data: paginados
    });
});

// get del producto con id

router.get('/products/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const prodoctoId = productos.find(producto => producto.id === id);
    if(prodoctoId) {
       res.json(prodoctoId); 
    } else {
        res.status(404).json({mensajeError: 'Producto no encontrado'});
    }
});

export default router;