// function log(target: any, key: any, descriptor: any) {
//   console.log(`${key} was called`);
// }

// class calculator {
//   //using the decorator @log
//   @log
//   square(n: number) {
//     return n * n;
//   }
// }

//Arguments in method Decorators
function log(target: any, key: any, descriptor: any) {
  //   console.log("target", target);
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    //call the original method
    const result = original.apply(this, args);
    //log the call, and the result
    console.log(
      `${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(
        result
      )}`
    );
    return result;
  };
  return descriptor;
}

class calculator {
  //using the decorator @log
  @log
  square(n: number) {
    return n * n;
  }
}

const calculators = new calculator();
calculators.square(2);

calculators.square(4);
