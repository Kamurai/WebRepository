function Navigation(vLevel)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Index.html\">Basic HTML</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section3/Index.php\">PHP</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index.html\">Javascript</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Index.shtml\">Perl</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index.html\">Java</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index.html\">ASP.Net</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index.html\">Databases</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project1.html\">Oracle</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project2.html\">Derby</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project3.html\">MySQL</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project4.html\">SQL Server</a><br><br>");
		document.write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project5.html\">Postgres</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/Index.html\">Apache SSI</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Section1/Index\">Python Web.py</a><br>");
    document.write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Section1/Index\">Ruby on Rails</a><br>");
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
	document.write("</title>");
}

function Header(vPage)
{
	document.write("<h2>");
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
	document.write("</h2>");
}

function Content(vPage)
{
	document.write("<p id=\"idCenterContent\">");
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
	document.write("</p>");
}

function Versions(vPage)
{
	if(vPage == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Index.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Index.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section1/Section6/Index\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Index.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Index\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Index\">Ruby on Rails</a><br>");
    }
	else if(vPage == 1)
	{
        document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project1.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project1.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project1.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section1/Section6/Project1\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project1.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project1.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project1.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project1.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project1\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project1.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project1\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project1\">Ruby on Rails</a><br>");
    }
	else if(vPage == 2)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project2.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project2.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project2.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section1/Section6/Project2\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project2.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project2.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project2.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project2.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project2\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project2.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project2\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project2\">Ruby on Rails</a><br>");
    }
	else if(vPage == 3)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project3.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project3.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project3.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section1/Section6/Project3\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project3.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project3.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project3.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project3.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project3\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project3.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project3\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project3\">Ruby on Rails</a><br>");
    }
    
}