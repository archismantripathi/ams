import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';
import { RoutineRepository } from './routine.repository';
export declare class RoutineService {
    private readonly routineRepository;
    constructor(routineRepository: RoutineRepository);
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
    getRoutine(routineId: string): Promise<{
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
