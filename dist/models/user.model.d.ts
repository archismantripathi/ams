import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    name: string;
    password: string;
    admin?: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    name: string;
    password: string;
    admin?: boolean;
}>> & Omit<mongoose.FlatRecord<{
    username: string;
    name: string;
    password: string;
    admin?: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
export interface User extends mongoose.Document {
    id: string;
    username: string;
    name: string;
    password: string;
    admin: boolean;
}
