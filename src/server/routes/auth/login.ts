import { Router } from 'express';
import { createToken } from '../../utils/tokens'
import * as passport from 'passport';

const router = Router();

//POST passport.authenticate('local'),
router.post('/', passport.authenticate('local'), async(req:any, res) => {
        const token = createToken({userid: req.user.id});
        res.json(token);
});

export default router;