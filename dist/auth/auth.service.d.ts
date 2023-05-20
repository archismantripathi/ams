import { Model } from 'mongoose';
import { SignInDto } from './dto/sign-in.dto';
import { User } from '../models/user.model';
export declare class AuthService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    signIn(signInDto: SignInDto): Promise<{
        token: string;
    }>;
    generateToken(username: string, id: string): Promise<string>;
    verifyToken(tokenEncoded: string): Promise<boolean>;
}
