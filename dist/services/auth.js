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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.logoutUser = logoutUser;
const prisma_1 = __importDefault(require("../utils/prisma"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_errors_1 = __importDefault(require("http-errors"));
const crypto_1 = require("crypto");
function createSafeUser(user) {
    const { password } = user, safeUser = __rest(user, ["password"]);
    return safeUser;
}
function registerUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        data.password = yield bcrypt_1.default.hash(data.password, 10);
        const user = yield prisma_1.default.user.create({ data });
        return createSafeUser(user);
    });
}
function loginUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma_1.default.user.findFirst({
            where: {
                email: data.email,
            },
            select: {
                id: true,
                password: true,
            },
        });
        if (!user) {
            throw (0, http_errors_1.default)(404, 'User not found');
        }
        const equal = yield bcrypt_1.default.compare(data.password, user.password);
        if (!equal) {
            throw (0, http_errors_1.default)(401, 'Unauthorized');
        }
        const token = (0, crypto_1.randomBytes)(30).toString('base64');
        const [deleted, updatedUser] = yield prisma_1.default.$transaction([
            prisma_1.default.session.deleteMany({
                where: {
                    userId: user.id,
                },
            }),
            prisma_1.default.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    session: {
                        create: { token },
                    },
                },
                select: {
                    session: true,
                },
            }),
        ]);
        return updatedUser.session;
    });
}
function logoutUser(session) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_1.default.session.deleteMany({
            where: {
                token: session,
            },
        });
    });
}
