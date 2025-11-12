import { Injectable } from "@nestjs/common";


@Injectable()
export class CoordinatorsService {
    private coordinators = [
            {
                id: "2001",
                name: "Alice Johnson",
                email: "alice.johnson@example.com"
            },
            {
                id: "2002",
                name: "Bob Smith",
                email: "bob.smith@example.com"
            }
        ];
    getAllCoordinators(){
        return this.coordinators;
    }
}