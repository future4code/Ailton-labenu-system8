import { Request, Response } from "express"
import getInstructorsData from './../data/getInstructorsData'

export async function getInstructors(req: Request, res: Response): Promise<void> {

   try {

    const result = await getInstructorsData() 
    res.status(200).send({message:`Todos os docentes do banco de dados:`, data: result})
     

   } catch (error:any) {

      res.status(res.statusCode || 500).send({message:error.message})

   }

}