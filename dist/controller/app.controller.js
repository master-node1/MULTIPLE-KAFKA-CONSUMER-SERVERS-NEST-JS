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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const custom_kafka_server_stratage_1 = require("../custom.kafka.server.stratage");
let AppController = class AppController {
    constructor(logger) {
        this.logger = logger;
    }
    async handleTopic1Message(data) {
        try {
            this.logger.log(`topoc-1 ${JSON.stringify(data)}`);
        }
        catch (error) {
            this.logger.error(`error = , ${error}`);
        }
    }
    async handleTopic2Message(data) {
        try {
            this.logger.log(`topic-2 ${JSON.stringify(data)}`);
        }
        catch (error) {
            this.logger.error(`error = , ${error}`);
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, microservices_1.MessagePattern)('topic-1', custom_kafka_server_stratage_1.KAFKA_SERVER_1),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "handleTopic1Message", null);
__decorate([
    (0, microservices_1.MessagePattern)('topic-2', custom_kafka_server_stratage_1.KAFKA_SERVER_2),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "handleTopic2Message", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [common_1.Logger])
], AppController);
//# sourceMappingURL=app.controller.js.map