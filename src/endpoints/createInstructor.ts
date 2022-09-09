import { Request, Response } from "express"
import createInstructorData from '../data/createInstructorData'
import { Instructor } from "../types/instructor"

export async function createInstructor(req: Request, res: Response): Promise<void> {

   try {
    const {nome, email, data_nasc, turma_id} = req.body

    if(!nome || !email || !data_nasc || !turma_id){
        res.statusCode = 400
        throw new Error(`Verifique os dados e tente novamente !`)
    }
    if(typeof nome != "string" || typeof email != "string" || typeof data_nasc != "string" || typeof turma_id != "string"){
        res.statusCode = 400
        throw new Error(`O dados devem ser do tipo string !`)
    }

    const dateArr = data_nasc.split("-")
    const dateChange = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`
    
    const addInstructor:Instructor = {
        id: Date.now().toString(),
        nome,
        email,
        data_nasc: dateChange,
        turma_id
    }

    const instructor = await createInstructorData(addInstructor)

    if(!instructor){
        res.statusCode = 404
        throw new Error(`Email: ${email} existente no banco de dados !`)
    }

    res.status(201).send(`Docente ${nome} adicionado ao banco de dados !`)

   } catch (error:any) {

      res.status(res.statusCode || 500).send({message:error.message})

   }

}