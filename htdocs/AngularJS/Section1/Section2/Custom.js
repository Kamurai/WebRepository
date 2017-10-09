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
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section2/Index"+GetExtension(extension)+"'>Javascript</a>");
		document.write("<h5>");
			document.write("<span class='navlink'>");
				document.write("<a href='"+GetPath(vLevel)+"Section1/Section2/Project1"+GetExtension(extension)+"'>HTML Javascript</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp'>ASP VBscript</a>");
			document.write("</span>");
			document.write("<span class='navlink'>");
				document.write("<a href='http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx'>ASP.NET Javascript</a>");
			document.write("</span>");
		document.write("</h5>");
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
		document.write("<a href='"+GetPath(vLevel)+"Section1/Section5/Index"+GetExtension(extension)+"'>ASP.Net</a>");
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
			document.write("Javascript Programming");
		}
		else if(vPage == 1)
		{
			document.write("HTML Javascript Programming");
		}
	document.write("</title>");
}

function Header(vPage)
{
		if(vPage == 0)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("Javascript");
				document.write("</u>");
			document.write("</h2>");
		}
		else if(vPage == 1)
		{
			document.write("<h2>");
				document.write("<u>");
					document.write("HTML Javascript");
				document.write("</u>");
			document.write("</h2>");
		}
}

function Content(vPage)
{
	document.write("<p align='left'>");
		if(vPage == 0)
		{
			document.write("This section is dedicated to Javascript based programming.");
		}
		else if(vPage == 1)
		{
			document.write("This section is dedicated to HTML Javascript based programming.");
		}
	document.write("</p>");
}
