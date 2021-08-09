import express, { NextFunction, Request, Response } from "express";
import { getWeather } from "../controllers/open-api";

var openApiRouter = express();

openApiRouter.get(
  "/",
  function (req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Open API was called" });
    next();
  }
);
openApiRouter.get(
  "/getByCityId/:cityId",
  function (req: Request, res: Response, next: NextFunction) {
    const response = getWeather(req.params.cityId);
    res.json({ response });
  }
);

export { openApiRouter };
