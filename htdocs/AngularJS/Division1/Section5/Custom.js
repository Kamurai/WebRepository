function Navigation(level)
{
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel+1)+"Section1/Project1.html'>Basic HTML</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel+1)+"Section3/Project1.php'>PHP</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section2/Index.html'>Javascript</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel+1)+"Section1/Project3.shtml'>Perl</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section4/Index"+GetExtension(extension)+"'>Java</a>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section5/Index"+GetExtension(extension)+"'>ASP.NET</a>");
			document.write("<h5>");
				document.write("<span class='navlink'>");
					document.write("<a href='http://htkb.dyndns.org:81/WebApplication/Division1/Section5/Project1.cshtml'>Webpage Application</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='http://htkb.dyndns.org:81/WebForm/Division1/Section5/Project2.aspx'>Webform Application</a>");
				document.write("</span>");
				document.write("<span class='navlink'>");
					document.write("<a href='http://htkb.dyndns.org:81/MVC/Division1_5/Project3'>MVC Application</a>");
				document.write("</span>");
			document.write("</h5>");
	document.write("</span>");
	document.write("<br>");
	document.write("<span class='navlink'>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section6/Index"+GetExtension(extension)+"'>Databases</a>");
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
		if(vPage == 0)
		{
			document.write("Web Programming");
		}
	document.write("</title>");
}

function Header(vPage)
{
	if(vPage == 0)
	{
		document.write("<h2>");
			document.write("<u>");
				document.write("ASP.NET Programming");
			document.write("</u>");
		document.write("</h2>");
	}

}

function Content(vPage)
{
	document.write("<p align='left'>");
		if(vPage == 0)
		{
			document.write("This section is dedicated to ASP.NET programming.");
		}
	document.write("</p>");
}
