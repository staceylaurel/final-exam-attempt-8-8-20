import { Query } from "../index";

const all = () => Query('SELECT * FROM categories');

const one = (id: number) => Query('SELECT * FROM categories WHERE id = ?', [id]);

export default {
    all, 
    one,
}