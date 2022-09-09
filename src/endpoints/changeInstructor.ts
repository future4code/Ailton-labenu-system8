import { Request, Response } from "express"
import  changeInstructorData  from "./../data/changeInstructorData"

export async function changeInstructor(req: Request, res: Response): Promise<void> {

   try {

     const id:string = req.params.id
     const newClass:string = req.params.turma

      if(!id || !module){
        res.statusCode = 400
        throw new Error(`Verifique os dados !`)
      }

      const result = await changeInstructorData(id, newClass)

      if(result.message === "(Rows matched: 0  Changed: 0  Warnings: 0"){
         res.statusCode = 400
         throw new Error("Verifique os dados e tente novamente !")
      }
      
      res.status(200).send(`O Docente mudou para a turma de id: ${newClass}`)

   } catch (error:any) {

      res.status(res.statusCode || 500).send({message:error.message})

   }

}