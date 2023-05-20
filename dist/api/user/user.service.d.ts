import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getAllUser(): Promise<{
        data: {
            username: string;
            name: string;
            admin: boolean;
        }[];
    }>;
    getUser(username: string): Promise<{
        data: {
            username: string;
            name: string;
            admin: boolean;
        };
    }>;
    createUser(createUserDto: CreateUserDto): Promise<void>;
    updateUser(username: string, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUser(username: string): Promise<void>;
}
