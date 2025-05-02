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
const utils_1 = require("./utils");
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const cilent = yield (0, utils_1.getClient)();
        const createUserTableQuery = `
            CREATE TABLE users (
            id serial primary key,
            email VARCHAR(255) UNIQUE not NULL,
            PASSWORD VARCHAR(255) not NULL 
        );
    `;
        yield cilent.query(createUserTableQuery);
        const createTodosQuery = `
        CREATE TABLE todo(
            id serial PRIMARY KEY,
            title TEXT  NOT NULL,
            description TEXT,
            userid INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        );
   `;
        yield cilent.query(createTodosQuery);
        console.log("Table created successfully");
        yield cilent.end();
    });
}
createTable();
