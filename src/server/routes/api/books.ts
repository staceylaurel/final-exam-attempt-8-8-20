import { Router } from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = Router();

//GET All
router.get('/', async(req, res) => {
    try {
        const books = await db.books.all();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, book.ts, GET All", error});
    }
});

//GET One
router.get('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const [books] = await db.books.one(id);
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, book.ts, GET One", error});
    }
});

//PUT passport.authenticate('jwt'), 
router.put('/:id', async(req: any, res) => {
    try {
        const id = Number(req.params.id);
        const editBooks = req.body
        const results = await db.books.update(editBooks, id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, book.ts, PUT", error});
    }
});

//DELETE passport.authenticate('jwt'), 
router.delete('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const results = await db.books.destroy(id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, book.ts, DELETE", error});
    }
});

//POST passport.authenticate('jwt'),
router.post('/', async(req, res) => {
    try {
        const newBook = req.body;
        const results = await db.books.insert(newBook);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, book.ts, POST", error});
    }
});


export default router;