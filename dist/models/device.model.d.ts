import * as mongoose from 'mongoose';
export declare const DeviceSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    deviceId: string;
    deviceName: string;
    deviceDescription: string;
    deviceType: string;
    deviceConnector: string;
    deviceIp: string;
    deviceStatus: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    deviceId: string;
    deviceName: string;
    deviceDescription: string;
    deviceType: string;
    deviceConnector: string;
    deviceIp: string;
    deviceStatus: boolean;
}>> & Omit<mongoose.FlatRecord<{
    deviceId: string;
    deviceName: string;
    deviceDescription: string;
    deviceType: string;
    deviceConnector: string;
    deviceIp: string;
    deviceStatus: boolean;
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
