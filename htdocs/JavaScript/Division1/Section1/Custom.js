function getTitle(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Database Programming";
	
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
			vResult += "PostgreSQL Programming";
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</title>";
	
	return vResult;
}

function getContentHeader(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Database Programming";
	
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
			vResult += "PostgreSQL Programming";
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</h2>";
	
	return vResult;
}

function getContent(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "This section is dedicated to database based programming.";
	
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
			vResult += "This section is dedicated to PostgreSQL based programming.";
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</p>";
	
	return vResult;
}

function getVersions(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Index.php\">JQuery</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Index.asp\">ASP VBscript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Index\">Node JS</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Index.html\">Apache SSI</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Index\">Python Web.py</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Index\">Ruby on Rails</a><br>";
	
	if(vPage == 0)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Index.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Index.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Index.php\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Index.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Index.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Index\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Index.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Index.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Index.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Index.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Index.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Index\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Index.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Index\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Index\">Ruby on Rails</a><br>";
    }
	else if(vPage == 1)
	{
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project1.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project1.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Project1.php\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Project1.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Project1.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Project1\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project1.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Project1.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Project1.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Project1\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Project1.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Project1\">Ruby on Rails</a><br>";
    }
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project2.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project2.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Project2.php\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Project2.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Project2.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Project2\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project2.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Project2.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Project2.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Project2\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Project2.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Project2\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Project2\">Ruby on Rails</a><br>";
    }
	else if(vPage == 3)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project3.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project3.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Project3.php\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Project3.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Project3.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Project3\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project3.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Project3.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Project3.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Project3.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Project3.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Project3\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Project3.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Project3\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Project3\">Ruby on Rails</a><br>";
    }
	else
	{
		vResult += vDefault;
	}
	
	return vResult;
}