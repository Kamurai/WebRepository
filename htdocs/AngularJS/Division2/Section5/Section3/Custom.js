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
			document.write("<h5>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(vLevel)+"Section2/Section5/Section1/Index.html'>Global</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(vLevel)+"Section2/Section5/Section2/Index.html'>Grendol</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(vLevel)+"Section2/Section5/Section3/Index.html'>Utopia</a>");
						document.write("<h5>");
							document.write("<span class='navlink'>");
								document.write("<a href='"+GetPath(vLevel)+"Section2/Section5/Section3/Project1.html'>Avia:Elemental Angels</a>");
							document.write("</span>");
						document.write("</h5>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='"+GetPath(vLevel)+"Section2/Section5/Section4/Index.html'>Elvia</a>");
				document.write("</span>");
			document.write("</h5>");
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
			document.write("Utopia");
		}
		else if(vPage == 1)
		{
			document.write("Elemental Angels");
		}
	document.write("</title>");
}

function Header(vPage)
{
		if(vPage == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Utopia");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Elemental Angels");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(vPage)
{
	document.write("<p align='left'>");
		if(vPage == 0)
		{
			document.write("Here are projects based in the Utopia Nation:</br>");
			document.write("</br>");
			document.write("Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>");
		}
		else if(vPage == 1)
		{
			document.write("Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>");
		}
	document.write("</p>");
}
