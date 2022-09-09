import { Class } from "../types/class";
import { connection } from "./connection";

export default async function createClassData(turma:Class):Promise<any>{

    try {
        await connection.raw(`
        INSERT INTO TURMA (id, nome, modulo) 
        VALUES("${turma.id}", "${turma.nome}", "${turma.modulo}")`)

    } catch (error:any) {

        console.log(error.message)

    }
}