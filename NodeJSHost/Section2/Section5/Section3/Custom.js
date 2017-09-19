exports.Navigation = function (vLevel)
{
	var result = "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/index\">Gynowars</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2\">Assault</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3\">Mars</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/index\">Renley</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/index\">Antarrea</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section1/index\">Global</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/index\">Grendol</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section3/index\">Utopia</a><br><br>";
			result += "<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section5/Section3/Project1\">Avia:Elemental Angels</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section4/index\">Elvia</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section6/index\">Editations</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7\">Truth</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8\">Kingdoms</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9\">Terminal World</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10\">Monster Office Workplace</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11\">Battle Princesses</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12\">Sacred Offerings</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13\">The Way</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14\">Conspiratorium</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project15\">Conversion</a><br><br>";
    return result;
}

exports.Title = function (vPage)
{
	var result = "<title>";
		if(vPage == 0)
		{
			result += "Utopia";
		}
		else if(vPage == 1)
		{
			result += "Elemental Angels";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
		if(vPage == 0)
		{
			result += "Utopia";
		}
		else if(vPage == 1)
		{
			result += "Elemental Angels";
				result += "</u>";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			result += "Here are projects based in the Utopia Nation:</br>";
			result += "</br>";
			result += "Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>";
		}
		else if(vPage == 1)
		{
			result += "Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>";
		}
	result += "</p>";
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section3/index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/index.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section3/index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section3/index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section3/index\">Ruby On Rails</a><br>";
	}
	else if(vPage == 1)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section3/Project1.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/Project1.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/Project1.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/Project1.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/Project1.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/Project1.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/Project1.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/Project1.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/Project1\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section3/Project1.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section3/Project1\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section3/Project1\">Ruby On Rails</a><br>";
	}
    return result;
}