"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
var ErrorMiddleware = function (err, req, res, next) {
    console.log(err);
    if (err) {
        return res
            .status(err.status)
            .json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: 'Unexpected error' });
};
exports.ErrorMiddleware = ErrorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map