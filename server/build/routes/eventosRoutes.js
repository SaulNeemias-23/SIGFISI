"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventosController_1 = __importDefault(require("../controllers/eventosController"));
class EventosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', eventosController_1.default.index);
        this.router.get('/solicitudes', eventosController_1.default.solicitudes);
        this.router.get('/:id', eventosController_1.default.getOne);
        this.router.get('/filtro/:titulo', eventosController_1.default.getTitulo);
        this.router.post('/', eventosController_1.default.create);
        this.router.put('/:id', eventosController_1.default.update);
        this.router.put('/aprobar/:id', eventosController_1.default.aprobar);
        this.router.put('/desaprobar/:id', eventosController_1.default.desaprobar);
        this.router.delete('/:id', eventosController_1.default.delete);
        this.router.put('/', eventosController_1.default.actualizarEvento);
    }
}
const eventosRoutes = new EventosRoutes();
exports.default = eventosRoutes.router;
//# sourceMappingURL=eventosRoutes.js.map