exports.Navigation = function (vLevel)
{
	var result = "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/Index\">Gynowars</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2\">Assault</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3\">Mars</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/Index\">Renley</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/Index\">Antarrea</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section1/Index\">Global</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/Index\">Grendol</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section3/Index\">Utopia</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section4/Index\">Elvia</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project6\">Truth</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7\">Kingdoms</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8\">Terminal World</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9\">Monster Office Workplace</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10\">Battle Princesses</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11\">Sacred Offerings</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12\">The Way</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13\">Conspiratorium</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14\">Conversion</a><br><br>";
    return result;
}

exports.Title = function (vPage)
{
	var result = "<title>";
		if(vPage == 0)
		{
			result += "Antarrea Projects";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
		if(vPage == 0)
		{
			result += "Antarrea Projects";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
	if(vPage == 0)
	{
				result += "Global:";
		result += "<br/>";
		result += "<br/>";
			result += "Here are projects based in the Antarrea universe:</br>";
			result += "</br>";
			result += "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
			result += "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
			result += "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
			result += "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
			result += "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
			result += "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
		result += "<br/>";
		result += "<br/>";
				result += "Grendol:";
		result += "<br/>";
		result += "<br/>";
			result += "Here are projects based in the Grendol universe:</br>";
			result += "</br>";
			result += "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>";
			result += "Grendol: Coliseum: Arena:                         CCG.</br>";
		result += "<br/>";
		result += "<br/>";
				result += "Utopia:";
		result += "<br/>";
		result += "<br/>";
			result += "Here are projects based in the Utopia universe:</br>";
			result += "</br>";
			result += "Avia: Elemental Angels: Adventure game with RPG elements.</br>";
		result += "<br/>";
		result += "<br/>";
				result += "Elvia:";
		result += "<br/>";
		result += "<br/>";
			result += "Here are projects based in the Elvia universe:</br>";
			result += "</br>";
			result += "Nine Card: Tactical card game.</br>";
		
	}
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Index.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Index\">Ruby On Rails</a><br>";
	}
    return result;
}