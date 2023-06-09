"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const device_module_1 = require("./device/device.module");
const auth_guard_1 = require("../auth/guard/auth.guard");
const extension_module_1 = require("./extension/extension.module");
const routine_module_1 = require("./routine/routine.module");
let ApiModule = class ApiModule {
};
ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/ams-beta-v1', {
                useNewUrlParser: true,
            }),
            user_module_1.UserModule,
            device_module_1.DeviceModule,
            extension_module_1.ExtensionModule,
            routine_module_1.RoutineModule,
        ],
        providers: [{ provide: core_1.APP_GUARD, useClass: auth_guard_1.AuthGuard }],
    })
], ApiModule);
exports.ApiModule = ApiModule;
//# sourceMappingURL=api.module.js.map