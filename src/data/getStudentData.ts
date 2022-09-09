import { connection } from "./connection";

export default async function getStudentData(name:string):Promise<any>{

    try {
       const result = await connection.raw(`
       SELECT * FROM ESTUDANTE WHERE nome LIKE "%${name}%";
        `)

        return result[0]

    } catch (error:any) {

        console.log(error.message)

    }
}