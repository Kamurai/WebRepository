function Navigation(vLevel)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/Index.html\">Gynowars</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2.html\">Assault</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3.html\">Mars</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/Index.html\">Renley</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/Index.html\">Antarrea</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section1/Index.html\">Global</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/Index.html\">Grendol</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section3/Index.html\">Utopia</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section4/Index.html\">Elvia</a><br><br>");
			document.write("<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section5/Section4/Project1.html\">Nine Card</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section6/Index.html\">Editations</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7.html\">Truth</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8.html\">Kingdoms</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9.html\">Terminal World</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10.html\">Monster Office Workplace</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11.html\">Battle Princesses</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12.html\">Sacred Offerings</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13.html\">The Way</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14.html\">Conspiratorium</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project15.html\">Conversion</a><br><br>");

}

function Title(vPage)
{
	document.write("<title>");
		if(vPage == 0)
		{
			document.write("Elvia");
		}
		else if(vPage == 1)
		{
			document.write("Nine Card");
		}
	document.write("</title>");
}

function Header(vPage)
{
	document.write("<h2>");
		if(vPage == 0)
		{
			document.write("Elvia");
		}
		else if(vPage == 1)
		{
			document.write("Nine Card");
		}
	document.write("</h2>");
}

function Content(vPage)
{
	document.write("<p id=\"idCenterContent\">");
    	if(vPage == 0)
		{
			document.write("Here are projects based in the Elvia Empire:</br>");
			document.write("</br>");
			document.write("Nine Card: a Tactical card game played through the Elvia Empire.</br>");
		}
		else if(vPage == 1)
		{
			document.write("Nine Card is a Tactical card game played through the Elvia Empire.</br>");
		}
	document.write("</p>");
}

function Versions(vPage)
{
	if(vPage == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Index.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Index.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section4/Index\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section2/Section5/Section4/Index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Index.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Index\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Index\">Ruby on Rails</a><br>");
    }
	else if(vPage == 1)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Project1.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Project1.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Project1.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section4/Project1\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Project1.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Project1.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Project1.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Project1.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section2/Section5/Section4/Project1\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Project1.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Project1\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Project1\">Ruby on Rails</a><br>");
    }

}