import { Request, Response } from "express"
import createStudentData from '../data/createStudentData'
import { Student } from "../types/student"

export async function createStudent(req: Request, res: Response): Promise<void> {

        try {
            const {nome, email, data_nasc, turma_id } = req.body

            if(!nome|| !email|| !data_nasc|| !turma_id){
                throw new Error (`Verifique se todos os campos foram preenchidos corretamente.`)
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
            
            const dateArr = data_nasc.split("-")
            const dateChange = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`
        
            const addStudent:Student = {
                id: Date.now().toString(),
                nome,
                email,
                data_nasc: dateChange,
                turma_id
            }


        const student = await  createStudentData(addStudent)

        res.status(201).send(`Estudante ${nome}, criado com sucesso!`)

        } catch (error: any) {
            res.status(res.statusCode || 500).send({ message: error.message })
        }

}



