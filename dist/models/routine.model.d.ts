import * as mongoose from 'mongoose';
export declare const RoutineSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    routineId: string;
    routineName: string;
    routineConnector: string;
    routineDevice: string;
    routineDescription?: string;
    trigger?: {
        startTime: string;
        endTime: string;
    };
    routineData?: {
        state: boolean;
        intensity: number;
    };
    routinePreviousData?: {
        state?: boolean;
        intensity?: number;
    };
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    routineId: string;
    routineName: string;
    routineConnector: string;
    routineDevice: string;
    routineDescription?: string;
    trigger?: {
        startTime: string;
        endTime: string;
    };
    routineData?: {
        state: boolean;
        intensity: number;
    };
    routinePreviousData?: {
        state?: boolean;
        intensity?: number;
    };
}>> & Omit<mongoose.FlatRecord<{
    routineId: string;
    routineName: string;
    routineConnector: string;
    routineDevice: string;
    routineDescription?: string;
    trigger?: {
        startTime: string;
        endTime: string;
    };
    routineData?: {
        state: boolean;
        intensity: number;
    };
    routinePreviousData?: {
        state?: boolean;
        intensity?: number;
    };
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export interface Routine extends mongoose.Document {
    id: string;
    routineId: string;
    routineName: string;
    routineDescription: string;
    routineConnector: string;
    routineDevice: string;
    trigger: {
        startTime: string;
        endTime: string;
    };
    routineData: {
        state: boolean;
        intensity: number;
    };
    routinePreviousData: {
        state: boolean;
        intensity: number;
    };
}
