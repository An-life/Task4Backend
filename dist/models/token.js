"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.TokenSchema = void 0;
var mongoose_1 = require("mongoose");
exports.TokenSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    refreshToken: { type: String, required: true },
});
exports.Token = (0, mongoose_1.model)('Token', exports.TokenSchema);
//# sourceMappingURL=token.js.map