import axios from "axios";
import { Error } from "./types/errors";

export class AxiosSender {
  constructor() {}
  async get<T>(url: string) {
    return await axios
      .get(url)
      .then((response: { data: any }) => {
        return response.data as T;
      })
      .catch((error: { message: any }) => {
        // console.log(error);
        const err = new Error({ message: error.message });
        return { err } as unknown as T;
      });
  }
}
