import {Request, Response} from 'express'
import getStudentData from './../data/getStudentData'


export async function getStudent(req:Request, res:Response){

    try {
        const nome:string = String(req.params.name)

        if(!nome){
            throw new Error (`Verifique se o campo de nome foi preenchido corretamente`)
        }
        const studentByName = await getStudentData(nome)

        res.send(studentByName[0])

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }



}

