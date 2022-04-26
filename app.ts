function log(target: any, key: any, descriptor: any) {
  console.log(`${key} was called`);
}

class calculator {
  //using the decorator @log
  @log
  square(n: number) {
    return n * n;
  }
}
