/*
05. Exercise Methods ของ Object
1.การทำงานของ code ดังกล่าวจะได้อะไรออกมา
2.การทำงานของ code ดังกล่าวจะได้อะไรออกมา
3.สร้าง object calculator จาก 3 methods นี้:
- read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
- sum() คืนค่าผลบวกของ 2 ค่านั้น.
- mul() คืนค่าผลคูณของ 2 ค่านั้น.
4.ให้ Object ชื่อ ladder มี method ขึ้น และ ลง
- Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
- ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
*/

// No.1
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)() // Alert: "John"

// No.2
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name );  // Alert: ""
alert( user.ref ); // [object window]

// No.3
let calculator = {
	no1: 0,
	no2 : 0,
	read: function() {
		this.no1 = Number( prompt("Enter First Number : ", '') );
		this.no2 = Number( prompt("Enter Second Number : " ,'') );
	},
	sum:  function(){ return this.no1 + this.no2; },
	mul:  function(){ return this.no1 * this.no2; },
}
calculator.read();
console.log(  calculator.sum() );
console.log(  calculator.mul() );

// No.4
let ladder = {
	  step: 0,
	  up() {
			this.step++;
			return this;
	  },
	  down() {
			this.step--;
			return this;
	  },
	  showStep: function() { // shows the current step
			alert( this.step );
	  }
};
ladder.up().up().down().showStep(); // 1
