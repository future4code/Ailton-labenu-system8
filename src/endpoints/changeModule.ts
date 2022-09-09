import { Request, Response } from "express"
import  changeModuleData  from "./../data/changeModuleData"

export async function changeModule(req: Request, res: Response): Promise<void> {

   try {

     const id:string = req.params.id
     const module:string = req.params.modulo

      if(!id || !module){
        res.statusCode = 400
        throw new Error(`Verifique os dados !`)
      }

      const result = await changeModuleData(id, module)
      console.log(result)

      if(result.message === "(Rows matched: 0  Changed: 0  Warnings: 0"){
         res.statusCode = 400
         throw new Error("Não foi encontrado o id da turma !")
      }
      
      res.status(200).send(`A turma mudou para o módulo ${module}`)

   } catch (error:any) {

      res.status(res.statusCode || 500).send({message:error.message})

   }

}