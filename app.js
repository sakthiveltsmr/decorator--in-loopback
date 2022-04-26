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
function log(target, key, descriptor) {
    //   console.log("target", target);
    var original = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        //call the original method
        var result = original.apply(this, args);
        //log the call, and the result
        console.log("".concat(key, " with args ").concat(JSON.stringify(args), " returned ").concat(JSON.stringify(result)));
        return result;
    };
    return descriptor;
}
var calculator = /** @class */ (function () {
    function calculator() {
    }
    //using the decorator @log
    calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log
    ], calculator.prototype, "square", null);
    return calculator;
}());
var calculators = new calculator();
calculators.square(2);
calculators.square(4);
