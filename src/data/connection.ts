import knex from "knex"
import Knex = require("knex")
import dotenv from "dotenv"

dotenv.config()

// export abstract class Connection{

//    private static connection:Knex | null = null

//    protected getConnection():Knex{
//       if(!Connection.connection){
//          Connection.connection = knex({
//             client: "mysql",
//             connection:{
//                host: process.env.DB_HOST,
//                port: 3306,
//                user: process.env.DB_USER,
//                password: process.env.DB_PASSWORD,
//                database: process.env.DB_DATABASE,
//                multipleStatements: true
//             }
//          })
//       }

//       return Connection.connection
//    }

// }

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      multipleStatements: true
   }
})