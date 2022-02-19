"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./websocket");
const app = (0, express_1.default)();
app.set('views', './views');
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index');
});
app.use('/static', express_1.default.static('./static'));
app.listen(3000);
