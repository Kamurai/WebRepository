function Navigation(vLevel, vExtension)
{
    document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project1.html\">Basic HTML</a><br><br>");
    document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section3/Project1.php\">PHP</a><br><br>");
    document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index.html\">Javascript</a><br><br>");
    document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project3.shtml\">Perl</a><br><br>");
    document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index"+GetvExtension(vExtension)+"\">Java</a><br><br>");
    document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index"+GetvExtension(vExtension)+"\">ASP.NET</a><br><br>");
        document.write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Project1.cshtml\">Webpage Application</a><br><br>");
        document.write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/Project2.aspx\">Webform Application</a><br><br>");
        document.write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/MVC/Section1_5/Project3\">MVC Application</a><br><br>");
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
			document.write("ASP.NET Programming");
		}
	document.write("</title>");
}

function Header(vPage)
{
	document.write("<h2>");
		if(vPage == 0)
		{
			document.write("ASP.NET Programming");
		}
	document.write("</h2>");

}

function Content(vPage)
{
	document.write("<p id=\"idCenterContent\">");
    	if(vPage == 0)
		{
			document.write("This section is dedicated to ASP.NET programming.");
		}
	document.write("</p>");
}

function Versions(vPage)
{
	document.write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section5/index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section5/index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section5/index.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section5/index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section5/index.asp\">ASP Javascript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section1/Section5/index\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section1/Section5/index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section5/index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section5/index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section5/index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section5/index.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section1/Section5/index\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section1/Section5/index\">Ruby on Rails</a><br>");
    }

}