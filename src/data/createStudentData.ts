import { Student } from "../types/student";
import { connection } from "./connection";

export default async function createStudentData(student:Student):Promise<any>{

    try {
        
     const result =  await connection.raw(`INSERT INTO ESTUDANTE (id, nome, email, data_nasc, turma_id) 
        VALUES("${student.id}", "${student.nome}", "${student.email}", "${student.data_nasc}", "${student.turma_id}");`)

        return result[0]

    } catch (error:any) {

        console.log(error.message)

    }
}