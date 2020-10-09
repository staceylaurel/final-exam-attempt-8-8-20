/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\ndotenv.config();\nexports.default = {\n    mysql: {\n        host: process.env.DB_HOST,\n        user: process.env.DB_USER,\n        database: process.env.DB_DATABASE,\n        password: process.env.DB_PASSWORD,\n    },\n    auth: {\n        secret: process.env.JWT_SECRET,\n    }\n};\n\n\n//# sourceURL=webpack:///./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Query = void 0;\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\nvar books_1 = __webpack_require__(/*! ./queries/books */ \"./src/server/db/queries/books.ts\");\nvar categories_1 = __webpack_require__(/*! ./queries/categories */ \"./src/server/db/queries/categories.ts\");\nvar users_1 = __webpack_require__(/*! ./queries/users */ \"./src/server/db/queries/users.ts\");\nvar pool = mysql.createPool(config_1.default.mysql);\nexports.Query = function (mysql, values) {\n    return new Promise(function (resolve, reject) {\n        pool.query(mysql, values, function (error, results) {\n            if (error)\n                return reject(error);\n            return resolve(results);\n        });\n    });\n};\nexports.default = {\n    books: books_1.default,\n    categories: categories_1.default,\n    users: users_1.default\n};\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/queries/books.ts":
/*!****************************************!*\
  !*** ./src/server/db/queries/books.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/db/index.ts\");\nvar all = function () { return index_1.Query('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid'); };\nvar one = function (id) { return index_1.Query('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid WHERE books.id = ?', [id]); };\nvar insert = function (newBook) { return index_1.Query('INSERT INTO books SET ?', [newBook]); };\nvar update = function (editedBook, id) { return index_1.Query('UPDATE books SET ? WHERE id = ?', [editedBook, id]); };\nvar destroy = function (id) { return index_1.Query('DELETE FROM books WHERE id = ?', [id]); };\nexports.default = {\n    all: all,\n    one: one,\n    insert: insert,\n    update: update,\n    destroy: destroy\n};\n\n\n//# sourceURL=webpack:///./src/server/db/queries/books.ts?");

/***/ }),

/***/ "./src/server/db/queries/categories.ts":
/*!*********************************************!*\
  !*** ./src/server/db/queries/categories.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/db/index.ts\");\nvar all = function () { return index_1.Query('SELECT * FROM categories'); };\nvar one = function (id) { return index_1.Query('SELECT * FROM categories WHERE id = ?', [id]); };\nexports.default = {\n    all: all,\n    one: one,\n};\n\n\n//# sourceURL=webpack:///./src/server/db/queries/categories.ts?");

/***/ }),

/***/ "./src/server/db/queries/users.ts":
/*!****************************************!*\
  !*** ./src/server/db/queries/users.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/server/db/index.ts\");\nvar find = function (column, value) { return index_1.Query('SELECT * FROM users WHERE ?? =?', [column, value]); };\nvar insert = function (id) { return index_1.Query('INSERT INTO users SET ?', [id]); };\nexports.default = {\n    find: find,\n    insert: insert,\n};\n\n\n//# sourceURL=webpack:///./src/server/db/queries/users.ts?");

/***/ }),

/***/ "./src/server/middlewares/passport-strategies.ts":
/*!*******************************************************!*\
  !*** ./src/server/middlewares/passport-strategies.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar jwtStrategy = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\nvar PassportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\nvar passwords_1 = __webpack_require__(/*! ../utils/passwords */ \"./src/server/utils/passwords.ts\");\npassport.serializeUser(function (user, done) { return done(null, user); });\npassport.deserializeUser(function (user, done) { return done(null, user); });\npassport.use(new PassportLocal.Strategy({ usernameField: \"email\" }, function (email, password, done) { return __awaiter(void 0, void 0, void 0, function () {\n    var users, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.users.find(\"email\", email)];\n            case 1:\n                users = (_a.sent())[0];\n                if (users && passwords_1.comparePasswords(password, users.password)) {\n                    delete users.password;\n                    done(null, users);\n                }\n                else {\n                    done(null, false);\n                }\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.log(error_1);\n                done(error_1);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); }));\npassport.use(new jwtStrategy.Strategy({\n    jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),\n    secretOrKey: config_1.default.auth.secret,\n}, function (payload, done) { return __awaiter(void 0, void 0, void 0, function () {\n    var user, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.users.find(\"id\", payload.userid)];\n            case 1:\n                user = (_a.sent())[0];\n                if (user) {\n                    delete user.password;\n                    done(null, user);\n                }\n                else {\n                    done(null, false);\n                }\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _a.sent();\n                console.log(error_2);\n                done(error_2);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); }));\n\n\n//# sourceURL=webpack:///./src/server/middlewares/passport-strategies.ts?");

/***/ }),

/***/ "./src/server/routes/api/books.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/books.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\nvar router = express_1.Router();\n//GET All\nrouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var books, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.books.all()];\n            case 1:\n                books = _a.sent();\n                res.json(books);\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.log(error_1);\n                res.status(500).json({ message: \"code bad at server, routes, api, book.ts, GET All\", error: error_1 });\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n//GET One\nrouter.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, books, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = Number(req.params.id);\n                return [4 /*yield*/, db_1.default.books.one(id)];\n            case 1:\n                books = (_a.sent())[0];\n                res.json(books);\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _a.sent();\n                console.log(error_2);\n                res.status(500).json({ message: \"code bad at server, routes, api, book.ts, GET One\", error: error_2 });\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n//PUT passport.authenticate('jwt'), \nrouter.put('/:id', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, editBooks, results, error_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = Number(req.params.id);\n                editBooks = req.body;\n                return [4 /*yield*/, db_1.default.books.update(editBooks, id)];\n            case 1:\n                results = _a.sent();\n                res.json(results);\n                return [3 /*break*/, 3];\n            case 2:\n                error_3 = _a.sent();\n                console.log(error_3);\n                res.status(500).json({ message: \"code bad at server, routes, api, book.ts, PUT\", error: error_3 });\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n//DELETE passport.authenticate('jwt'), \nrouter.delete('/:id', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, results, error_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = Number(req.params.id);\n                return [4 /*yield*/, db_1.default.books.destroy(id)];\n            case 1:\n                results = _a.sent();\n                res.json(results);\n                return [3 /*break*/, 3];\n            case 2:\n                error_4 = _a.sent();\n                console.log(error_4);\n                res.status(500).json({ message: \"code bad at server, routes, api, book.ts, DELETE\", error: error_4 });\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n//POST passport.authenticate('jwt'),\nrouter.post('/', passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var newBook, results, error_5;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                newBook = req.body;\n                return [4 /*yield*/, db_1.default.books.insert(newBook)];\n            case 1:\n                results = _a.sent();\n                res.json(results);\n                return [3 /*break*/, 3];\n            case 2:\n                error_5 = _a.sent();\n                console.log(error_5);\n                res.status(500).json({ message: \"code bad at server, routes, api, book.ts, POST\", error: error_5 });\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/api/books.ts?");

/***/ }),

/***/ "./src/server/routes/api/categories.ts":
/*!*********************************************!*\
  !*** ./src/server/routes/api/categories.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\nvar router = express_1.Router();\n//GET All\nrouter.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var categories, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.categories.all()];\n            case 1:\n                categories = _a.sent();\n                res.json(categories);\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.log(error_1);\n                res.status(500).json({ message: \"code bad at server, routes, api, book.ts, GET All\", error: error_1 });\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\n//GET One\nrouter.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, categories, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = Number(req.params.id);\n                return [4 /*yield*/, db_1.default.categories.one(id)];\n            case 1:\n                categories = (_a.sent())[0];\n                res.json(categories);\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _a.sent();\n                console.log(error_2);\n                res.status(500).json({ message: \"code bad at server, routes, api, book.ts, GET One\", error: error_2 });\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/api/categories.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar books_1 = __webpack_require__(/*! ./books */ \"./src/server/routes/api/books.ts\");\nvar categories_1 = __webpack_require__(/*! ./categories */ \"./src/server/routes/api/categories.ts\");\nvar router = express_1.Router();\nrouter.use('/books', books_1.default);\nrouter.use('/categories', categories_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/index.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar login_1 = __webpack_require__(/*! ./login */ \"./src/server/routes/auth/login.ts\");\nvar register_1 = __webpack_require__(/*! ./register */ \"./src/server/routes/auth/register.ts\");\nvar token_1 = __webpack_require__(/*! ./token */ \"./src/server/routes/auth/token.ts\");\nvar router = express_1.Router();\nrouter.use('/login', login_1.default);\nrouter.use('/register', register_1.default);\nrouter.use('/token', token_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/login.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/login.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar tokens_1 = __webpack_require__(/*! ../../utils/tokens */ \"./src/server/utils/tokens.ts\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar router = express_1.Router();\n//POST passport.authenticate('local'),\nrouter.post('/', passport.authenticate('local'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var token;\n    return __generator(this, function (_a) {\n        try {\n            token = tokens_1.createToken({ userid: req.user.id });\n            res.json(token);\n        }\n        catch (error) {\n            console.log(error);\n            res.status(500).json({ message: \"code bad at server, routes, auth, login, POST\", error: error });\n        }\n        return [2 /*return*/];\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/login.ts?");

/***/ }),

/***/ "./src/server/routes/auth/register.ts":
/*!********************************************!*\
  !*** ./src/server/routes/auth/register.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar tokens_1 = __webpack_require__(/*! ../../utils/tokens */ \"./src/server/utils/tokens.ts\");\nvar passwords_1 = __webpack_require__(/*! ../../utils/passwords */ \"./src/server/utils/passwords.ts\");\nvar db_1 = __webpack_require__(/*! ../../db */ \"./src/server/db/index.ts\");\nvar router = express_1.Router();\n//POST \nrouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var newUser, results, token, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                newUser = req.body;\n                newUser.password = passwords_1.generateHash(newUser.password);\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 3, , 4]);\n                return [4 /*yield*/, db_1.default.users.insert(newUser)];\n            case 2:\n                results = _a.sent();\n                token = tokens_1.createToken({ userid: results.insertId });\n                res.json(token);\n                return [3 /*break*/, 4];\n            case 3:\n                error_1 = _a.sent();\n                console.log(error_1);\n                res\n                    .status(500)\n                    .json({\n                    message: \"code bad at server, routes, auth, register, POST\",\n                    error: error_1,\n                });\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/register.ts?");

/***/ }),

/***/ "./src/server/routes/auth/token.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/token.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar router = express_1.Router();\n//GET One passport.authenticate('jwt'),\nrouter.get(\"/verify\", passport.authenticate('jwt'), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        try {\n            res.sendStatus(200);\n        }\n        catch (error) {\n            console.log(error);\n            res\n                .status(500)\n                .json({\n                message: \"code bad at server, routes, auth, token.ts GET One\",\n                error: error,\n            });\n        }\n        return [2 /*return*/];\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/auth/token.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth/index.ts\");\nvar router = express_1.Router();\nrouter.use('/api', api_1.default);\nrouter.use('/auth', auth_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar passport = __webpack_require__(/*! passport */ \"passport\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\n__webpack_require__(/*! ./middlewares/passport-strategies */ \"./src/server/middlewares/passport-strategies.ts\");\nvar app = express();\napp.use(express.static('public'));\napp.use(passport.initialize());\napp.use(express.json());\napp.use(morgan('dev'));\napp.use(routes_1.default);\napp.get('*', function (req, res) { return res.sendFile(path.join(__dirname, '../public/index.html')); });\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/passwords.ts":
/*!***************************************!*\
  !*** ./src/server/utils/passwords.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.comparePasswords = exports.generateHash = void 0;\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nexports.generateHash = function (password) {\n    // https://en.wikipedia.org/wiki/Salt_(cryptography)\n    var salt = bcrypt.genSaltSync(12);\n    var hash = bcrypt.hashSync(password, salt);\n    return hash;\n};\nexports.comparePasswords = function (password, hash) {\n    return bcrypt.compareSync(password, hash);\n};\n\n\n//# sourceURL=webpack:///./src/server/utils/passwords.ts?");

/***/ }),

/***/ "./src/server/utils/tokens.ts":
/*!************************************!*\
  !*** ./src/server/utils/tokens.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.createToken = void 0;\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\nexports.createToken = function (payload) {\n    var token = jwt.sign(payload, config_1.default.auth.secret, { expiresIn: '15d' });\n    return token;\n};\n\n\n//# sourceURL=webpack:///./src/server/utils/tokens.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });