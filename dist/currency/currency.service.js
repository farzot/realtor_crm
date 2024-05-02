"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyService = void 0;
const common_1 = require("@nestjs/common");
let CurrencyService = class CurrencyService {
    create(createCurrencyDto) {
        return 'This action adds a new currency';
    }
    findAll() {
        return `This action returns all currency`;
    }
    findOne(id) {
        return `This action returns a #${id} currency`;
    }
    update(id, updateCurrencyDto) {
        return `This action updates a #${id} currency`;
    }
    remove(id) {
        return `This action removes a #${id} currency`;
    }
};
exports.CurrencyService = CurrencyService;
exports.CurrencyService = CurrencyService = __decorate([
    (0, common_1.Injectable)()
], CurrencyService);
//# sourceMappingURL=currency.service.js.map