import { Router } from "express";
import * as passport from "passport";

const router = Router();

//GET One passport.authenticate('jwt'),
router.get("/verify", passport.authenticate('jwt'), async (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: "code bad at server, routes, auth, token.ts GET One",
        error,
      });
  }
});

export default router;
