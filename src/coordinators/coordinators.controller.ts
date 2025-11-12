import { Controller, Get } from '@nestjs/common';
import { CoordinatorsService } from './coordinators.service';

@Controller({})
export class CoordinatorsController {
    
    constructor (private coordinatorsSrv: CoordinatorsService) {}

    @Get('/coordinators')
    getAllCoordinators(){
        return this.coordinatorsSrv.getAllCoordinators();
    }
}
