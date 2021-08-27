import express, { NextFunction, Request, Response } from "express";
import * as OpenApi from "../controllers/open-api";

var openApiRouter = express();

openApiRouter.get(
  "/",
  function (req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Open API was called" });
  }
);
// openApiRouter.get(
//   "/getByCityId/:cityId",
//   async function (req: Request, res: Response, next: NextFunction) {
//     const response = await OpenApi.getWeatherByCityId(req.params.cityId);
//     res.json(response);
//   }
// );
openApiRouter.get(
  "/:cityDetails",
  async function (req: Request, res: Response, next: NextFunction) {
    const response = await OpenApi.get12HourAnd7DayForecast(
      req.params.cityDetails
    );
    res.json(response);
  }
);
// openApiRouter.get(
//   "/futureForecast/:cityDetails",
//   async function (req: Request, res: Response, next: NextFunction) {
//     const response = await OpenApi.get12HourAnd7DayForecast(req.params.cityId);
//     res.json(response);
//   }
// );
export { openApiRouter };
