/*
JavaScript For React Part 2.pptx

1. Prototypal inheritance
1.1 ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร
*/
let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1) = true

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2) = null

delete animal.jumps;

alert( rabbit.jumps ); // ? (3) = undefined

/*
1.2 ใช้ __proto__ ในการกำหนด prototype object ดังนี้
pockets → bed → table → head.
*/
let head = {
  glasses: 1
};

let table = {
  __proto__: head,  // prototype add property from head
  pen: 3
};

let bed = {
  __proto__: table,  // prototype add property from table
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,  // prototype add property from bed
  money: 2000
};

/*
1.3 การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป
*/

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();  
/* 
object rabbit ได้ property full เพราะ rabbit run method eat() 
ที่มีคำสั่ง this.full = true; และ rabbit เป็นเจ้าของ this
*/

/*
1.4 การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี 
*/
let hamster = {
   eat(food) {
	if (!this.stomach) this.stomach = []; // Fixed
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple

/*
2. F.prototype
2.1 จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา
*/
// No 2.1.1
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true

// No 2.1.2
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; // ถูกชี้ไปตัว {} ใหม่ 

alert( rabbit.eats ); // ? = true เพราะชี้ไป { eats: true }

// No 2.1.3
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;
// ยังชี้ไป { eats: true } แล้ว assign ค่า false ให้กับ property eats

alert( rabbit.eats ); // ? false
// Rabbit.prototype.eats == rabbit.__proto__.eats == rabbit.eats == {eats: false}

// No 2.1.4
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

rabbit.hasOwnProperty("eats");  // false

delete rabbit.eats; // ลบ OwnProperty ที่ไม่มี

alert( rabbit.eats ); // ? true == rabbit.__proto__.eats

// No 2.1.5
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;
// eats โดนลบออกจาก Default prototype
// ที่ rabbit และ Rabbit ชี้ไปหา

alert( rabbit.eats ); // undefined 
// เพราะ Rabbit.prototype.eats โดนลบ ==  rabbit.__proto__.eats โดนลบ


/*
2.2 ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
*/
let obj2 = new obj.constructor(); // ทำได้
// obj.constructor() == Object Constructors ถ่ายทอดมากจาก parent object


/*
3 Native prototype
3.1 ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms
*/
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

function f() {
  alert("Hello!");
}

f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที

/*
3.2 ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ return Function ให้ alert(a+b) เมื่อผ่านไป ms
*/
Function.prototype.defer = function(ms) {
  let fn = this;
  return function(a, b){
    setTimeout( () => fn(a, b), ms);
  }
}

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที

/*
4. Modern Prototype
4.1 มี Object Dictionary ที่สร้างจาก Object.create(null) เพื่อเก็บ key/value pairs
ให้เพิ่ม Method dictionary.toString() และคืนค่าเป็น key ทั้งหมดออกมาที่คั้นด้วย comma
*/

//let dictionary = Object.create(null);
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join(',');
    }
  }
});
// your code to add dictionary.toString method

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"


/*
4.2 สร้าง object rabbit ด้วย new keyword
คำสั่งทั้งหมดนี้ทำงานเหมือนกันหรือไม่
*/
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();  // Rabbit มาจาก "Rabbit"
Rabbit.prototype.sayHi();  // undefined
Object.getPrototypeOf(rabbit).sayHi();  // undefined
rabbit.__proto__.sayHi();  // undefined
/*
ไม่เหมือนกัน เพราะ ไม่ได้ assign ค่า arguments name
เลยได้ค่า undefined
*/