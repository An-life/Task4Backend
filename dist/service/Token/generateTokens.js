"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTokensService = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var GenerateTokensService = function (payload) {
    var accessToken = jsonwebtoken_1.default.sign(payload, 'secret', {
        expiresIn: '1 d',
    });
    var refreshToken = jsonwebtoken_1.default.sign(payload, 'secret', {
        expiresIn: '60 d',
    });
    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
    };
};
exports.GenerateTokensService = GenerateTokensService;
//# sourceMappingURL=generateTokens.js.map