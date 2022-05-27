import { semaforo, semana, fatorial } from './services.js'
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
        const b = req.body.b
        const x = fatorial(b)
        resp.send({
            fat: x
        })
    } catch (err) {
        resp.status(404).send({
            error: err.message
        })
    }
})

export default server; 