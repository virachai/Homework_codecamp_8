/*
08. Exercise String
1.เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่
2.เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false
3.เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string 
ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”
4.เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar 
ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้
*/

// No.1
const ucFirst = (string) => {
	if (typeof string !== 'string') return null;
	return string.charAt(0).toUpperCase() + string.slice(1);
}
ucFirst('flavio');	// 'Flavio'
ucFirst('f');			// 'F'

// No.2
const checkSpam = (string) => {
	if (typeof string !== 'string') return false;

	switch( string.toLowerCase() ) {
		case 'xxx': return true;
		case 'viagra': return true;
		default: return false;
	}
}
checkSpam('xxx');			// true
checkSpam('viagra');		// true
checkSpam('Viagra');		// true
checkSpam('apple');		// false
checkSpam(0);				// false

// No.3
const truncate = (str, maxlength) => Number(str.length) > Number(maxlength) ? str.substring(0, maxlength) + '...' : str;
truncate('JavaScript String substring', 15);	// 'JavaScript String...'
truncate('CodeCamp#8', 12);							// 'CodeCamp#8'
truncate('CodeCamp#8', 10);							// 'CodeCamp#8'

// No.4
const extractCurrencyValue = (string, rate) => {
	let amount = Math.ceil( string.replace("$", "").replaceAll(",", "") * rate * 100 ) / 100;
	return amount;
	//return "฿" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
alert( extractCurrencyValue("$120.00", 30.05) === 3606);	// true