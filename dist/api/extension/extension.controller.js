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
exports.ExtensionController = void 0;
const common_1 = require("@nestjs/common");
const extension_service_1 = require("./extension.service");
const create_extension_dto_1 = require("./dto/create-extension.dto");
const update_extension_dto_1 = require("./dto/update-extension.dto");
let ExtensionController = class ExtensionController {
    constructor(extensionService) {
        this.extensionService = extensionService;
    }
    getAllExtension() {
        return this.extensionService.getAllExtension();
    }
    getExtension(extensionId) {
        return this.extensionService.getExtension(extensionId);
    }
    createExtension(createExtensionDto) {
        return this.extensionService.createExtension(createExtensionDto);
    }
    updateExtension(extensionId, updateExtensionDto) {
        return this.extensionService.updateExtension(extensionId, updateExtensionDto);
    }
    deleteExtension(extensionId) {
        return this.extensionService.deleteExtension(extensionId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExtensionController.prototype, "getAllExtension", null);
__decorate([
    (0, common_1.Get)(':extensionId'),
    __param(0, (0, common_1.Param)('extensionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExtensionController.prototype, "getExtension", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_extension_dto_1.CreateExtensionDto]),
    __metadata("design:returntype", void 0)
], ExtensionController.prototype, "createExtension", null);
__decorate([
    (0, common_1.Patch)(':extensionId'),
    __param(0, (0, common_1.Param)('extensionId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_extension_dto_1.UpdateExtensionDto]),
    __metadata("design:returntype", void 0)
], ExtensionController.prototype, "updateExtension", null);
__decorate([
    (0, common_1.Delete)(':extensionId'),
    __param(0, (0, common_1.Param)('extensionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExtensionController.prototype, "deleteExtension", null);
ExtensionController = __decorate([
    (0, common_1.Controller)('api/extension'),
    __metadata("design:paramtypes", [extension_service_1.ExtensionService])
], ExtensionController);
exports.ExtensionController = ExtensionController;
//# sourceMappingURL=extension.controller.js.map