import express, { NextFunction, Request, Response } from "express";
import {
  getWeatherByCityId,
  getWeatherByCityName,
} from "../controllers/open-api";

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
    const response = getWeatherByCityId(req.params.cityId);
    res.json({ response });
  }
);
openApiRouter.get(
  "/getByCityName/:cityDetails",
  function (req: Request, res: Response, next: NextFunction) {
    const response = getWeatherByCityName(req.params.cityDetails);
    res.json({ response });
  }
);

export { openApiRouter };
