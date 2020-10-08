import { Query } from "../index";

const all = () => Query('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid');

const one = (id: number) => Query('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid WHERE books.id = ?', [id]);

const insert = (newBook: {title: string, author: string, price: string, categoryid: number}) => Query('INSERT INTO books SET ?', [newBook]);

const update = (editedBook: {title?: string, author?: string, price?: string, categoryid?: number}, id: number) => Query('UPDATE books SET ? WHERE id = ?', [editedBook, id]);

const destroy = (id: number) => Query('DELETE FROM books WHERE id = ?', [id]);


export default {
    all, 
    one,
    insert,
    update,
    destroy
}