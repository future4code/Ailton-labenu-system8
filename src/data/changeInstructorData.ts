import { connection } from "./connection";

export default async function changeInstructorData(id:string, newClass:string):Promise<any>{
    try {
       const result = await connection.raw(`
        UPDATE DOCENTE SET turma_id = "${newClass}" WHERE id = "${id}";`
        )

       return result[0]

    } catch (error:any) {

        console.log(error.message)

    }
}