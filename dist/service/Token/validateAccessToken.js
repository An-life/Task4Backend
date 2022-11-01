"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateAccessTokenService = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var ValidateAccessTokenService = function (token) {
    try {
        var userData = jsonwebtoken_1.default.verify(token, 'secret');
        return userData;
    }
    catch (e) {
        return null;
    }
};
exports.ValidateAccessTokenService = ValidateAccessTokenService;
//# sourceMappingURL=validateAccessToken.js.map