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
// function log(target: any, key: any, descriptor: any) {
//   //   console.log("target", target);
//   const original = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     //call the original method
//     const result = original.apply(this, args);
//     //log the call, and the result
//     console.log(
//       `${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(
//         result
//       )}`
//     );
//     return result;
//   };
//   return descriptor;
// }

// class calculator {
//   //using the decorator @log
//   @log
//   square(n: number) {
//     return n * n;
//   }
// }

// const calculators = new calculator();
// calculators.square(2);

// calculators.square(4);

//decorator factory function
// function log(title: string) {
//   return function (target: any, key: any, descriptor: any) {
//     const original = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//       const result = original.apply(this, args);
//       //log the call and result
//       console.log(
//         `title: ${title} ${key} with args ${JSON.stringify(
//           args
//         )} returned ${JSON.stringify(result)}`
//       );
//       return result;
//     };
//     return descriptor;
//   };
// }
// class calculator {
//   //Using the decoretor arguments function @log
//   @log("calculator")
//   square(n: number) {
//     return n * n;
//   }
// }
// const calculators = new calculator();
// calculators.square(8);
// calculators.square(4);

// Property Decorator
function property(target: any, key: string) {
  let value = target[key];
  //Replacement getter
  const getter = function () {
    console.log(`Getter for ${key} returned ${value}`);
    return value;
  };
  //Replacement setter
  const setter = function (newVal: any) {
    console.log(`Set ${key} to ${newVal}`);
    value = newVal;
  };
  //Replace the  propertys
  const isDeleted = delete this[key];
  if (!isDeleted) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
}
class Person {
  @property
  public firstname: string;
}

const Person1 = new Person();

Person1.firstname = "sakthi";
