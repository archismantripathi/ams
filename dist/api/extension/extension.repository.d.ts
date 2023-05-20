import { Model } from 'mongoose';
import { CreateExtensionDto } from './dto/create-extension.dto';
import { UpdateExtensionDto } from './dto/update-extension.dto';
import { Extension } from '../../models/extension.model';
export declare class ExtensionRepository {
    private readonly extensionModel;
    constructor(extensionModel: Model<Extension>);
    getAllExtension(): Promise<{
        extensionId: string;
        extensionName: string;
        extensionDescription: string;
    }[]>;
    getExtension(extensionId: string): Promise<{
        extensionId: string;
        extensionName: string;
        extensionDescription: string;
    }>;
    createExtension(createExtensionDto: CreateExtensionDto): Promise<void>;
    updateExtension(extensionId: string, updateExtensionDto: UpdateExtensionDto): Promise<void>;
    deleteExtension(extensionId: string): Promise<void>;
}
