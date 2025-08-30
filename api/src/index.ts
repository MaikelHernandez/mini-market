import  express  from "express";
import cors from 'cors'
import productsRouter from "./products.router";

const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.json());
app.use(productsRouter);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});

