import { connection } from "./connection";

export default async function getInstructorsData():Promise<any>{

    try {
       const result = await connection.raw(`
       SELECT * FROM DOCENTE;
        `)

        return result[0]

    } catch (error:any) {

        console.log(error.message)

    }
}