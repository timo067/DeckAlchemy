import express from 'express';
import { join } from 'path';

const app = express();
const distFolder = join(process.cwd(), 'dist/deck-alchemy2/browser');
const indexHtml = 'index.html';

app.use(express.static(distFolder, {
  maxAge: '1y'
}));

app.get('*', (req, res) => {
  res.sendFile(join(distFolder, indexHtml));
});

app.listen(4000, () => {
  console.log(`Node Express server listening on http://localhost:4000`);
});