/*
09. Exercise Array
1.ผลลัพธ์ของความยาว array คืออะไร
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // ?

2.ให้ทำตามขั้นตอนต่อไปนี้
- สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
- เพิ่ม “Rock-n-Roll” ต่อท้าย
- นำค่า Classics ไปทับค่าตรงกลางของ Array
- นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
- เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array
3.เขียนฟังก์ชัน sumInput() ที่
- ใช้ propmt รับ value มาเก็บใน array
- หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
- คำนวณผลรวมของตัวเลขทั้งหมดใน Array
4.Maximal contiguous subarray (**Optional**)
- ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน
*/

// No.1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // 4


// No.2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles.splice(1, 1, 'Classics'); // styles[1] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");
styles; // (4) ["Rap", "Reggae", "Classics", "Rock-n-Roll"]

// No.3
const sumInput = () => {
	let num = 0;
	let arrayNum = [];
	while( !isNaN( num =  prompt("Enter Number :", '') ) ) {
		if (num.length === 0) break; 
		arrayNum.push(num);
	}
	return arrayNum.reduce( (a, b) => a*1 + b*1, 0)
}
sumInput();

// No.4
const getMaxSubSum = (arr) => {
	let maxArray = [];
	let max = 0;

	for (let i = 0; i < arr.length; i++) {
		let maxNum = arr[i];
		maxArray.push(maxNum);

		for (let j = i + 1; j < arr.length; j++) {
			if ( maxNum + arr[j] > max) {
				maxNum += arr[j];				
			} else {
				j = arr.length;
			}
		}

		if ( maxNum > max ) {
				max = maxNum;
				maxArray.push(max);
				maxNum = 0;
		}
	}
	//return maxArray;
	//console.log( Math.max( ...maxArray ) );
	return Math.max( ...maxArray );
}

getMaxSubSum( [-1, 2, 3, -9] )              //== 5 (the sum of highlighted items)
getMaxSubSum( [2, -1, 2, 3, -9] )          //== 6
getMaxSubSum( [-1, 2, 3, -9, 11] )	        //== 11
getMaxSubSum( [-2, -1, 1, 2] )              //== 3
getMaxSubSum( [100, -9, 2, -3, 5] )      //== 100
getMaxSubSum ([1, 2, 3] )                    //== 6 (take all)