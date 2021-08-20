export interface IStore {
  Get(key: string): any;
  Set(key: string, value: any): any;
}

export class AppStore implements IStore {
  Get(key: string) {
    throw new Error('Method not implemented.');
  }
  Set(key: string, value: any) {
    throw new Error('Method not implemented.');
  }
}

export class LocalStore implements IStore {
  Get(key: string) {
    throw new Error('Method not implemented.');
  }
  Set(key: string, value: any) {
    throw new Error('Method not implemented.');
  }
}

export class RemoteStore implements IStore {
  Get(key: string) {
    throw new Error('Method not implemented.');
  }
  Set(key: string, value: any) {
    throw new Error('Method not implemented.');
  }
}
