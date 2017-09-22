function Navigation(vLevel, vExtension)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project1.html\">Basic HTML</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section3/Project1.php\">PHP</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index"+GetvExtension(vExtension)+"\">Javascript</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section2/Project1.html\">HTML Javascript</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel+1)+"JQuery/Section1/Section2/Project1.html"\">JQuery</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp\">ASP Javascript</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx\">ASP.NET Javascript</a><br><br>");
        document.write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:84/Section1/Section2/Project4\">Node JS</a><br>");
    document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project3.shtml\">Perl</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index"+GetvExtension(vExtension)+"\">Java</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index"+GetvExtension(vExtension)+"\">ASP.Net</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index"+GetvExtension(vExtension)+"\">Databases</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br><br>");
    document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Section1/index\">Python Web.py</a><br>");
    document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Section1/index\">Ruby on Rails</a><br>");
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
	document.write("<h2>");
		if(vPage == 0)
		{
			document.write("Javascript");
		}
		else if(vPage == 1)
		{
			document.write("HTML Javascript");
		}
	document.write("</h2>");
}

function Content(vPage)
{
	document.write("<p id=\"idCenterContent\">");
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

function Versions(vPage)
{
	document.write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section2/index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section2/index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section2/index.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/index.asp\">ASP Javascript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section1/Section2/index\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section1/Section2/index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section2/index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/index.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section1/Section2/index\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section1/Section2/index\">Ruby on Rails</a><br>");
    }
	else if(vPage == 1)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project1.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project1.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section2/Project1.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project1.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project1.asp\">ASP Javascript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section1/Section2/Project1\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project1.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/Project1.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/Project1.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/Project1.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/Project1.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section2/Project1\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/Project1.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section1/Section2/Project1\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section1/Section2/Project1\">Ruby on Rails</a><br>");
    }

}