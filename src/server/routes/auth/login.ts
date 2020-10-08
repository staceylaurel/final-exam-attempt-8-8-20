import { Router } from 'express';
import { createToken } from '../../utils/tokens'
import * as passport from 'passport';
import db from '../../db';

const router = Router();

//POST passport.authenticate('local'),
router.post('/', passport.authenticate('local'), async(req:any, res) => {
    try {
        const token = createToken({userid: req.user.id});
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "code bad at server, routes, auth, login, POST", error});
    }
});

export default router;