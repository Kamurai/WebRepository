function Navigation(level)
{
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Section1/Index.html'>Gynowars</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project2.html'>Assault</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project3.html'>Mars</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Section4/Index.html'>Renley</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Section5/Index.html'>Antarrea</a>");
			document.write("<h5>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section5/Section1/Index.html'>Global</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section5/Section2/Index.html'>Grendol</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section5/Section3/Index.html'>Utopia</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(level)+"Section2/Section5/Section4/Index.html'>Elvia</a>");
				document.write("</span>");
			document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Section6/Index.html'>Editations</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project7.html'>Truth</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project8.html'>Kingdoms</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project9.html'>Terminal World</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project10.html'>Monster Office Workplace</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project11.html'>Battle Princesses</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project12.html'>Sacred Offerings</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project13.html'>The Way</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project14.html'>Conspiratorium</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(level)+"Section2/Project15.html'>Conversion</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(input)
{
	document.write("<title>");
		if(input == 0)
		{
			document.write("Antarrea Projects");
		}
	document.write("</title>");
}

function Header(input)
{
		if(input == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Antarrea Projects");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(input)
{
	document.write("<p align='left'>");
		if(input == 0)
		{
			document.write("<h3>");
				document.write("<p align='left'>");
					document.write("Global:");
				document.write("</p>");
			document.write("</h3>");
			document.write("<p align='left'>");
				document.write("Here are projects based in the Antarrea universe:</br>");
				document.write("</br>");
				document.write("Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>");
				document.write("Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>");
				document.write("Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>");
				document.write("Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>");
				document.write("Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>");
				document.write("Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>");
			document.write("</p>");
			document.write("<h3>");
				document.write("<p align='left'>");
					document.write("Grendol:");
				document.write("</p>");
			document.write("</h3>");
			document.write("<p align='left'>");
				document.write("Here are projects based in the Grendol universe:</br>");
				document.write("</br>");
				document.write("Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>");
				document.write("Grendol: Coliseum: Arena:                         CCG.</br>");
			document.write("</p>");
			document.write("<h3>");
				document.write("<p align='left'>");
					document.write("Utopia:");
				document.write("</p>");
			document.write("</h3>");
			document.write("<p align='left'>");
				document.write("Here are projects based in the Utopia universe:</br>");
				document.write("</br>");
				document.write("Avia: Elemental Angels: Adventure game with RPG elements.</br>");
			document.write("</p>");
			document.write("<h3>");
				document.write("<p align='left'>");
					document.write("Elvia:");
				document.write("</p>");
			document.write("</h3>");
			document.write("<p align='left'>");
				document.write("Here are projects based in the Elvia universe:</br>");
				document.write("</br>");
				document.write("Nine Card: Tactical card game.</br>");
			document.write("</p>");				
		}
	document.write("</p>");
}
