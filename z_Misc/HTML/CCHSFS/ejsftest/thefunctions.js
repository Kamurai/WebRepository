function a_message() 
{ 
	setpoo(0);
	alert('I came from an external script! Ha, Ha, Ha!!!!'); 
}

function b_message()
{
	document.write('Poo 3!');
}


var poo = 1;

function setpoo(x)
{
	poo = x;
}

function getpoo()
{
	return poo;
}

function determinepoo()
{
	if( poo == 1 )
	{
		return 1;
	}
	else if( poo = 0 )
	{
		return 0;
	}
}