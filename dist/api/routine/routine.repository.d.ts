import { Model } from 'mongoose';
import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';
import { Routine } from 'src/models/routine.model';
export declare class RoutineRepository {
    private readonly routineModel;
    constructor(routineModel: Model<Routine>);
    getAllRoutine(): Promise<{
        routineId: string;
        routineName: string;
        routineDescription: string;
        routineConnector: string;
        routineDevice: string;
        startTime: string;
        endTime: string;
        state: boolean;
        intensity: number;
    }[]>;
    getRoutine(routineId: string): Promise<{
        routineId: string;
        routineName: string;
        routineDescription: string;
        routineConnector: string;
        routineDevice: string;
        startTime: string;
        endTime: string;
        state: boolean;
        intensity: number;
    }>;
    createRoutine(createRoutineDto: CreateRoutineDto): Promise<void>;
    deleteRoutine(routineId: string): Promise<void>;
    updateRoutine(routineId: string, updateRoutineDto: UpdateRoutineDto): Promise<void>;
}
