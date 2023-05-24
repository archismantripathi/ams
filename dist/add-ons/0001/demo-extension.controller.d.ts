import { DemoExtensionService } from './demo-extension.service';
import { CreateDeviceDto } from './dto/createDevice.dto';
import { UpdateDeviceDto } from './dto/updateDevice.dto';
import { SetDeviceDto } from './dto/setDevice.dto';
export declare class DemoExtensionController {
    private readonly demoExtensionService;
    constructor(demoExtensionService: DemoExtensionService);
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
    newDevice(deviceType: string, createDeviceDto: CreateDeviceDto): Promise<void>;
    updateDevice(deviceId: string, updateDeviceDto: UpdateDeviceDto): Promise<void>;
    deleteDevice(deviceId: string): Promise<void>;
}
