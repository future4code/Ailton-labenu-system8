import { app } from "./app";
import { createClass } from "./endpoints/createClass";
import { getClass } from './endpoints/getClass'
import {changeModule} from './endpoints/changeModule'
import {createStudent} from './endpoints/createStudent'
import {getStudent} from './endpoints/getStudent'
import {changeStudent} from './endpoints/changeStudent'
import {createInstructor} from './endpoints/createInstructor'
import {getInstructors} from './endpoints/getInstructors'
import {changeInstructor} from './endpoints/changeInstructor'
// import ClassController from "./endpoints/ClassController";

app.post("/class/create", createClass)
app.get("/class", getClass)
app.put("/class/change/:id/:modulo", changeModule)

app.post("/student/create", createStudent)
app.get("/student/:name", getStudent)
app.put("/student/change/:id/:class", changeStudent)

app.post("/instructor/create", createInstructor)
app.get("/instructor", getInstructors)
app.put("/instructors/change/:id/:turma", changeInstructor)


// ENDPOINTS REFATORADOS PARA POO
// const classController = new ClassController
// app.post("/class/create/poo", classController.createClass)
// app.get("/class/create/poo", classController.createClass)