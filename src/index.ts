import { app } from "./app";
import { createClass } from "./endpoints/createClass";
import { getClass } from './endpoints/getClass'
import {changeModule} from './endpoints/changeModule'
import {createInstructor} from './endpoints/createInstructor'
import {getInstructors} from './endpoints/getInstructors'
import {changeInstructor} from './endpoints/changeInstructor'

app.post("/class/create", createClass)
app.get("/class", getClass)
app.put("/class/change/:id/:modulo", changeModule)
app.post("/instructor/create", createInstructor)
app.get("/instructor", getInstructors)
app.put("/instructors/change/:id/:turma", changeInstructor)