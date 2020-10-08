import * as mysql from 'mysql';
import config from '../config';
import books from "./queries/books";
import categories from "./queries/categories";
import users from "./queries/users";

const pool = mysql.createPool(config.mysql);

export const Query = <Query= any>(mysql: string, values?: any) => {
    return new Promise<Query>((resolve, reject) => {
        pool.query(mysql, values, (error, results) => {
        if(error) return reject(error);
        return resolve(results);
        });
    });
};

export default{
    books,
    categories,
    users
}