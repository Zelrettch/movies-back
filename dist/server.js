"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupServer = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const notFoundHandler_1 = require("./middlewares/notFoundHandler");
const index_1 = __importDefault(require("./routes/index"));
const errorHandler_1 = require("./middlewares/errorHandler");
const setupServer = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get('/', (req, res) => {
        res.status(200).send('HELLO');
    });
    app.use(index_1.default);
    app.use(notFoundHandler_1.notFoundHandler);
    app.use(errorHandler_1.errorHandler);
    app.listen(config_1.default.PORT, () => {
        console.log(`Server running on port ${config_1.default.PORT}`);
    });
};
exports.setupServer = setupServer;
