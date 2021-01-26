"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const authController_1 = require("../controllers/authController");
router.post('/signup', authController_1.signup);
router.post('/signin', authController_1.signin);
router.get('/profile', authController_1.profile);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map