function fibonacci(num) {
// your code here

	let a=0;
	let b=1;
	let c=a;
	if(num===1)
		return 0;
	else if(num===2)
		return 1;
	for(let i=2;i<num;i++)
		{
			c=b;
			b=b+a;
			a=c;
		}
	return b;
	
		
}

module.exports = fibonacci;
