import cors from 'cors'
import express from 'express'
import 'dotenv/config'
import endpoints from './endpoints.js'
 
const server = express();

server.use(endpoints);
server.use(cors());
server.use(express());
server.use(express.json());

server.listen(process.env.PORT,
    () => console.log(`API online na porta ${process.env.PORT}`));