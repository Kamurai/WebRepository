exports.getTitle = function (vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault = "Database Programming";
	
	vResult += "<title>";
		if(vPage <= 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Oracle Programming";
		}
		else if(vPage == 2)
		{
			vResult += "Derby Programming";
		}
		else if(vPage == 3)
		{
			vResult += "MySQL Programming";
		}
		else if(vPage == 4)
		{
			vResult += "SQL Server Programming";
		}
		else if(vPage == 5)
		{
			vResult += "Postgres Programming";
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</title>";
	
    return vResult;
}

exports.getContentHeader = function (vPage)
{
	var vResult = "";
    var vDefault = "";
	
	vDefault = "Database Programming";
	
	vResult += "<h2>";
		if(vPage <= 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Oracle Programming";
		}
		else if(vPage == 2)
		{
			vResult += "Derby Programming";
		}
		else if(vPage == 3)
		{
			vResult += "MySQL Programming";
		}
		else if(vPage == 4)
		{
			vResult += "SQL Server Programming";
		}
		else if(vPage == 5)
		{
			vResult += "Postgres Programming";
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</h2>";
	
    return vResult;
}

exports.getContent = function (vPage)
{
	var vResult = "";
    var vDefault = "";
	
	vDefault = "This section is dedicated to database based programming.";
	
	vResult += "<p id=\"idCenterContent\">";
    	if(vPage <= 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "This section is dedicated to Oracle based programming.";
		}
		else if(vPage == 2)
		{
			vResult += "This section is dedicated to Derby based programming.";
		}
		else if(vPage == 3)
		{
			vResult += "This section is dedicated to MySQL based programming.";
		}
		else if(vPage == 4)
		{
			vResult += "This section is dedicated to SQL Server based programming.";
		}
		else if(vPage == 5)
		{
			vResult += "This section is dedicated to Postgres based programming.";
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</p>";
	
    return vResult;
}

exports.getVersions = function (vPage)
{
	var vResult = "";
    var vDefault = "";
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Index.html\">HTML Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Index.html\">JQuery</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Index.asp\">ASP VBscript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Index.html\">Apache SSI</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:82/Section1/Index\">Python Web.py</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:83/Section1/Index\">Ruby On Rails</a><br>";

	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project1.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project1.html\">JQuery</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project1.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project1.asp\">ASP VBscript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project1.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project1.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project1\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project1.html\">Apache SSI</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project1\">Python Web.py</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project1\">Ruby On Rails</a><br>";
	}
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project2.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project2.html\">JQuery</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project2.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project2.asp\">ASP VBscript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project2.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project2.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project2\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project2.html\">Apache SSI</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project2\">Python Web.py</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project2\">Ruby On Rails</a><br>";
	}
	else if(vPage == 3)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project3.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project3.html\">JQuery</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project3.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project3.asp\">ASP VBscript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project3.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project3.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project3.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project3.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project3\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project3.html\">Apache SSI</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project3\">Python Web.py</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project3\">Ruby On Rails</a><br>";
	}
    else if(vPage == 4)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project4.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project4.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project4.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project4.html\">JQuery</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project4.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project4.asp\">ASP VBscript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project4.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project4.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project4.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project4.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project4.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project4\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project4.html\">Apache SSI</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project4\">Python Web.py</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project4\">Ruby On Rails</a><br>";
	}
    else if(vPage == 5)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project5.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project5.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project5.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project5.html\">JQuery</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project5.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project5.asp\">ASP VBscript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section6/Project5.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project5.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project5.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project5.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project5.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project5\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project5.html\">Apache SSI</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project5\">Python Web.py</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project5\">Ruby On Rails</a><br>";
	}
	else
	{
		vResult += vDefault;
	}
	
    return vResult;
}