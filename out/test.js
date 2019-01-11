var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function asyncFn() {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve('foo');
    });
}
function asyncFn1() {
    return __awaiter(this, void 0, void 0, function* () {
        yield asyncFn();
        return asyncFn2();
    });
}
function asyncFn2() {
    return __awaiter(this, void 0, void 0, function* () {
        yield asyncFn();
        return asyncFn3();
    });
}
function asyncFn3() {
    return __awaiter(this, void 0, void 0, function* () {
        yield asyncFn();
    });
}
asyncFn1().then(() => {
    console.log(`done`);
});
//# sourceMappingURL=test.js.map