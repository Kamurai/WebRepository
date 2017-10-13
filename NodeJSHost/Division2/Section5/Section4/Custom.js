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
			result += "<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section5/Section4/Project1\">Nine Card</a><br><br>";
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
			result += "Elvia";
		}
		else if(vPage == 1)
		{
			result += "Nine Card";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
		if(vPage == 0)
		{
			result += "Elvia";
		}
		else if(vPage == 1)
		{
			result += "Nine Card";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			result += "Here are projects based in the Elvia Empire:</br>";
			result += "</br>";
			result += "Nine Card: a Tactical card game played through the Elvia Empire.</br>";
		}
		else if(vPage == 1)
		{
			result += "Nine Card is a Tactical card game played through the Elvia Empire.</br>";
		}
	result += "</p>";
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/Index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Index.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Index\">Ruby On Rails</a><br>";
	}
	else if(vPage == 1)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/Project1.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Project1.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Project1.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Project1.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Project1.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Project1.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Project1.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Project1.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Project1\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Project1.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Project1\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Project1\">Ruby On Rails</a><br>";
	}
    return result;
}