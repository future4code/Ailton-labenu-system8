import { Request, Response } from "express"
import changeStudentData from './../data/changeStudentData'


export async function changeStudent(req: Request, res: Response){
    try {
        const newClass:string = req.params.class
        const id:string = req.params.id

        if(!newClass){
            throw new Error (`Verifique se o campo class foi preenchido corretamente`)
        }
        if(!id){
            throw new Error (`Verifique se o campo id foi preenchido corretamente`)
        }

        await changeStudentData(id, newClass)

        res.send(`Troca de turma feita com sucesso!`)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

}
