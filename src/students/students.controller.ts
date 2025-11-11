import { Controller, Get } from "@nestjs/common";


@Controller({})
export class StudentsController {

    @Get('/students')
    getAllStudents(){
        return {
            id: "1047396917",
            name: "franky",
            lastname: "franco",
            email: "frankyfranco456@gmail.com",
            address: "Calle falsa 123"
        }
    }
}