"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crypto_1 = require("crypto");
let UserRepository = class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getAllUser() {
        const users = await this.userModel.find().exec();
        return users.map((user) => ({
            username: user.username,
            name: user.name,
            admin: user.admin,
        }));
    }
    async getUser(username) {
        const user = await this.userModel.findOne({ username: username }).exec();
        if (user) {
            return {
                username: user.username,
                name: user.name,
                admin: user.admin,
            };
        }
        else {
            throw new common_1.NotFoundException('User Not Found.');
        }
    }
    async createUser(createUserDto) {
        const key = 'key for now';
        const hasher = (0, crypto_1.createHmac)('sha256', key);
        const newUser = new this.userModel({
            username: createUserDto.username,
            name: createUserDto.name,
            password: await hasher.update(createUserDto.password).digest('base64'),
            admin: createUserDto.admin,
        });
        try {
            await newUser.save();
        }
        catch (error) {
            throw new common_1.NotAcceptableException('User Already Exist.');
        }
        throw new common_1.HttpException('User Created.', common_1.HttpStatus.CREATED);
    }
    async updateUser(username, updateUserDto) {
        const key = 'key for now';
        const hasher = (0, crypto_1.createHmac)('sha256', key);
        const user = await this.userModel.findOne({ username: username }).exec();
        if (user) {
            if (updateUserDto.username) {
                if (user.username != updateUserDto.username) {
                    const checkNewUserName = await this.userModel.findOne({
                        username: updateUserDto.username
                    }).exec();
                    if (checkNewUserName) {
                        throw new common_1.HttpException('Username Must Be Unique.', common_1.HttpStatus.CONFLICT);
                    }
                    else {
                        user.username = updateUserDto.username;
                    }
                }
            }
            if (updateUserDto.name) {
                user.name = updateUserDto.name;
            }
            if (updateUserDto.password) {
                user.password = await hasher.update(updateUserDto.password).digest('base64');
            }
            user.admin = updateUserDto.admin;
            user.save();
            throw new common_1.HttpException('User Updated.', common_1.HttpStatus.ACCEPTED);
        }
        else {
            throw new common_1.NotFoundException('User Not Found.');
        }
    }
    async deleteUser(username) {
        const result = await this.userModel.deleteOne({ username: username }).exec();
        if (result.acknowledged == false) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.SERVICE_UNAVAILABLE);
        }
        else if (result.deletedCount == 0) {
            throw new common_1.NotFoundException('User Not Found.');
        }
        else {
            throw new common_1.HttpException('User Removed.', common_1.HttpStatus.ACCEPTED);
        }
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map