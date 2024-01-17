export interface IHandlePass {
  encrypt(password: string): Promise<string>;
  isInvalid(pass: string, hashPass: string): Promise<boolean>;
}
