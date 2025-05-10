"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
});
function dosomething(value) {
    return value;
}
const obj1 = dosomething("hello");
const obj2 = dosomething(5);
console.log(obj1);
console.log(obj2);
function dosomething2(value) {
    return value;
}
const obj3 = dosomething2(["ds", "dgagd"]);
const obj4 = dosomething2(5);
console.log(obj3);
console.log(obj4);
