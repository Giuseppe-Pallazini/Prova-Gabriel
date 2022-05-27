import { semaforo, semana, fatorial, sequenciaPar } from './services.js'
import { Router } from 'express'

const server = Router();


server.get('/semaforo/:cor', (req, resp) => {
    try {
        const cor = req.params.cor;
        const n = semaforo(cor);
        resp.send({
            cor: n
        })
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})



server.get('/dia', (req, resp) => {
    try {
        const a = req.query.a;
        const x = semana(a);
        resp.send({
            dia: x
        })
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})



server.post('/fatorial', (req, resp) => {
    try {
        let num = Number(req.query.num);
        const x = (fatorial(num));
        resp.send({
            num: x
        });
    } 
    catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

server.post('/sequenciapar', (req, resp) => {
    try{
        const n = req.body;
        const x = sequenciaPar(n);
        resp.send({
            x:x
        })


    }
    catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

export default server; 