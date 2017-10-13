function Navigation(vLevel)
{
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel+1)+"Section1/Index.html'>Basic HTML</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel+1)+"Section3/Index.php'>PHP</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section2/Index.html'>Javascript</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel+1)+"Section1/Index.shtml'>Perl</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section4/Index"+GetExtension(extension)+"'>Java</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section5/Index"+GetExtension(extension)+"'>ASP.Net</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section6/Index"+GetExtension(extension)+"'>Databases</a>");
		document.write("<h5>");
			document.write("<span class='navlink'>");
				document.write("<a href='"+GetPath(vLevel)+"Section1/Section6/Project1"+GetExtension(extension)+"'>Oracle</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='"+GetPath(vLevel)+"Section1/Section6/Project2"+GetExtension(extension)+"'>MySQL</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='"+GetPath(vLevel)+"Section1/Section6/Project3"+GetExtension(extension)+"'>Postgres</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='"+GetPath(vLevel)+"Section1/Section6/Project4"+GetExtension(extension)+"'>XML</a>");
			document.write("</span>");
		document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Project7"+GetExtension(extension)+"'>HTML5</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Project8"+GetExtension(extension)+"'>XSL</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Project9"+GetExtension(extension)+"'>XML DOM</a>");
	document.write("</span>");
	document.write("<br>");
}

function Title(vPage)
{
	document.write("<title>");
		if(vPage <= 0)
		{
			document.write("Database Programming");
		}
		else if(vPage == 1)
		{
			document.write("Oracle Programming");
		}
		else if(vPage == 2)
		{
			document.write("MySQL Programming");
		}
		else if(vPage == 3)
		{
			document.write("Postgres Programming");
		}
		else if(vPage == 4)
		{
			document.write("XML Programming");
		}
	document.write("</title>");
}

function Header(vPage)
{
		if(vPage <= 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Database Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Oracle Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 2)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("MySQL Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 3)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Postgres Programming");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 4)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("XML Programming");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(vPage)
{
	document.write("<p align='left'>");
		if(vPage <= 0)
		{
			document.write("This section is dedicated to database based programming.");
		}
		else if(vPage == 1)
		{
			document.write("This section is dedicated to Oracle based programming.");
		}
		else if(vPage == 2)
		{
			document.write("This section is dedicated to MySQL based programming.");
		}
		else if(vPage == 3)
		{
			document.write("This section is dedicated to Postgres based programming.");
		}
		else if(vPage == 4)
		{
			document.write("This section is dedicated to XML based programming.");
		}
	document.write("</p>");
}
