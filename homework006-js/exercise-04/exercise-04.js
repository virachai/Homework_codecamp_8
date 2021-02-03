/*
04. Exercise Object
1.ให้ทำตามคำสั่งต่อไปนี้
- สร้าง Object เปล่าขึ้นมา
- เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
- เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
- เปลี่ยน properties name เป็น “Boy”
- ลบ properties name ออกจาก Object

2.ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม 
ถ้ามีให้คืนค่า false ถ้าไม่มีให้คืนค่า true

3.การเขียนข้างล่างต่อไปนี้ Error ไหม
const user = {
  name: "John"
};
user.name = "Pete";

4.จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน 
ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด

5.จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number 
ให้คูณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
*/

// No.1
let user  = {};
user.name = "Sonter";
user.surname = "Pakorn";
user.name = "Boy";
deleteuser.name;

// No.2
function isEmpty(obj) {
	for (const key in obj) return false;

	return true;
}

// No.3
// ไม่ Error

// No.4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
function sum(obj) {
	let result = 0;

	for (const key in obj) result += obj[key]*1;

	return result;
}
let salarie = sum(salaries);

// No.5
function multiplyNumeric( obj, times ) {
	for (const key in obj) obj[key] = isNaN( obj[key] ) ? obj[key] : ( times*obj[key] );

	return obj;
}