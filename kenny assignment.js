
alert(new Date());



function change(){
	var select = document.getElementById('demo');
	select.style.color='blue';
	select.style.backgroundColor='orange';
	select.style.fontFamily='Arial';
	select.innerHTML='I like horsec';
	select.style.textAlign='center';
}

function sum1(){
	var a = parseFloat(prompt('first number:'));
	var b = parseFloat(prompt('second number:'));
	document.getElementById('ken').innerHTML=a+b;
}

function sum2(){
	var a = prompt('First name:');
	var b = prompt('Second name');
	document.getElementById('L').innerHTML='Nice to meet you'+a;
}
sum2();

function Q6more(f){
    return (5/9) * (f-32);
}

function Q6(){
	document.getElementById('Q6').innerHTML = Q6more(20);
}
