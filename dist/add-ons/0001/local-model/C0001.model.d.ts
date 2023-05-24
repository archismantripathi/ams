import * as mongoose from 'mongoose';
export declare const C0001Schema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    deviceId: string;
    deviceType: string;
    data?: {
        state: boolean;
        intensity: number;
    };
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    deviceId: string;
    deviceType: string;
    data?: {
        state: boolean;
        intensity: number;
    };
}>> & Omit<mongoose.FlatRecord<{
    deviceId: string;
    deviceType: string;
    data?: {
        state: boolean;
        intensity: number;
    };
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export interface C0001 extends mongoose.Document {
    id: string;
    deviceId: string;
    deviceType: string;
    data: {
        state: boolean;
        intensity: number;
    };
}
