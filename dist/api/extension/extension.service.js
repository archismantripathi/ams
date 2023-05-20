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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionService = void 0;
const common_1 = require("@nestjs/common");
const extension_repository_1 = require("./extension.repository");
let ExtensionService = class ExtensionService {
    constructor(extensionRepository) {
        this.extensionRepository = extensionRepository;
    }
    async getAllExtension() {
        return { data: await this.extensionRepository.getAllExtension() };
    }
    async getExtension(extensionId) {
        return { data: await this.extensionRepository.getExtension(extensionId) };
    }
    async createExtension(createExtensionDto) {
        return this.extensionRepository.createExtension(createExtensionDto);
    }
    async updateExtension(extensionId, updateExtensionDto) {
        return this.extensionRepository.updateExtension(extensionId, updateExtensionDto);
    }
    async deleteExtension(extensionId) {
        return this.extensionRepository.deleteExtension(extensionId);
    }
};
ExtensionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [extension_repository_1.ExtensionRepository])
], ExtensionService);
exports.ExtensionService = ExtensionService;
//# sourceMappingURL=extension.service.js.map