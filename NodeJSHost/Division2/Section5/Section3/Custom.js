exports.getTitle = function (vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Utopia";
	
	vResult += "<title>";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Elemental Angels";
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
	
	vDefault += "Utopia";
	
	vResult += "<h2>";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Elemental Angels";
				vResult += "</u>";
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
	
	vDefault += "Here are projects based in the Utopia Nation:</br>";
	vDefault += "</br>";
	vDefault += "Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>";
	
	vResult += "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>";
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
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section3/Index.html\">Apache SSI</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Section3/Index.html\">HTML Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section3/Index.html\">JQuery</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section3/Index.html\">Angular JS</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/Index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/Index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section3/Index.jsp\">JSP Spring MVC</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/Index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/Index.asp\">ASP VBscript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/Index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/Index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section3/Index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section3/Index\">Python Web.py</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section3/Index\">Ruby On Rails</a><br>";
	
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Project1.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Project1.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Project1.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section3/Project1.html\">Apache SSI</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Section3/Project1.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section3/Project1.html\">JQuery</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section3/Project1.html\">Angular JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/Project1.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/Project1.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section3/Project1.jsp\">JSP Spring MVC</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/Project1.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/Project1.asp\">ASP VBscript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section3/Project1\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section3/Project1\">Python Web.py</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section3/Project1\">Ruby On Rails</a><br>";
	}
	else
	{
		vResult += vDefault;
	}
	
    return vResult;
}