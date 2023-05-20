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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crypto_1 = require("crypto");
const querystring_1 = require("querystring");
let AuthService = class AuthService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async signIn(signInDto) {
        const user = await this.userModel
            .findOne({ username: signInDto.username })
            .exec();
        if (!user) {
            throw new common_1.HttpException('Invalid Credentials.', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        const key = 'key for now';
        const hasher = (0, crypto_1.createHmac)('sha256', key);
        if ((await hasher.update(signInDto.password).digest('base64')) ==
            user.password) {
            return {
                token: await this.generateToken(user.username, (0, querystring_1.stringify)(user._id)),
            };
        }
        throw new common_1.HttpException('Invalid Credentials.', common_1.HttpStatus.NOT_ACCEPTABLE);
    }
    async generateToken(username, id) {
        const hasher = (0, crypto_1.createHmac)('sha256', id);
        const time = Date.now();
        return Buffer.from(JSON.stringify({
            username: username,
            time: time,
            signature: await hasher.update(username + time).digest('base64'),
        })).toString('base64');
    }
    async verifyToken(tokenEncoded) {
        try {
            const token = JSON.parse(Buffer.from(tokenEncoded, 'base64').toString('ascii'));
            const user = await this.userModel
                .findOne({ username: token.username })
                .exec();
            if (!user) {
                throw new common_1.NotFoundException('User Not Found.');
            }
            const hasher = (0, crypto_1.createHmac)('sha256', (0, querystring_1.stringify)(user.id));
            if ((await hasher.update(token.username + token.time).digest('base64')) ==
                token.signature) {
                return true;
            }
        }
        catch (error) {
            return false;
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map