function getTitle(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Grendol";
	
	vResult += "<title>";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Land of the Orcish Empire: Age of Magic";
		}
		else if(vPage == 2)
		{
			vResult += "Coliseum: Arena";
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
	
	vDefault += "Grendol";
	
	vResult += "<h2>";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Land of the Orcish Empire: Age of Magic";
		}
		else if(vPage == 2)
		{
			vResult += "Coliseum: Arena";
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
	
	vDefault += "Here are projects based in the Grendol Empire:</br>";
	vDefault += "</br>";
	vDefault += "Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ";
	vDefault += "comprise the Grendol Empire.</br>";
	vDefault += "Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>";
	
	vResult += "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ";
			vResult += "comprise the Grendol Empire.";
		}
		else if(vPage == 2)
		{
			vResult += "Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.";
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
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section2/Index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section2/Index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section2/Index.php\">JQuery</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section2/Index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section2/Index.asp\">ASP VBscript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section2/Index\">Node JS</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section2/Index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section2/Index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section2/Index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section2/Index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section2/Index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section2/Index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section2/Index.html\">Apache SSI</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section2/Index\">Python Web.py</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section2/Index\">Ruby on Rails</a><br>";
	
	if(vPage == 0)
	{
		vResult += vDefault;
    }
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section2/Project1.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section2/Project1.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section2/Project1.php\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section2/Project1.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section2/Project1.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section2/Project1\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section2/Project1.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section2/Project1.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section2/Project1.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section2/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section2/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section2/Project1\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section2/Project1.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section2/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section2/Project1\">Ruby on Rails</a><br>";
    }
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section2/Project2.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section2/Project2.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section2/Project2.php\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section2/Project2.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section2/Project2.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section2/Project2\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section2/Project2.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section2/Project2.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section2/Project2.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section2/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section2/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section2/Project2\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section2/Project2.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section2/Project2\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section2/Project2\">Ruby on Rails</a><br>";
    }
	else
	{
		vResult += vDefault;
	}
	
	return vResult;
}