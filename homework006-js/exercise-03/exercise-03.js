/*
03. Exercise Computed Properties
1.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop 
และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา
2.ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ 
และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
*/

// No.1
function createObject() {
	const objectData = {};
	let propertiesName;
	
	while( (propertiesName = prompt("Enter key or 'stop' to Exit.", '') ) != "stop") {
		objectData[propertiesName] = prompt("Enter value?", '');
	}

	for (const key in objectData) {
		console.log(`objectData.${key}: ${objectData[key]}`);
	}
}

// No.2
function objFruit() {
	const objectData = {};
	let propertiesName;
	
	while( (propertiesName = prompt("Enter fruit name or 'stop' to Exit.", '') ) != "stop") {
		quality = prompt("Enter quality of fruit?", '')*1;
		propertiesName = quality>1 ? propertiesName + "s":propertiesName;
		objectData[propertiesName] = quality;
	}

	console.log("List of fruits.");
	for (const key in objectData) {
		console.log(`${key}: ${objectData[key]}`);
	}
}