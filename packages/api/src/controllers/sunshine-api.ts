import { OpenApiUrlProvider } from "../config";
import { AxiosSender } from "@sunshine/core/sender";
import { OpenWeather, OpenOneCallResponse } from "../models/open-api";

const sender = new AxiosSender();

const getAllCitiesByRegex = async (regex: string) => {
  /**
   * Get list of cities matching the regex from db
   */
  const url = OpenApiUrlProvider.GetForecastWeatherByCoordinates(regex, regex);
  const data = await sender.get<OpenOneCallResponse>(url);
  return data;
};

export { getAllCitiesByRegex };
