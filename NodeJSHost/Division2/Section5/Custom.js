exports.getTitle = function (vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Antarrea Projects";
	
	vResult += "<title>";
		if(vPage == 0)
		{
			vResult += vDefault;
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
	
	vDefault += "Antarrea Projects";
	
	vResult += "<h2>";
		if(vPage == 0)
		{
			vResult += vDefault;
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
	
	vResult += "Global:";
	vResult += "<br/>";
	vResult += "<br/>";
		vResult += "Here are projects based in the Antarrea universe:</br>";
		vResult += "</br>";
		vResult += "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
		vResult += "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
		vResult += "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
		vResult += "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
		vResult += "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
		vResult += "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
	vResult += "<br/>";
	vResult += "<br/>";
			vResult += "Grendol:";
	vResult += "<br/>";
	vResult += "<br/>";
		vResult += "Here are projects based in the Grendol universe:</br>";
		vResult += "</br>";
		vResult += "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>";
		vResult += "Grendol: Coliseum: Arena:                         CCG.</br>";
	vResult += "<br/>";
	vResult += "<br/>";
			vResult += "Utopia:";
	vResult += "<br/>";
	vResult += "<br/>";
		vResult += "Here are projects based in the Utopia universe:</br>";
		vResult += "</br>";
		vResult += "Avia: Elemental Angels: Adventure game with RPG elements.</br>";
	vResult += "<br/>";
	vResult += "<br/>";
			vResult += "Elvia:";
	vResult += "<br/>";
	vResult += "<br/>";
		vResult += "Here are projects based in the Elvia universe:</br>";
		vResult += "</br>";
		vResult += "Nine Card: Tactical card game.</br>";
	
	vResult += "<p id=\"idCenterContent\">";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else
		{
			vResult += vDefault;
		}
		
    return vResult;
}

exports.getVersions = function (vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Index.html\">Apache SSI</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Index.html\">JQuery</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Index.html\">Angular JS</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Index.jsp\">JSP Spring MVC</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Index.asp\">ASP VBscript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Index\">Python Web.py</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Index\">Ruby on Rails</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Index\">Node JS</a><br>";
	
	if(vPage == 0)
	{
		vResult += vDefault;
    }
	else
	{
		vResult += vDefault;
	}
	
    return vResult;
}