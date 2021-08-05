import express, { NextFunction, Request, Response } from "express";

var openApiRouter = express();

openApiRouter.get(
  "/",
  function (req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Open API was called" });
    next();
  }
);

export { openApiRouter };
