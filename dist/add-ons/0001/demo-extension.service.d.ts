import { Model } from 'mongoose';
import { CreateDeviceDto } from './dto/createDevice.dto';
import { UpdateDeviceDto } from './dto/updateDevice.dto';
import { Device } from '../../models/device.model';
import { C0001 } from './local-model/C0001.model';
import { SetDeviceDto } from './dto/setDevice.dto';
export declare class DemoExtensionService {
    private readonly deviceModel;
    private readonly c0001Model;
    constructor(deviceModel: Model<Device>, c0001Model: Model<C0001>);
    getAllLocal(): Promise<{
        deviceId: string;
        deviceType: string;
        data: {
            state: boolean;
            intensity: number;
        };
    }[]>;
    getStatus(deviceId: string): Promise<{
        data: {
            state: boolean;
            intensity: number;
        };
    }>;
    setDevice(deviceId: string, setDeviceDto: SetDeviceDto): Promise<void>;
    updateDevice(deviceId: string, updateDeviceDto: UpdateDeviceDto): Promise<void>;
    addDevice(deviceType: string, createDeviceDto: CreateDeviceDto): Promise<void>;
    deleteDevice(deviceId: string): Promise<void>;
}
