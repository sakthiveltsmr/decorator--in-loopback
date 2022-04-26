// function log(target: any, key: any, descriptor: any) {
//   console.log(`${key} was called`);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function log(title) {
    return function (target, key, descriptor) {
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var result = original.apply(this, args);
            //log the call and result
            console.log("title: ".concat(title, " ").concat(key, " with args ").concat(JSON.stringify(args), " returned ").concat(JSON.stringify(result)));
            return result;
        };
        return descriptor;
    };
}
var calculator = /** @class */ (function () {
    function calculator() {
    }
    //Using the decoretor arguments function @log
    calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log("calculator")
    ], calculator.prototype, "square", null);
    return calculator;
}());
var calculators = new calculator();
calculators.square(8);
calculators.square(4);
