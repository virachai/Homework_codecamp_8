/*
10. Exercise Methods ของ Array
1.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()
2.ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
*/

// No.01.01
let array1 = [1, 2, 30, 400];
let array2 = array1.map( ( number ) => number*2 );
// array2 [2, 4, 60, 800]

// No.01.02
array1 = [1, 2, 3, 4];
array2 = array1.map( ( number ) => String( number ) );
// array2 ["1", "2", "3", "4"]

// No.01.03
array1 = [1, "1", 2, {}];
array2  = array1.map( ( arg ) => typeof( arg ) );
// array2 ["number", "string", "number", "object"]

// No.01.04
array1 = ["apple", "banana", "orange"];
array2  = array1.map( ( str ) => str.toUpperCase() );
// array2 ["APPLE", "BANANA", "ORANGE"]

// No.01.05
array1 = [
	{ name: "apple", age: 14 },
	{ name: "banana", age: 18 },
	{ name: "watermelon", age: 32 },
	]
array2  = array1.map( ( itm ) => itm.name);
// array2 ["apple", "banana", "watermelon"]

// No.01.06
array1 = [
	{ name: "apple", age: 14 },
	{ name: "banana", age: 18 },
	{ name: "watermelon", age: 32 },
	]
array2  = array1.map( ( itm ) => itm.age);
// array2 [14, 18, 32]     

// No.01.07
array1 = [
      { name: "apple", surname: "London" },
      { name: "banana", surname: "Bangkok" },
      { name: "watermelon", surname: "Singapore" },
    ]

array2  = array1.map( ( itm ) => itm.name + " " + itm.surname );
// array2 ["apple London", "banana Bangkok", "watermelon Singapore"]

// No.01.08
array1 = [1,3,4,5,6,7,8]
array2  = array1.map( ( itm ) => itm % 2 ? 'odd' : 'even' );
// array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]

// No.01.09
array1 = [1, -3, 2, 8, -4, 5]
array2  = array1.map( ( itm ) => Math.abs( itm ) );
// array2 [1, 3, 2, 8, 4, 5]

// No.01.10
array1 = [100, 200.25, 300.84, 400.3]
array2  = array1.map( ( itm ) =>  itm.toFixed(2) );
// array2 ["100.00", "200.25", "300.84", "400.30"]


// No.01.11
array1 = [
       { name: "apple", birth: "2000-01-01" },
       { name: "banana", birth: "1990-10-01" },
       { name: "watermelon", birth: "1985-12-01" },
     ]
array2  = array1.map( ( itm ) => {
	let d = new Date();	
	itm.age = d.getFullYear() - Number( itm.birth.substring(0, 4) );
	return itm;
});
/*
array2 [
       { name: "apple", birth: "2000-01-01", age: 19 },
       { name: "banana", birth: "1990-10-01", age: 29 },
       { name: "watermelon", birth: "1985-12-01", age: 33 },
     ] 
*/

// No.01.12
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
array1 = [
       { name: "apple", birth: "2000-01-01" },
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
     ]
array2  = array1.map( ( itm ) => {
	let dateStr = itm.birth.toString().split('-');
	let mm = monthNames[ Number( dateStr[1] ) - 1];
	let dd = dateStr[2];
	let yy = dateStr[0];
	return `<tr> <td>${itm.name}</td> <td>${dd} ${mm} ${yy}</td> </tr>`;
});
/*
array2 [
         "<tr> <td>apple</td> <td>01 jan 2000</td> </tr>",
         "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
         "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
     ] 
*/


// No.02.01
array1 = [1, 2, 30, 400] 
array2  = array1.filter( ( itm ) =>  itm*1 > 10 );
// array2 [30, 400] // filter เลขที่มากกว่า 10

// No.02.02
array1 = [1, 2, 3, 4]
array2  = array1.filter( ( itm ) =>  itm % 2 );
// array2 [1, 3] // filter เลขคี่

// No.02.03
array1 = [1, "1", 2, {}] 
array2  = array1.filter( ( itm ) =>  typeof(itm) === 'number' );
// array2 [1, 2] // filter Number

// No.02.04
array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
array2  = array1.filter( ( itm ) =>  itm.length > 6 );
// array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6

// No.02.05
array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ]
array2  = array1.filter( ( itm ) =>  itm.age < 18 );
/*    
array2 [
      { name: "apple", age: 14 },
      { name: "pineapple", age: 16 },
    ] // filter age < 18
*/

// No.02.06
array1 = [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "watermelon", age: 32 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ]
array2  = array1.filter( ( itm ) =>  itm.age != 32 );
/*
	array2 [
      { name: "apple", age: 14 },
      { name: "banana", age: 18 },
      { name: "pineapple", age: 16 },
      { name: "peach", age: 24 },
    ] // filter ไม่เอาคนที่อายุ 32
*/

// No.02.07
array1 = [1, -3, 2, 8, -4, 5]
array2  = array1.filter( ( itm ) =>  itm > 0 );
// array2 [1, 2, 8, 5] // filter เลขบวก

// No.02.08
array1 = [1,3,4,5,6,7,8]
array2  = array1.filter( ( itm ) =>  itm % 3 );
// array2 [3, 6] // filter เลขหาร 3 ลงตัว

// No.02.09
array1 = ["peach", 1, -3, "2", {}, []]
array2  = array1.filter( ( itm ) =>  typeof(itm) === 'string' );
// array2 ["peach", "2"] // filter string

// No.02.10
array1 = ["APPLE", "appLE", "PEACH", "PEach"]
array2  = array1.filter( ( itm ) =>  itm === itm.toUpperCase() );
// array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว

// No.02.11
array1 = [
       { name: "apple", birth: "2001-01-01" },
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
       { name: "peach", birth: "2002-10-13" },
     ]
array2  = array1.filter( ( itm ) =>  itm.birth.toString().split('-')[1]*1 === 10*1  );
/*
     array2 [
       { name: "banana", birth: "1990-10-10" },
         { name: "peach", birth: "2002-10-13" },
     ] // filter คนเกิดเดือน 10
*/

// No.02.12
array1 = [
       { name: "apple", birth: "2001-01-01" },
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
       { name: "peach", birth: "2002-10-13" },
     ]
array2  = array1.filter( ( itm ) =>  itm.birth.toString().split('-')[0]*1 < 2000  );
/*
     array2 [
       { name: "banana", birth: "1990-10-10" },
       { name: "watermelon", birth: "1985-12-30" },
     ] // filter คนเกิดก่อนปี 2000
*/