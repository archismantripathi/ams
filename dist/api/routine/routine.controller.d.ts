import { RoutineService } from './routine.service';
import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';
export declare class RoutineController {
    private readonly routineService;
    constructor(routineService: RoutineService);
    createRoutine(createRoutineDto: CreateRoutineDto): Promise<void>;
    getAllRoutine(): Promise<{
        data: {
            routineId: string;
            routineName: string;
            routineDescription: string;
            routineConnector: string;
            routineDevice: string;
            startTime: string;
            endTime: string;
            state: boolean;
            intensity: number;
        }[];
    }>;
    findOneRoutine(routineId: string): Promise<{
        data: {
            routineId: string;
            routineName: string;
            routineDescription: string;
            routineConnector: string;
            routineDevice: string;
            startTime: string;
            endTime: string;
            state: boolean;
            intensity: number;
        };
    }>;
    updateRoutine(routineId: string, updateRoutineDto: UpdateRoutineDto): Promise<void>;
    removeRoutine(routineId: string): Promise<void>;
}
