import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const currentDir = fileURLToPath(import.meta.url);
const __dirname = path.dirname(currentDir);

app.use(express.static(path.join(__dirname, '../', '/dist')));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.listen(PORT);
