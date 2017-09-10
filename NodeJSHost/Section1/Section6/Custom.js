exports.Navigation = function (vLevel)
{
	var result = "<a class=\"navlinkA\"href=\"http://hktb.dyndns.org/Section1/Project1\">Basic HTML</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"href=\"http://hktb.dyndns.org/Section3/Project1.php\">PHP</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/index\">Javascript</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"href=\"http://hktb.dyndns.org/Section1/Project3.shtml\">Perl</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/index\">Java</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/index\">ASP.Net</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/index\">Databases</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project1\">Oracle</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project2\">Derby</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project3\">MySQL</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project4\">SQL Server</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project5\">Postgres</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/Project7.html\">Apache SSI</a><br><br>";
    result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Section1/Project8\">Python Web.py</a><br><br>";
    result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Section1/Project9\">Ruby on Rails</a><br><br>";
    return result;
}

exports.Title = function (vPage)
{
	var result = "<title>";
		if(vPage <= 0)
		{
			result += "Database Programming";
		}
		else if(vPage == 1)
		{
			result += "Oracle Programming";
		}
		else if(vPage == 2)
		{
			result += "Derby Programming";
		}
		else if(vPage == 3)
		{
			result += "MySQL Programming";
		}
		else if(vPage == 4)
		{
			result += "SQL Server Programming";
		}
		else if(vPage == 5)
		{
			result += "Postgres Programming";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
		if(vPage <= 0)
		{
			result += "Database Programming";
		}
		else if(vPage == 1)
		{
			result += "Oracle Programming";
		}
		else if(vPage == 2)
		{
			result += "Derby Programming";
		}
		else if(vPage == 3)
		{
			result += "MySQL Programming";
		}
		else if(vPage == 4)
		{
			result += "SQL Server Programming";
		}
		else if(vPage == 5)
		{
			result += "Postgres Programming";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
    	if(vPage <= 0)
		{
			result += "This section is dedicated to database based programming.";
		}
		else if(vPage == 1)
		{
			result += "This section is dedicated to Oracle based programming.";
		}
		else if(vPage == 2)
		{
			result += "This section is dedicated to Derby based programming.";
		}
		else if(vPage == 3)
		{
			result += "This section is dedicated to MySQL based programming.";
		}
		else if(vPage == 4)
		{
			result += "This section is dedicated to SQL Server based programming.";
		}
		else if(vPage == 5)
		{
			result += "This section is dedicated to Postgres based programming.";
		}
	result += "</p>";
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/index.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section1/index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section1/index\">Ruby On Rails</a><br>";
	}
	else if(vPage == 1)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project1.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project1.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project1.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project1.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project1.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project1.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project1\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project1.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project1\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project1\">Ruby On Rails</a><br>";
	}
	else if(vPage == 2)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project2.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project2.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project2.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project2.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project2.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project2.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project2\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project2.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project2\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project2\">Ruby On Rails</a><br>";
	}
	else if(vPage == 3)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project3.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project3.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project3.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project3.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project3.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project3.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project3\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project3.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project3\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project3\">Ruby On Rails</a><br>";
	}
    else if(vPage == 4)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project4.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project4.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project4.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project4.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project4.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project4.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project4.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project4.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project4.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project4\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project4.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project4\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project4\">Ruby On Rails</a><br>";
	}
    else if(vPage == 5)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project5.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project5.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project5.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project5.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project5.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project5.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project5.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project5.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project5.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project5\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project5.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project5\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project5\">Ruby On Rails</a><br>";
	}
    return result;
}