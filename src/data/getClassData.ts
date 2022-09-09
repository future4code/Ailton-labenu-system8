import { connection } from "./connection";

export default async function getClassData():Promise<any>{

    try {
       const result = await connection.raw(`
        SELECT * FROM TURMA WHERE modulo > 0;
        `)

        return result[0]

    } catch (error:any) {

        console.log(error.message)

    }
}