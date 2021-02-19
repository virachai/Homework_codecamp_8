/*
JavaScript For React Part 4.pptx

1. ให้สร้าง decorator ฟังก์ชัน ชื่อ spy(func) โดยทำให้ work ที่รับ argument เข้าไป return ค่า ออกมาเป็น “call : argument1, agrument2”
*/
function work(a, b) {
  console.log( a + b ); // work จะเป็น ฟังก์ชัน หรือ method ก็ได้
}

function spy(func) {
  let cache = new Map();
  
  function wrapper(...args) {
	//console.dir(this);
	//let key = hash(arguments);
	if (cache.has(args)) {
      return cache.get(args);
    }
    // using ...args instead of arguments to store "real" array in wrapper.calls
    wrapper.calls.push(args);
	
	//console.log("func.apply");
    let result = func.apply(this, args);
	
	cache.set(args, result);
    return result;
  }

  wrapper.calls = [];
  console.log("return wrapper");
  return wrapper;
}

work = spy(work);
work(1, 2); // 3
work(4, 5); // 9
  
for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

/*
2. ให้สร้าง decorator ฟังก์ชัน ชื่อ delay () รับค่า argument 2 ตัว
เป็น f และ เวลาในการ delay เป็นหน่วย มิลลิวินาที 
*/
function f(x) {
    alert(x);
}
// ให้สร้าง decorator ฟังก์ชันที่ครอบ f ฟังก์ชัน
function delay(func, ms) {
  return function(...args) {
    let savedThis = this; // store this into an intermediate variable
	console.log(savedThis);
    setTimeout(function() {
      func.apply(savedThis, args); // use it here
    }, ms);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("test"); // แสดง "test" หลังจาก 1000ms
f1500("test"); // แสดง "test" หลังจาก 1500ms

/*
function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}
*/


/*
2. การ bind function
2.1 this มีค่าเป็นอะไร
*/
function f() {
  alert( this ); // [object Window]
}

let user = {
  g: f.bind(null)
};

user.g();

/*
2.2 ผลลัพธ์ที่ได้คืออะไร
*/
function f() {
   alert(this.name); // John
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
// ไม่สามารถผูกฟังก์ชันใหม่ได้
f();

/*
2.3 ค่าของ value ในฟังก์ชันจะเปลี่ยนไปไหมหลังจาก bind
*/
function sayHi() {
    alert( this.name ); // undefined.
}
sayHi.test = 5;
  
let bound = sayHi.bind({
  name: "John"
});  
 
alert( bound.test ); // ผลลัพธ์คืออะไร แล้วทำไมจึงได้อย่างนั้น
// ผลลัพธ์ของการ bind ตัว bound คือ object ตัวใหม่
// ที่มี method alert( this.name ) อยู่ภายใน
// แต่ object {name: "John"} ตัวมันเองไม่มี property test