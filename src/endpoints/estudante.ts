import { app } from "../app";
import { connection } from "../data/connection";

const criarEstudante = app.post("/criarestudante", async (request, response) => {
    try {
        const { id, nome, email, data_nasc, turma_id } = request.body
        if(!id|| !nome|| !email|| !data_nasc|| !turma_id){
            throw new Error (`Verifique se todos os campos foram preenchidos corretamente.`)
        }
        if(typeof id !== "string") {
            throw new Error(`Verifique se o id é uma string!`)
        }
        if(typeof nome !== "string") {
            throw new Error(`Verifique se o nome é uma string!`)
        }
        if(typeof email !== "string") {
            throw new Error(`Verifique se o email é uma string!`)
        }
        if(typeof turma_id !== "string") {
            throw new Error(`Verifique se o turma_id é uma string!`)
        }
        await connection("ESTUDANTE").insert({
            id,
            nome,
            email,
            data_nasc,
            turma_id
        })
        response.send(`Estudante criado com sucesso!`)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

const buscarEstudanteNome = app.get("/estudante/:nome", async (request, response) => {
    try {
        const nome = request.params.nome
        if(!nome){
            throw new Error (`Verifique se o campo de nome foi preenchido corretamente`)
        }
        const studentByName = await connection("ESTUDANTE")
        .where({
            nome: nome
        })
        response.send(studentByName[0])
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})

const mudarTurma = app.put("/mudarturma/:id", async (request, response) => {
    try {
        const turma_id = request.body.turma_id
        if(!turma_id){
            throw new Error (`Verifique se o campo de turma_id foi preenchido corretamente`)
        }
        const id = request.params.id
        if(!id){
            throw new Error (`Verifique se o campo id foi preenchido corretamente`)
        }
        await connection("ESTUDANTE")
        .update({
            turma_id: turma_id
        })
        .where({
            id: request.params.id
        })
        response.send(`Troca de turma feita com sucesso!`)
    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }
})