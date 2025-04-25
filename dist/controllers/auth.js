"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserController = registerUserController;
exports.loginUserController = loginUserController;
exports.logoutUserController = logoutUserController;
const auth_1 = require("../services/auth");
function registerUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, auth_1.registerUser)(req.body);
        res.status(201).json(user);
    });
}
function loginUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = yield (0, auth_1.loginUser)(req.body);
        res.cookie('session', session === null || session === void 0 ? void 0 : session.token, {
            httpOnly: true,
        });
        res.status(200).send();
    });
}
function logoutUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = req.cookies.session;
        if (session) {
            yield (0, auth_1.logoutUser)(session);
        }
        res.clearCookie('session');
        res.status(204).send();
    });
}
