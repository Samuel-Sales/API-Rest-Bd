import { openDb } from "../configDb.js";


export async function createTable(){
    openDb().then(db => {
       db.exec('CREATE TABLE IF NOT EXISTS Campeao (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)') 
    })
}

export async function insertCampeao(campeoes){
    openDb().then(db => {
       db.run('INSERT INTO Campeao (nome, idade) VALUES (?,?)', [campeoes.nome, campeoes.idade]);
    })
}

export async function updateCampeao(campeoes){
    openDb().then(db => {
       db.run('UPDATE Campeao SET nome=?, idade=? WHERE id=?', [campeoes.nome, campeoes.idade, campeoes.id]);
    })
}

export async function selectCampeao(){
    return openDb().then(db => {
       return db.all('SELECT * FROM Campeao')
       .then(res => res)
    })
}

export async function selectCampeao1(id){
    return openDb().then(db => {
       return db.get('SELECT * FROM Campeao WHERE id=?', [id])
       .then(res => res)
    })
}

export async function deleteCampeao1(id){
    return openDb().then(db => {
       return db.get('DELETE FROM Campeao WHERE id=?', [id])
       .then(res => res)
    })
}