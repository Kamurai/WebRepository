/*General variables*/

/*
sort filter 1-16
1-4: Calls by Skill
5-8: Calls by Rep
9-12: Incidents by Rep
13-16: Incidents by Type

1st Individual
2nd Daily
3rd Weekly
4th Monthly

*/
var sortfilter = 0;
var searchitem = 0;
var searchsetting = 0;

/*"Contstructors*/



/*functions*/
function matchsortfilter (x)
{
	if(x == sortfilter)
	{
		return 1;
	}
}

function getsortfilter ()
{
	return sortfilter;
}

function setsortfilter (x)
{
	sortfilter = x;
}

function displaypoo()
{
	document.writeln("Poo!");
}

function date()
{
	<!-- hide script from old browsers
	test = new Date()
	month = test.getMonth()
	month = (month * 1) + 1
	day = test.getDate()
	year = test.getFullYear()
	document.write(" ",month,"/",day,"/",year," ")
	// end hiding script from old browsers -->
}

function getsearchitem ()
{
	return searchitem;
}

function setsearchitem (x)
{
	searchitem = x
}

function getsearchsetting ()
{
	return searchsetting;
}

function setsearchsetting (x)
{
	searchsetting = x;
	determineitem();
	determinesetting();
}

function determineitem()
{
	if( (getsortfilter() >= 1) && (getsortfilter() <= 8) )
	{
		setsearchitem(1);
	}
	else if( (getsortfilter() >= 9) && (getsortfilter() <= 16) )
	{
		setsearchitem(2);
	}
	else if( getsortfilter() == 0 )
	{
		setsearchitem(0);
	}
}

function determinesetting()
{
	if( (getsortfilter() mod 4) == 1 )
	{
		setsearchsetting(1);
	}
	else( (getsortfilter() mod 4) == 2 )
	{
		setsearchsetting(2);
	}
	else( (getsortfilter() mod 4) == 3 )
	{
		setsearchsetting(3);
	}
	else( (getsortfilter() mod 4) == 0 )
	{
		setsearchsetting(4);
	}
}