function Navigation(vLevel)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Index.html\">Basic HTML</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Index.php\">PHP</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index.html\">Javascript</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Index.shtml\">Perl</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index.html\">Java</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Index.jsp\">JSP Programming</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Index.xhtml\">JSF Programming</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index.html\">ASP.Net</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index.html\">Databases</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/Index.html\">Apache SSI</a><br><br>");
    document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Section1/Index\">Python Web.py</a><br>");
    document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Section1/Index\">Ruby on Rails</a><br>");
}

function Title(vPage)
{
	document.write("<title>");
		if(vPage <= 0)
		{
			document.write("Java Programming");
		}
	document.write("</title>");
}

function Header(vPage)
{
	document.write("<h2>");
        if(vPage == 0)
        {
            document.write("Java Programming");
		}
	document.write("</h2>");
}

function Content(vPage)
{
	document.write("<p id=\"idCenterContent\">");
    	if(vPage <= 0)
		{
			document.write("This section is dedicated to Java based programming.");
		}

	document.write("</p>");
}

function Versions(vPage)
{
	if(vPage == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section4/Index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section4/Index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section4/Index.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section4/Index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section4/Index.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section1/Section4/Index\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section1/Section4/Index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section4/Index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section4/Index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section4/Index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section4/Index.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section1/Section4/Index\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section1/Section4/Index\">Ruby on Rails</a><br>");
    }

}