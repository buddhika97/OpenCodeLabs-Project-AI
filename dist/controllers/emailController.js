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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followUp = exports.random = exports.catchySubject = exports.emailBody = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const openai_1 = __importDefault(require("../config/openai"));
// @des  Email body
// @route POST /api/email
// @access private
const emailBody = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const myEmail = {
        subject: req.body.subject.toString(),
        reason: req.body.reason.toString(),
        tone: req.body.tone.toString(),
    };
    const prompt = `Email with ${myEmail.tone} emotion due to ${myEmail.reason} about ${myEmail.subject}`;
    const result = yield (0, openai_1.default)('text-davinci-003', prompt, 1, 250, 2);
    res.status(200).json({ result });
}));
exports.emailBody = emailBody;
// @des  Email body
// @route POST /api/email
// @access private
const followUp = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const myEmail = {
        subject: req.body.subject.toString(),
        reason: req.body.reason.toString(),
        tone: req.body.tone.toString(),
    };
    const prompt = `Polite follow-up email with ${myEmail.tone} emotion about ${myEmail.reason} `;
    const result = yield (0, openai_1.default)('text-davinci-003', prompt, 1, 250, 2);
    res.status(200).json({ result });
}));
exports.followUp = followUp;
// @des  Email subject
// @route POST /api/email/subject
// @access private
const catchySubject = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mySubject = {
        subject: req.body.reason.toString(),
        tone: req.body.tone.toString(),
    };
    const prompt = `Generate a professional email subject about ${mySubject.subject} with  ${mySubject.tone} emotion`;
    const result = yield (0, openai_1.default)('text-davinci-003', prompt, 1, 25, 2);
    res.status(200).json({ result });
}));
exports.catchySubject = catchySubject;
const random = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const prompt = req.body.name;
    console.log(prompt);
    if (prompt) {
        const result = yield (0, openai_1.default)('text-davinci-003', prompt, 1, 250, 1);
        res.status(200).json({ result });
    }
}));
exports.random = random;
