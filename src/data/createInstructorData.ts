import { Instructor } from "../types/instructor";
import { connection } from "./connection";

export default async function createStudentData(instructor:Instructor):Promise<any>{

    try {
        
     const result =  await connection.raw(`INSERT INTO DOCENTE (id, nome, email, data_nasc, turma_id) 
        VALUES("${instructor.id}", "${instructor.nome}", "${instructor.email}", "${instructor.data_nasc}", "${instructor.turma_id}");`)

        return result[0]

    } catch (error:any) {

        console.log(error.message)

    }
}