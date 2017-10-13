exports.Navigation = function (vLevel)
{
    var result = "<a class=\"navlinkA\"href=\"http://hktb.dyndns.org/Section1/Index\">Basic HTML</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"href=\"http://hktb.dyndns.org/Section3/Index.php\">PHP</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index\">Javascript</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"href=\"http://hktb.dyndns.org/Section1/Index.shtml\">Perl</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index\">Java</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index\">ASP.Net</a><br><br>";
	    result += "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Index.cshtml\">Webpage Application</a><br><br>";
        result += "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/Index.aspx\">Webform Application</a><br><br>";
        result += "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/MVC/Section1_5/Index\">MVC Application</a><br><br>";
    result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index\">Databases</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/Index.html\">Apache SSI</a><br><br>";
    result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Section1/Index\">Python Web.py</a><br><br>";
    result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Section1/Index\">Ruby on Rails</a><br><br>";
    return result;
}

exports.Title = function (vPage)
{
	var result = "<title>";
		if(vPage == 0)
		{
			result += "ASP.NET Programming";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
		if(vPage == 0)
		{
			result += "ASP.NET Programming";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			result += "This section is dedicated to ASP.NET programming.";
		}
	result += "</p>";
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section5/Index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section5/Index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section5/Index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section5/Index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section5/Index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section5/Index.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section5/Index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section5/Index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section5/Index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/Index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section5/Index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section5/Index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section1/Section5/Index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section1/Section5/Index\">Ruby On Rails</a><br>";
	}
    return result;
}