import { Router } from "express";
import { createToken } from "../../utils/tokens";
import { generateHash } from "../../utils/passwords";
import db from "../../db";

const router = Router();

//POST 
router.post("/", async (req: any, res) => {
  const newUser = req.body;
  newUser.password = generateHash(newUser.password);
  try {
      const results = await db.users.insert(newUser);
      const token = createToken({userid: results.insertId})
    res.json(token);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        message: "code bad at server, routes, auth, register, POST",
        error,
      });
  }
});

export default router;
