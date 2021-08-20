import express from "express";
import { openApiRouter } from "./routers/open-api-router";

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/openapi", openApiRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Running Node Js API at port ${port}`);
});
