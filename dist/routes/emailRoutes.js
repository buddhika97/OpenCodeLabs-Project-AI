"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const emailController_1 = require("../controllers/emailController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// router.post('/', random)
router.post('/', emailController_1.emailBody);
router.post('/follow', emailController_1.followUp);
router.post('/subject', emailController_1.catchySubject);
exports.default = router;
