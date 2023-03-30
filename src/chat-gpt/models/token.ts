export class Token {
  length: number;

  constructor(length: number) {
    if (length > 2048) {
      this.length = 2048;
    } else if (length < 0) {
      this.length = 0;
    } else {
      this.length = length;
    }
  }

  update(token: Token) {
    return new Token(token.length);
  }
}
