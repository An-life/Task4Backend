"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    status: { type: String, default: 'active' },
    registrationDate: { type: String },
    loginDate: { type: String },
});
exports.User = (0, mongoose_1.model)('User', exports.UserSchema);
//# sourceMappingURL=user.js.map