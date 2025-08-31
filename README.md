# 🛒 MINI-MARKET - Mi Primer Proyecto Full-Stack

## 📋 ¿Qué es este proyecto?

Este es un mini marketplace que desarrollé como prueba técnica para VIBES Development Team. Me emocionó poder crear algo desde cero y aprender mucho en el proceso.

## 🚀 ¿Qué tecnologías usé?

- **Backend**: Express.js + TypeScript (¡mi primera vez con ambos!)
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Datos**: JSON estático (para simular una API real)
- **Herramientas**: Git, npm

## 🏗️ ¿Cómo está organizado?

```
mini-market/
├── api/                    # Mi primer backend con Express
│   ├── src/
│   │   ├── index.ts       # Servidor principal
│   │   ├── products.router.ts  # Rutas de productos
│   │   ├── types.ts       # Mis primeros tipos en TypeScript
│   │   └── data/          # Datos de ejemplo
├── web/                    # Mi primer proyecto con Next.js
│   ├── src/
│   │   ├── app/           # Páginas de la aplicación
│   │   ├── components/    # Componentes que creé
│   │   └── lib/           # Funciones para llamar a la API
└── shared/                 # Código que comparten ambas partes
    ├── types.ts           # Tipos que definí
    └── utils.ts           # Una función útil que inventé
```


### ✅ **Lo que sí pude completar:**

1. **API con Express.js**
   - ✅ Endpoint para listar productos con filtros
   - ✅ Endpoint para obtener un producto individual
   - ✅ Filtros de búsqueda por nombre
   - ✅ Filtro por disponibilidad
   - ✅ Ordenamiento por precio y nombre
   - ✅ Paginación (¡esto me costó entender!)

2. **Frontend con Next.js**
   - ✅ Página que muestra todos los productos
   - ✅ Página de detalle de cada producto
   - ✅ Componentes que se reutilizan
   - ✅ Filtros de búsqueda que funcionan
   - ✅ Diseño que se ve bien en móvil y desktop
   - ✅ Estados de carga y manejo de errores

3. **Una función útil**
   - ✅ Función que encuentra los productos más baratos disponibles
   - ✅ Filtra solo los que están en stock
   - ✅ Los ordena por precio
   - ✅ Te dice cuáles son los N más baratos

4. **TypeScript**
   - ✅ Definí interfaces para mis datos
   - ✅ Todo está tipado (aunque me costó al principio)
   - ✅ Menos errores en tiempo de ejecución

## 🚀 ¿Cómo lo ejecuto?

### Lo que necesitas:
- Node.js 18+ 
- npm

### Pasos:
```bash
# 1. Instalar dependencias de la API
cd api
npm install

# 2. Instalar dependencias del frontend
cd ../web
npm install

# 3. Ejecutar la API (en una terminal)
cd ../api
npm run dev

# 4. Ejecutar el frontend (en otra terminal)
cd ../web
npm run dev
```

### Luego ve a:
- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001

## 📱 ¿Cómo funciona la app?

### Página de Productos (`/products`)
- **Busca**: Escribe para filtrar productos por nombre
- **Filtra**: Marca "Solo disponibles" para ver productos en stock
- **Ordena**: Elige por qué campo ordenar y en qué dirección
- **Navega**: Ve entre páginas de resultados
- **Destacados**: Ve los productos más baratos en una sección especial

### Página de Detalle (`/products/[id]`)
- **Información completa**: Imagen, nombre, precio, categoría
- **Estado del stock**: Badge verde si está disponible, gris si no
- **Botón**: "Agregar a favoritos" (se deshabilita si no hay stock)


## 🔧 Mi función útil

```typescript
export function obtenerProductosDisponiblesEnPrecioRango(
    productos: Productos[], 
    top = 3
): Productos[] {
    return productos
        .filter(producto => producto.disponible)
        .sort((a, b) => a.precio - b.precio)
        .slice(0, top);
}
```

**¿Qué hace?**
- Toma una lista de productos
- Filtra solo los que están disponibles
- Los ordena del más barato al más caro
- Te devuelve los N más baratos



## 🎯 Mi Git Flow

### **Lo que hice:**
1. Creé una rama llamada `feature/complete-project`
2. Desarrollé todo el proyecto ahí
3. Hice commits con mensajes claros
4. Mergeé todo a la rama principal
5. Subí todo a GitHub


### **Próximos pasos:**
2. **Base de datos real** - Cambiar JSON por MongoDB
3. **Deployment** - Subir la app a internet
4. **Más funcionalidades** - Agregar carrito de compras, usuarios, etc.


## 📞 Sobre mí

**Nombre**: Maikel Hernandez  
**Nivel**: Desarrollador Junior  
**Fecha**: Enero 2025  
**Tiempo**: Aproximadamente 14 horas  
**Repositorio**: [https://github.com/MaikelHernandez/mini-market](https://github.com/MaikelHernandez/mini-market)  


---

*Este proyecto fue desarrollado como prueba técnica para VIBES Development Team.
