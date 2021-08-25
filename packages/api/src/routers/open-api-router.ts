import express, { NextFunction, Request, Response } from "express";
import * as OpenApi from "../controllers/open-api";

var openApiRouter = express();

openApiRouter.get(
  "/",
  function (req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Open API was called" });
  }
);
openApiRouter.get(
  "/getByCityId/:cityId",
  async function (req: Request, res: Response, next: NextFunction) {
    const response = await OpenApi.getWeatherByCityId(req.params.cityId);
    res.json(response);
  }
);
openApiRouter.get(
  "/getByCityName/:cityDetails",
  async function (req: Request, res: Response, next: NextFunction) {
    const response = await OpenApi.getWeatherByCityName(req.params.cityDetails);
    res.json(response);
  }
);
openApiRouter.get(
  "/oneCall/:cityId",
  async function (req: Request, res: Response, next: NextFunction) {
    const response = await OpenApi.get12HourForecast(req.params.cityId);
    res.json(response);
  }
);

export { openApiRouter };
