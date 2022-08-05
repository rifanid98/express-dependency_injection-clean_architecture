interface SecurityInterface {
  hash(value: string): Promise<string>;
  verify(plain: string, hashed: string): Promise<boolean>;
}

export class Security implements SecurityInterface {
  hash(value: string): Promise<string> {
    return Promise.resolve("");
  }

  verify(plain: string, hashed: string): Promise<boolean> {
    return Promise.resolve(false);
  }
}
