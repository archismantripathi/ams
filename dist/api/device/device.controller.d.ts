import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
export declare class DeviceController {
    private readonly deviceService;
    constructor(deviceService: DeviceService);
    getAllDevice(): Promise<{
        data: {
            deviceId: string;
            deviceName: string;
            deviceDescription: string;
            deviceType: string;
            deviceConnector: string;
            deviceIp: string;
            deviceStatus: boolean;
        }[];
    }>;
    getDevice(deviceId: string): Promise<{
        data: {
            deviceId: string;
            deviceName: string;
            deviceDescription: string;
            deviceType: string;
            deviceConnector: string;
            deviceIp: string;
            deviceStatus: boolean;
        };
    }>;
    createDevice(createDeviceDto: CreateDeviceDto): Promise<void>;
    updateDevice(deviceId: string, updateDeviceDto: UpdateDeviceDto): Promise<void>;
    deleteDevice(deviceId: string): Promise<void>;
}
