export class Error {
  constructor(props: Partial<Error>) {
    Object.assign(this, props);
  }
  status: number = 0;
  message: string = "";
}
