export interface IHandleToken {
  generate(id: string): string;
  validate(token: string): string;
}
