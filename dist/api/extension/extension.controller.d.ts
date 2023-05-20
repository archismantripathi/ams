import { ExtensionService } from './extension.service';
import { CreateExtensionDto } from './dto/create-extension.dto';
import { UpdateExtensionDto } from './dto/update-extension.dto';
export declare class ExtensionController {
    private readonly extensionService;
    constructor(extensionService: ExtensionService);
    getAllExtension(): Promise<{
        data: {
            extensionId: string;
            extensionName: string;
            extensionDescription: string;
        }[];
    }>;
    getExtension(extensionId: string): Promise<{
        data: {
            extensionId: string;
            extensionName: string;
            extensionDescription: string;
        };
    }>;
    createExtension(createExtensionDto: CreateExtensionDto): Promise<void>;
    updateExtension(extensionId: string, updateExtensionDto: UpdateExtensionDto): Promise<void>;
    deleteExtension(extensionId: string): Promise<void>;
}
