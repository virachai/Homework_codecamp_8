/*
06. Exercise Constructor กับ New
1.สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods นี้
- read(): รับค่าจาก propmt สองตัว
- sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
- mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว
2.สร้าง constructor function Accumulator(startingValue)
- โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue
- ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value
พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue
*/

// No.1
function Calculator() {
	this.no1 = 0;
	this.no2 = 0;
	this.read = function() {
		this.no1 = Number( prompt("Enter First Number : ", '') );
		this.no2 = Number( prompt("Enter Second Number : " ,'') );
	};
	this.sum =  function(){ return this.no1 + this.no2; };
	this.mul =  function(){ return this.no1 * this.no2; };;
}

let calc = new Calculator();
calc.read();
console.log(  calc.sum() );
console.log(  calc.mul() );

// No.2
function Accumulator(startingValue) {
	this.value = Number( startingValue );
	this.read = function() {
		this.value += Number( prompt("Enter Number : ", '') );
	}
}
let accumulator = new Accumulator(10);
accumulator.read();