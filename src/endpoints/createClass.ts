import { Request, Response } from "express"
import createClassData from "../data/createClassData"
import {Class} from '../types/class'

export async function createClass(req: Request, res: Response): Promise<void> {

   try {

        const {nome,modulo} = req.body

        if(!nome || !modulo){
            res.statusCode = 400
            throw new Error(`Estão faltando dados.`)
        }
        if(typeof modulo != "string" || typeof nome != "string"){
            res.statusCode = 400
            throw new Error(`Os dados precisam ser do tipo string.`)
        }

        if(Number(modulo) > 6 || Number(modulo) < 0 ){
            res.statusCode = 400
            throw new Error(`O modulo deve ser entre 0 a 6`)
        }

        const newClass:Class = {
            id: Date.now().toString(),
            nome,
            modulo
        }

       await createClassData(newClass)

       res.status(201).send(`Turma ${nome}, adicionada ao banco de dados com sucesso !`)

   } catch (error:any) {

      res.status(res.statusCode || 500).send({message:error.message})

   }

}