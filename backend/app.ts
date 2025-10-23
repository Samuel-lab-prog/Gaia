import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const app = express();

const indexPath = path.join(__dirname, '..', 'index.html');
const staticPath = path.join(__dirname, '..', 'assets');

app.use(express.static(staticPath));
app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(indexPath);
});
export default app;
console.log(indexPath);
console.log(staticPath);