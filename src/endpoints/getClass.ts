import { Request, Response } from "express"
import getClassData from "../data/getClassData"

export async function getClass(req: Request, res: Response): Promise<void> {

   try {

      const result = await getClassData()
      
      res.status(200).send({message: `Turmas ativas: `, data: result})

   } catch (error:any) {

      res.status(res.statusCode || 500).send({message:error.message})

   }

}