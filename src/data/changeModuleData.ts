import { connection } from "./connection";

export default async function changeModuleData(id:string, module:string):Promise<any>{
    try {
       const result = await connection.raw(`
        UPDATE TURMA SET modulo = "${module}" WHERE id = "${id}";`
        )

       return result[0]

    } catch (error:any) {

        console.log(error.message)

    }
}