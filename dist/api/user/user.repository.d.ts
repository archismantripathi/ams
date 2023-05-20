import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../../models/user.model';
export declare class UserRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getAllUser(): Promise<{
        username: string;
        name: string;
        admin: boolean;
    }[]>;
    getUser(username: string): Promise<{
        username: string;
        name: string;
        admin: boolean;
    }>;
    createUser(createUserDto: CreateUserDto): Promise<void>;
    updateUser(username: string, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUser(username: string): Promise<void>;
}
