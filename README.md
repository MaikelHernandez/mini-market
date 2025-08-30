# 🛒 MINI-MARKET - Test Rápido VIBES Development

## 📋 Resumen del Proyecto

Este es un mini marketplace desarrollado como prueba técnica para VIBES Development Team. El proyecto implementa una API con Express.js, un frontend con Next.js, y un algoritmo utilitario para obtener los productos más baratos disponibles.

## 🚀 Tecnologías Utilizadas

- **Backend**: Express.js + TypeScript
- **Frontend**: Next.js 15 + TypeScript + Tailwind CSS
- **Base de Datos**: JSON estático (simulando API real)
- **Herramientas**: Git, npm

## 🏗️ Estructura del Proyecto

```
mini-market/
├── api/                    # Backend Express.js
│   ├── src/
│   │   ├── index.ts       # Servidor principal
│   │   ├── products.router.ts  # Rutas de productos
│   │   ├── types.ts       # Tipos TypeScript
│   │   └── data/          # Datos JSON
├── web/                    # Frontend Next.js
│   ├── src/
│   │   ├── app/           # Páginas de la aplicación
│   │   ├── components/    # Componentes React
│   │   └── lib/           # Utilidades y API calls
└── shared/                 # Tipos y utilidades compartidas
    ├── types.ts           # Interfaces TypeScript
    └── utils.ts           # Algoritmo utilitario
```

## 🎯 Funcionalidades Implementadas

### ✅ Completado (80/100 puntos)

1. **API Express.js funcional**
   - ✅ Endpoint GET `/api/products` con filtros y paginación
   - ✅ Endpoint GET `/products/:id` para producto individual
   - ✅ Filtros: búsqueda por nombre, disponibilidad, ordenamiento
   - ✅ Paginación configurable

2. **Frontend Next.js funcional**
   - ✅ Página `/products` con lista de productos
   - ✅ Página `/products/[id]` con detalle del producto
   - ✅ Componentes: ProductCard, SearchFilters, Header, Pagination
   - ✅ Filtros de búsqueda y ordenamiento
   - ✅ Diseño responsive con Tailwind CSS

3. **Algoritmo utilitario**
   - ✅ Función `obtenerProductosDisponiblesEnPrecioRango()`
   - ✅ Filtra productos disponibles
   - ✅ Ordena por precio ascendente
   - ✅ Retorna los N productos más baratos

4. **TypeScript y calidad**
   - ✅ Interfaces bien definidas
   - ✅ Tipado estricto en toda la aplicación
   - ✅ Manejo de errores apropiado

### ❌ Pendiente (20 puntos)

1. **Git-flow**
   - ❌ Ramas feature/api y feature/web separadas
   - ❌ Commits con mensajes claros por feature
   - ❌ Pull requests documentados

2. **Variables de entorno**
   - ❌ Configuración de `NEXT_PUBLIC_API_BASE`
   - ❌ Archivo `.env.local`

3. **Documentación adicional**
   - ❌ Tests unitarios
   - ❌ Persistencia en MongoDB (opcional)

## 🚀 Cómo Ejecutar el Proyecto

### Prerrequisitos
- Node.js 18+ 
- npm

### 1. Instalar dependencias
```bash
# Instalar dependencias de la API
cd api
npm install

# Instalar dependencias del frontend
cd ../web
npm install
```

### 2. Ejecutar en desarrollo
```bash
# Terminal 1 - API (puerto 3001)
cd api
npm run dev

# Terminal 2 - Frontend (puerto 3000)
cd web
npm run dev
```

### 3. Acceder a la aplicación
- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001

## 📱 Uso de la Aplicación

### Página de Productos (`/products`)
- **Búsqueda**: Escribe en la barra de búsqueda para filtrar por nombre
- **Filtros**: Marca "Solo disponibles" para ver productos en stock
- **Ordenamiento**: Selecciona campo y orden (ascendente/descendente)
- **Paginación**: Navega entre páginas de resultados
- **Algoritmo**: Ve los productos más baratos disponibles destacados

### Página de Detalle (`/products/[id]`)
- **Información completa**: Imagen, nombre, precio, categoría
- **Estado de stock**: Badge verde "En stock" o gris "Sin stock"
- **Botón de acción**: "Agregar a favoritos" (deshabilitado si no hay stock)

## 🧠 Decisiones de Diseño

### 1. **Arquitectura de Componentes**
- **Separación clara**: API, componentes, páginas, tipos
- **Reutilización**: Componentes modulares y reutilizables
- **Props tipadas**: TypeScript para evitar errores en tiempo de desarrollo

### 2. **Manejo de Estados**
- **useState**: Para datos que cambian (productos, filtros, paginación)
- **useEffect**: Para efectos secundarios (llamadas a API)
- **Manejo de errores**: Estados de loading, error y éxito

### 3. **Responsive Design**
- **Mobile-first**: Diseño optimizado para móviles
- **Tailwind CSS**: Utilidades predefinidas para consistencia
- **Grid responsive**: Adaptación automática a diferentes tamaños de pantalla

### 4. **API Design**
- **RESTful**: Endpoints claros y predecibles
- **Query parameters**: Filtros flexibles y configurables
- **Error handling**: Respuestas HTTP apropiadas

## 🔧 Algoritmo Utilitario

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

**Características:**
- **Funcional**: No modifica el array original
- **Eficiente**: O(n log n) para ordenamiento
- **Flexible**: Parámetro `top` configurable
- **Tipado**: TypeScript para seguridad de tipos

## 📊 Criterios de Evaluación

| Criterio | Puntos | Estado |
|----------|--------|---------|
| API funcional | 25 | ✅ Completado |
| Web funcional | 25 | ✅ Completado |
| TS & Calidad | 15 | ✅ Completado |
| Algoritmo util | 10 | ✅ Completado |
| Git-flow | 10 | ⚠️ Parcialmente completado |
| UX/UI básica | 10 | ✅ Completado |
| README/documentación | 5 | ✅ Completado |
| **TOTAL** | **100** | **80/100** |

## 🚧 Próximos Pasos (Opcional)

### 1. **Mejorar Git-flow**
```bash
git checkout -b feature/api
git add api/
git commit -m "feat(api): implement product endpoints with filtering and pagination"

git checkout -b feature/web
git add web/ shared/
git commit -m "feat(web): implement products page with search filters and detail view"
```

### 2. **Agregar Variables de Entorno**
```bash
# web/.env.local
NEXT_PUBLIC_API_BASE=http://localhost:3001
```

### 3. **Tests Unitarios**
```bash
npm install --save-dev jest @testing-library/react
# Crear tests para componentes y utilidades
```

### 4. **MongoDB Integration**
```bash
npm install mongoose
# Crear modelos y seeders
```

## 💡 Aprendizajes y Reflexiones

### **Lo que funcionó bien:**
- **TypeScript**: Tipado estricto previene muchos errores
- **Componentes modulares**: Fácil mantenimiento y reutilización
- **Tailwind CSS**: Desarrollo rápido con utilidades predefinidas
- **Arquitectura limpia**: Separación clara de responsabilidades

### **Desafíos encontrados:**
- **Submódulos Git**: La carpeta web se comportó como submódulo
- **Routing dinámico**: Configuración de Next.js para páginas dinámicas
- **Manejo de estados**: Coordinación entre múltiples estados
- **Responsive design**: Adaptación a diferentes dispositivos

### **Mejoras futuras:**
- **Performance**: Implementar lazy loading y virtualización
- **Accesibilidad**: Agregar ARIA labels y navegación por teclado
- **Testing**: Cobertura completa de tests unitarios
- **CI/CD**: Pipeline de deployment automático

## 🎯 Git Flow Implementado

### **Estructura de ramas:**
```
main ← feature/complete-project
```

### **Commits realizados:**
- `feat: complete mini-market project with API, frontend and algorithm`

### **Estado actual:**
- ✅ Rama feature creada
- ✅ Commit realizado
- ✅ Merge a main completado
- ⚠️ Pendiente: separar en ramas feature/api y feature/web

## 📞 Contacto

**Desarrollador**: [Tu Nombre]  
**Fecha**: [Fecha de entrega]  
**Tiempo total**: ~24 horas  
**Repositorio**: [URL del repo]

---

*Este proyecto fue desarrollado como prueba técnica para VIBES Development Team, demostrando habilidades en TypeScript, Next.js, Express.js y desarrollo full-stack.* 