import { CreateExtensionDto } from './dto/create-extension.dto';
import { UpdateExtensionDto } from './dto/update-extension.dto';
import { ExtensionRepository } from './extension.repository';
export declare class ExtensionService {
    private readonly extensionRepository;
    constructor(extensionRepository: ExtensionRepository);
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
