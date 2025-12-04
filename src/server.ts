import express from 'express';
import ideaRoutes from "./routes/idea.route";

const app = express();
app.use(express.json());

app.use('/ideas', ideaRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is active on http://localhost:${PORT}`);
})
