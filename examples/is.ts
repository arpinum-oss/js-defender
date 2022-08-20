import { is } from "../lib";

const isNumber = is("hello").aNumber();
console.log(isNumber); // false

const isString = is("hello").aString();
console.log(isString); // true
