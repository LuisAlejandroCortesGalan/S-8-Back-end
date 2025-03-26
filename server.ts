import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import mapRoutes from './src/routes/mapRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI= process.env.MONGO_URI || "";

// Middleware
app.use(
    cors({
      origin: "https://sprint-8-improcode.vercel.app/api/maps", 
      methods: "GET,POST,PUT,DELETE",
      allowedHeaders: "Content-Type,Authorization", 
    })
  );
  app.use(express.json());

// Conectar a MongoDB Atlas
console.log('Connecting to:', MONGO_URI); // Debug line
mongoose.connect(MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Error connecting to the database:', err));
mongoose.connect(MONGO_URI)
.then(() => console.log('Database connected'))
.catch(err => console.error('Error connecting to the database:', err));

// Usar las rutas
app.use('/api', mapRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("¡El backend está funcionando!");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
