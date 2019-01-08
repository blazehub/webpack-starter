import style from "./main.scss";

console.log("I am silly entry point");
const arr = [1, 2, 3];
const ES6JS = () => console.log(...arr);
window.ES6JS = ES6JS;