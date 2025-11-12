import { Injectable, NotFoundException } from '@nestjs/common';

export interface Student {
    id : string;
    name: string;
    email: string;
    index : number;
}

@Injectable()
export class StudentsService {
    private students: Student[] = [];
    getAllStudents(){
        return this.students;
    }

    getStudent(id :  number){
        const studentFound = this.students.find(student => student.index === id);
        if(!studentFound){
            return new NotFoundException ("Student not found");
        }
        return studentFound;
    }

    createStudent(student: Student){
        console.log(student);
        this.students.push({
            ...student,
            "index" : this.students.length + 1
        });
        return student;
    }

    updateStudent(){
        return "Actualizando un estudiante";
    }

    deleteStudent(){
        return "Eliminando un estudiante";
    }

    patchStudent(){
        return "Modificando un estudiante parcialmente";
    }
}
