import { openDb } from './configDb.js';
import { createTable, insertCampeao, updateCampeao, selectCampeao, selectCampeao1, deleteCampeao1 } from './Controler/Campeao.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();

// Rota Inicial teste
app.get('/', (req, res) => {
    res.send('Oi, estou ONLINE, verifique nos comentários da atividade como usar a API');
});

// Rota para mostrar todos os campeoes
app.get('/campeoes', async (req, res) => {
    let campeao = await selectCampeao();
    res.json(campeao);
});

// Rota para mostrar um campeao em especifico por ID no body
app.get('/campeao', async (req, res) => {
    let campeao1 = await selectCampeao1(req.body.id);
    res.json(campeao1);
});

// Rota para adicionar campeoes novos
app.post('/campeoes', (req, res) => {
    insertCampeao(req.body)
    res.send('Campeão foi adicionado!');
});

// Rota para atualizar informações dos campeoes
app.put('/campeoes', (req, res) => {
    if (req.body && !req.body.id) {
        res.json({
            "statusCode": "400",
            "msg": "Voce precisa informar um id"
        })
    }else {
        updateCampeao(req.body)
        res.send('Campeão foi atualizado!');
    }
});

// Rota para excluir algum campeao
app.delete('/campeao', async (req, res) => {
    let campeao1 = await deleteCampeao1(req.body.id);
    res.json(campeao1);
});

app.listen(3000, () => console.log("SERVER ONLINE"));