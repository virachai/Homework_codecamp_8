/*
01. แก้ไขการเขียนโค้ดต่อไปนี้
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}
let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}
*/

var  pow = (x, n) => {
	n *= 1;	
	if (n <= 0) return `Power ${n} is not supported, please enter an integer number greater than zero`;

	x *= 1;
	if (n == 1) return x;
	
	let result = 1;
	while (n) {
		result *= x;
		n--;
	}
	
	return result;
}

alert( pow( prompt("x?",''), prompt("n?",'') ) );