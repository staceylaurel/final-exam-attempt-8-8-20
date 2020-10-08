import { Router } from 'express';
import db from '../../db';

const router = Router();

//GET All
router.get('/', async(req, res) => {
    try {
        const categories = await db.categories.all();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, book.ts, GET All", error});
    }
});

//GET One
router.get('/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);
        const [categories] = await db.categories.one(id);
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, api, book.ts, GET One", error});
    }
});

export default router;