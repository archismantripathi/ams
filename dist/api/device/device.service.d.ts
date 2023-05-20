import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { DeviceRepository } from './device.repository';
export declare class DeviceService {
    private readonly deviceRepository;
    constructor(deviceRepository: DeviceRepository);
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
