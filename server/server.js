import express from 'express'
import cors from 'cors'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// __filename equivalent:
const __filename = fileURLToPath(import.meta.url);
// __dirname equivalent:
const __dirname = dirname(__filename);

console.log(__dirname);



import db from './conn.js'; // import MySQL connection

const app = express();

app.use(express.static(path.join(__dirname,"public")))
app.use(cors())
app.use(express.json())


const port = 5000;
app.listen(port,()=>console.log(`server is running on port ${port}`));