import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { StudentsService } from "./students.service";


@Controller('/students')
export class StudentsController {

    constructor(private StudentSrv : StudentsService) {}
    @Get()
    getAllStudents(){
        return this.StudentSrv.getAllStudents();
    }

    @Get('/:id')
    getStudent(@Param('id') id : string){
        return this.StudentSrv.getStudent(parseInt(id));
    }

    @Post()
    createStudent(@Body() student : any){
        return this.StudentSrv.createStudent(student);
    }

    @Put()
    updateStudent(){
        return this.StudentSrv.updateStudent();
    }

    @Delete()
    deleteStudent(){
        return this.StudentSrv.deleteStudent();
    }

    @Patch()
    patchStudent(){
        return this.StudentSrv.patchStudent();
    }
}
