import { Query } from "../index";

const find = (column: string, value: string | number) => Query('SELECT * FROM users WHERE ?? =?', [column, value]);

const insert = (id: number) => Query('INSERT INTO users SET ?', [id]);

export default {
    find, 
    insert,
}