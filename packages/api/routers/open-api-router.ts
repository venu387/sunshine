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
  async function (req: Request, res: Response, next: NextFunction) {
    const response = await getWeatherByCityId(req.params.cityId);
    res.json(response);
  }
);
openApiRouter.get(
  "/getByCityName/:cityDetails",
  async function (req: Request, res: Response, next: NextFunction) {
    const response = await getWeatherByCityName(req.params.cityDetails);
    res.json(response);
  }
);

export { openApiRouter };