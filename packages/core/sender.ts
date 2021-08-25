import axios from "axios";
import { Error } from "./errors";

export class AxiosSender {
  constructor() {}
  async get<T>(url: string) {
    return await axios
      .get(url)
      .then((response: { data: any }) => {
        return response.data as T;
      })
      .catch((error: { message: any }) => {
        console.log(error);
        return new Error({ message: error.message });
      });
  }
}
