import * as mongoose from 'mongoose';
export declare const ExtensionSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    extensionId: string;
    extensionName: string;
    extensionDescription: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    extensionId: string;
    extensionName: string;
    extensionDescription: string;
}>> & Omit<mongoose.FlatRecord<{
    extensionId: string;
    extensionName: string;
    extensionDescription: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export interface Extension extends mongoose.Document {
    id: string;
    extensionId: string;
    extensionName: string;
    extensionDescription: string;
}
