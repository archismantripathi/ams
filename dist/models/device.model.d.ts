import * as mongoose from 'mongoose';
export declare const DeviceSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    deviceId: string;
    deviceName: string;
    deviceType: string;
    deviceConnector: string;
    deviceIp: string;
    deviceStatus: boolean;
    deviceDescription?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    deviceId: string;
    deviceName: string;
    deviceType: string;
    deviceConnector: string;
    deviceIp: string;
    deviceStatus: boolean;
    deviceDescription?: string;
}>> & Omit<mongoose.FlatRecord<{
    deviceId: string;
    deviceName: string;
    deviceType: string;
    deviceConnector: string;
    deviceIp: string;
    deviceStatus: boolean;
    deviceDescription?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export interface Device extends mongoose.Document {
    id: string;
    deviceId: string;
    deviceName: string;
    deviceDescription: string;
    deviceType: string;
    deviceConnector: string;
    deviceIp: string;
    deviceStatus: boolean;
}
