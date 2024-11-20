import express from "express";
import cors from "cors";
import canalRoutes from "./routes/canal.routes";
import programaRoutes from "./routes/programa.routes";
import guiaRoutes from "./routes/guia.routes";

const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/canales", canalRoutes);
app.use("/api/programas", programaRoutes);
app.use("/api/guias", guiaRoutes);


const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
