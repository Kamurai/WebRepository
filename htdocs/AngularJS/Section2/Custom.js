function Navigation(vLevel)
{
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Section1/Index.html'>Gynowars</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project2.html'>Assault</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project3.html'>Mars</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Section4/Index.html'>Renley</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Section5/Index.html'>Antarrea</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Section6/Index.html'>Editations</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project7.html'>Truth</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project8.html'>Kingdoms</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project9.html'>Terminal World</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project10.html'>Monster Office Workplace</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project11.html'>Battle Princesses</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project12.html'>Sacred Offerings</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project13.html'>The Way</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project14.html'>Conspiratorium</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Project15.html'>Conversion</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(vPage)
{
	document.write("<title>");
		if(vPage == 0)
		{
			document.write("Private Projects");
		}
		else if(vPage == 2)
		{
			document.write("Assault CCG");
		}
		else if(vPage == 3)
		{
			document.write("Mars Projects");
		}
		else if(vPage == 7)
		{
			document.write("Truth");
		}
		else if(vPage == 8)
		{
			document.write("Kingdoms");
		}
		else if(vPage == 9)
		{
			document.write("Terminal World");
		}
		else if(vPage == 10)
		{
			document.write("Monster Office Workplace");
		}
		else if(vPage == 11)
		{
			document.write("Battle Princesses");
		}
		else if(vPage == 12)
		{
			document.write("Sacred Offerings");
		}
		else if(vPage == 13)
		{
			document.write("The Way");
		}
		else if(vPage == 14)
		{
			document.write("Conspiratorium");
		}
		else if(vPage == 15)
		{
			document.write("Conversion");
		}
	document.write("</title>");
}

function Header(vPage)
{
		if(vPage == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Private Projects");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Assault CCG");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Mars Projects");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 7)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Truth");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 8)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Kingdoms");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 9)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Terminal World");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 10)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Monster Office Workplace");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 11)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Battle Princesses");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 12)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Sacred Offerings");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 13)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("The Way");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 14)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Conspiratorium");
				document.write("</u>");
			document.write("</h2>");
		}		
		else if(vPage == 15)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Conversion");
				document.write("</u>");
			document.write("</h2>");
		}		
}

function Content(vPage)
{
	document.write("<p align='left'>");
		if(vPage == 0)
		{
			document.write("This section is dedicated to HTKB projects.");
		}
		else if(vPage == 2)
		{
			document.write("This section is dedicated CCG project \"Assault\".");
		}
		else if(vPage == 3)
		{
			document.write("This section is dedicated to the Mars centered project \"Opposition\".");
		}
		else if(vPage == 7)
		{
			document.write("This section is dedicated to the MMO RTS project \"Truth\".  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.");
		}
		else if(vPage == 8)
		{
			document.write("This section is dedicated to the digital board game project \"Kingdoms\".  Explore the world's Kingdoms, get rich, get strong and conquer.");
		}
		else if(vPage == 9)
		{
			document.write("This section is dedicated to the simulation MMO centered project \"Terminal World\".  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat");
			document.write("the zombies?  Can you survive?");
		}
		else if(vPage == 10)
		{
			document.write("This section is dedicated to the card and board game project \"Monster Office Workplace\".  These monsters mean serious business.");
			document.write("Can you earn the most credit and smooze your way into a promotion?");
		}
		else if(vPage == 11)
		{
			document.write("This section is dedicated to the card game project \"Battle Princesses\".  Ever wanted to see your favorite princess battle for the kingdom?");
			document.write("These princess aren't your helpless maidens, but valiant warriors themselves.");
		}
		else if(vPage == 12)
		{
			document.write("This section is dedicated to the board game project \"Sacred Offerings\".  Being a god is hard, you have to eat, but");
			document.write("don't want to fall out favor with the people more than the other deities.");
			document.write("Draw people to worship you, but be discerning about who is sacrificed.");
		}
		else if(vPage == 13)
		{
			document.write("This section is dedicated to the card game project \"The Way\".  You seek to find enlightment by contemplating the elements.");
			document.write("Escape the binds of the world and the board to reach enlightment and win.");
		}
		else if(vPage == 14)
		{
			document.write("This section is dedicated to the board game project \"Conspiratorium\".");
			document.write("A game of assassins and CIA, you must remember who is friend and who is not.");
		}
		else if(vPage == 15)
		{
			document.write("This section is dedicated to the board game project \"Conversion\".");
			document.write("Compete on the elemental market by processing elements and becoming the elemental kingpin.");
		}
	document.write("</p>");
}
